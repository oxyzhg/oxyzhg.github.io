---
title: webpack打包文件分析
author: Kq
categories: 前端工程化
tags:
  - webpack
abbrlink: 5cae23e2
date: 2020-11-05 15:42:00
---

## Module & webpack

webpack 本身维护了一套模块系统，这套模块系统兼容了所有前端历史进程下的模块规范，包括 amd/commonjs/es6 等，为了看 module 在 webpack 中是怎么运行的，我们可以看一下下面简单的代码：

```javascript
// webpack.config.js

const path = require('path');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
```

待编译的代码：

```javascript
// a.js
import a from './c';
export default 'a.js';
console.log(a);

// c.js
export default 333;
```

打包后的代码：

```javascript
(function (modules) {
  function __webpack_require__(moduleId) {
    var module = {
      i: moduleId,
      l: false,
      exports: {},
    };
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    return module.exports;
  }

  return __webpack_require__(0);
})([
  function (module, __webpack_exports__, __webpack_require__) {
    // 引用 模块 1
    'use strict';
    Object.defineProperty(__webpack_exports__, '__esModule', { value: true });
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c__ = __webpack_require__(1);
    /* harmony default export */ __webpack_exports__['default'] = 'a.js';
    console.log(__WEBPACK_IMPORTED_MODULE_0__c__['a' /* default */]);
  },
  function (module, __webpack_exports__, __webpack_require__) {
    // 输出本模块的数据
    'use strict';
    /* harmony default export */ __webpack_exports__['a'] = 333;
  },
]);
```

简化一波代码再看，可以看出打包后实际上是一个立即执行函数，并且入参为各个 module 函数， 最后返回的是 `__webpack_require__(0)` :

```javascript
(function (modules) {
  function __webpack_require__(moduleId) {}

  return __webpack_require__(0); // 相当于整个程序的入口文件，然后向下找依赖关系
})([module1, module2]);
```

我们继续看 `__webpack_require__`  函数，可以看出它是调用了我们的入口模块，同时传入了 module 相关的属性，以及函数本身：

```javascript
function __webpack_require__(moduleId) {
  var module = {
    i: moduleId,
    l: false,
    exports: {},
  };
  modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  return module.exports;
}
```

那么继续追溯到入口模块，也就是我们的第一个参数。以下是执行过程：

1. 我们可以看到入口模块又调用了 `webpack_require(1)`  去引用入参数组里的第 2 个模块。
1. 然后会将入参的 webpack_exports 对象添加 default 属性，并赋值。这里我们就能看到模块化的实现原理，这里的 webpack_exports 就是这个模块的 module.exports 通过对象的引用传参，间接的给 module.exports 添加属性。
1. 最后会将 module.exports return 出来。就完成了 **webpack_require** 函数的使命。

```javascript
function (module, __webpack_exports__, __webpack_require__) {

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c__ = __webpack_require__(1);
    /* harmony default export */ __webpack_exports__["default"] = ('a.js');
    console.log(__WEBPACK_IMPORTED_MODULE_0__c__["a" /* default */]);
}
```

至此，我们可以看出 module 其实在 webpack 中，最后的打包结果。

## Module & babel

虽然 webpack 可以打包转换我们的 module，但通常我们都会引入 babel 来对 ES6 转成 ES5 的代码，而 Moduel 属于 ES6，也会被转译。

事实上，babel 是将 module 转换成 commonjs，这样 webpack 就无需再做处理，直接使用 webpack 运行时定义的 **webpack_require** 处理。

不过 babel 在转换的时候，会有一些特殊的处理， 像下面：

```javascript
export default a;

// 转换成
Object.defineProperty(exports, '__esModule', {
  value: true,
});

exports.default = a;
```

首先 export 的时候，会添加一个 \_\_esModule 属性到 exports，是为了表明这是经过转换的 module.

再看转换输出后的代码：

```javascript
import d from 'd';
// 转化后
var _d = require('d');
var _d2 = _interopRequireDefault(_d);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
```

## 一些问题

**1.为什么有的地方使用 require 去引用一个模块时需要加上 default？**

我们在上文 babel 对导出模块的转换提到，es6 的 export default 都会被转换成 exports.default，即使这个模块只有这一个输出。

**2.经常在各大 UI 组件引用的文档上会看到说明 import { button } from 'xx-ui' 这样会引入所有组件内容，需要添加额外的 babel 配置，比如 babel-plugin-component？**

```javascript
import { Button, Select } from 'element-ui';
// 转换成
var a = require('element-ui');
var Button = a.Button;
var Select = a.Select;
```

babel-plugin-component 就做了一件事，将 import { Button, Select } from 'element-ui' 转换成了:

```javascript
import Button from 'element-ui/lib/button';
import Select from 'element-ui/lib/select';
```

**3.我们在浏览一些 npm 下载下来的 UI 组件模块时（比如说 element-ui 的 lib 文件下），看到的都是 webpack 编译好的 js 文件，可以使用 import 或 require 再去引用。但是我们平时编译好的 js 是无法再被其他模块 import 的，这是为什么？**

通过 webpack 模块化原理章节给出的 webpack 配置编译后的 js 是无法被其他模块引用的，webpack 提供了 output.libraryTarget 配置指定构建完的 js 的用途。入口模块返回的 module.exports 赋值给 module.exports.
