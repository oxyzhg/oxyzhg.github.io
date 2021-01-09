---
title: 问就跟他聊—Vue全家桶
author: Kq
categories: 问就跟他聊系列
tags:
  - vue
abbrlink: 9b942608
date: 2021-01-09 11:55:32
---

## 他想问什么

### Vue

1. 核心特性是什么
2. 响应式数据原理
3. 为什么要采用异步渲染
4. nextTick 实现原理

### Vue Router

### Vuex

## 他想听什么

### 响应式数据原理

1. 追踪变化：通过劫持数据来追踪变化，在 vue2 中使用 `Object.defineProperty` 拦截，在 vue3 中使用 `Proxy` 拦截。
2. 依赖收集：定义响应式数据后，若监听器使用该数据便触发 getter，然后 Watcher 收集数据发布者，Dep 收集数据订阅者。
3. 派发更新：当数据模型发生变化，即触发 setter，然后数据发布者 Dep 会通知数据收集者 Watcher，执行 `watcher.update` 进行更新。

### nextTick 实现原理

该实现使用了事件循环的特性，先是将待执行函数缓存起来，同时使用能够产生异步任务的方法生成异步任务，等同步代码执行完成后，该异步任务会执行并清空缓存的待执行函数。

其中产生异步任务的方法(`Promise.then`, `MutationObservable`, `setImmediate`, `setTimeout`)会根据环境嗅探，最终确定使用哪一个，可能是 microtask 也可能是 macrotask，前两个属于微任务，后两个属于宏任务。

## 你得知道什么

- vue 核心特性是数据驱动(MVVM)
- 响应式数据原理，简单来说是劫持数据 getter/setter 进行依赖收集和派发更新。
- nextTick 实现原理，简单来说是利用了事件循环的特性。

## 相关资料
