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

# Map

JavaScript 的对象提供了键值对的集合，但是键值只能是字符串格式。(ES6 可用 Symbol 作为键值)

```js
const key = { name: 1 };
const data = {};
data[key] = 'metadata';
data['[object Object]']; // metadata
```

看了上面例子，我们大概就猜到在给 `data` 增加属性的时候，增加的键值其实是 `[object Object]` 而不是那个名为 `key` 的对象。这是因为对象只接受字符串作为键名，也就是说键值不管写成什么内容，在存储的时候都会自动转换为字符串。

为了解决这个问题，ES6 提供了 Map 数据结构。我常把它当做对象理解，同是键值对的集合，键值包括但不限于字符串。对比二者，Object 提供了“字符串—值”的映射关系，Map 结构提供了“值—值”的对应关系，是一种更完善的结构实现。Map 更像是 Object 的超集，但目前来看并没有更多的赋能，只是在一些特定的场景使用 Map 更合适。

```js
const key = { name: 1 };
const data = new Map();
data.set(key, 'metadata');
data.get(key); // metadata
data.get({ name: 1 }); // undefined
```

注意：这里在获取 `key` 对应的值时，传的参数是 `key` 而不是 `{name:1}` 这种看起来跟直接的变量，因为 Map 以对象形式存取的键值，是引用地址的关联关系，即二者是完全不同的对象。

## 实例的属性和操作方法

- size
- Map.prototype.set()
- Map.prototype.get()
- Map.prototype.has()
- Map.prototype.delete()
- Map.prototype.clear()

## 遍历方法

Map 结构原生提供三个遍历器生成函数和一个遍历方法。

- Map.prototype.keys()
- Map.prototype.values()
- Map.prototype.extries()
- Map.prototype.forEach()

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

这个转换暂未发现好的实现方式

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

# WeakMap

`WeakMap` 与 `Map` 的区别有两点：

- 只接受对象作为键名（null 除外）
- 键名所引用的对象都是弱引用，不计入垃圾回收机制
  - 没有 `size` 属性
  - 没有遍历操作 `keys`, `values`, `entries`
  - 不支持 `clear` 方法

WeakMap 应用的典型场合就是 DOM 节点作为键名。

## 参考

- [ECMAScript6-Set 和 Map 数据结构](http://es6.ruanyifeng.com/#docs/set-map)
