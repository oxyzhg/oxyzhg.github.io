"use strict";(self.webpackChunkfex=self.webpackChunkfex||[]).push([[3779],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var d=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);n&&(d=d.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,d)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,d,o=function(e,n){if(null==e)return{};var t,d,o={},l=Object.keys(e);for(d=0;d<l.length;d++)t=l[d],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(d=0;d<l.length;d++)t=l[d],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=d.createContext({}),s=function(e){var n=d.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return d.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return d.createElement(d.Fragment,{},n)}},u=d.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,m=u["".concat(a,".").concat(f)]||u[f]||p[f]||l;return t?d.createElement(m,r(r({ref:n},c),{},{components:t})):d.createElement(m,r({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=u;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=t[s];return d.createElement.apply(null,r)}return d.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5163:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var d=t(7462),o=t(3366),l=(t(7294),t(3905)),r=["components"],i={id:"component-update",title:"\u7ec4\u4ef6\u66f4\u65b0"},a=void 0,s={unversionedId:"forward/vue/component-update",id:"forward/vue/component-update",isDocsHomePage:!1,title:"\u7ec4\u4ef6\u66f4\u65b0",description:"\u7ec4\u4ef6\u7684\u66f4\u65b0\u4ecd\u7136\u4f1a\u6267\u884c patch \u65b9\u6cd5\uff0c\u4e0d\u540c\u7684\u662f\u66f4\u65b0\u65f6 oldVnode \u4e0d\u4e3a\u7a7a\uff0c\u5e76\u4e14\u5b83\u548c vnode \u90fd\u662f VNode \u7c7b\u578b\uff0c\u63a5\u4e0b\u6765\u4f1a\u901a\u8fc7 sameVNode(oldVnode, vnode) \u5224\u65ad\u5b83\u4eec\u662f\u5426\u662f\u76f8\u540c\u7684 VNode \u6765\u51b3\u5b9a\u8d70\u4e0d\u540c\u7684\u66f4\u65b0\u903b\u8f91\u3002",source:"@site/docs/forward/vue/component-update.md",sourceDirName:"forward/vue",slug:"/forward/vue/component-update",permalink:"/fex/docs/forward/vue/component-update",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/forward/vue/component-update.md",tags:[],version:"current",frontMatter:{id:"component-update",title:"\u7ec4\u4ef6\u66f4\u65b0"},sidebar:"forward",previous:{title:"\u8ba1\u7b97\u5c5e\u6027 vs \u4fa6\u542c\u5c5e\u6027",permalink:"/fex/docs/forward/vue/computed-vs-watch"},next:{title:"v-model",permalink:"/fex/docs/forward/vue/v-model"}},c=[{value:"\u65b0\u65e7\u8282\u70b9\u4e0d\u540c",id:"\u65b0\u65e7\u8282\u70b9\u4e0d\u540c",children:[]},{value:"\u65b0\u65e7\u8282\u70b9\u76f8\u540c",id:"\u65b0\u65e7\u8282\u70b9\u76f8\u540c",children:[{value:"updateChildren",id:"updatechildren",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],p={toc:c};function u(e){var n=e.components,i=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,d.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u7ec4\u4ef6\u7684\u66f4\u65b0\u4ecd\u7136\u4f1a\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"patch")," \u65b9\u6cd5\uff0c\u4e0d\u540c\u7684\u662f\u66f4\u65b0\u65f6 ",(0,l.kt)("inlineCode",{parentName:"p"},"oldVnode")," \u4e0d\u4e3a\u7a7a\uff0c\u5e76\u4e14\u5b83\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"vnode")," \u90fd\u662f VNode \u7c7b\u578b\uff0c\u63a5\u4e0b\u6765\u4f1a\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"sameVNode(oldVnode, vnode)")," \u5224\u65ad\u5b83\u4eec\u662f\u5426\u662f\u76f8\u540c\u7684 VNode \u6765\u51b3\u5b9a\u8d70\u4e0d\u540c\u7684\u66f4\u65b0\u903b\u8f91\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/vdom/patch.js"',title:'"src/core/vdom/patch.js"'},'export function createPatchFunction(backend) {\n  // ...\n\n  return function patch(oldVnode, vnode, hydrating, removeOnly) {\n    if (isUndef(vnode)) {\n      if (isDef(oldVnode)) invokeDestroyHook(oldVnode);\n      return;\n    }\n\n    let isInitialPatch = false;\n    const insertedVnodeQueue = [];\n\n    if (isUndef(oldVnode)) {\n      // empty mount (likely as component), create new root element\n      isInitialPatch = true;\n      createElm(vnode, insertedVnodeQueue);\n    } else {\n      const isRealElement = isDef(oldVnode.nodeType);\n      if (!isRealElement && sameVnode(oldVnode, vnode)) {\n        // patch existing root node\n        // highlight-next-line\n        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);\n      } else {\n        if (isRealElement) {\n          // ...\n        }\n\n        // replacing existing element\n        const oldElm = oldVnode.elm;\n        const parentElm = nodeOps.parentNode(oldElm);\n\n        // create new node\n        createElm(\n          vnode,\n          insertedVnodeQueue,\n          // extremely rare edge case: do not insert if old element is in a\n          // leaving transition. Only happens when combining transition +\n          // keep-alive + HOCs. (#4590)\n          oldElm._leaveCb ? null : parentElm,\n          nodeOps.nextSibling(oldElm)\n        );\n\n        // update parent placeholder node element, recursively\n        if (isDef(vnode.parent)) {\n          let ancestor = vnode.parent;\n          const patchable = isPatchable(vnode);\n          while (ancestor) {\n            for (let i = 0; i < cbs.destroy.length; ++i) {\n              cbs.destroy[i](ancestor);\n            }\n            ancestor.elm = vnode.elm;\n            if (patchable) {\n              for (let i = 0; i < cbs.create.length; ++i) {\n                cbs.create[i](emptyNode, ancestor);\n              }\n              // #6513\n              // invoke insert hooks that may have been merged by create hooks.\n              // e.g. for directives that uses the "inserted" hook.\n              const insert = ancestor.data.hook.insert;\n              if (insert.merged) {\n                // start at index 1 to avoid re-invoking component mounted hook\n                for (let i = 1; i < insert.fns.length; i++) {\n                  insert.fns[i]();\n                }\n              }\n            } else {\n              registerRef(ancestor);\n            }\n            ancestor = ancestor.parent;\n          }\n        }\n\n        // destroy old node\n        if (isDef(parentElm)) {\n          removeVnodes(parentElm, [oldVnode], 0, 0);\n        } else if (isDef(oldVnode.tag)) {\n          invokeDestroyHook(oldVnode);\n        }\n      }\n    }\n\n    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);\n    return vnode.elm;\n  };\n}\n')),(0,l.kt)("h2",{id:"\u65b0\u65e7\u8282\u70b9\u4e0d\u540c"},"\u65b0\u65e7\u8282\u70b9\u4e0d\u540c"),(0,l.kt)("p",null,"\u5982\u679c\u65b0\u65e7 vnode \u4e0d\u540c\uff0c\u90a3\u4e48\u66f4\u65b0\u7684\u903b\u8f91\u975e\u5e38\u7b80\u5355\uff0c\u5b83\u672c\u8d28\u4e0a\u662f\u8981\u66ff\u6362\u5df2\u5b58\u5728\u7684\u8282\u70b9\uff0c\u5927\u81f4\u5206\u4e3a 3 \u6b65\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u65b0\u8282\u70b9"),(0,l.kt)("li",{parentName:"ol"},"\u66f4\u65b0\u7236\u7684\u5360\u4f4d\u7b26\u8282\u70b9"),(0,l.kt)("li",{parentName:"ol"},"\u5220\u9664\u65e7\u8282\u70b9")),(0,l.kt)("h2",{id:"\u65b0\u65e7\u8282\u70b9\u76f8\u540c"},"\u65b0\u65e7\u8282\u70b9\u76f8\u540c"),(0,l.kt)("p",null,"\u5982\u679c\u65b0\u65e7 vnode \u76f8\u540c\uff0c\u66f4\u65b0\u7b56\u7565\u5c31\u4f1a\u76f8\u5bf9\u590d\u6742\uff0c\u5b83\u4f1a\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"patchVNode")," \u65b9\u6cd5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/vdom/patch.js"',title:'"src/core/vdom/patch.js"'},"function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {\n  if (oldVnode === vnode) {\n    return;\n  }\n\n  const elm = (vnode.elm = oldVnode.elm);\n\n  if (isTrue(oldVnode.isAsyncPlaceholder)) {\n    if (isDef(vnode.asyncFactory.resolved)) {\n      hydrate(oldVnode.elm, vnode, insertedVnodeQueue);\n    } else {\n      vnode.isAsyncPlaceholder = true;\n    }\n    return;\n  }\n\n  // reuse element for static trees.\n  // note we only do this if the vnode is cloned -\n  // if the new node is not cloned it means the render functions have been\n  // reset by the hot-reload-api and we need to do a proper re-render.\n  if (\n    isTrue(vnode.isStatic) &&\n    isTrue(oldVnode.isStatic) &&\n    vnode.key === oldVnode.key &&\n    (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))\n  ) {\n    vnode.componentInstance = oldVnode.componentInstance;\n    return;\n  }\n\n  let i;\n  const data = vnode.data;\n  if (isDef(data) && isDef((i = data.hook)) && isDef((i = i.prepatch))) {\n    i(oldVnode, vnode);\n  }\n\n  const oldCh = oldVnode.children;\n  const ch = vnode.children;\n  if (isDef(data) && isPatchable(vnode)) {\n    for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);\n    if (isDef((i = data.hook)) && isDef((i = i.update))) i(oldVnode, vnode);\n  }\n  if (isUndef(vnode.text)) {\n    if (isDef(oldCh) && isDef(ch)) {\n      // highlight-next-line\n      if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);\n    } else if (isDef(ch)) {\n      if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, '');\n      addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);\n    } else if (isDef(oldCh)) {\n      removeVnodes(elm, oldCh, 0, oldCh.length - 1);\n    } else if (isDef(oldVnode.text)) {\n      nodeOps.setTextContent(elm, '');\n    }\n  } else if (oldVnode.text !== vnode.text) {\n    nodeOps.setTextContent(elm, vnode.text);\n  }\n  if (isDef(data)) {\n    if (isDef((i = data.hook)) && isDef((i = i.postpatch))) i(oldVnode, vnode);\n  }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"patchVnode")," \u7684\u4f5c\u7528\u5c31\u662f\u628a\u65b0\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"vnode")," patch \u5230\u65e7\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"vnode")," \u4e0a\uff0c\u8fd9\u91cc\u6211\u4eec\u53ea\u5173\u6ce8\u5173\u952e\u7684\u6838\u5fc3\u903b\u8f91\uff0c\u6211\u628a\u5b83\u62c6\u6210\u56db\u6b65\u9aa4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"prepatch")," \u94a9\u5b50\u51fd\u6570\uff0c\u8be5\u65b9\u6cd5\u5c31\u662f\u62ff\u5230\u65b0\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"vnode")," \u7684\u7ec4\u4ef6\u914d\u7f6e\u4ee5\u53ca\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u66f4\u65b0\u5b9e\u4f8b ",(0,l.kt)("inlineCode",{parentName:"li"},"vm")," \u7684\u4e00\u7cfb\u5217\u5c5e\u6027\uff0c\u5305\u62ec\u5360\u4f4d\u7b26 ",(0,l.kt)("inlineCode",{parentName:"li"},"vm.$vnode")," \u7684\u66f4\u65b0\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"slot")," \u7684\u66f4\u65b0\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"listeners")," \u7684\u66f4\u65b0\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"props")," \u7684\u66f4\u65b0\u7b49\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"update")," \u94a9\u5b50\u51fd\u6570"),(0,l.kt)("li",{parentName:"ol"},"\u5b8c\u6210 ",(0,l.kt)("inlineCode",{parentName:"li"},"patch")," \u8fc7\u7a0b\uff0c\u975e\u6587\u672c\u8282\u70b9 ",(0,l.kt)("inlineCode",{parentName:"li"},"oldCh")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"ch")," \u90fd\u5b58\u5728\u4e14\u4e0d\u76f8\u540c\u65f6\uff0c\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"updateChildren")," \u51fd\u6570\u66f4\u65b0\u5b50\u8282\u70b9\uff0c\u8fd9\u91cc\u6d89\u53ca diff \u7b97\u6cd5"),(0,l.kt)("li",{parentName:"ol"},"\u5f53\u53ea\u6709\u65e7\u8282\u70b9\u662f\u6587\u672c\u8282\u70b9\u7684\u65f6\u5019\uff0c\u5219\u6e05\u9664\u5176\u8282\u70b9\u6587\u672c\u5185\u5bb9\u3002")),(0,l.kt)("h3",{id:"updatechildren"},"updateChildren"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/core/vdom/patch.js"',title:'"src/core/vdom/patch.js"'},"function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {\n  let oldStartIdx = 0;\n  let newStartIdx = 0;\n  let oldEndIdx = oldCh.length - 1;\n  let oldStartVnode = oldCh[0];\n  let oldEndVnode = oldCh[oldEndIdx];\n  let newEndIdx = newCh.length - 1;\n  let newStartVnode = newCh[0];\n  let newEndVnode = newCh[newEndIdx];\n  let oldKeyToIdx, idxInOld, vnodeToMove, refElm;\n\n  // removeOnly is a special flag used only by <transition-group>\n  // to ensure removed elements stay in correct relative positions\n  // during leaving transitions\n  const canMove = !removeOnly;\n\n  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {\n    if (isUndef(oldStartVnode)) {\n      oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left\n    } else if (isUndef(oldEndVnode)) {\n      oldEndVnode = oldCh[--oldEndIdx];\n      // highlight-next-line\n    } else if (sameVnode(oldStartVnode, newStartVnode)) {\n      patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);\n      oldStartVnode = oldCh[++oldStartIdx];\n      newStartVnode = newCh[++newStartIdx];\n      // highlight-next-line\n    } else if (sameVnode(oldEndVnode, newEndVnode)) {\n      patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);\n      oldEndVnode = oldCh[--oldEndIdx];\n      newEndVnode = newCh[--newEndIdx];\n      // highlight-next-line\n    } else if (sameVnode(oldStartVnode, newEndVnode)) {\n      // Vnode moved right\n      patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);\n      canMove &&\n        nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));\n      oldStartVnode = oldCh[++oldStartIdx];\n      newEndVnode = newCh[--newEndIdx];\n      // highlight-next-line\n    } else if (sameVnode(oldEndVnode, newStartVnode)) {\n      // Vnode moved left\n      patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);\n      canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);\n      oldEndVnode = oldCh[--oldEndIdx];\n      newStartVnode = newCh[++newStartIdx];\n    } else {\n      if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);\n      idxInOld = isDef(newStartVnode.key)\n        ? oldKeyToIdx[newStartVnode.key]\n        : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);\n      if (isUndef(idxInOld)) {\n        // New element\n        createElm(\n          newStartVnode,\n          insertedVnodeQueue,\n          parentElm,\n          oldStartVnode.elm,\n          false,\n          newCh,\n          newStartIdx\n        );\n      } else {\n        vnodeToMove = oldCh[idxInOld];\n        if (sameVnode(vnodeToMove, newStartVnode)) {\n          patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);\n          oldCh[idxInOld] = undefined;\n          canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);\n        } else {\n          // same key but different element. treat as new element\n          createElm(\n            newStartVnode,\n            insertedVnodeQueue,\n            parentElm,\n            oldStartVnode.elm,\n            false,\n            newCh,\n            newStartIdx\n          );\n        }\n      }\n      newStartVnode = newCh[++newStartIdx];\n    }\n  }\n  if (oldStartIdx > oldEndIdx) {\n    refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;\n    addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);\n  } else if (newStartIdx > newEndIdx) {\n    removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);\n  }\n}\n")),(0,l.kt)("p",null,"\u7b2c\u4e00\u6b65\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Vue diff update children",src:t(9261).Z})),(0,l.kt)("p",null,"\u7b2c\u4e8c\u6b65\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Vue diff update children",src:t(8571).Z})),(0,l.kt)("p",null,"\u7b2c\u4e09\u6b65\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Vue diff update children",src:t(5095).Z})),(0,l.kt)("p",null,"\u7b2c\u56db\u6b65\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Vue diff update children",src:t(1899).Z})),(0,l.kt)("p",null,"\u7b2c\u4e94\u6b65\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Vue diff update children",src:t(897).Z})),(0,l.kt)("p",null,"\u7b2c\u516d\u6b65\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Vue diff update children",src:t(3292).Z})),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u7ec4\u4ef6\u66f4\u65b0\u7684\u8fc7\u7a0b\u6838\u5fc3\u5c31\u662f\u65b0\u65e7 vnode diff\uff0c\u5bf9\u65b0\u65e7\u8282\u70b9\u76f8\u540c\u4ee5\u53ca\u4e0d\u540c\u7684\u60c5\u51b5\u5206\u522b\u505a\u4e0d\u540c\u7684\u5904\u7406\u3002\u65b0\u65e7\u8282\u70b9\u4e0d\u540c\u7684\u66f4\u65b0\u6d41\u7a0b\u662f\u521b\u5efa\u65b0\u8282\u70b9->\u66f4\u65b0\u7236\u5360\u4f4d\u7b26\u8282\u70b9->\u5220\u9664\u65e7\u8282\u70b9\uff1b\u800c\u65b0\u65e7\u8282\u70b9\u76f8\u540c\u7684\u66f4\u65b0\u6d41\u7a0b\u662f\u53bb\u83b7\u53d6\u5b83\u4eec\u7684 children\uff0c\u6839\u636e\u4e0d\u540c\u60c5\u51b5\u505a\u4e0d\u540c\u7684\u66f4\u65b0\u903b\u8f91\u3002\u6700\u590d\u6742\u7684\u60c5\u51b5\u662f\u65b0\u65e7\u8282\u70b9\u76f8\u540c\u4e14\u5b83\u4eec\u90fd\u5b58\u5728\u5b50\u8282\u70b9\uff0c\u90a3\u4e48\u4f1a\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"updateChildren")," \u903b\u8f91\uff0c\u8fd9\u5757\u513f\u53ef\u4ee5\u501f\u52a9\u753b\u56fe\u7684\u65b9\u5f0f\u914d\u5408\u7406\u89e3\u3002"))}u.isMDXComponent=!0},9261:function(e,n,t){n.Z=t.p+"assets/images/vue-diff-update-children-1-54e7bcdd3cf36e29c9fd90c59d135a11.jpg"},8571:function(e,n,t){n.Z=t.p+"assets/images/vue-diff-update-children-2-9f179a7b062ff001d338d5db4bcf7909.jpg"},5095:function(e,n,t){n.Z=t.p+"assets/images/vue-diff-update-children-3-9f3582e056255fbadfc993e45eebfa7c.jpg"},1899:function(e,n,t){n.Z=t.p+"assets/images/vue-diff-update-children-4-44c68345c4cd4dba22e16fdaef2bd44c.jpg"},897:function(e,n,t){n.Z=t.p+"assets/images/vue-diff-update-children-5-bf94975ee29c27f6a608ffc91b00d92b.jpg"},3292:function(e,n,t){n.Z=t.p+"assets/images/vue-diff-update-children-6-307bea23deb743f6c82f97d127f7e3b9.jpg"}}]);