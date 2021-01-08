---
title: 使用GitHub Actions增量部署静态博客
author: Kq
tags: Hexo
abbrlink: 5f53d984
date: 2021-01-08 10:16:39
---

> 怎么用 Hexo 等搭建静态博客，业内已经有非常多的文章教程了，这里不再赘述。而使用 Github Actions 自动化部署静态博客，很多方案可行但差强人意。经过几次采坑后，我找到了静态博客自动化部署的答案。

GitHub Actions Deploy file:

```yml
name: Build and Deploy

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2.3.1
        with:
          persist-credentials: false

      - name: Install and Build
        run: |
          npm install
          npx hexo generate

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@3.7.1
        with:
          ACCESS_TOKEN: ${{ secrets.DEPLOY_TOKEN }}
          BRANCH: gh-pages
          FOLDER: public
          REPOSITORY_NAME: oxyzhg/oxyzhg.github.io
```

自动部署主要借助 [JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action) 提供的方案。它相较于其他部署方案有着更广范的适用性，并且其增量构建特性是 `hexo deploy` 不能达到的，这也是我选择它的一个重要原因。
