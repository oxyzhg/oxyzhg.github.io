(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return d}));var o=t(3),i=t(7),a=(t(0),t(118)),r={id:"componentization",title:"\u7ec4\u4ef6\u5316"},c={unversionedId:"advanced/vue/componentization",id:"advanced/vue/componentization",isDocsHomePage:!1,title:"\u7ec4\u4ef6\u5316",description:"Vue.js \u53e6\u4e00\u4e2a\u6838\u5fc3\u601d\u60f3\u662f\u7ec4\u4ef6\u5316\u3002\u6240\u8c13\u7ec4\u4ef6\u5316\uff0c\u5c31\u662f\u628a\u9875\u9762\u62c6\u5206\u6210\u591a\u4e2a\u7ec4\u4ef6 (component)\uff0c\u6bcf\u4e2a\u7ec4\u4ef6\u4f9d\u8d56\u7684 CSS\u3001JavaScript\u3001\u6a21\u677f\u3001\u56fe\u7247\u7b49\u8d44\u6e90\u653e\u5728\u4e00\u8d77\u5f00\u53d1\u548c\u7ef4\u62a4\u3002\u7ec4\u4ef6\u662f\u8d44\u6e90\u72ec\u7acb\u7684\uff0c\u7ec4\u4ef6\u5728\u7cfb\u7edf\u5185\u90e8\u53ef\u590d\u7528\uff0c\u7ec4\u4ef6\u548c\u7ec4\u4ef6\u4e4b\u95f4\u53ef\u4ee5\u5d4c\u5957\u3002",source:"@site/docs/advanced/vue/componentization.md",slug:"/advanced/vue/componentization",permalink:"/fex/docs/advanced/vue/componentization",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/advanced/vue/componentization.md",version:"current",sidebar:"advanced",previous:{title:"\u6570\u636e\u9a71\u52a8",permalink:"/fex/docs/advanced/vue/data-driven"},next:{title:"\u54cd\u5e94\u5f0f\u539f\u7406",permalink:"/fex/docs/advanced/vue/reactive"}},p=[{value:"createComponent",id:"createcomponent",children:[{value:"\u6784\u9020\u5b50\u7c7b\u6784\u9020\u51fd\u6570",id:"\u6784\u9020\u5b50\u7c7b\u6784\u9020\u51fd\u6570",children:[]},{value:"\u5b89\u88c5\u7ec4\u4ef6\u94a9\u5b50\u51fd\u6570",id:"\u5b89\u88c5\u7ec4\u4ef6\u94a9\u5b50\u51fd\u6570",children:[]},{value:"\u5b9e\u4f8b\u5316 VNode",id:"\u5b9e\u4f8b\u5316-vnode",children:[]}]},{value:"patch",id:"patch",children:[{value:"createComponent",id:"createcomponent-1",children:[]}]},{value:"\u5408\u5e76\u914d\u7f6e",id:"\u5408\u5e76\u914d\u7f6e",children:[]}],s={toc:p};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Vue.js \u53e6\u4e00\u4e2a\u6838\u5fc3\u601d\u60f3\u662f\u7ec4\u4ef6\u5316\u3002\u6240\u8c13\u7ec4\u4ef6\u5316\uff0c\u5c31\u662f\u628a\u9875\u9762\u62c6\u5206\u6210\u591a\u4e2a\u7ec4\u4ef6 (component)\uff0c\u6bcf\u4e2a\u7ec4\u4ef6\u4f9d\u8d56\u7684 CSS\u3001JavaScript\u3001\u6a21\u677f\u3001\u56fe\u7247\u7b49\u8d44\u6e90\u653e\u5728\u4e00\u8d77\u5f00\u53d1\u548c\u7ef4\u62a4\u3002\u7ec4\u4ef6\u662f\u8d44\u6e90\u72ec\u7acb\u7684\uff0c\u7ec4\u4ef6\u5728\u7cfb\u7edf\u5185\u90e8\u53ef\u590d\u7528\uff0c\u7ec4\u4ef6\u548c\u7ec4\u4ef6\u4e4b\u95f4\u53ef\u4ee5\u5d4c\u5957\u3002"),Object(a.b)("h2",{id:"createcomponent"},"createComponent"),Object(a.b)("p",null,"\u5728\u6570\u636e\u9a71\u52a8\u4e00\u8282\u5206\u6790 ",Object(a.b)("inlineCode",{parentName:"p"},"_createElement")," \u65b9\u6cd5\u65f6\u8bf4\u5230\uff0c\u5982\u679c tag \u662f\u666e\u901a html \u6807\u7b7e\uff0c\u5c31\u5b9e\u4f8b\u5316\u4e00\u4e2a\u666e\u901a VNode\uff0c\u5426\u5219\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"p"},"createComponent")," \u65b9\u6cd5\u521b\u5efa\u4e00\u4e2a\u7ec4\u4ef6 VNode\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/vdom/create-component.js"',title:'"src/core/vdom/create-component.js"'},"export function createComponent(\n  Ctor: Class<Component> | Function | Object | void,\n  data: ?VNodeData,\n  context: Component,\n  children: ?Array<VNode>,\n  tag?: string\n): VNode | Array<VNode> | void {\n  if (isUndef(Ctor)) {\n    return;\n  }\n\n  // highlight-start\n  const baseCtor = context.$options._base;\n  // plain options object: turn it into a constructor\n  if (isObject(Ctor)) {\n    Ctor = baseCtor.extend(Ctor);\n  }\n  // highlight-end\n\n  // if at this stage it's not a constructor or an async component factory,\n  // reject.\n  if (typeof Ctor !== 'function') {\n    // ...\n    return;\n  }\n\n  // async component\n  let asyncFactory;\n  if (isUndef(Ctor.cid)) {\n    asyncFactory = Ctor;\n    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);\n    if (Ctor === undefined) {\n      // return a placeholder node for async component, which is rendered\n      // as a comment node but preserves all the raw information for the node.\n      // the information will be used for async server-rendering and hydration.\n      return createAsyncPlaceholder(asyncFactory, data, context, children, tag);\n    }\n  }\n\n  data = data || {};\n\n  // resolve constructor options in case global mixins are applied after\n  // component constructor creation\n  resolveConstructorOptions(Ctor);\n\n  // transform component v-model data into props & events\n  if (isDef(data.model)) {\n    transformModel(Ctor.options, data);\n  }\n\n  // extract props\n  const propsData = extractPropsFromVNodeData(data, Ctor, tag);\n\n  // functional component\n  if (isTrue(Ctor.options.functional)) {\n    return createFunctionalComponent(Ctor, propsData, data, context, children);\n  }\n\n  // extract listeners, since these needs to be treated as\n  // child component listeners instead of DOM listeners\n  const listeners = data.on;\n  // replace with listeners with .native modifier\n  // so it gets processed during parent component patch.\n  data.on = data.nativeOn;\n\n  if (isTrue(Ctor.options.abstract)) {\n    // abstract components do not keep anything\n    // other than props & listeners & slot\n\n    // work around flow\n    const slot = data.slot;\n    data = {};\n    if (slot) {\n      data.slot = slot;\n    }\n  }\n\n  // install component management hooks onto the placeholder node\n  // highlight-next-line\n  installComponentHooks(data);\n\n  // return a placeholder vnode\n  const name = Ctor.options.name || tag;\n  // highlight-start\n  const vnode = new VNode(\n    `vue-component-${Ctor.cid}${name ? `-${name}` : ''}`,\n    data,\n    undefined,\n    undefined,\n    undefined,\n    context,\n    { Ctor, propsData, listeners, tag, children },\n    asyncFactory\n  );\n  // highlight-end\n\n  // ...\n  return vnode;\n}\n")),Object(a.b)("p",null,"\u5b83\u7684\u4f5c\u7528\u662f\u521b\u5efa\u7ec4\u4ef6\u7c7b\u578b\u7684 VNode\uff0c\u4e3b\u8981\u5c31 3 \u4e2a\u5173\u952e\u6b65\u9aa4\uff1a\u6784\u9020\u5b50\u7c7b\u6784\u9020\u51fd\u6570\u3001\u5b89\u88c5\u7ec4\u4ef6\u94a9\u5b50\u51fd\u6570\u3001\u5b9e\u4f8b\u5316 VNode\u3002"),Object(a.b)("h3",{id:"\u6784\u9020\u5b50\u7c7b\u6784\u9020\u51fd\u6570"},"\u6784\u9020\u5b50\u7c7b\u6784\u9020\u51fd\u6570"),Object(a.b)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u4ee3\u7801\u4e2d ",Object(a.b)("inlineCode",{parentName:"p"},"baseCtor")," \u5c31\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"Vue"),"\uff0c\u8fd9\u5728\u521d\u59cb\u5316\u9636\u6bb5\u5c31\u6709\u5b9a\u4e49\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/global-api/index.js"',title:'"src/core/global-api/index.js"'},'export function initGlobalAPI(Vue: GlobalAPI) {\n  // this is used to identify the "base" constructor to extend all plain-object\n  // components with in Weex\'s multi-instance scenarios.\n  // highlight-next-line\n  Vue.options._base = Vue;\n}\n')),Object(a.b)("p",null,"\u7136\u540e\u6211\u4eec\u770b\u4e00\u4e0b ",Object(a.b)("inlineCode",{parentName:"p"},"Vue.extend")," \u51fd\u6570\u7684\u5b9a\u4e49\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/global-api/extend.js"',title:'"src/core/global-api/extend.js"'},"/**\n * Class inheritance\n */\nVue.extend = function (extendOptions: Object): Function {\n  extendOptions = extendOptions || {};\n  const Super = this;\n  const SuperId = Super.cid;\n  // highlight-start\n  const cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});\n  if (cachedCtors[SuperId]) {\n    return cachedCtors[SuperId];\n  }\n  // highlight-end\n\n  const name = extendOptions.name || Super.options.name;\n  if (process.env.NODE_ENV !== 'production' && name) {\n    validateComponentName(name);\n  }\n\n  const Sub = function VueComponent(options) {\n    // highlight-next-line\n    this._init(options);\n  };\n  // highlight-start\n  Sub.prototype = Object.create(Super.prototype);\n  Sub.prototype.constructor = Sub;\n  // highlight-end\n  Sub.cid = cid++;\n  Sub.options = mergeOptions(Super.options, extendOptions);\n  Sub['super'] = Super;\n\n  // For props and computed properties, we define the proxy getters on\n  // the Vue instances at extension time, on the extended prototype. This\n  // avoids Object.defineProperty calls for each instance created.\n  if (Sub.options.props) {\n    initProps(Sub);\n  }\n  if (Sub.options.computed) {\n    initComputed(Sub);\n  }\n\n  // allow further extension/mixin/plugin usage\n  Sub.extend = Super.extend;\n  Sub.mixin = Super.mixin;\n  Sub.use = Super.use;\n\n  // create asset registers, so extended classes\n  // can have their private assets too.\n  ASSET_TYPES.forEach(function (type) {\n    Sub[type] = Super[type];\n  });\n  // enable recursive self-lookup\n  if (name) {\n    Sub.options.components[name] = Sub;\n  }\n\n  // keep a reference to the super options at extension time.\n  // later at instantiation we can check if Super's options have\n  // been updated.\n  Sub.superOptions = Super.options;\n  Sub.extendOptions = extendOptions;\n  Sub.sealedOptions = extend({}, Sub.options);\n\n  // cache constructor\n  cachedCtors[SuperId] = Sub;\n  return Sub;\n};\n")),Object(a.b)("p",null,"\u8fd9\u662f\u4e00\u79cd\u975e\u5e38\u7ecf\u5178\u7684\u539f\u578b\u7ee7\u627f\u7684\u65b9\u5f0f\uff0c\u53ea\u4e0d\u8fc7\u5728\u7ee7\u627f\u540e\u62d3\u5c55\u4e86\u4e00\u4e9b\u5c5e\u6027\u65b9\u6cd5\uff0c\u7136\u540e\u7f13\u5b58\u4e86\u8fd9\u4e2a\u6784\u9020\u51fd\u6570\u3002"),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"\u5b9e\u9645\u4e0a Vue.js \u5efa\u8bae data \u4f7f\u7528\u51fd\u6570\u800c\u4e0d\u662f\u76f4\u63a5\u4f7f\u7528\u5bf9\u8c61\uff0c\u5c31\u8ddf\u8fd9\u4e2a\u7f13\u5b58\u7684\u6784\u9020\u51fd\u6570\u6709\u5173\u7cfb\u3002\u8bd5\u60f3\u540c\u4e00\u4e2a\u7ec4\u4ef6\u6784\u9020\u51fd\u6570\u53ea\u4f1a\u88ab\u521b\u5efa\u4e00\u6b21\uff0c\u5728\u7b2c\u4e00\u6b21\u6784\u9020\u65f6 data \u5bf9\u5e94\u7684\u72b6\u6001\u5c31\u5df2\u7ecf\u4ea7\u751f\u4e86\uff0c\u7531\u4e8e\u5bf9\u8c61\u7c7b\u578b\u7684\u6570\u636e\u662f\u5730\u5740\u5f15\u7528\uff0c\u90a3\u4e48\u590d\u7528\u7684\u6784\u9020\u51fd\u6570\u4e2d data \u5c5e\u6027\u5fc5\u7136\u4f1a\u6307\u5411\u540c\u4e00\u5904\u5f15\u7528\u3002"))),Object(a.b)("h3",{id:"\u5b89\u88c5\u7ec4\u4ef6\u94a9\u5b50\u51fd\u6570"},"\u5b89\u88c5\u7ec4\u4ef6\u94a9\u5b50\u51fd\u6570"),Object(a.b)("p",null,"\u6211\u4eec\u4e4b\u524d\u63d0\u5230 Vue.js \u4f7f\u7528\u7684 Virtual DOM \u53c2\u8003\u7684\u662f\u5f00\u6e90\u5e93 snabbdom \uff0c\u5b83\u7684\u4e00\u4e2a\u7279\u70b9\u662f\u5728 VNode \u7684 patch \u6d41\u7a0b\u4e2d\u5bf9\u5916\u66b4\u9732\u4e86\u5404\u79cd\u65f6\u673a\u7684\u94a9\u5b50\u51fd\u6570\uff0c\u65b9\u4fbf\u6211\u4eec\u505a\u4e00\u4e9b\u989d\u5916\u7684\u4e8b\u60c5\uff0cVue.js \u4e5f\u662f\u5145\u5206\u5229\u7528\u8fd9\u4e00\u70b9\uff0c\u5728\u521d\u59cb\u5316\u4e00\u4e2a Component \u7c7b\u578b\u7684 VNode \u7684\u8fc7\u7a0b\u4e2d\u5b9e\u73b0\u4e86\u51e0\u4e2a\u94a9\u5b50\u51fd\u6570\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/vdom/create-component.js"',title:'"src/core/vdom/create-component.js"'},"function installComponentHooks(data: VNodeData) {\n  const hooks = data.hook || (data.hook = {});\n  for (let i = 0; i < hooksToMerge.length; i++) {\n    const key = hooksToMerge[i];\n    const existing = hooks[key];\n    const toMerge = componentVNodeHooks[key];\n    if (existing !== toMerge && !(existing && existing._merged)) {\n      hooks[key] = existing ? mergeHook(toMerge, existing) : toMerge;\n    }\n  }\n}\n")),Object(a.b)("p",null,"\u6574\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"installComponentHooks")," \u7684\u8fc7\u7a0b\u5c31\u662f\u628a ",Object(a.b)("inlineCode",{parentName:"p"},"componentVNodeHooks")," \u7684\u94a9\u5b50\u51fd\u6570\u5408\u5e76\u5230 ",Object(a.b)("inlineCode",{parentName:"p"},"data.hook")," \u4e2d\uff0c\u5728 VNode \u6267\u884c patch \u7684\u8fc7\u7a0b\u4e2d\u6267\u884c\u76f8\u5173\u7684\u94a9\u5b50\u51fd\u6570\u3002\u8fd9\u91cc\u8981\u6ce8\u610f\u7684\u662f\u5408\u5e76\u7b56\u7565\uff0c\u5728\u5408\u5e76\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u67d0\u4e2a\u65f6\u673a\u7684\u94a9\u5b50\u5df2\u7ecf\u5b58\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"data.hook")," \u4e2d\uff0c\u90a3\u5408\u5e76\u540e\u6700\u7ec8\u6267\u884c\u7684\u65f6\u5019\uff0c\u4f9d\u6b21\u6267\u884c\u8fd9\u4e24\u4e2a\u94a9\u5b50\u51fd\u6570\u5373\u53ef\u3002"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"componentVNodeHooks")," \u5305\u542b\u7684\u94a9\u5b50\u51fd\u6570\u6709\uff1a",Object(a.b)("inlineCode",{parentName:"p"},"init"),"\u3001",Object(a.b)("inlineCode",{parentName:"p"},"prepatch"),"\u3001",Object(a.b)("inlineCode",{parentName:"p"},"insert"),"\u3001",Object(a.b)("inlineCode",{parentName:"p"},"destroy"),"\u3002"),Object(a.b)("h3",{id:"\u5b9e\u4f8b\u5316-vnode"},"\u5b9e\u4f8b\u5316 VNode"),Object(a.b)("p",null,"\u6700\u540e\u4e00\u6b65\u975e\u5e38\u7b80\u5355\uff0c\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"p"},"new VNode")," \u5b9e\u4f8b\u5316\u4e00\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"vnode")," \u5e76\u8fd4\u56de\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\u548c\u666e\u901a\u5143\u7d20\u8282\u70b9\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"vnode")," \u4e0d\u540c\uff0c\u7ec4\u4ef6\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"vnode")," \u662f\u6ca1\u6709 ",Object(a.b)("inlineCode",{parentName:"p"},"children")," \u7684\uff0c\u8fd9\u70b9\u5f88\u5173\u952e\u3002"),Object(a.b)("h2",{id:"patch"},"patch"),Object(a.b)("p",null,"\u524d\u9762\u8bf4\u5230\uff0c\u5728\u6267\u884c ",Object(a.b)("inlineCode",{parentName:"p"},"createElm")," \u521b\u5efa\u771f\u5b9e\u8282\u70b9\u65f6\uff0c\u4f1a\u5148\u5c1d\u8bd5\u6267\u884c ",Object(a.b)("inlineCode",{parentName:"p"},"createComponent")," \u521b\u5efa\u5b50\u7ec4\u4ef6\uff0c\u5426\u5219\u6267\u884c ",Object(a.b)("inlineCode",{parentName:"p"},"createChildren")," \u9012\u5f52\u521b\u5efa\u666e\u901a VNode\u3002"),Object(a.b)("h3",{id:"createcomponent-1"},"createComponent"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/vdom/patch.js"',title:'"src/core/vdom/patch.js"'},"function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {\n  let i = vnode.data;\n  if (isDef(i)) {\n    const isReactivated = isDef(vnode.componentInstance) && i.keepAlive;\n    // highlight-start\n    if (isDef((i = i.hook)) && isDef((i = i.init))) {\n      i(vnode, false /* hydrating */);\n    }\n    // highlight-end\n    // after calling the init hook, if the vnode is a child component\n    // it should've created a child instance and mounted it. the child\n    // component also has set the placeholder vnode's elm.\n    // in that case we can just return the element and be done.\n    if (isDef(vnode.componentInstance)) {\n      initComponent(vnode, insertedVnodeQueue);\n      insert(parentElm, vnode.elm, refElm);\n      if (isTrue(isReactivated)) {\n        reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);\n      }\n      return true;\n    }\n  }\n}\n")),Object(a.b)("p",null,"\u8fd9\u91cc\u9996\u5148\u5bf9 ",Object(a.b)("inlineCode",{parentName:"p"},"vnode.data")," \u4f5c\u4e86\u4e00\u4e9b\u5224\u65ad\uff0c\u5982\u679c ",Object(a.b)("inlineCode",{parentName:"p"},"vnode")," \u662f\u4e00\u4e2a\u7ec4\u4ef6 VNode\uff0c\u5224\u65ad\u540e\u5f97\u5230\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"i")," \u5c31\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"init")," \u94a9\u5b50\u51fd\u6570\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/vdom/create-component.js"',title:'"src/core/vdom/create-component.js"'},"const componentVNodeHooks = {\n  init(vnode: VNodeWithData, hydrating: boolean): ?boolean {\n    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {\n      // kept-alive components, treat as a patch\n      const mountedNode: any = vnode; // work around flow\n      componentVNodeHooks.prepatch(mountedNode, mountedNode);\n    } else {\n      // highlight-start\n      const child = (vnode.componentInstance = createComponentInstanceForVnode(\n        vnode,\n        activeInstance\n      ));\n      child.$mount(hydrating ? vnode.elm : undefined, hydrating);\n      // highlight-end\n    }\n  },\n  prepatch(oldVnode: MountedComponentVNode, vnode: MountedComponentVNode) {},\n  insert(vnode: MountedComponentVNode) {},\n  destroy(vnode: MountedComponentVNode) {},\n};\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"init")," \u94a9\u5b50\u51fd\u6570\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"p"},"createComponentInstanceForVnode")," \u521b\u5efa\u4e00\u4e2a Vue \u7684\u5b9e\u4f8b\uff0c\u7136\u540e\u8c03\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"$mount")," \u65b9\u6cd5\u6302\u8f7d\u5b50\u7ec4\u4ef6\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/vdom/create-component.js"',title:'"src/core/vdom/create-component.js"'},"export function createComponentInstanceForVnode(\n  vnode: any, // we know it's MountedComponentVNode but flow doesn't\n  parent: any // activeInstance in lifecycle state\n): Component {\n  const options: InternalComponentOptions = {\n    _isComponent: true,\n    _parentVnode: vnode,\n    parent,\n  };\n  // check inline-template render functions\n  const inlineTemplate = vnode.data.inlineTemplate;\n  if (isDef(inlineTemplate)) {\n    options.render = inlineTemplate.render;\n    options.staticRenderFns = inlineTemplate.staticRenderFns;\n  }\n  // highlight-next-line\n  return new vnode.componentOptions.Ctor(options);\n}\n")),Object(a.b)("p",null,"\u6240\u4ee5\u5b50\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u5316\u5b9e\u9645\u4e0a\u5c31\u662f\u5728\u8fd9\u4e2a\u65f6\u673a\u6267\u884c\u7684\uff0c\u5e76\u4e14\u5b83\u4f1a\u6267\u884c\u5b9e\u4f8b\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"_init")," \u65b9\u6cd5\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/instance/init.js"',title:'"src/core/instance/init.js"'},"Vue.prototype._init = function (options?: Object) {\n  const vm: Component = this;\n  // merge options\n  if (options && options._isComponent) {\n    // optimize internal component instantiation\n    // since dynamic options merging is pretty slow, and none of the\n    // internal component options needs special treatment.\n    // highlight-next-line\n    initInternalComponent(vm, options);\n  } else {\n    vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);\n  }\n  // ...\n  if (vm.$options.el) {\n    vm.$mount(vm.$options.el);\n  }\n};\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"_isComponent")," \u662f\u5185\u90e8\u7ec4\u4ef6\u6807\u8bc6\uff0c\u56e0\u6b64\u8fd9\u91cc\u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"p"},"initInternalComponent")," \u65b9\u6cd5\u5408\u5e76 ",Object(a.b)("inlineCode",{parentName:"p"},"options"),"\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/instance/init.js"',title:'"src/core/instance/init.js"'},"export function initInternalComponent(vm: Component, options: InternalComponentOptions) {\n  const opts = (vm.$options = Object.create(vm.constructor.options));\n  // doing this because it's faster than dynamic enumeration.\n  const parentVnode = options._parentVnode;\n  // highlight-start\n  opts.parent = options.parent;\n  opts._parentVnode = parentVnode;\n  // highlight-end\n\n  const vnodeComponentOptions = parentVnode.componentOptions;\n  opts.propsData = vnodeComponentOptions.propsData;\n  opts._parentListeners = vnodeComponentOptions.listeners;\n  opts._renderChildren = vnodeComponentOptions.children;\n  opts._componentTag = vnodeComponentOptions.tag;\n\n  if (options.render) {\n    opts.render = options.render;\n    opts.staticRenderFns = options.staticRenderFns;\n  }\n}\n")),Object(a.b)("p",null,"\u914d\u7f6e\u5408\u5e76\u5b8c\u6210\u540e\uff0c\u5728\u975e\u670d\u52a1\u7aef\u6e32\u67d3\u573a\u666f\u4e0b\uff0c\u4f1a\u6267\u884c ",Object(a.b)("inlineCode",{parentName:"p"},"child.$mount(undefined, false)")," \u8fdb\u884c\u6302\u8f7d\u3002\u8fd9\u6700\u7ec8\u4f1a\u6267\u884c\u5230 ",Object(a.b)("inlineCode",{parentName:"p"},"mountComponent")," \u65b9\u6cd5\uff0c\u8fdb\u800c\u6267\u884c ",Object(a.b)("inlineCode",{parentName:"p"},"vm._render")," \u65b9\u6cd5\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"Vue.prototype._render = function (): VNode {\n  const vm: Component = this;\n  const { render, _parentVnode } = vm.$options;\n\n  // set parent vnode. this allows render functions to have access\n  // to the data on the placeholder node.\n  // highlight-next-line\n  vm.$vnode = _parentVnode;\n  // render self\n  let vnode;\n  try {\n    vnode = render.call(vm._renderProxy, vm.$createElement);\n  } catch (e) {\n    // ...\n  }\n  // set parent\n  // highlight-next-line\n  vnode.parent = _parentVnode;\n  return vnode;\n};\n")),Object(a.b)("p",null,"\u6ce8\u610f\u8fd9\u91cc\u8bbe\u7f6e\u4e86 parent \u5c5e\u6027\uff0c\u4e5f\u5c31\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"$vnode"),"\uff0c\u5b83\u4eec\u662f\u4e00\u81f4\u7236\u5b50\u7684\u5173\u7cfb\u3002"),Object(a.b)("p",null,"\u63a5\u4e0b\u6765\u5c31\u662f\u628a\u7ec4\u4ef6\u7684 VNode \u6e32\u67d3\u6210\u771f\u5b9e\u8282\u70b9\uff0c\u6267\u884c ",Object(a.b)("inlineCode",{parentName:"p"},"vm_update")," \u65b9\u6cd5\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/instance/lifecycle.js"',title:'"src/core/instance/lifecycle.js"'},"// highlight-next-line\nexport let activeInstance: any = null;\nVue.prototype._update = function (vnode: VNode, hydrating?: boolean) {\n  const vm: Component = this;\n  const prevEl = vm.$el;\n  const prevVnode = vm._vnode;\n  const prevActiveInstance = activeInstance;\n  activeInstance = vm;\n  // highlight-next-line\n  vm._vnode = vnode;\n  // Vue.prototype.__patch__ is injected in entry points\n  // based on the rendering backend used.\n  if (!prevVnode) {\n    // initial render\n    vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);\n  } else {\n    // updates\n    vm.$el = vm.__patch__(prevVnode, vnode);\n  }\n  activeInstance = prevActiveInstance;\n\n  // if parent is an HOC, update its $el as well\n  if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {\n    vm.$parent.$el = vm.$el;\n  }\n  // updated hook is called by the scheduler to ensure that children are\n  // updated in a parent's updated hook.\n};\n")),Object(a.b)("p",null,"\u8fd9\u91cc ",Object(a.b)("inlineCode",{parentName:"p"},"vm._vnode")," \u548c ",Object(a.b)("inlineCode",{parentName:"p"},"vm.$vnode")," \u7684\u5173\u7cfb\u5c31\u662f\u4e00\u79cd\u7236\u5b50\u5173\u7cfb\uff0c\u7528\u4ee3\u7801\u8868\u8fbe\u5c31\u662f ",Object(a.b)("inlineCode",{parentName:"p"},"vm._vnode.parent === vm.$vnode"),"\uff0c\u5373 ",Object(a.b)("inlineCode",{parentName:"p"},"$vnode")," \u662f\u5f53\u524d\u7ec4\u4ef6\u7684\u7236\u7ec4\u4ef6\u3002"),Object(a.b)("p",null,"\u53e6\u5916\uff0c\u8fd9\u4e2a ",Object(a.b)("inlineCode",{parentName:"p"},"activeInstance")," \u53d8\u91cf\u7684\u4f5c\u7528\u5c31\u662f\u4fdd\u6301\u5f53\u524d\u4e0a\u4e0b\u6587\u7684 Vue \u5b9e\u4f8b\uff0c\u5b83\u5728\u6267\u884c ",Object(a.b)("inlineCode",{parentName:"p"},"createComponentInstanceForVnode")," \u65f6\u4f5c\u4e3a parent \u53c2\u6570\u4f20\u5165\uff0c\u628a\u5b83\u4f5c\u4e3a\u5b50\u7ec4\u4ef6\u7684\u7236 Vue \u5b9e\u4f8b\u3002"),Object(a.b)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u4e0e\u6839\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u5316\u8fc7\u7a0b\u76f8\u6bd4\uff0c\u5728\u5408\u5e76\u914d\u7f6e\u3001\u6302\u8f7d\u5b9e\u4f8b\u7b49\u8fc7\u7a0b\u4e2d\uff0c\u7531\u4e8e ",Object(a.b)("inlineCode",{parentName:"p"},"parent")," \u7684\u5b58\u5728\uff0c\u51fa\u73b0\u4e86\u4e00\u4e9b\u5dee\u5f02\u3002\u4f46\u8fd9\u5176\u5b9e\u4e0d\u7528\u8fc7\u591a\u89e3\u8bfb\uff0c\u76ee\u7684\u90fd\u662f\u4e3a\u4e86\u5b9e\u73b0\u7ec4\u4ef6\u5316\u3002"),Object(a.b)("h2",{id:"\u5408\u5e76\u914d\u7f6e"},"\u5408\u5e76\u914d\u7f6e"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/instance/init.js"',title:'"src/core/instance/init.js"'},"vm.$options = mergeOptions(\n  resolveConstructorOptions(vm.constructor), // Vue.options\n  options || {},\n  vm\n);\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"resolveConstructorOptions(vm.constructor)")," \u76f8\u5f53\u4e8e ",Object(a.b)("inlineCode",{parentName:"p"},"Vue.options"),"\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/global-api/index.js"',title:'"src/core/global-api/index.js"'},"export function initGlobalAPI(Vue: GlobalAPI) {\n  // ...\n  Vue.options = Object.create(null);\n  ASSET_TYPES.forEach((type) => {\n    Vue.options[type + 's'] = Object.create(null);\n  });\n\n  // this is used to identify the \"base\" constructor to extend all plain-object\n  // components with in Weex's multi-instance scenarios.\n  Vue.options._base = Vue;\n\n  extend(Vue.options.components, builtInComponents);\n  // ...\n}\n")),Object(a.b)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u521b\u5efa\u4e86\u4e00\u4e2a\u7a7a\u5bf9\u8c61\uff0c\u7136\u540e\u4e3a\u5bf9\u8c61\u589e\u52a0\u4e86 ",Object(a.b)("inlineCode",{parentName:"p"},"components,directives,filters")," \u5c5e\u6027\uff0c\u6700\u540e\u628a\u4e00\u4e9b\u5185\u7f6e\u7ec4\u4ef6\u62d3\u5c55\u5230\u5b9e\u4f8b\u4e0a\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/util/options.js"',title:'"src/core/util/options.js"'},"/**\n * Merge two option objects into a new one.\n * Core utility used in both instantiation and inheritance.\n */\nexport function mergeOptions(parent: Object, child: Object, vm?: Component): Object {\n  if (typeof child === 'function') {\n    child = child.options;\n  }\n\n  normalizeProps(child, vm);\n  normalizeInject(child, vm);\n  normalizeDirectives(child);\n  const extendsFrom = child.extends;\n  if (extendsFrom) {\n    parent = mergeOptions(parent, extendsFrom, vm);\n  }\n  if (child.mixins) {\n    for (let i = 0, l = child.mixins.length; i < l; i++) {\n      parent = mergeOptions(parent, child.mixins[i], vm);\n    }\n  }\n  const options = {};\n  let key;\n  for (key in parent) {\n    mergeField(key);\n  }\n  for (key in child) {\n    if (!hasOwn(parent, key)) {\n      mergeField(key);\n    }\n  }\n  function mergeField(key) {\n    const strat = strats[key] || defaultStrat;\n    options[key] = strat(parent[key], child[key], vm, key);\n  }\n  return options;\n}\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"mergeOptions")," \u4e3b\u8981\u529f\u80fd\u5c31\u662f\u628a parent \u548c child \u8fd9\u4e24\u4e2a\u5bf9\u8c61\u6839\u636e\u4e00\u4e9b\u5408\u5e76\u7b56\u7565\uff0c\u5408\u5e76\u6210\u4e00\u4e2a\u65b0\u5bf9\u8c61\u5e76\u8fd4\u56de\u3002\u6bd4\u8f83\u6838\u5fc3\u7684\u51e0\u6b65\uff0c\u5148\u9012\u5f52\u628a ",Object(a.b)("inlineCode",{parentName:"p"},"extends")," \u548c ",Object(a.b)("inlineCode",{parentName:"p"},"mixins")," \u5408\u5e76\u5230 ",Object(a.b)("inlineCode",{parentName:"p"},"parent")," \u4e0a\uff0c\u7136\u540e\u904d\u5386 parent\uff0c\u8c03\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"mergeField"),"\uff0c\u7136\u540e\u518d\u904d\u5386 child\uff0c\u5982\u679c key \u4e0d\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"parent")," \u7684\u81ea\u8eab\u5c5e\u6027\u4e0a\uff0c\u5219\u8c03\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"mergeField"),"\u3002"))}d.isMDXComponent=!0},118:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return u}));var o=t(0),i=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),d=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=d(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=d(t),b=o,u=l["".concat(r,".").concat(b)]||l[b]||m[b]||a;return t?i.a.createElement(u,c(c({ref:n},s),{},{components:t})):i.a.createElement(u,c({ref:n},s))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var s=2;s<a;s++)r[s]=t[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);