---
title: 使用GitHub Actions增量部署静态博客
author: Kq
tags: Hexo
abbrlink: 5f53d984
date: 2021-01-08 10:16:39
---

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
