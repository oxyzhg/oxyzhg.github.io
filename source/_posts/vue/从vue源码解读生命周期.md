---
title: 从vue源码解读生命周期
author: Kq
categories: vue
tags:
  - vue
  - 源码
  - 生命周期
abbrlink: 5f595b09
date: 2020-07-04 16:14:00
---

## 前言

> 每个 Vue 实例在被创建之前都要经过一系列的初始化过程。例如需要设置数据监听、编译模板、挂载 DOM 实例、在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，给予用户机会在一些特定的场景下添加他们自己的代码。

## 生命周期函数

1. **beforeCreate**
2. **created**
3. **beforeMount**
4. **mounted**
5. **beforeUpdate**
6. **updated**
7. activated
8. deactivated
9. **beforeDestroy**
10. **destroyed**
11. errorCaptured

## 从源码看实例生命周期

源码中最终执行生命周期的函数都是调用 callHook 方法，它的定义在 _src/core/instance/lifecycle.js_ 中：

```js
export function callHook(vm: Component, hook: string) {
  pushTarget();
  const handlers = vm.$options[hook];
  const info = `${hook} hook`;
  if (handlers) {
    for (let i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}
```

### beforeCreate & created

beforeCreate 和 created 函数都是在实例化阶段触发，在 `_init`  方法中执行的，它的定义在 _src/core/instance/init.js_ 中：

```js
Vue.prototype._init = function (options?: Object) {
  // ...
  initLifecycle(vm);
  initEvents(vm);
  initRender(vm);
  callHook(vm, 'beforeCreate');
  initInjections(vm); // resolve injections before data/props
  initState(vm);
  initProvide(vm); // resolve provide after data/props
  callHook(vm, 'created');
  // ...
};
```

可以看到 beforeCreate 和 created 的钩子调用是在 initState 的前后，initState 的作用是初始化 props, data, methods, watch, computed 等属性。显然 beforeCreate 的钩子中不能获取到 props, data 中定义的值，也不能调用 methods 中定义的函数。

在执行两个钩子函数的时候，并没有渲染 DOM，所以我们也不能访问 DOM，一般来说，如果组件在加载的时候需要和后端有交互，放在这俩个钩子函数执行都可以，如果是需要访问 props、data 等数据的话，就需要使用 created 钩子函数。

### beforeMount & mounted

beforeMount 钩子函数在 DOM 挂载前触发，在 mountComponent 函数中执行，定义在 _src/core/instance/lifecycle.js_ 中：

```js
export function mountComponent(vm: Component, el: ?Element, hydrating?: boolean): Component {
  vm.$el = el;
  // ...
  callHook(vm, 'beforeMount');

  let updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = () => {
      const name = vm._name;
      const id = vm._uid;
      const startTag = `vue-perf-start:${id}`;
      const endTag = `vue-perf-end:${id}`;

      mark(startTag);
      const vnode = vm._render();
      mark(endTag);
      measure(`vue ${name} render`, startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(`vue ${name} patch`, startTag, endTag);
    };
  } else {
    updateComponent = () => {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(
    vm,
    updateComponent,
    noop,
    {
      before() {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      },
    },
    true /* isRenderWatcher */
  );
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm;
}
```

在执行 `vm._render()`  函数渲染 VNode 之前，执行了 beforeMount 钩子函数，执行完后把 VNode push 到真实 DOM 后，执行了 mounted 钩子。注意代码注释中提到，这是手动挂载实例的执行逻辑，真正的组件初始化过程，是执行 invokeInsertHook  函数，定义在 _src/core/vdom/patch.js_ 中：

```js
function invokeInsertHook(vnode, queue, initial) {
  // delay insert hooks for component root nodes, invoke them after the
  // element is really inserted
  if (isTrue(initial) && isDef(vnode.parent)) {
    vnode.parent.data.pendingInsert = queue;
  } else {
    for (let i = 0; i < queue.length; ++i) {
      queue[i].data.hook.insert(queue[i]);
    }
  }
}
```

insert 函数定义在 _src/core/vdom/create-component.js_ 中的 componentVNodeHooks 中：

```js
const componentVNodeHooks = {
  // ...
  insert(vnode: MountedComponentVNode) {
    const { context, componentInstance } = vnode;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    // ...
  },
};
```

每个子组件都是在这个钩子函数中执行 mounted 钩子函数。并且之前我们分析过，insertedVNodeQueue 的添加顺序是先父后子，所以对于同步渲染的子组件而言，mounted 钩子的执行顺序也是先父后子。

### beforeUpdate & updated

beforeUpdate 钩子函数是在实例数据放生变化 更新 DOM 前触发，定义在监听器的 before 函数中：

```js
export function mountComponent(vm: Component, el: ?Element, hydrating?: boolean): Component {
  // ...

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(
    vm,
    updateComponent,
    noop,
    {
      before() {
        if (vm._isMounted) {
          callHook(vm, 'beforeUpdate');
        }
      },
    },
    true /* isRenderWatcher */
  );
  // ...
}
```

这个钩子函数要在实例挂载完成后才会触发。

updated 钩子函数的执行时机在 flushSchedulerQueue 函数调用时，它定义在 _src/core/observer/scheduler.js_ 中：

```js
function flushSchedulerQueue() {
  // ...
  // 获取到 updatedQueue
  callUpdatedHooks(updatedQueue);
}

function callUpdatedHooks(queue) {
  let i = queue.length;
  while (i--) {
    const watcher = queue[i];
    const vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}
```

这里 updatedQueue 是已更新的数组， callUpdatedHooks 函数会遍历这个数组，满足条件的会触发 updated 钩子函数。

之前提到过，在组件实例化过程中，会实例化一个渲染的 Watcher 去监听 vm 上的数据变化重新渲染，在实例化 Watcher 过程中会判断 isRenderWatcher，若是则会把当前 watcher 实例赋值给 `vm._watcher`，Watcher 类定义在 _src/core/observer/watcher.js_ 中：

```js
export default class Watcher {
  // ...
  constructor(
    vm: Component,
    expOrFn: string | Function,
    cb: Function,
    options?: ?Object,
    isRenderWatcher?: boolean
  ) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // ...
  }
}
```

由于是渲染相关的 watcher 实例才赋值给 `vm._watcher` 属性，因此在 callUpdatedHook 函数中，触发 updated 钩子函数前又作了一层判断，只有 `vm._watcher` 等于当前 watcher 实例，即当前是渲染相关 watcher 实例，才会执行 updated 钩子函数。

### beforeDestroy & destroyed

beforeDestroy 和 destroyed 钩子函数都在是组件销毁阶段触发，通过调用 `$destroy` 方法执行。方法在组件实例化过程中，执行 lifecycleMixin 函数时定义，它的定义在 _src/core/instance/lifecycle.js_ 中：

```js
export function lifecycleMixin(Vue: Class<Component>) {
  Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {};

  Vue.prototype.$forceUpdate = function () {};

  Vue.prototype.$destroy = function () {
    const vm: Component = this;
    if (vm._isBeingDestroyed) {
      return;
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    const parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    let i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}
```

beforeDestroy 钩子函数的执行时机是在实例销毁前，接着执行了一些销毁动作，包括从父实例移除自身，删除 watcher，当前渲染的 VNode 执行销毁钩子函数等，待执行完毕触发 destroyed 钩子函数。

注意这里在执行完 `vm._patch(vm_vnode, null)`  后，先触发了 destroyed 钩子函数，然后才执行 `vm.$off()`  移除所有监听器，因此在 destroyed 阶段仍可访问组件实例。

### activated & deactivated

这两个生命周期钩子是 keep-alive 内置组件专门定制的。

## 父子组件生命周期函数执行顺序

加载渲染过程：

1. 父 beforeCreate
2. 父 created
3. 父 beforeMount
4. 子 beforeCreate
5. 子 created
6. 子 beforeMount
7. 子 mounted
8. 父 mounted

更新过程：

1. 父 beforeUpdate
2. 子 beforeUpdate
3. 子 updated
4. 父 updated

销毁过程：

1. 父 beforeDestroy
2. 子 beforeDestroy
3. 子 destroyed
4. 父 destroyed

## 总结

组件的生命周期大致分为 4 个阶段，分别是：create、mount、update、destroy，每个阶段的始末又分为 2 个钩子，主要的生命周期钩子就是由这 8 个组成。

在组件实例化的过程中，会执行一系列的初始化方法，这其中有 intMixin, StateMixin, eventsMixin, lifecycleMixin, renderMixin 等。

在 initMixin 方法中会注入 `Vue.prototype._init` 方法，而在初始化阶段会被直接调用，这个函数中主要逻辑除了执行配置合并等操作，在 beforeCreate 钩子触发前会执行 initLifecycle, initEvents, initRender 步骤，在 created 钩子触发前会执行 initInjections, initState, initProvide 步骤。

在 lifecycleMixin 方法中会注入 `Vue.prototype._update`, `Vue.prototype.$forceUpdate`, `Vue.prototype.$destroy` 方法，其中在组件销毁阶段会直接调用 $destroy 函数。

在 web/runtime 相关代码中，又给 Vue 增加了 $mount 公共函数，该函数返回 mountComponent 函数的执行结果。在 mountComponent 函数中触发了 beforeMount 钩子函数，并且实例化 Watcher 监听器，该监听器配置了数据发生改变后 before 钩子，用来触发 beforeUpdate 钩子函数。等元素插入 DOM 结构中(vdom/patch.js)，调用 insert 函数触发 mounted 钩子函数。注意这里的渲染顺序仍然是先子后父。

当监听到实例的数据发生变化后，会触发监听器 watcher 的 before 钩子触发 beforeUpdate 钩子函数。在 flushSchedulerQueue 函数中，更新队列执行完成后，会触发 updated 钩子函数。

在组件预先定义的生命周期中，执行 $destroy 函数先触发 beforeDestroy 钩子函数，等组件实例销毁、删除数据监听、并从 DOM 结构中移除，触发 destroy 钩子函数。

官方资料：

- [生命周期图示](https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA)
- [选项/生命周期钩子](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)
