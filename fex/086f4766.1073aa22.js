(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{135:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),s=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return t?a.a.createElement(b,l(l({ref:n},c),{},{components:t})):a.a.createElement(b,l({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},66:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(135)),i={id:"v-model",title:"v-model"},l={unversionedId:"advanced/vue/v-model",id:"advanced/vue/v-model",isDocsHomePage:!1,title:"v-model",description:"\u6211\u4eec\u4e4b\u524d\u63d0\u5230\u7684\u6570\u636e\u54cd\u5e94\uff0c\u90fd\u662f\u901a\u8fc7\u6570\u636e\u7684\u6539\u53d8\u53bb\u9a71\u52a8 DOM \u89c6\u56fe\u7684\u53d8\u5316\uff0c\u800c\u53cc\u5411\u7ed1\u5b9a\u9664\u4e86\u6570\u636e\u9a71\u52a8 DOM \u5916\uff0c DOM \u7684\u53d8\u5316\u53cd\u8fc7\u6765\u5f71\u54cd\u6570\u636e\uff0c\u662f\u4e00\u4e2a\u53cc\u5411\u5173\u7cfb\uff0c\u5728 Vue \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 v-model \u6765\u5b9e\u73b0\u53cc\u5411\u7ed1\u5b9a\u3002\u5b83\u5373\u53ef\u4ee5\u4f5c\u7528\u5728\u666e\u901a\u8868\u5355\u5143\u7d20\u4e0a\uff0c\u53c8\u53ef\u4ee5\u4f5c\u7528\u5728\u7ec4\u4ef6\u4e0a\uff0c\u5b83\u5176\u5b9e\u662f\u4e00\u4e2a\u8bed\u6cd5\u7cd6\u3002",source:"@site/docs/advanced/vue/v-model.md",slug:"/advanced/vue/v-model",permalink:"/fex/docs/advanced/vue/v-model",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/advanced/vue/v-model.md",version:"current",sidebar:"advanced",previous:{title:"\u7ec4\u4ef6\u66f4\u65b0",permalink:"/fex/docs/advanced/vue/component-update"},next:{title:"MVVM",permalink:"/fex/docs/advanced/vue/mvvm"}},d=[{value:"\u7f16\u8bd1\u5206\u6790",id:"\u7f16\u8bd1\u5206\u6790",children:[{value:"\u8868\u5355\u5143\u7d20",id:"\u8868\u5355\u5143\u7d20",children:[]},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",children:[]}]}],c={toc:d};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u6211\u4eec\u4e4b\u524d\u63d0\u5230\u7684\u6570\u636e\u54cd\u5e94\uff0c\u90fd\u662f\u901a\u8fc7\u6570\u636e\u7684\u6539\u53d8\u53bb\u9a71\u52a8 DOM \u89c6\u56fe\u7684\u53d8\u5316\uff0c\u800c\u53cc\u5411\u7ed1\u5b9a\u9664\u4e86\u6570\u636e\u9a71\u52a8 DOM \u5916\uff0c DOM \u7684\u53d8\u5316\u53cd\u8fc7\u6765\u5f71\u54cd\u6570\u636e\uff0c\u662f\u4e00\u4e2a\u53cc\u5411\u5173\u7cfb\uff0c\u5728 Vue \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"v-model")," \u6765\u5b9e\u73b0\u53cc\u5411\u7ed1\u5b9a\u3002\u5b83\u5373\u53ef\u4ee5\u4f5c\u7528\u5728\u666e\u901a\u8868\u5355\u5143\u7d20\u4e0a\uff0c\u53c8\u53ef\u4ee5\u4f5c\u7528\u5728\u7ec4\u4ef6\u4e0a\uff0c\u5b83\u5176\u5b9e\u662f\u4e00\u4e2a\u8bed\u6cd5\u7cd6\u3002"),Object(o.b)("h2",{id:"\u7f16\u8bd1\u5206\u6790"},"\u7f16\u8bd1\u5206\u6790"),Object(o.b)("p",null,"\u5148\u4ece\u7f16\u8bd1\u9636\u6bb5\u5206\u6790\uff0c\u9996\u5148\u662f parse \u9636\u6bb5\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"v-model")," \u88ab\u5f53\u505a\u666e\u901a\u7684\u6307\u4ee4\u89e3\u6790\u5230 ",Object(o.b)("inlineCode",{parentName:"p"},"el.directives")," \u4e2d\u3002"),Object(o.b)("p",null,"\u7136\u540e\u662f codegen \u9636\u6bb5\uff0c"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/compiler/codegen/index.js"',title:'"src/compiler/codegen/index.js"'},"function genDirectives(el: ASTElement, state: CodegenState): string | void {\n  const dirs = el.directives;\n  if (!dirs) return;\n  let res = 'directives:[';\n  let hasRuntime = false;\n  let i, l, dir, needRuntime;\n  for (i = 0, l = dirs.length; i < l; i++) {\n    dir = dirs[i];\n    needRuntime = true;\n    // highlight-next-line\n    const gen: DirectiveFunction = state.directives[dir.name];\n    if (gen) {\n      // compile-time directive that manipulates AST.\n      // returns true if it also needs a runtime counterpart.\n      // highlight-next-line\n      needRuntime = !!gen(el, dir, state.warn);\n    }\n    if (needRuntime) {\n      hasRuntime = true;\n      res += `{name:\"${dir.name}\",rawName:\"${dir.rawName}\"${\n        dir.value ? `,value:(${dir.value}),expression:${JSON.stringify(dir.value)}` : ''\n      }${dir.arg ? `,arg:\"${dir.arg}\"` : ''}${\n        dir.modifiers ? `,modifiers:${JSON.stringify(dir.modifiers)}` : ''\n      }},`;\n    }\n  }\n  if (hasRuntime) {\n    return res.slice(0, -1) + ']';\n  }\n}\n")),Object(o.b)("p",null,"web \u5e73\u53f0\u5173\u4e8e directives \u7684\u5b9a\u4e49\u5305\u62ec\uff1a",Object(o.b)("inlineCode",{parentName:"p"},"model"),", ",Object(o.b)("inlineCode",{parentName:"p"},"text"),", ",Object(o.b)("inlineCode",{parentName:"p"},"html"),"\u3002"),Object(o.b)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c\u5bf9\u4e8e ",Object(o.b)("inlineCode",{parentName:"p"},"v-model")," \u800c\u8a00\uff0c\u9700\u8981\u7ee7\u7eed\u5224\u65ad\u662f\u5426\u8fd0\u884c\u65f6\u7684\u526f\u672c\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/platforms/web/compiler/directives/model.js"',title:'"src/platforms/web/compiler/directives/model.js"'},"export default function model(el: ASTElement, dir: ASTDirective, _warn: Function): ?boolean {\n  warn = _warn;\n  const value = dir.value;\n  const modifiers = dir.modifiers;\n  const tag = el.tag;\n  const type = el.attrsMap.type;\n  // ...\n\n  if (el.component) {\n    genComponentModel(el, value, modifiers);\n    // component v-model doesn't need extra runtime\n    return false;\n  } else if (tag === 'select') {\n    genSelect(el, value, modifiers);\n  } else if (tag === 'input' && type === 'checkbox') {\n    genCheckboxModel(el, value, modifiers);\n  } else if (tag === 'input' && type === 'radio') {\n    genRadioModel(el, value, modifiers);\n  } else if (tag === 'input' || tag === 'textarea') {\n    genDefaultModel(el, value, modifiers);\n  } else if (!config.isReservedTag(tag)) {\n    genComponentModel(el, value, modifiers);\n    // component v-model doesn't need extra runtime\n    return false;\n  } else if (process.env.NODE_ENV !== 'production') {\n    // ...\n  }\n\n  // ensure runtime directive metadata\n  return true;\n}\n")),Object(o.b)("p",null,"\u4e0a\u9762\u7684\u903b\u8f91\u4e2d\uff0c\u5bf9\u4e8e\u4e0d\u540c\u7684\u8868\u5355\u5143\u7d20\u6216\u7ec4\u4ef6\u505a\u4e86\u4e0d\u540c\u7684\u5904\u7406\u3002"),Object(o.b)("h3",{id:"\u8868\u5355\u5143\u7d20"},"\u8868\u5355\u5143\u7d20"),Object(o.b)("p",null,"\u4ee5 textarea \u4e3a\u4f8b\uff0c\u6267\u884c ",Object(o.b)("inlineCode",{parentName:"p"},"getDefaultModel")," \u65b9\u6cd5\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"function genDefaultModel(el: ASTElement, value: string, modifiers: ?ASTModifiers): ?boolean {\n  const type = el.attrsMap.type;\n\n  // warn if v-bind:value conflicts with v-model\n  // except for inputs with v-bind:type\n\n  // highlight-next-line\n  const { lazy, number, trim } = modifiers || {};\n  const needCompositionGuard = !lazy && type !== 'range';\n  const event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';\n\n  let valueExpression = '$event.target.value';\n  if (trim) {\n    valueExpression = `$event.target.value.trim()`;\n  }\n  if (number) {\n    valueExpression = `_n(${valueExpression})`;\n  }\n\n  // highlight-next-line\n  let code = genAssignmentCode(value, valueExpression);\n  if (needCompositionGuard) {\n    code = `if($event.target.composing)return;${code}`;\n  }\n\n  // highlight-start\n  addProp(el, 'value', `(${value})`);\n  addHandler(el, event, code, null, true);\n  // highlight-end\n  if (trim || number) {\n    addHandler(el, 'blur', '$forceUpdate()');\n  }\n}\n")),Object(o.b)("p",null,"\u8be5\u65b9\u6cd5\u9996\u5148\u5904\u7406\u4e86\u4fee\u9970\u7b26\uff0c\u7136\u540e\u53bb\u6267\u884c ",Object(o.b)("inlineCode",{parentName:"p"},"genAssignmentCode")," \u65b9\u6cd5\u751f\u6210\u4ee3\u7801\uff0c\u6700\u540e\u6267\u884c ",Object(o.b)("inlineCode",{parentName:"p"},"addProp")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"addHandler")," \u65b9\u6cd5\u4e3a\u5143\u7d20\u6dfb\u52a0\u5c5e\u6027\u548c\u65b9\u6cd5\u3002"),Object(o.b)("p",null,"\u6700\u540e\u4e00\u6b65\u53ef\u4ee5\u8bf4\u662f ",Object(o.b)("inlineCode",{parentName:"p"},"v-model")," \u7684\u7cbe\u9ad3\uff0c\u901a\u8fc7\u4fee\u6539 AST \u5143\u7d20\uff0c\u7ed9\u5143\u7d20\u52a8\u6001\u7ed1\u5b9a\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"value")," \u5c5e\u6027\uff0c\u53c8\u7ed9\u5143\u7d20\u7ed1\u5b9a\u4e86\u65b9\u6cd5\uff0c\u8fd9\u6837\u5b9e\u9645\u4e0a\u5c31\u5b8c\u6210\u4e86\u6570\u636e\u53cc\u5411\u7ed1\u5b9a\u3002"),Object(o.b)("h3",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),Object(o.b)("p",null,"\u5bf9\u4e8e\u7ec4\u4ef6\u6765\u8bf4\uff0c\u6267\u884c\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"genComponentModel")," \u65b9\u6cd5\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"export function genComponentModel(\n  el: ASTElement,\n  value: string,\n  modifiers: ?ASTModifiers\n): ?boolean {\n  // highlight-next-line\n  const { number, trim } = modifiers || {};\n\n  const baseValueExpression = '$$v';\n  let valueExpression = baseValueExpression;\n  if (trim) {\n    valueExpression =\n      `(typeof ${baseValueExpression} === 'string'` +\n      `? ${baseValueExpression}.trim()` +\n      `: ${baseValueExpression})`;\n  }\n  if (number) {\n    valueExpression = `_n(${valueExpression})`;\n  }\n  const assignment = genAssignmentCode(value, valueExpression);\n\n  // highlight-start\n  el.model = {\n    value: `(${value})`,\n    expression: `\"${value}\"`,\n    callback: `function (${baseValueExpression}) {${assignment}}`,\n  };\n  // highlight-end\n}\n")),Object(o.b)("p",null,"\u8be5\u51fd\u6570\u6700\u7ec8\u751f\u6210 ",Object(o.b)("inlineCode",{parentName:"p"},"el.model")," \u5bf9\u8c61\uff0c\u7136\u540e\u5728\u521b\u5efa\u5b50\u7ec4\u4ef6 vnode \u9636\u6bb5\uff0c\u4f1a\u6267\u884c ",Object(o.b)("inlineCode",{parentName:"p"},"createComponent")," \u51fd\u6570\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/vdom/create-component.js"',title:'"src/core/vdom/create-component.js"'},"export function createComponent(\n  Ctor: Class<Component> | Function | Object | void,\n  data: ?VNodeData,\n  context: Component,\n  children: ?Array<VNode>,\n  tag?: string\n): VNode | Array<VNode> | void {\n  // ...\n  // transform component v-model data into props & events\n  if (isDef(data.model)) {\n    // highlight-next-line\n    transformModel(Ctor.options, data);\n  }\n\n  // extract props\n  const propsData = extractPropsFromVNodeData(data, Ctor, tag);\n  // ...\n  // extract listeners, since these needs to be treated as\n  // child component listeners instead of DOM listeners\n  const listeners = data.on;\n  // ...\n  const vnode = new VNode(\n    `vue-component-${Ctor.cid}${name ? `-${name}` : ''}`,\n    data,\n    undefined,\n    undefined,\n    undefined,\n    context,\n    { Ctor, propsData, listeners, tag, children },\n    asyncFactory\n  );\n\n  return vnode;\n}\n")),Object(o.b)("p",null,"\u5176\u4e2d\u4f1a\u5bf9 ",Object(o.b)("inlineCode",{parentName:"p"},"data.model")," \u7684\u60c5\u51b5\u505a\u5904\u7406\uff0c\u6267\u884c ",Object(o.b)("inlineCode",{parentName:"p"},"transformModel(Ctor.options, data)")," \u65b9\u6cd5\uff0c\u5c06 ",Object(o.b)("inlineCode",{parentName:"p"},"v-model")," \u6570\u636e\u5206\u522b\u6dfb\u52a0\u5230 prop \u548c event\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// transform component v-model info (value and callback) into\n// prop and event handler respectively.\nfunction transformModel(options, data: any) {\n  const prop = (options.model && options.model.prop) || 'value';\n  const event = (options.model && options.model.event) || 'input';\n  (data.props || (data.props = {}))[prop] = data.model.value;\n  const on = data.on || (data.on = {});\n  if (isDef(on[event])) {\n    on[event] = [data.model.callback].concat(on[event]);\n  } else {\n    on[event] = data.model.callback;\n  }\n}\n")),Object(o.b)("p",null,"\u56de\u5230\u8fd9\u91cc\uff0c\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\u8fd9\u5c31\u662f\u5178\u578b\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"prop/emit")," \u7236\u5b50\u7ec4\u4ef6\u901a\u4fe1\u6a21\u5f0f\uff0c\u7236\u7ec4\u4ef6\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"prop")," \u628a\u6570\u636e\u4f20\u9012\u5230\u5b50\u7ec4\u4ef6\uff0c\u5b50\u7ec4\u4ef6\u4fee\u6539\u4e86\u6570\u636e\u540e\u628a\u6539\u53d8\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"$emit")," \u4e8b\u4ef6\u7684\u65b9\u5f0f\u901a\u77e5\u7236\u7ec4\u4ef6\u3002"))}s.isMDXComponent=!0}}]);