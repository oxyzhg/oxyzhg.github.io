---
title: 理解JavaScript中的执行上下文和执行栈
author: Oxyzhg
categories: javascript
tags:
  - javascript
  - 执行上下文
abbrlink: 471757d4
date: 2021-01-07 14:41:01
---

## 什么是执行上下文

简而言之，执行上下文是评估和执行 JavaScript 代码的环境的抽象概念。每当 Javascript 代码在运行的时候，它都是在执行上下文中运行。

### 执行上下文的类型

有三种执行上下文类型类型：

- **全局执行上下文**：这是默认或者说基础的上下文，任何不在函数内部的代码都在全局上下文中。它会执行两件事：创建一个全局的 window 对象（浏览器的情况下），并且设置 this 的值等于这个全局对象。一个程序中只会有一个全局执行上下文。
- **函数执行上下文**：每当一个函数被调用时, 都会为该函数创建一个新的上下文。每个函数都有它自己的执行上下文，不过是在函数被调用时创建的。函数上下文可以有任意多个。每当一个新的执行上下文被创建。
- **Eval 函数执行上下文**：执行在 eval 函数内部的代码也会有它属于自己的执行上下文，但由于我们并不经常使用 eval，所以在这里不讨论它。

## 执行栈

执行栈，也就是在其它编程语言中所说的“调用栈”，是一种拥有 LIFO（后进先出）数据结构的栈，被用来**存储代码运行时创建的所有执行上下文**。

## 如何创建执行上下文

创建执行上下文有两个阶段：创建阶段和执行阶段。

### 创建阶段

在 JavaScript 代码执行前，执行上下文将经历创建阶段。在创建阶段会发生三件事：

1. 绑定 this
2. 创建词法环境组件
3. 创建变量环境组件

简单表示如下：

```js
ExecutionContext = {
  ThisBinding = <this value>,
  LexicalEnvironment = { ... },
  VariableEnvironment = { ... },
}
```

#### 绑定 this

在全局执行上下文中，`this` 的值指向全局对象。(在浏览器中，`this` 引用 Window 对象)。

在函数执行上下文中，`this` 的值取决于该函数是如何被调用的。如果它被一个引用对象调用，那么 `this` 会被设置成那个对象，否则 `this` 的值被设置为全局对象或者 undefined（在严格模式下）。

#### 词法环境

[ECMA2015](http://ecma-international.org/ecma-262/6.0/)把词法环境定义为

> 词法环境是一种规范类型，基于 ECMAScript 代码的词法嵌套结构来定义标识符和具体变量和函数的关联。一个词法环境由环境记录器和一个可能的引用外部词法环境的空值组成。

简单来说，词法环境是一种**标识符—变量**映射的结构。（标识符指变量/函数的名字，而变量指对实际数据的引用）

词法环境的内部有两个组件：

1. **环境记录器**：指存储变量和函数声明的实际位置
2. **外部环境的引用**：意味着它可以访问其父级词法环境（作用域）

词法环境有两种存在场景：

- 全局环境：全局环境的外部环境引用是 null。它拥有内建的 Object/Array/等、在环境记录器内的原型函数（关联全局对象，比如 window 对象）还有任何用户定义的全局变量，并且 this 的值指向全局对象。
- 函数环境：函数内部用户定义的变量存储在环境记录器中。并且引用的外部环境可能是全局环境，或者任何包含此内部函数的外部函数。

对应的环境记录器也有两种类型：

- 全局环境中，是对象环境记录器
- 函数环境中，是声明式环境记录器。特别地，还包含一个传递给函数的 `arguments` 对象和传递给函数的参数的 `length`

抽象地讲，词法环境在伪代码中看起来像这样：

```js
GlobalExectionContext = {
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      // 在这里绑定标识符
    }
    outer: <null>
  }
}

FunctionExectionContext = {
  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // 在这里绑定标识符
    }
    outer: <Global or outer function environment reference>
  }
}
```

#### 变量环境

它同样是一个词法环境，其环境记录器持有变量声明语句在执行上下文中创建的绑定关系。如上所述，变量环境也是一个词法环境，所以它有着上面定义的词法环境的所有属性。

在 ES6 中，词法环境和变量环境的区别是前者被用来存储函数声明和变量（`let`/`const`）绑定，而后者只用来存储 `var` 变量绑定。

我们看点样例代码来理解上面的概念：

```js
let a = 20;
const b = 30;
var c;

function multiply(e, f) {
  var g = 20;
  return e * f * g;
}

c = multiply(20, 30);
```

上面代码执行上下文抽象成：

```js
GlobalExectionContext = {

  ThisBinding: <Global Object>,

  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      a: < uninitialized >,
      b: < uninitialized >,
      multiply: < func >
    }
    outer: <null>
  },

  VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Object",
      c: undefined,
    }
    outer: <null>
  }
}

FunctionExectionContext = {
  ThisBinding: <Global Object>,

  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      Arguments: {0: 20, 1: 30, length: 2},
    },
    outer: <GlobalLexicalEnvironment>
  },

  VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      g: undefined
    },
    outer: <GlobalLexicalEnvironment>
  }
}
```

注意：

1. 只有函数被调用时，才会创建函数执行上下文
2. 在执行上下文创建阶段，通过 `let`/ `const` 创建的变量存在于词法环境且不会初始化，通过 `var` 创建的变量存在于变量环境且被初始化为 `undefined`，这就是为什么 let/const 不存在变量提升的原因。

### 执行阶段

在此阶段，完成对所有这些变量的分配，最后执行代码。如果引擎不能在源码中声明的实际位置找到 `let` 变量的值，它会被赋值为 `undefined`。

---

相关资料：

- [理解 JavaScript 中的执行上下文和执行栈](https://juejin.cn/post/6844903682283143181)
