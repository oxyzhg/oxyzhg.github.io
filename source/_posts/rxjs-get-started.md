---
title: Rxjs 快速上手
author: Kq
date: 2019-11-22 15:50:39
categories:
tags:
  - rxjs
  - vue-rx
---

## 0x01 上手

### 核心概念

- Observable -- 可观察对象，表示一个概念，这个概念是一个可调用的未来值或事件的集合。
- Observer -- 观察者，一个回调函数的集合，它知道如何去监听由 Observable 提供的值。
- Subscription -- 订阅，表示 Observable 的执行，主要用于取消 Observable 的执行。
- Operator -- 操作符，用函数式编程风格的纯函数(pure function).
- Subject -- 主体，相当于 EventEmitter，并且是将值或事件多路推送给多个 Observer 的唯一方式。
- Scheduler -- 调度器，用来控制并发并且是中央集权的调度员，允许我们在发生计算时进行协调。

### 第一个 Observable

听过相关分享，看过相关教程，但我还是感觉 Rxjs 有点难，因此准备下手尝试：

```js
import { Observable } from 'rxjs';

const obs = Observable.create(observer => {
  observer.next(1);
  observer.next(2);
  setTimeout(() => {
    observer.next(3);
    observer.complete();
    observer.next(4);
  }, 1000);
});
console.log('rx start');
obs.subscribe(value => console.log('got value', value));
console.log('rx end');
// rx start
// got value 1
// got value 2
// rx end
// got value 3
```

这是官网上的示例，我直接拿来测试了一下。我们通过订阅可订阅对象，会立即（同步地）接收到推送的 `1`, `2` ，然后在继续执行同步任务，待 1s 后异步任务接收到 `3`，然后观察完成，后面的不会再执行，因此 `4` 不能被接收到。

### 使用 pipe

简单了解 Rxjs 的运行机制后，就开始了新的探索，使用 operators 和 pipeable.

```js
import { of } from 'rxjs';
import { pipe, filter, map } from 'fxjs/operators';

const obs = of(1, 2, 3, 4, 5);

obs
  .pipe(
    filter(v => v % 2 === 1),
    map(v => v + '#')
  )
  .subscribe(v => console.log('got value', v));
// got value 1#
// got value 3#
// got value 5#
```

这里引用的 `pipe` 操作符其实没有用到，因为 Observable 对象的原型都是自带 `subscribe`, `pipe` 等函数，所以可观察对象本身就可以直接调用这个操作符。通过 `pipe` 操作符可以将接收到的值进行操作，既直观又方便。

> 这里操作符都要通过 `rxjs/operators` 调用。

### 使用 merge

现在应该能区分 `Observable` 和 `Subscription` 的概念了，他们的只能就是发布可观察对象和订阅可观察对象，中间的操作符作用于发布和被订阅之间，可用于修改发布的数据等操作。此外还得知道 Rxjs 哪些函数能发布可观察对象，哪些是操作符，弄清楚这些之后，即可面向 Rxjs API 编程。

现在再展示一下通过 `merge` 发布可观察者：

```js
import { merge, of, from } from 'rxjs';
import { filter } from 'rxjs/operators';

const mergedObs = merge(of(1, 2, 3), from([4, 5, 6]));

mergedObs
  .pipe(filter(v => v % 2 === 0)
  .subscribe(v => console.log(v + '#'))
// 2#
// 4#
// 6#
```

此方法通过把多个 Observable 的值混合到一个 Observable 中将其打平。详细请见[弹珠图]()

## 0x0f 参考文章

- [RxJS 中文文档](https://cn.rx.js.org/)
