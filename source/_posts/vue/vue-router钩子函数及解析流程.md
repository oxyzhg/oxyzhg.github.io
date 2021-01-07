---
title: vue-router钩子函数及解析流程
author: Kq
categories: vue
tags:
  - vue
  - vue-router
abbrlink: bcbf126b
date: 2020-09-09 12:41:00
---

## 钩子函数

钩子函数的种类有：全局守卫、路由守卫、组件守卫

全局守卫：

- beforeEach
- beforeResolve
- afterEach

路由独享的守卫：

- beforeEnter

组件内的守卫：

- beforeRouteEnter
- beforeRouteUpdate
- afterRouteLeave

## 导航解析流程

1. 导航被触发。
1. 在失活的组件里调用 `beforeRouteLeave` 守卫。
1. 调用全局的 `beforeEach` 守卫。
1. 在重用的组件里调用 `beforeRouteUpdate` 守卫 (2.2+)。
1. 在路由配置里调用 `beforeEnter`。
1. 解析异步路由组件。
1. 在被激活的组件里调用 `beforeRouteEnter`。
1. 调用全局的 `beforeResolve` 守卫 (2.5+)。
1. 导航被确认。
1. 调用全局的 `afterEach` 钩子。
1. 触发 DOM 更新。
1. 用创建好的实例调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数。
