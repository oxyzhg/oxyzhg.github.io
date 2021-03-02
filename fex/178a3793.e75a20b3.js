(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{132:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,b=u["".concat(i,".").concat(h)]||u[h]||d[h]||c;return n?a.a.createElement(b,o(o({ref:t},p),{},{components:n})):a.a.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),c=(n(0),n(132)),i={id:"computed-vs-watch",title:"\u8ba1\u7b97\u5c5e\u6027 vs \u4fa6\u542c\u5c5e\u6027"},o={unversionedId:"advanced/vue/computed-vs-watch",id:"advanced/vue/computed-vs-watch",isDocsHomePage:!1,title:"\u8ba1\u7b97\u5c5e\u6027 vs \u4fa6\u542c\u5c5e\u6027",description:"computed",source:"@site/docs/advanced/vue/computed-vs-watch.md",slug:"/advanced/vue/computed-vs-watch",permalink:"/fex/docs/advanced/vue/computed-vs-watch",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/advanced/vue/computed-vs-watch.md",version:"current",sidebar:"advanced",previous:{title:"nextTick",permalink:"/fex/docs/advanced/vue/next-tick"},next:{title:"\u7ec4\u4ef6\u66f4\u65b0",permalink:"/fex/docs/advanced/vue/component-update"}},s=[{value:"computed",id:"computed",children:[]},{value:"watch",id:"watch",children:[]},{value:"Watcher options",id:"watcher-options",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"computed"},"computed"),Object(c.b)("p",null,"\u8ba1\u7b97\u5c5e\u6027\u7684\u521d\u59cb\u5316\u662f\u53d1\u751f\u5728 Vue \u5b9e\u4f8b\u521d\u59cb\u5316\u9636\u6bb5\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"initState")," \u51fd\u6570\u4e2d\uff0c\u6267\u884c\u4e86 ",Object(c.b)("inlineCode",{parentName:"p"},"initComputed")," \u65b9\u6cd5\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/instance/state.js"',title:'"src/core/instance/state.js"'},"// highlight-next-line\nconst computedWatcherOptions = { lazy: true };\nfunction initComputed(vm: Component, computed: Object) {\n  const watchers = (vm._computedWatchers = Object.create(null));\n\n  for (const key in computed) {\n    const userDef = computed[key];\n    const getter = typeof userDef === 'function' ? userDef : userDef.get;\n    // ...\n    // create internal watcher for the computed property.\n    // highlight-next-line\n    watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);\n\n    // highlight-next-line\n    defineComputed(vm, key, userDef);\n  }\n}\n\nexport function defineComputed(target: any, key: string, userDef: Object | Function) {\n  const shouldCache = !isServerRendering();\n  if (typeof userDef === 'function') {\n    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : userDef;\n    sharedPropertyDefinition.set = noop;\n  } else {\n    sharedPropertyDefinition.get = userDef.get\n      ? shouldCache && userDef.cache !== false\n        ? createComputedGetter(key)\n        : userDef.get\n      : noop;\n    sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;\n  }\n  // ...\n  // highlight-next-line\n  Object.defineProperty(target, key, sharedPropertyDefinition);\n}\n\nfunction createComputedGetter(key) {\n  return function computedGetter() {\n    const watcher = this._computedWatchers && this._computedWatchers[key];\n    if (watcher) {\n      // highlight-start\n      watcher.depend();\n      return watcher.evaluate();\n      // highlight-end\n    }\n  };\n}\n")),Object(c.b)("p",null,"\u8fd9\u91cc\u5148\u662f\u521b\u5efa\u4e86\u5185\u90e8 computed watcher\uff0c\u5e76\u4e0d\u4f1a\u7acb\u523b\u6c42\u503c\u3002\u7136\u540e\u662f\u5229\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"Object.defineProperty")," \u7ed9\u8ba1\u7b97\u5c5e\u6027\u5bf9\u5e94\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"key")," \u503c\u6dfb\u52a0 getter \u548c setter\uff0csetter \u901a\u5e38\u662f\u8ba1\u7b97\u5c5e\u6027\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5e76\u4e14\u62e5\u6709 ",Object(c.b)("inlineCode",{parentName:"p"},"set")," \u65b9\u6cd5\u7684\u65f6\u5019\u624d\u6709\uff0c\u5426\u5219\u662f\u4e00\u4e2a\u7a7a\u51fd\u6570\u3002\u5f53\u8bbf\u95ee\u8be5\u8ba1\u7b97\u5c5e\u6027\u65f6\u89e6\u53d1 getter \u8fdb\u800c\u8ba1\u7b97\u8fd4\u56de\u503c\uff0c\u8ba1\u7b97\u7684\u65b9\u6cd5\u5c31\u662f\u5b9e\u4f8b\u5316 computed watcher \u65f6\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u65b9\u6cd5\u3002"),Object(c.b)("p",null,"\u6ce8\u610f\u5728\u5b9e\u4f8b\u5316 computed watcher \u65f6\u4f20\u5165\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"computedWatcherOptions")," \u53c2\u6570\uff0c\u8fd9\u91cc ",Object(c.b)("inlineCode",{parentName:"p"},"lazy")," \u5b57\u6bb5\u4f5c\u4e3a computed watcher \u7684\u6807\u8bc6\u662f\u540e\u7eed\u6267\u884c\u4e00\u4e9b\u65b9\u6cd5\u7684\u5224\u65ad\u6761\u4ef6\u3002"),Object(c.b)("p",null,"\u4e0b\u9762\u662f\u7b80\u5316\u7248\u7684 Watcher \u7c7b\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/observer/watcher.js"',title:'"src/core/observer/watcher.js"'},"export default class Watcher {\n  constructor(\n    vm: Component,\n    expOrFn: string | Function,\n    cb: Function,\n    options?: ?Object,\n    isRenderWatcher?: boolean\n  ) {\n    // ...\n    this.lazy = !!options.lazy;\n    this.dirty = this.lazy; // for lazy watchers\n    // ...\n    // highlight-next-line\n    this.value = this.lazy ? undefined : this.get();\n  }\n\n  /**\n   * Subscriber interface.\n   * Will be called when a dependency changes.\n   */\n  update() {\n    // highlight-next-line\n    if (this.lazy) {\n      this.dirty = true;\n    } else if (this.sync) {\n      this.run();\n    } else {\n      queueWatcher(this);\n    }\n  }\n\n  /**\n   * Evaluate the value of the watcher.\n   * This only gets called for lazy watchers.\n   */\n  evaluate() {\n    // highlight-next-line\n    this.value = this.get();\n    this.dirty = false;\n  }\n}\n")),Object(c.b)("p",null,"\u8fd9\u91cc\u6ce8\u610f ",Object(c.b)("inlineCode",{parentName:"p"},"this.dirty")," \u5c5e\u6027\uff0c\u521d\u59cb\u503c\u662f ",Object(c.b)("inlineCode",{parentName:"p"},"true"),"\uff0c\u8ba1\u7b97\u4e00\u6b21\u540e\u53d8\u4e3a ",Object(c.b)("inlineCode",{parentName:"p"},"false"),"\uff0c\u6570\u636e\u53d8\u5316\u540e\u6267\u884c ",Object(c.b)("inlineCode",{parentName:"p"},"watcher.update()")," \u65b9\u6cd5\u518d\u6b21\u53d8\u4e3a ",Object(c.b)("inlineCode",{parentName:"p"},"true"),"\u3002\u5728\u8fd9\u4e2a\u53d8\u5316\u4e2d\u6211\u4eec\u53ef\u4ee5\u5f97\u51fa\uff0c\u5f53 ",Object(c.b)("inlineCode",{parentName:"p"},"dirty=true")," \u65f6\u8868\u793a\u6570\u636e\u672a\u7ecf\u8ba1\u7b97\uff0c\u5f53 ",Object(c.b)("inlineCode",{parentName:"p"},"dirty=false")," \u65f6\u8868\u793a\u6570\u636e\u5df2\u7ecf\u8ba1\u7b97\u3002"),Object(c.b)("p",null,"\u771f\u5b9e\u7684\u573a\u666f\u662f\uff0c\u5982\u679c\u8ba1\u7b97\u6570\u636e\u4f9d\u8d56\u7684\u67d0\u4e2a\u54cd\u5e94\u5f0f\u6570\u636e\u53d1\u751f\u53d8\u5316\uff0c\u901a\u77e5 computed watcher \u4e0b\u6b21\u88ab\u8bbf\u95ee\u53ef\u4ee5\u91cd\u65b0\u8ba1\u7b97\u65b0\u503c\uff0c\u4e0b\u6b21\u8be5\u8ba1\u7b97\u5c5e\u6027\u88ab\u8bbf\u95ee\u65f6\uff0c\u518d\u8ba1\u7b97\u65b0\u503c\u3002"),Object(c.b)("p",null,"\u603b\u7ed3\uff1a",Object(c.b)("strong",{parentName:"p"},"\u8ba1\u7b97\u5c5e\u6027\u53ea\u6709\u88ab\u8bbf\u95ee\u65f6\u624d\u4f1a\u89e6\u53d1\u8ba1\u7b97\uff0c\u4e14\u5982\u679c\u6570\u636e\u6ca1\u6709\u53d8\u5316\uff0c\u8fd9\u4e2a\u503c\u662f\u4e4b\u524d\u7f13\u5b58\u7684\u8ba1\u7b97\u503c\u3002")),Object(c.b)("h2",{id:"watch"},"watch"),Object(c.b)("p",null,"\u4fa6\u542c\u5c5e\u6027\u7684\u521d\u59cb\u5316\u4e5f\u53d1\u751f\u5728 Vue \u5b9e\u4f8b\u521d\u59cb\u5316\u9636\u6bb5\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"initState")," \u51fd\u6570\u4e2d\uff0c\u6267\u884c\u4e86 ",Object(c.b)("inlineCode",{parentName:"p"},"initWatch")," \u65b9\u6cd5\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/instance/state.js"',title:'"src/core/instance/state.js"'},"function initWatch(vm: Component, watch: Object) {\n  for (const key in watch) {\n    const handler = watch[key];\n    if (Array.isArray(handler)) {\n      for (let i = 0; i < handler.length; i++) {\n        createWatcher(vm, key, handler[i]);\n      }\n    } else {\n      createWatcher(vm, key, handler);\n    }\n  }\n}\n\nfunction createWatcher(vm: Component, expOrFn: string | Function, handler: any, options?: Object) {\n  if (isPlainObject(handler)) {\n    options = handler;\n    handler = handler.handler;\n  }\n  if (typeof handler === 'string') {\n    handler = vm[handler];\n  }\n  // highlight-next-line\n  return vm.$watch(expOrFn, handler, options);\n}\n")),Object(c.b)("p",null,"\u8fd9\u91cc\u9996\u5148\u5bf9 ",Object(c.b)("inlineCode",{parentName:"p"},"hanlder")," \u7684\u7c7b\u578b\u505a\u5224\u65ad\uff0c\u62ff\u5230\u5b83\u6700\u7ec8\u7684\u56de\u8c03\u51fd\u6570\uff0c\u6700\u540e\u8c03\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"vm.$watch(keyOrFn, handler, options)")," \u51fd\u6570\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/instance/state.js"',title:'"src/core/instance/state.js"'},'Vue.prototype.$watch = function (expOrFn: string | Function, cb: any, options?: Object): Function {\n  const vm: Component = this;\n  if (isPlainObject(cb)) {\n    return createWatcher(vm, expOrFn, cb, options);\n  }\n  options = options || {};\n  // highlight-next-line\n  options.user = true;\n\n  // highlight-next-line\n  const watcher = new Watcher(vm, expOrFn, cb, options);\n  if (options.immediate) {\n    try {\n      cb.call(vm, watcher.value);\n    } catch (error) {\n      handleError(error, vm, `callback for immediate watcher "${watcher.expression}"`);\n    }\n  }\n  return function unwatchFn() {\n    watcher.teardown();\n  };\n};\n')),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"vm.$watch")," \u65b9\u6cd5\u6700\u7ec8\u5b9e\u4f8b\u5316\u4e86\u4e00\u4e2a user watcher\uff0c\u6240\u4ee5\u672c\u8d28\u4e0a\u4fa6\u542c\u5c5e\u6027\u4e5f\u662f\u57fa\u4e8e Watcher \u5b9e\u73b0\u7684\u3002"),Object(c.b)("h2",{id:"watcher-options"},"Watcher options"),Object(c.b)("p",null,"Watcher \u6784\u9020\u51fd\u6570\u5bf9 ",Object(c.b)("inlineCode",{parentName:"p"},"options")," \u505a\u4e86\u5904\u7406\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"class watcher {\n  constructor(vm, expOrFn, cb, options, isRenderWatcher) {\n    // ...\n    // options\n    if (options) {\n      this.deep = !!options.deep;\n      this.user = !!options.user;\n      this.lazy = !!options.lazy;\n      this.sync = !!options.sync;\n      this.before = options.before;\n    } else {\n      this.deep = this.user = this.lazy = this.sync = false;\n    }\n    // ...\n  }\n}\n")),Object(c.b)("p",null,"Watcher \u5206\u7c7b\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u6309\u5b9e\u4f8b\u5316\u573a\u666f\uff1a",Object(c.b)("inlineCode",{parentName:"li"},"render watcher"),", ",Object(c.b)("inlineCode",{parentName:"li"},"computed watcher"),", ",Object(c.b)("inlineCode",{parentName:"li"},"user watcher"),"."),Object(c.b)("li",{parentName:"ul"},"\u6309\u53c2\u6570\u7c7b\u578b\uff1a",Object(c.b)("inlineCode",{parentName:"li"},"deep watcher"),", ",Object(c.b)("inlineCode",{parentName:"li"},"user watcher"),", ",Object(c.b)("inlineCode",{parentName:"li"},"lazy watcher"),", ",Object(c.b)("inlineCode",{parentName:"li"},"sync watcher"),".")),Object(c.b)("p",null,"\u7279\u522b\u5730\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"deep watcher")," \u6a21\u5f0f\u4e0b\u4f1a\u6df1\u5c42\u9012\u5f52\u904d\u5386\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8fd9\u662f\u9010\u4e2a\u89e6\u53d1\u5b83\u4eec\u7684 getter \u7684\u8fc7\u7a0b\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u6536\u96c6\u5230\u4f9d\u8d56\uff0c\u4f46\u6709\u4e00\u5b9a\u7684\u6027\u80fd\u5f00\u9500\uff0c\u56e0\u6b64\u5728\u5f00\u53d1\u4e2d\u662f\u5426\u8981\u6df1\u5c42\u6b21\u76d1\u542c\u8fd8\u5f97\u659f\u914c\u800c\u5b9a\u3002",Object(c.b)("inlineCode",{parentName:"p"},"sync watcher")," \u6a21\u5f0f\u4e0b\u4f1a\u540c\u6b65\u66f4\u65b0\u800c\u4e0d\u662f\u5728\u961f\u5217\u4e2d\u7b49\u5f85\u4e0b\u4e00\u4e2a tick \u518d\u6267\u884c\u3002"),Object(c.b)("p",null,"\u5c31\u5e94\u7528\u573a\u666f\u800c\u8a00\uff0c\u8ba1\u7b97\u5c5e\u6027\u9002\u5408\u7528\u5728\u6a21\u677f\u6e32\u67d3\u4e2d\uff0c\u67d0\u4e2a\u503c\u662f\u4f9d\u8d56\u4e86\u5176\u5b83\u7684\u54cd\u5e94\u5f0f\u5bf9\u8c61\u751a\u81f3\u662f\u8ba1\u7b97\u5c5e\u6027\u8ba1\u7b97\u800c\u6765\uff1b\u800c\u4fa6\u542c\u5c5e\u6027\u9002\u7528\u4e8e\u89c2\u6d4b\u67d0\u4e2a\u503c\u7684\u53d8\u5316\u53bb\u5b8c\u6210\u4e00\u6bb5\u590d\u6742\u7684\u4e1a\u52a1\u903b\u8f91\u3002"))}l.isMDXComponent=!0}}]);