---
title: 深入解读this
author: Oxyzhg
categories: javascript
tags:
  - javascript
  - this
abbrlink: 5d6f7988
date: 2020-04-23 17:43:00
---

## 指向

在 ES5 中，this 的指向原则是：在函数调用的时候确认指向，**this 永远指向最后调用它的那个对象**。

```javascript
let name = 'globalName';

function print() {
  let name = 'scopedName';
  console.log(this.name);
}

print(); // globalName
```

上面代码中 print 函数是通过 `print()`  调用，那么在非严格模式下调用对象默认就是 window，因此最后输出的是 `globalName` 。

```javascript
let name = 'globalName';
let foo = {
  name: 'scopedName',
  print: function () {
    console.log(this.name);
  },
};

foo.print(); // scopedName
```

上面代码中 print 函数是通过 `foo.print()`  调用，那么根据规则，调用它的对象是 foo，因此最后输出的是 `scopedName` 。

```javascript
let name = 'globalName';
let foo = {
  name: 'scopedName',
  print: function () {
    console.log(this.name);
  },
};
let bar = foo.print;

foo.print(); // scopedName
bar(); // globalName
```

上面代码出现了两种调用形式：一种是通过 `foo.print()`  直接调用，此时调用它的对象是 foo，根据规则，最后输出的是  `scopedName` ；另一种是先将 foo.print 赋值给 bar 变量，然后通过 `bar()` 调用，根据规则，最后输出的是 `globalName` 。通过对比这两种函数调用的形式，可以发现 this 的指向由函数最终调用的对象决定，而与定义时无关。

## 绑定规则

在 javascript 中，this 指向的绑定有以下四种：

- 默认绑定：非严格模式情况下，this 指向 window, 严格模式下，this 指向 undefined
- 隐式绑定：如果函数调用时，前面存在调用它的对象，那么 this 就会隐式绑定到这个对象上
- 显示绑定：函数通过 call/apply/bind 调用，this 指向被绑定的对象
- new 绑定：函数被 new 调用，this 指向新构造出来的那个对象

前几种较为常见很好理解，这里说下使用 new 调用函数，或者发生构造函数调用时，会自动执行下面操作：

1. 创建一个全新的对象
1. 将新对象的 `[[prototype]]` （即非 ecma 标准的 `__proto__`  属性）绑定到构造函数的 prototype
1. 这个新对象会绑定到函数调用的 this
1. 如果这个函数没有返回其他对象，那么 new 表达式中的函数会自动调用这个新对象

在 javascript 中，new 操作符并不像其他面向对象的语言一样，而是一种模拟出来的机制。在 JavaScript 中，所有的函数都可以被 new 调用，这时候这个函数一般会被称为“构造函数”，实际上并不存在所谓“构造函数”，更确切的理解应该是对于函数的 “构造器调用模式”。

## 绑定规则的优先级

new 绑定 > 显示绑定 > 隐式绑定 > 默认绑定

## 总结

快速定位 this 指向的方式（按优先级排序）：

1. 如果使用 new 关键字调用函数，那么 this 指向实例对象
1. 如果使用 call/apply/bind 调用函数，那么 this 指向显式绑定的对象
1. 如果函数被作为对象的方法调用，那么 this 指向这个对象
1. 如果函数被作为自由函数调用，那么 this 指向全局对象
1. 箭头函数中 this 是定义时所在的对象，而不是使用时所在的对象

---

参考：

1. [The Simple Rules to 'this' in Javascript](https://codeburst.io/the-simple-rules-to-this-in-javascript-35d97f31bde3)
