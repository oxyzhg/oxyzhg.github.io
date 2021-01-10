---
title: 简单的npm发布流程
author: Oxyzhg
categories: 前端工程化
tags:
  - npm
abbrlink: 82c7efc8
date: 2020-11-24 21:17:31
---

发布步骤：

1. npm init
2. npm registry
3. npm login
4. npm publish

## 初始化 npm init

```bash
npm init -y
```

生成的 _package.json_ 文件：

```json
{
  "name": "@dotlim/cli", // 要发布包的名称 这里的@your-name一定要和author的保持一致
  "version": "0.0.1",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "tsc --build tsconfig.json"
  },
  "dependencies": {
    "eslint": "^7.14.0",
    "typescript": "^4.1.0"
  },
  "files": ["lib"],
  "keywords": [],
  "author": "oxyzhg@163.com",
  "license": "ISC"
}
```

## 检测 npm registry

```bash
npm config get registry
```

如果不是 npm 镜像源，需要切换回去：

```bash
npm config set registry http://registry.npmjs.org
```

设置淘宝镜像源的方法是：

```bash
npm config set registry https://registry.npm.taobao.org
```

## 登录 npm login

```bash
npm login
```

## 发布 npm publish

```bash
# 如果发布的是私有包 通过如下命令开放包
npm publish --access public
```
