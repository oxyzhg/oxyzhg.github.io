---
title: Vue 组件通信
author: Kq
date: 2019-11-04 09:26:46
categories:
tags:
  - vue
  - vuex
  - 组件通信
---

## 0x00 前言

开发 vue 组件，一个不可避免的问题就是组件间通信。

本次记录组件开发经常用到的组件间通信方法：

- `props` / `$emit`
- `peovide` / `inject`
- `$refs` / `$parent` / `$children`
- `$attrs` / `$listeners`
- `EventBus`
- `.sync`
- `vuex`

## 0x01 通信方式

### props / \$emit

组件通信最常用的就是这种方法，父组件通过 `props` 将数据传递给子组件，子组建通过 `$emit` 触发相应事件将数据传回父组件。

```html
<template>
    <el-button type="primary" @click="handleClick">
    // 在父组件利用 v-on 监听
</template>
```

```html
<template>
  <button @click="$emit('click', e)"></button>
</template>

<script>
  export default {
    props: {
      type: String
    }
  };
</script>
```

官网文档：

- [Prop](https://cn.vuejs.org/v2/guide/components-props.html)
- [vm.\$props](https://cn.vuejs.org/v2/api/#vm-props)
- [vm.\$emit](https://cn.vuejs.org/v2/api/#vm-emit)

### provide / inject

> `provide` 和 `inject` 主要为高阶插件/组件库提供用例。并不推荐直接用于应用程序代码中。

官网文档：

- [provide/inject](https://cn.vuejs.org/v2/api/#provide-inject)

### $refs / $parent / \$children

> 节制地使用 `$parent` 和 `$children` - 它们的主要目的是作为访问组件的应急方法。更推荐用 props 和 events 实现父子组件通信。

官网文档：

- [ref](https://cn.vuejs.org/v2/api/#ref)
- [vm.\$refs](https://cn.vuejs.org/v2/api/#vm-refs)
- [访问子组件实例或子元素](https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E6%88%96%E5%AD%90%E5%85%83%E7%B4%A0)
- [parent](https://cn.vuejs.org/v2/api/#parent)
- [vm.\$parent](https://cn.vuejs.org/v2/api/#vm-parent)
- [访问父级组件实例](https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E7%88%B6%E7%BA%A7%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B)
- [vm.\$children](https://cn.vuejs.org/v2/api/#vm-children)

### EventBus

实际是运用 vue 实例事件/方法：`$emit` / `$on` / `$off`

`EventBus` 又称为事件总线，在 vue 中可以使用它来作为沟通桥梁的概念, 就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件， 所以组件都可以通知其他组件。

使用 `EventBus` 实现组件通信，有以下几个步骤：

1. 初始化

首先需要创建一个事件总线并将其导出，以便其他模块可以使用或者监听它。

```js
// event-bus.js

import Vue from 'vue';
export default new Vue();
```

2. 发送事件

假设有两个组件：`componentA` 和 `componentB` ，这两个组件可以是父子组件，也可以是兄弟组件。

组件: componentA

```html
<template>
  <div>
    <button @click="add">增加</button>
  </div>
</template>

<script>
  import EventBus from './event-bus';
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      add() {
        EventBus.$emit('addition', {
          num: this.num++
        });
      }
    }
  };
</script>
```

3. 接收事件

组件: componentB

```html
<template>
  <div>结果: {{count}}</div>
</template>

<script>
  import EventBus from './event-bus';
  export default {
    data() {
      return {
        count: 0
      };
    },
    mounted() {
      EventBus.$on('addition', param => {
        this.count = this.count + param.num;
      });
    }
  };
</script>
```

这样就实现了在 `componentA` 触发事件，在 `componentB` 利用传递来的值进行计算和展示。

4. 移除事件监听

```js
import EventBus from './event-bus';
EventBus.$off('addition', {});
```

官网文档：

- [实例事件/方法](https://cn.vuejs.org/v2/api/#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95-%E4%BA%8B%E4%BB%B6)
- [vm.\$emit](https://cn.vuejs.org/v2/api/#vm-emit)
- [vm.\$on](https://cn.vuejs.org/v2/api/#vm-on)
- [vm.\$off](https://cn.vuejs.org/v2/api/#vm-off)

### $attrs / $listeners

- [vm.\$attrs](https://cn.vuejs.org/v2/api/#vm-attrs)
- [vm.\$listeners](https://cn.vuejs.org/v2/api/#vm-listeners)

### .sync

大多数情况下，`props` 都是单向数据流，但有时候需要双向绑定。不幸的是，真正的双向绑定会带来维护上的问题。

而官方推荐以 `update:propName` 的模式触发事件取而代之：

```js
this.$emit('update:title', newTitle);
```

在父组件中：

```html
<component-a :title.sync="title" />

// 原理
<component-a :title="title" @update:title="title = $event" />
```

官网文档：

- [.sync 修饰符](https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6)

### vuex

官网文档：

- [vuex](https://vuex.vuejs.org/zh/)

后面的故事大家都知道了~

## 0x0f 总结

参考文章：

- [vue 中 8 种组件通信方式](https://juejin.im/post/5d267dcdf265da1b957081a3)
- [vue 组件通信总结(非 vuex 和 Event Bus)](https://juejin.im/post/5c5910faf265da2da15d9424)
