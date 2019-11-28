---
title: Koa 快速上手
author: Kq
date: 2019-11-19 18:56:48
categories:
tags:
  - koa
  - nodejs
  - mongodb
---

## 0x00 前言

[Koa](https://koajs.com/) 是由 Express 团队打造的下一代 Nodejs Web 框架，基于 ES7 async/await 实现。由于 Nodejs v7.6.0 开始完全支持 async/await，所以需要 Nodejs 版本在 7.6.0 以上才能正常使用 Koa。

Koa 只封装了 context、request、response 以及最核心的处理流程，并未捆绑任何中间件，所以路由等都需要自行编写或安装第三方中间件来实现。但提供了一套优雅的方式来增强拓展性，这正是 Koa 的强大之处。

## 0x01 上手

### HelloWorld

安装 Koa：

```bash
yarn add koa
```

创建一个简单的应用程序*app.js*，然后启动服务：

```js
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello world';
});

app.listen(5000);
```

启动应用：

```bash
node app.js
```

浏览器访问对应页面即可看到效果了！

### 路由

Koa 本身没有额外封装路由，我们可以通过安装第三方中间件 `koa-router` 来完成开发。

安装 koa-router：

```bash
yarn add koa-router
```

修改 _app.js_ 文件：

```js
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/', ctx => {
  ctx.body = 'Home Page';
});
router.get('/about', ctx => {
  ctx.body = 'About Page';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
```

浏览器访问对应页面即可看到效果了！

除 GET 方法外，`koa-router` 还支持 POST、PUT、DELETE 等常用 HTTP 请求方法，详情参考 [koa-router 文档](https://github.com/ZijianHe/koa-router)。

### Mongo

我常用的数据库有两种，MySQL 和 MongoDB。这里只介绍 koa 结合 mongodb 的使用。

#### 连接

本地安装 mongodb，然后启动：

```bash
mongod --dbpath d:\mongodb\data\db
```

新开一个命令行，增加用户认证：

```bash
mongo
> use admin
> db.createUser({ user:"admin", pwd:"admin", roles:[{ role:"root",db:"admin"}]})
> db.auth()
```

这里增加的用户是全局账号，可用于登陆，但是在 koa 程序中链接经常出现 `Not Authentication` 的报错，经过排查，是由于在 koa 程序中指定是连接数据库还没有增加用户，因此没有认证成功。这里给程序中指定的数据库创建具有读写权限的用户：

```bash
mongo
> use koa
> db.createUser({ user:"admin", pwd:"admin", roles:[{ role:"readWrite",db:"koa"}]})
```

这样就可以在应用程序中使用以下连接成功连接数据库：

```js
mongoose.connect(`mongodb://admin:admin@localhost:27017/koa`, { useNewUrlParser: true });
```

安装 mongoose：

```bash
yarn add mongoose
```

下面展示下应用创建代码，创建 _config/mongo.js_ 用于连接数据库：

```js
const mongoose = require('mongoose');
// 数据库链接常量
const DATABASE = 'koa';
const USERNAME = 'admin';
const PASSWORD = 'admin';
const HOST = 'localhost';
const PORT = 27017;
const uri = `mongodb://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;
const options = {
  autoReconnect: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

module.exports = {
  connect() {
    mongoose.connect(uri, options);
    mongoose.connection
      .then(_ => {
        console.log('mongodb connect success!');
      })
      .catch(err => {
        console.error('mongodb connect fail!', err);
      });
  }
};
```

然后再 _app.js_ 中链接数据库：

```js
const mongoConf = require('./config/mongo');
mongoConf.connect();
```

#### 定义 model

先简单定义一个 collection model：

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define user schema
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Invalid username']
  },
  password: {
    type: String,
    required: [true, 'Invalid password']
  },
  email: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('user', userSchema, 'users');
```

之后，在操作数据库的相关逻辑中，即可使用这里定义的模型。具体的 CRUD 操作详见 [mongoose 官网](https://mongoosejs.com/docs/)。

### jsonwebtoken

安装插件 `jsonwebtoken`：

```js
const jwt = require('jsonwebtoken');
const TOKEN_ENCODE_STR = 'secret';

module.exports = {
  createToken(target) {
    return jwt.sign(target, TOKEN_ENCODE_STR, { expiresIn: '1h' });
  },

  async checkToken(ctx, next) {
    const token = ctx.get('Authorization');

    if (!token) {
      ctx.status = 401;
      ctx.body = 'Not Authorization';
      return;
    }

    try {
      const { id } = await jwt.verify(token, TOKEN_ENCODE_STR);
      // 验证用户登陆
    } catch (e) {
      ctx.response.status = 401;
      ctx.response.body = '登陆过期';
      return;
    }

    await next();
  }
};
```

### 参数形式

就目前结合路由中间件使用来讲，通过 context 接收参数的形式有 2 中：

- `ctx.request.query` ---- 存在于 querystring 的参数
- `ctx.request.body` ---- 使用 POST 发送表单数据参数
- `ctx.params` ---- 是使用 koa-router 中间件后自动添加到 context 中的，是预定义的参数

这些参数形式与 `vue-router` 类似，使用方法一致。

### 封装模块自动引入

在逻辑中对 _service_, _controller_ 这两种模块的引用方式，采用如下方式：

```js
const controller = require('../controller');

router.post('/login', controller.auth.login);
```

当 _/controller_ 文件下下模块过多时，逐一引入耗时耗力，故采用自动引入的方法提搞效率：

```js
const path = require('path');
const fs = require('fs');
const modules = {};

fs.readdirSync(path.resolve(__dirname)).forEach(file => {
  const fullPath = path.resolve(__dirname, file);
  if (fullPath !== __filename && /.js$/.test(file)) {
    const filename = path.parse(fullPath).name;
    modules[filename] = require(fullPath);
  }
});

module.exports = modules;
```

这是一种通用的方法，在当前目录下新建 _index.js_ 文件，插入以上代码会自动引入出自身以外的模块。同时也发现一种弊端，就是 vscode 不会再提示模块了，需要根据情况取舍。

### 目录结构

好的代码约定规范对开发来时事半功倍，参考 [eggjs](https://eggjs.org/) 项目推荐[目录结构](https://eggjs.org/zh-cn/basics/structure.html)。

```
koa-project
├── config
|   ├── index.js
│   └── mongo.js
├── controller
│   └── index.js
├── middleware
├── models
├── public
├── routes
├── service
│   └── index.js
├── app.js
└── package.json
```

暂按如上结构进行开发：

- `app.js` 用于自定义服务启动时的初始化工作
- `/config/*` 用于编写配置文件
- `/routes/*` 用于配置 URL 路由规则
- `/controller/*` 用于解析用户输入，处理后返回相应结果
- `/service/*` 用于编写业务逻辑层
- `/models/*` 用于放置数据表领域模型
- `/middleware/*` 用于编写中间件
- `/public/*` 用于放置静态资源
