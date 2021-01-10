---
title: 从vue源码解读nextTick
author: Oxyzhg
categories: vue
tags:
  - vue
  - 源码
  - nextTick
abbrlink: bf1c5ae8
date: 2020-09-12 11:19:00
---

JavaScript 执行是单线程的，它是基于事件循环。事件循环大致分为以下几步：

1. 所有任务都在主线程上，形成一个执行栈
2. 主线程之外，还存在一个任务队列。只要在任务队列有了结果，就在任务队列之中放置一个事件。
3. 一旦执行栈中的所有同步任务执行完毕，就会读取任务队列，看看有哪些事件。哪些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
4. 主线程不断重复上述步骤。

主线程的执行过程就是一个 tick，而所有的异步结果都是通过 “任务队列” 来调度。 消息队列中存放的是一个个的任务（task）。 规范中规定 task 分为两大类，分别是 macro task 和 micro task，并且每个 macro task 结束后，都要清空所有的 micro task。

在浏览器环境中，常见的 macro task 有 setTimeout、MessageChannel、postMessage、setImmediate；常见的 micro task 有 MutationObsever 和 Promise.then。

先看 nextTick 源码：

```javascript
const callbacks = [];
let pending = false;

function flushCallbacks() {
  pending = false;
  const copies = callbacks.slice(0);
  callbacks.length = 0;
  for (let i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

let timerFunc;

if (typeof Promise !== 'undefined' && isNative(Promise)) {
  const p = Promise.resolve();
  timerFunc = () => {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) setTimeout(noop);
  };
  isUsingMicroTask = true;
} else if (
  !isIE &&
  typeof MutationObserver !== 'undefined' &&
  (isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]')
) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  let counter = 1;
  const observer = new MutationObserver(flushCallbacks);
  const textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true,
  });
  timerFunc = () => {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = () => {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = () => {
    setTimeout(flushCallbacks, 0);
  };
}

export function nextTick(cb?: Function, ctx?: Object) {
  let _resolve;
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise((resolve) => {
      _resolve = resolve;
    });
  }
}
```

代码量很少，首先 nextTick 函数接受一个函数，并把这个函数缓存起来，最后等任务队列进如宏任务队列时，取出一次执行。这里的 timerFunc 是根据不同的环境采用不同的兼容方案，依次是 `Promise.then` , `MutationObserver` , `setImmediate` , `setTimeout` ，等进如异步任务队列后，通过 flushCallbacks 执行所有缓存的函数。

总结：nextTick 通过同步任务，将待执行的函数缓存到数组中，并开启一个异步任务，等所有同步任务执行完成，异步任务的回调会取出所有缓存的函数执行。
