---
slug: vue-nexttick
title: 异步更新机制和nextTick原理
tags: [vue, nextTick]
---

<!--truncate-->

## 异步更新

在 Vue 响应式原理解析中，可以知道 vue 在依赖收集的响应式化方法 `defineReactive`  中的 setter 访问器中派发更新 `dep.notify()`  方法，然后遍历通知在 dep.subs 中收集的订阅自已变动的 watchers 执行 update。先看下 update 方法：

```javascript
// src/core/observer/watcher.js

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
update () {
  if (this.lazy) {
    // 适用于 computed 计算属性
    // lazy时，我们希望它只在必要时执行计算，所以我们只是简单地将观察者标记为dirty
    // 当计算属性被访问时，实际的计算在this.evaluate()中执行
    this.dirty = true
  } else if (this.sync) {  // 同步
    this.run()
  } else {
    queueWatcher(this)     // 异步推送到调度者观察者队列中，下一个tick时调用
  }
}
```

如果不是 `computed watcher`  也非 `sync`  会把调用 update 的当前 watcher 推送到调度者队列中，下一个 tick 时调用，看看 queueWatcher ：

```javascript
// src/core/observer/scheduler.js

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
export function queueWatcher(watcher: Watcher) {
  const id = watcher.id;
  if (has[id] == null) {
    // 检验id是否存在，已经存在则直接跳过，不存在则标记哈希表has，用于下次检验
    has[id] = true;
    if (!flushing) {
      queue.push(watcher); // 如果没有正在flush，直接push到队列中
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      let i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      // 标记是否已传给nextTick
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}
```

这里使用了一个 `has`  的哈希 map 用来检查是否当前 watcher.id 是否存在，若已存在则跳过，不存在则就 push 到 `queue`  队列中并标记哈希表 has，用于下次检验，防止重复添加。

这里的 `waiting`  属性是用来标记 `flushSchedulerQueue`  是否已经传递给 nextTick  的标记位，如果已经传递则只 push 到队列中不传递 `flushSchedulerQueue`  给 nextTick，等到 `resetSchedulerState`  重置调度者状态的时候 `waiting`  会被置回 false  允许 `flushSchedulerQueue`  被传递给下一个 tick 的回调，总之保证了 `flushSchedulerQueue`  回调在一个 tick 内只允许被传入一次。来看看被传递给 nextTick 的回调 `flushSchedulerQueue`  做了什么：

```javascript
// src/core/observer/scheduler.js

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue() {
  currentFlushTimestamp = getNow();
  flushing = true;
  let watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort((a, b) => a.id - b.id); // 排序

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    // 不缓存length，上面的步骤中可能会随时插入新的任务
    watcher = queue[index];
    if (watcher.before) {
      // 如果有 before 钩子，则执行，这里主要是指渲染 watcher
      watcher.before();
    }
    id = watcher.id;
    has[id] = null; // 释放标记的 watcher
    watcher.run(); // 执行 watcher
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' +
            (watcher.user
              ? `in watcher with expression "${watcher.expression}"`
              : `in a component render function.`),
          watcher.vm
        );
        break;
      }
    }
  }

  // keep copies of post queues before resetting state
  const activatedQueue = activatedChildren.slice();
  const updatedQueue = queue.slice();

  resetSchedulerState(); // 重置调度者状态

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);
}
```

在 nextTick 方法中执行 flashSchedulerQueen 方法，这个方法会遍历 `watcher.run`  方法，首先把队列中的 watcher 排序，可以保证：

1. 组件更新的顺序是从父组件到子组件的顺序，因为父组件总是比子组件先创建。
1. 一个组件的 user watchers(侦听器 watcher)比 render watcher 先运行，因为 user watchers 往往比 render watcher 更早创建。
1. 如果一个组件在父组件 watcher 运行期间被销毁，它的 watcher 执行将被跳过。

在遍历执行 run 方法过程中，没有缓存 length 是因为在执行期间可能会增加新的 watcher 更新任务。

那么数据的修改从 model 层反映到 view 的过程：**数据更改 -> setter -> Dep -> Watcher -> nextTick -> patch -> 更新视图**

## nextTick

Vue 中引入 nextTick 的机制利用到 javascript 事件循环。简单来说就是在执行同步任务时，把待执行函数缓存起来，并建立一个微任务或宏任务，在微任务或宏任务回调中执行上次同步任务缓存的函数。执行宏任务期间可能会一直往数组中追加新的待执行函数，但通过做标记的方式，只会执行一次异步任务回调。

看下源码中对 nextTick 的定义：

```javascript
// src/core/util/next-tick.js

const callbacks = []; // 缓存待执行函数
let pending = false; // 标记，如果已经有timerFunc被推送到任务队列中去则不需要重复推送

function flushCallbacks() {
  pending = false;
  const copies = callbacks.slice(0);
  callbacks.length = 0;
  for (let i = 0; i < copies.length; i++) {
    // 遍历待执行函数
    copies[i]();
  }
}

let timerFunc;

if (typeof Promise !== 'undefined' && isNative(Promise)) {
  // 方案一：使用 promise.then
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
  typeof MutationObserver !== 'undefined' && // 方案二：使用 MutationObserver
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
  // 方案三：使用 setImmediate
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = () => {
    setImmediate(flushCallbacks);
  };
} else {
  // 方案四：使用 setTimeout
  // Fallback to setTimeout.
  timerFunc = () => {
    setTimeout(flushCallbacks, 0);
  };
}

export function nextTick(cb?: Function, ctx?: Object) {
  let _resolve;
  callbacks.push(() => {
    // 将函数缓存起来
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
    // 首次执行，开启一个异步任务
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise((resolve) => {
      // 支持promise的话能链式调用
      _resolve = resolve;
    });
  }
}
```

nextTick 原理并不复杂，可以看到在创建异步任务的时候，采用了降级策略，分别是：

1. promsie.then
1. MutationObserver
1. setImmediate
1. setTimeout

nextTick 实现：

- 首先，nextTick 把传入的回调，通过 `try-catch`  包装后放入缓存数组，这么做是为了执行报错不至于让整个线程崩掉，并且这些回调如果遇到错误也能互相没有影响。
- 然后，检查 pending 标记，如果是 true 则认为是已经开启了一个异步任务，每次同步任务期间开启一个即可。
- 最后，检查浏览器是否支持 promise，如果执行则返回结果能链式调用。
