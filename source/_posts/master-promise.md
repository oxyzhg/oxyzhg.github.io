---
title: 一文精通 Promise
author: Kq
date: 2020-03-07 17:00:23
categories:
tags:
---

## 前言

> ECMAScript 发展至今，Promise 几乎渗透到所有开发者的业务逻辑代码中，成为前端开发中不可或缺的一环。通过这篇文章，总结也好，实践也罢，起码要让我的脑袋里留下点什么。

## Promise 是什么

> Promise 对象用于表示一个异步操作的最终完成(或失败)，及其结果值。

在控制台输出某个 Promise 时，会看到下面的内容，这表示该 Promise 对象当前状态为 `resolved`，当前值为 `1`。

```js
Promise {<resolved>: 1}
__proto__: Promise
[[PromiseStatus]]: "resolved"
[[PromiseValue]]: 1
```

语法：

```js
new Promise(function(resolve, reject) {...} /* executor */ );
```

参数：

- executor
  - Promise 构造函数执行时**立即**调用 executor 函数（在 promise 实例对象创建之前），并且传入两个内置函数作为参数，分别是 `resolve` 和 `reject`。
  - executor 通常会执行一些异步操作(可能成功/失败)，如果最终成功则调用 resolve 函数将 promise 状态修改为 `fulfilled`，否则调用 reject 函数将 promise 状态修改为 `rejected`。
  - 如果在 executor 函数抛出错误，那么 promise 状态为 `rejected`。

Promise 对象是一个代理对象，被代理的值可能会在未来的某个时间点出现在 Promise 中，而这个时间存在不确定性，因此在 Promise 构造函数中标记了 promise 实例当前状态和值，当状态发生变化的时候修改这两部分。Promise 可能的几种状态是：

- pending: 初始状态，既非成功，也非失败状态
- fulfilled: 意味着操作成功完成
- rejected: 意味着操作失败

## Promise 有什么

### 属性

- Promise.length
- Promise.prototype

### 方法

- [Promise.all(iterable)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [Promise.race(iterable)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)
- [Promise.reject(reason)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject)
- [Promise.resolve(value)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)

### 原型方法

- [Promise.prototype.catch(onRejected)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)
- [Promise.prototype.then(onFulfilled, OnRejected)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
- [Promise.prototype.finally(onFinally)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

注：

1. 通常在业务代码中，一次发起多个请求会用到 `Promise.all`，单纯用 Promise 传递/包装一个值返回 `Promise.resolve`, `Promise.reject` 这两个方法使用频率高。
2. 因为 [Promise.prototype.then](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 和 [Promise.prototype.catch](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) 方法返回 promise 对象， 所以它们可以被链式调用。
3. Promise 原型方法(then/catch)返回一个新 promise 对象，因此 `then` 和 `catch` 可以交互链式调用。

## Promise 怎么用

想要某个函数拥有 Promise 功能，只需要让其放回一个 Promise 即可：

```js
function fetchDataAsync(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
```

看道题：

```js
const promise1 = new Promise((resolve, reject) => {
  console.log('promise start', Date.now());
  setTimeout(() => {
    resolve('success');
  }, 2000);
});

promise1.then(res => {
  console.log(res, Date.now());
});
```

这短代码的输出结果相比很容易看出来是：

```js
promise start 1583660540849
success 1583660542853
```

首先在执行 Promise 构造函数的时候会立即执行 executor 函数，即立即输出 `promise start`，然后该函数内部的定时器经过 2s 后将 promise 状态改为 `fulfilled`，并将值传递下去，此时后面的 `promise1.then` 才继续执行，输出对应值。这里需要注意的是 promise1.then 在 promise 仍处于 `pending` 状态时，是待执行状态，只有状态改变后才执行这一步。

## Promise 面试常见

## 参考文章

- [Promsie|MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
