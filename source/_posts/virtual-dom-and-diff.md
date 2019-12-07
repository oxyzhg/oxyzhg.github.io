---
title: 虚拟DOM和diff算法
author: Kq
date: 2019-12-01 14:49:26
categories:
tags:
  - 虚拟DOM
  - dom-diff
---

## 0x00 前言

> 时至今日，前端知识的体量是越来越大了，随着 React 和 Vue 等前端框架的兴起和发展，虚拟 DOM 和 DOM diff 算法早已渗透到每个前端开发者的思维中。如此重要且有逼格的知识，不论是提升自己或是求职面试，早学早受益！

## 0x01 虚拟 DOM

早在学习前端入门级课程的时候，我们就了解过 [DOM](https://developer.mozilla.org/zh-CN/docs/Glossary/DOM)(Document Object Model)——文档对象模型，是载入到浏览器中的文档模型，以**节点树**的形式来表现文档。

那何为虚拟 DOM ???

> 虚拟 DOM 简而言之就是，按照 DOM 结构用 JS 语言实现的树形结构对象，可以称之为 DOM 对象。

参考网上的一些方法，逐步实现虚拟 DOM。项目中有以下结构：

```basic
dom-diff
├── public
│   └── index.html
├── src
│   ├── diff.js
│   ├── element.js
│   ├── index.js
│   └── patch.js
└── package.json
```

### 创建虚拟 DOM

在*element.js*文件中要实现如何创建虚拟 DOM 以及将创建出来的虚拟 DOM 渲染成真实的 DOM：

```js
// 虚拟DOM元素的类，构建实例对象，用来描述DOM
class Element {
  constructor(type, props, children) {
    this.type = type;
    this.props = props;
    this.children = children;
  }
}

// 创建虚拟DOM，返回虚拟DOM节点
function createElement(type, props, children) {
  return new Element(type, props, children);
}

export { Element, createElement };
```

创建虚拟 DOM 的方法已经完成，去调用看看效果。

### 调用 createElement 方法

在*index.js*文件中调用 createElement 方法：

```js
import { createElement } from './element';

const vDom = createElement('ul', { class: 'list' }, [
  createElement('li', { class: 'item' }, ['周杰伦']),
  createElement('li', { class: 'item' }, ['陈奕迅']),
  createElement('li', { class: 'item' }, ['林俊杰'])
]);

console.log(vDom);
```

React 和 vue 也是命名如此，*createElement*接收 3 个参数：`type`, `props`, `children` 。

- `type` -- 指定元素的标签类型，如:div, li, a
- `props` -- 指定元素的标签属性，如:class, style
- `children` -- 指定元素的子节点，参数以数组的形式传入

至此，我们已经初步可以创建虚拟 DOM，接下来尝试渲染成真实 DOM.

### 渲染虚拟 DOM

回到*element.js*文件中，增加渲染 DOM 方法：

```js
class Element {}

function createElement() {}

// render方法可以将虚拟DOM转化成真实DOM
function render(vDom) {
  let el = document.createElement(vDom.type);

  for (let key in vDom.props) {
    setAttr(el, key, vDom.props[key]);
  }

  vDom.children.forEach(child => {
    const _child = child instanceof Element ? render(child) : document.createTextNode(child);
    console.log(child, _child);
    _child && el.appendChild(_child);
  });

  return el;
}

// 设置元素属性
function setAttr(node, key, value) {
  switch (key) {
    case 'value':
      if (node.tagName.toLowerCase() === 'input' || node.tagName.toLowerCase() === 'textarea') {
        node.value = value;
      } else {
        node.setAttribute(key, value);
      }
      break;
    case 'style':
      node.style.cssText = value;
      break;
    default:
      node.setAttribute(key, value);
  }
}

// 将元素插入到页面内
function renderDom(el, target) {
  target.appendChild(el);
}

export { Element, createElement, render, renderDom, setAttr };
```

### 调用 render 方法

```js
import { createElement, render, renderDom } from './element';

const vDom = createElement('ul', { class: 'list' }, [
  createElement('li', { class: 'item' }, ['周杰伦']),
  createElement('li', { class: 'item' }, ['陈奕迅']),
  createElement('li', { class: 'item' }, ['林俊杰'])
]);
const el = render(vDom);

renderDom(el, document.getElementById('root'));
```

## 0x02 DOM diff

DOM diff 存在的意义，给定任意两棵树，采用**先序深度优先**遍历的算法找到最少的转换步骤。diff 算法比较两个虚拟 DOM 的区别，也就是比较两个对象的区别。

```js
const REMOVE = 'REMOVE';
const TEXT = 'TEXT';
const ATTR = 'ATTR';
const REPLACE = 'REPLACE';

const isString = value => typeof value === 'string';

function diff(oldTree, newTree) {
  // 声明变量 patchs 来存放补丁的对象
  let patchs = {};
  // 第一次比较应该是树的第0个索引
  let index = 0;
  // 递归树 比较后的结果放到补丁里
  walk(oldTree, newTree, index, patchs);

  return patchs;
}

function walk(oldNode, newNode, index, patchs) {
  // 每个元素都有一个补丁
  let current = [];

  if (!newNode) {
    current.push({ type: REMOVE, index });
  } else if (isString(oldNode) && isString(newNode)) {
    // 判断文本是否一致
    if (oldNode !== newNode) {
      current.push({ type: TEXT, text: newNode });
    }
  } else if (oldNode.type === newNode.type) {
    // 比较属性是否有更改
    let attr = diffAttr(oldNode.props, newNode.props);

    if (Object.keys(attr).length > 0) {
      current.push({ type: ATTR, attr });
    }
    // 如果有子节点
    diffChildren(oldNode.children, newNode.children, patchs);
  } else {
    // 节点被替换
    current.push({ type: REPLACE, newNode });
  }

  if (current.length) {
    // 将元素和补丁对应起来，放到大补丁包中
    patchs[index] = current;
  }
}

function diffAttr(oldAttrs, newAttrs) {
  let patchs = {};
  // 判断老的属性中和新属性的关系
  for (let key in oldAttrs) {
    if (oldAttrs[key] !== newAttrs[key]) {
      patchs[key] = newAttrs[key]; // 有可能还是undefinedF
    }
  }

  for (let key in newAttrs) {
    // 老节点没有新节点的属性
    if (!oldAttrs.hasOwnProperty(key)) {
      patchs[key] = newAttrs[patchs];
    }
  }

  return patchs;
}

let num = 0;

function diffChildren(oldChildren, newChildren, patchs) {
  // 比较老的第一个和新的第一个
  oldChildren.forEach((child, index) => {
    walk(child, newChildren[index], ++num, patchs);
  });
}

export default diff;
```

### 比较规则

- 新的 DOM 节点不存在 `{ type: REMOVE, index }`
- 文本的变化 `{ type: TEXT, text: 1 }`
- 当节点类型相同时，去看一下属性是否相同，产生一个属性的补丁包 `{ type: ATTR, attr: { class: 'list-group' } }`
- 节点类型不相同，直接采用替换模式 `{ type: REPLACE, newNode }`

## 0x0f 本文链接

https://oxyzhg.github.io/virtual-dom-and-diff/
