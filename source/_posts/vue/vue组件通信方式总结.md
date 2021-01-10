---
title: vue组件通信方式总结
author: Oxyzhg
categories: vue
tags:
  - vue
  - 组件通信
abbrlink: e5f8cda2
date: 2020-03-06 10:32:00
---

使用 Vue 进行项目开发，一个不可避免的问题就是如何实现组件间通信。本文记录组件开发经常用到的组件间通信方式：

- props / $emit
- $refs / $parent / $children
- $attrs / $listeners
- peovide / inject
- EventBus
- vuex
- .sync

### props / emit

组件通信最常用的就是这种方法，父组件通过 `props` 将数据传递给子组件，子组建通过 `$emit` 触发相应事件将数据回传父组件。相对应的， `v-model`  指令、 `.sync`  修饰符都是这类通信方式的语法糖。

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
      type: String,
    },
  };
</script>
```

官网文档：

- [Prop](https://cn.vuejs.org/v2/guide/components-props.html)
- [vm.$props](https://cn.vuejs.org/v2/api/#vm-props)
- [vm.$emit](https://cn.vuejs.org/v2/api/#vm-emit)

### provide / inject

`provide` 和 `inject` 主要为高阶插件/组件库提供用例。并不推荐直接用于应用程序代码中。

官网文档：

- [provide/inject](https://cn.vuejs.org/v2/api/#provide-inject)

### refs / parent / children

`$refs`  相较于其他两项更好用，因为它能更准确的找到对应组件实例，开发中常用于主动调用子组件的方法。
`$parent`  和 `$children`  它们的主要目的是作为访问组件的应急方法，并不太推荐使用，因为在开发中有些场景不能判断父组件或子组件到底是哪个，可能中间还会包含其他组件，项目的维护成本会变相提高。更推荐用 props 和 events 实现父子组件通信。

官网文档：

- [ref](https://cn.vuejs.org/v2/api/#ref)
- [vm.$refs](https://cn.vuejs.org/v2/api/#vm-refs)
- [访问子组件实例或子元素](https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E6%88%96%E5%AD%90%E5%85%83%E7%B4%A0)
- [parent](https://cn.vuejs.org/v2/api/#parent)
- [vm.$parent](https://cn.vuejs.org/v2/api/#vm-parent)
- [访问父级组件实例](https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E7%88%B6%E7%BA%A7%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B)
- [vm.$children](https://cn.vuejs.org/v2/api/#vm-children)

### attrs / listeners

这两个实例 property 在创建高级组件时非常有用，通常用来透传属性/方法。

- [vm.$attrs](https://cn.vuejs.org/v2/api/#vm-attrs)
- [vm.$listeners](https://cn.vuejs.org/v2/api/#vm-listeners)

### EventBus

`EventBus`  称为事件总线，在 vue 中可以使用它来作为沟通桥梁的概念, 就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件， 所以组件都可以通知其他组件。EventBus 的实现实际是运用 vue 实例事件/方法： `$emit` , `$on` , `$off`

使用 `EventBus` 实现组件通信，有以下几个步骤：

1. 初始化：首先需要创建一个事件总线并将其导出，以便其他模块可以使用或者监听它。

```javascript
// event-bus.js

import Vue from 'vue';
export default new Vue();
```

2. 发送事件：可以在任意组件中发送事件。

```html
<template>
  <button @click="add">增加</button>
</template>
<script>
  import EventBus from './event-bus';
  export default {
    name: 'ComponentA',
    data() {
      return {
        num: 1,
      };
    },
    methods: {
      add() {
        EventBus.$emit('addition', {
          num: this.num++,
        });
      },
    },
  };
</script>
```

3. 接收事件：可以在任意组件中接收事件。

```html
<template>
  <div>结果: {{count}}</div>
</template>
<script>
  import EventBus from './event-bus';
  export default {
    name: 'ComponentB',
    data() {
      return {
        count: 0,
      };
    },
    mounted() {
      EventBus.$on('addition', (param) => {
        this.count = this.count + param.num;
      });
    },
    beforeDestory() {
      // 移除自定义事件监听
      EventBus.$off('addition');
    },
  };
</script>
```

4. 移除事件监听：最后别忘了在组件销毁的时候移除自定义事件监听

```javascript
import EventBus from './event-bus';
EventBus.$off('addition', {});
```

官网文档：

- [实例事件/方法](https://cn.vuejs.org/v2/api/#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95-%E4%BA%8B%E4%BB%B6)
- [vm.$emit](https://cn.vuejs.org/v2/api/#vm-emit)
- [vm.$on](https://cn.vuejs.org/v2/api/#vm-on)
- [vm.$off](https://cn.vuejs.org/v2/api/#vm-off)

### Vuex

官网文档：

- [vuex](https://vuex.vuejs.org/zh/)

后面的故事大家都知道了~

---

参考文章:

- [vue 中 8 种组件通信方式](https://juejin.im/post/5d267dcdf265da1b957081a3)
- [vue 组件通信总结(非 vuex 和 Event Bus)](https://juejin.im/post/5c5910faf265da2da15d9424)
