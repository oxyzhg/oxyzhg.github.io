---
title: 基于lerna管理monorepo项目实践
author: Oxyzhg
categories: 前端工程化
tags:
  - lerna
  - monorepo
abbrlink: b01c9af0
date: 2020-11-09 11:25:00
---

对于维护过多个 package 的同学来说，都会遇到一个选择题，这些 package 是放在一个仓库里维护还是放在多个仓库里单独维护。这里可能会勾起你写微前端项目的那些日子，多个仓库来回折腾。本文通过一个示例讲述了如何基于 Lerna 管理多个 packages，并和其它工具整合，打造高效、完美的工作流，最终形成一个最佳实践。

## monorepo vs. multirepo

Monorepo 的全称是 monolithic repository，即单体式仓库，与之对应的是 Multirepo(multiple repository)，这里的单和多是指每个仓库中所管理的模块数量。

Multirepo 是比较传统的做法，即每一个 package 都单独用一个仓库来进行管理。比如之前的 rollup 插件仓库。

Monorepo 是把所有相关的 package 都放在一个仓库里进行管理，**每个 package 独立发布**。这个应用的团队就很多了，比如：[react](https://github.com/facebook/react), [rollup](https://github.com/rollup/plugins), [babel](https://github.com/babel/babel), [vue-next](https://github.com/vuejs/vue-next), etc.

关于 monorepo 与 multirepo 的区别，网上找了张的图：
![](https://cdn.nlark.com/yuque/0/2020/webp/116852/1604892216005-85429c34-2173-43e2-8945-cf902fb03ed0.webp#align=left&display=inline&height=720&margin=%5Bobject%20Object%5D&originHeight=720&originWidth=960&size=0&status=done&style=none&width=960)
一图胜千言，图中通过对比呈现了两种方案各自的优缺点。我们选择的技术方案有一部分是适配上述特点，所以我们用了。

## Lerna

Lerna 是一个管理多个 npm 模块的工具，是 Babel 自己用来维护自己的 Monorepo 并开源出的一个项目。优化维护多包的工作流，解决多个包互相依赖，且发布需要手动维护多个包的问题。

Lerna 现在已经被很多著名的项目组织使用，如：Babel, React, Vue, Angular, Ember, Meteor, Jest...

一个基本的 lerna 管理的仓库结构如下：

```
lerna-repo
├─packages
│  ├─package-a
│  │  ├─src
│  │  └─package.json
│  └─package-b
│     ├─src
│     └─package.json
├─lerna.json
├─package.json
└─README.md
```

### 安装

推荐全局安装，因为会经常用到 lerna 命令。

```bash
npm install lerna -g
```

### 项目构建

初始化 lerna 项目：

```bash
lerna init
```

执行初始化命令后，会创建 lerna.json 配置文件：

```json
{
  "packages": ["packages/*"],
  "version": "0.0.0"
}
```

使用 lerna 创建组件和其工具 package：

```bash
lerna create mox-table    # 组件源码
lerna create mox-utils    # 组件复用工具函数，未来可能会有其他工具包
```

### 依赖管理

Lerna 在 monorepo 项目中一个非常有价值的地方在于，它能很方便的管理全部 packages 依赖或是某个 package 的依赖。这个方式创建的项目基本配置比 npm init 创建的项目更详细，值得我们使用。

```bash
lerna add lodash                          # 给所有 packages 添加 lodash 依赖
lerna add typescript --scope mox-table    # 给 mox-table 添加 typescript 依赖
lerna add mox-utils --scope mox-table     # 增加内部模块之间的依赖
```

这里需要注意的一点是，不管是 yarn workspace 名字还是 lerna scope 的名字，都是 package.json 中的名称，不要跟文件夹名字弄混了。关于 yarn+workspace 后面会详细解释。

### 发布

lerna 提供了十分便利的依赖发布方式，使用 publish 即可完成包括变更版本号在内的所有操作，十分便利。

```bash
lerna publish
```

或许你看到这里，才认识到 lerna 存在的意义，但不知如此。

## Lerna 最佳实践

Lerna 不负责构建，测试等任务，它提出了一种集中管理 package 的目录模式，提供了一套自动化管理程序，让开发者不必再深耕到具体的组件里维护内容，在项目根目录就可以全局掌控，基于 npm scripts，使用者可以很好地完成组件构建，代码格式化等操作。接下来我们就来看看，如果基于 Lerna，并结合其它工具来搭建 Monorepo 项目的最佳实践。

以下内容暂未在项目中使用，参考网上提供的资料，先整理下来，等项目壮大后再补充。

### 优雅的提交

**1.commitizen && cz-lerna-changelog**

commitizen 是用来格式化 git commit message 的工具，它提供了一种问询式的方式去获取所需的提交信息。
cz-lerna-changelog 是专门为 Lerna 项目量身定制的提交规范，在问询的过程，会有类似影响哪些 package 的选择。如下：
![](https://cdn.nlark.com/yuque/0/2020/webp/116852/1604901336647-9050236f-c66c-4c7b-af96-842612eac75c.webp#align=left&display=inline&height=313&margin=%5Bobject%20Object%5D&originHeight=313&originWidth=546&size=0&status=done&style=none&width=546)
我们使用 commitizen 和 cz-lerna-changelog 来规范提交，为后面自动生成日志作好准备。

安装了这两个依赖后，在 package.json 增加 config 字段，把 cz-lerna-changelog 配置给 commitizen。

```json
{
  "scripts": {
    "commit": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-lerna-changelog"
    }
  },
  "devDependencies": {
    "commitizen": "^4.2.2",
    "cz-lerna-changelog": "^2.0.3",
    "lerna": "^3.22.1"
  }
}
```

**2.commitlint && husky**

上面我们使用了 commitizen 来规范提交，但这个要靠开发自觉使用 npm run commit 。万一忘记了，或者直接使用 git commit 提交怎么办？答案就是在提交时对提交信息进行校验，如果不符合要求就不让提交，并提示。校验的工作由 commitlint 来完成，校验的时机则由 husky 来指定。husky 继承了 Git 下所有的钩子，在触发钩子的时候，husky 可以阻止不合法的 commit,push 等等。

### 自动生成日志

有了之前的规范提交，自动生成日志便水到渠成了。再详细看下 lerna publish 时做了哪些事情：

1.调用 lerna version

- 找出从上一个版本发布以来有过变更的 package
- 提示开发者确定要发布的版本号
- 将所有更新过的的 package 中的 package.json 的 version 字段更新
- 将依赖更新过的 package 的 包中的依赖版本号更新
- 更新 lerna.json 中的 version 字段
- 提交上述修改，并打一个 tag
- 推送到 git 仓库

2. 使用 npm publish 将新版本推送到 npm

---

参考资料：

- [基于 Lerna 管理 packages 的 Monorepo 项目最佳实践](https://juejin.cn/post/6844903911095025678)
