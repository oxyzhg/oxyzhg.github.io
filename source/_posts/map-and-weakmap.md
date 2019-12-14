---
title: 在项目中使用 Map 和 WeakMap
author: Kq
date: 2019-12-12 15:08:02
categories:
tags:
  - javascript
  - es6
  - map
  - weakmap
---

## 前言

JavaScript 的对象提供了键值对的集合，但是键值只能是字符串格式。(ES6 可用 Symbol 作为键值)

```js
const key = { name: 1 };
const data = {};
data[key] = 'metadata';
data['[object Object]']; // metadata
```

看了上面例子，我们大概就猜到在给 `data` 增加属性的时候，增加的键值其实是 `[object Object]` 而不是那个名为 `key` 的对象。这是因为对象只接受字符串作为键名，也就是说键值不管写成什么格式，在存储的时候都会自动转换为字符串。

ES6 提供了 Map 数据结构，很好的解决了这个问题。

## Map & WeakMap

> Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。

`WeakMap` 与 `Map` 的区别有两点：

- 只接受对象作为键名（null 除外）
- 键名所引用的对象都是弱引用，不计入垃圾回收机制

WeakMap 应用的典型场合就是 DOM 节点作为键名。具体参考阮一峰老师关于 Map 和 [WeakMap](http://es6.ruanyifeng.com/#docs/set-map#WeakMap) 的介绍。

## Map 跟对象的区别

`Object` 与 `Map` 有一些重要的区别，在以下场景使用 `Map` 更好：

- Object 键只能是 String 或者 Symbol，但 Map 键可以是任意值，包括函数、对象、基本类型。
- Map 中的键值是有序的（按插入顺序），而添加到对象中的键则不是。
- 通过 size 属性可直接获取一个 Map 的键值对个数，而 Object 的键值对个数只能手动计算。
- Map 可直接进行迭代，而 Object 的迭代需要先获取它的键数组，然后再进行迭代。
- Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。虽然 ES5 开始可以用 `map = Object.create(null)` 来创建一个没有原型的对象，但是这种用法不太常见。
- Map 在涉及频繁增删键值对的场景下会有些性能优势。

对比二者，Object 提供了“字符串—值”的映射关系，Map 结构提供了“值—值”的对应关系，是一种更完善的结构实现，Map 更像是 Object 的超集。

```js
const key = { name: 1 };
const data = new Map();
data.set(key, 'metadata');
data.get(key); // metadata
data.get({ name: 1 }); // undefined
```

注意：如果键值的引用类型，那么存取该值的时候得是同一个数据引用才可以。

## 实例的属性和操作方法

- size
- Map.prototype.set()
- Map.prototype.get()
- Map.prototype.has()
- Map.prototype.delete()
- Map.prototype.clear()

注意：WeakMap 没有 `size` 属性，不支持 `clear` 方法。

## 遍历方法

Map 结构原生提供三个遍历器生成函数和一个遍历方法。

- Map.prototype.keys()
- Map.prototype.values()
- Map.prototype.extries()
- Map.prototype.forEach()

注意：WeakMap 没有 `keys`, `values`, `entries` 遍历器。

## 与其他数据结构的相互转换

### Map 转为数组

使用 ES6 拓展运算符应该是转换成数组最方便的方法

```js
const map = new Map([
  ['foo', 1122],
  ['bar', 1212]
]);

[...map];
// [
//   ['foo', 1122],
//   ['bar', 1212]
// ]
```

### 数组转换为 Map

这实际上就是上个操作的逆过程

```js
const arr = [
  ['foo', 1122],
  ['bar', 1212]
];
new Map(arr); // Map(2) {"foo" => 1122, "bar" => 1212}
```

### Map 转换为对象

这个转换暂未发现好的实现方式，暂封装此函数

```js
function mapToObj(map) {
  let obj = {};
  for (let [key, value] of map) {
    obj[key] = value;
  }
  return obj;
}
```

### 对象转换为 Map

使用 ES6 对象新增方法 `entries` 刚好返回的格式的创建 `Map` 的结构

```js
const obj = {
  foo: 1122,
  bar: 1212
};
new Map(Object.entries(obj)); // Map(2) {"foo" => 1122, "bar" => 1212}
```

## 使用场景

目前我在开发中使用较多的场景是对常量数据的引用。

```js
// constants.js
export const releaseStatusMap = new Map([
  ['new', ['新增', '新', 'info']],
  ['modify', ['修改', '改', 'success']],
  ['delete', ['删除', '删', 'danger']],
  ['without', ['无变化', '无', '']]
]);
```

```js
export default {
  filters: {
    detectReleaseStatusIcon(val) {
      const [, , icon] = releaseStatusMap.get(val); // 解构赋值直接取第三个值
      return icon;
    }
  }
};
```

另一个应用较多的场景就是替代复杂的 `if...else` 结构。

```js
function (type, data) {
  const actions = new Map([
    ['create', createOperator],
    ['update', updateOperator],
    ['delete', deleteOperator]
  ]);
  const operator = actions.get(type);
  operator && operator(data);
}

```

## 参考

- [Map丨MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Set 和 Map 数据结构](http://es6.ruanyifeng.com/#docs/set-map)
