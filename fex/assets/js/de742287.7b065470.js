"use strict";(self.webpackChunkfex=self.webpackChunkfex||[]).push([[1285],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),k=u(n),d=l,s=k["".concat(i,".").concat(d)]||k[d]||m[d]||a;return n?r.createElement(s,o(o({ref:t},p),{},{components:n})):r.createElement(s,o({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=k;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9331:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return k}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=["components"],c={id:"hot-module-replacement",title:"Hot Module Replacement"},i=void 0,u={unversionedId:"engineering/webpack/hot-module-replacement",id:"engineering/webpack/hot-module-replacement",isDocsHomePage:!1,title:"Hot Module Replacement",description:"\u81ea\u52a8\u5237\u65b0\u7684\u95ee\u9898",source:"@site/docs/engineering/webpack/hot-module-replacement.md",sourceDirName:"engineering/webpack",slug:"/engineering/webpack/hot-module-replacement",permalink:"/fex/docs/engineering/webpack/hot-module-replacement",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/engineering/webpack/hot-module-replacement.md",tags:[],version:"current",frontMatter:{id:"hot-module-replacement",title:"Hot Module Replacement"},sidebar:"engineering",previous:{title:"Source Map \u914d\u7f6e\u5206\u6790",permalink:"/fex/docs/engineering/webpack/source-map"},next:{title:"Webpack 5",permalink:"/fex/docs/engineering/webpack/webpack5"}},p=[{value:"\u81ea\u52a8\u5237\u65b0\u7684\u95ee\u9898",id:"\u81ea\u52a8\u5237\u65b0\u7684\u95ee\u9898",children:[]},{value:"\u6a21\u5757\u70ed\u66ff\u6362(HMR)",id:"\u6a21\u5757\u70ed\u66ff\u6362hmr",children:[]},{value:"\u5f00\u542f HMR",id:"\u5f00\u542f-hmr",children:[]},{value:"HMR \u7591\u95ee",id:"hmr-\u7591\u95ee",children:[]}],m={toc:p};function k(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u81ea\u52a8\u5237\u65b0\u7684\u95ee\u9898"},"\u81ea\u52a8\u5237\u65b0\u7684\u95ee\u9898"),(0,a.kt)("p",null,"\u6211\u4eec\u6bcf\u6b21\u4fee\u6539\u5b8c\u4ee3\u7801\uff0cWebpack \u90fd\u53ef\u4ee5\u76d1\u89c6\u5230\u53d8\u5316\uff0c\u7136\u540e\u81ea\u52a8\u6253\u5305\uff0c\u518d\u901a\u77e5\u6d4f\u89c8\u5668\u81ea\u52a8\u5237\u65b0\uff0c\u4e00\u65e6\u9875\u9762\u6574\u4f53\u5237\u65b0\uff0c\u90a3\u9875\u9762\u4e2d\u7684\u4efb\u4f55\u64cd\u4f5c\u72b6\u6001\u90fd\u5c06\u4f1a\u4e22\u5931\u3002"),(0,a.kt)("p",null,"\u7b80\u5355\u7684\u5e94\u5bf9\u65b9\u6cd5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u56de\u5230\u4ee3\u7801\u4e2d\u5148\u5199\u6b7b\u4e00\u4e2a\u6587\u672c\u5185\u5bb9\u5230\u7f16\u8f91\u5668\u4e2d\uff0c\u8fd9\u6837\u5373\u4fbf\u9875\u9762\u5237\u65b0\uff0c\u4e5f\u4e0d\u4f1a\u4e22\u5931\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u4ee3\u7801\u5c06\u7f16\u8f91\u5668\u4e2d\u7684\u5185\u5bb9\u53ca\u65f6\u4fdd\u5b58\u5230 LocalStorage \u4e4b\u7c7b\u7684\u5730\u65b9\uff0c\u5237\u65b0\u8fc7\u540e\u518d\u53d6\u56de\u6765\u3002")),(0,a.kt)("p",null,"\u8fd9\u4e9b\u65b9\u6cd5\u4e0d\u53ef\u8c13\u4e0d\u884c\uff0c\u4f46\u90fd\u662f\u6709\u6f0f\u8865\u6f0f\u3001\u6295\u673a\u53d6\u5de7\u7684\u64cd\u4f5c\uff0c\u5e76\u4e0d\u80fd\u6839\u6cbb\u81ea\u52a8\u5237\u65b0\u5bfc\u81f4\u9875\u9762\u72b6\u6001\u4e22\u5931\u95ee\u9898\uff0c\u800c\u4e14\u8fd9\u4e9b\u65b9\u6cd5\u90fd\u9700\u8981\u53bb\u7f16\u5199\u4e00\u4e9b\u4e0e\u4e1a\u52a1\u672c\u8eab\u65e0\u5173\u7684\u8f85\u52a9\u4ee3\u7801\uff0c\u4e0d\u5229\u4e8e\u7ef4\u62a4\u3002"),(0,a.kt)("p",null,"\u66f4\u597d\u7684\u529e\u6cd5\u81ea\u7136\u662f\u80fd\u591f\u5b9e\u73b0\u5728\u9875\u9762\u4e0d\u5237\u65b0\u7684\u60c5\u51b5\u4e0b\uff0c\u4ee3\u7801\u4e5f\u53ef\u4ee5\u53ca\u65f6\u7684\u66f4\u65b0\u5230\u6d4f\u89c8\u5668\u7684\u9875\u9762\u4e2d\uff0c\u91cd\u65b0\u6267\u884c\uff0c\u907f\u514d\u9875\u9762\u72b6\u6001\u4e22\u5931\u3002\u9488\u5bf9\u8fd9\u4e2a\u9700\u6c42\uff0cWebpack \u540c\u6837\u53ef\u4ee5\u6ee1\u8db3\u3002"),(0,a.kt)("h2",{id:"\u6a21\u5757\u70ed\u66ff\u6362hmr"},"\u6a21\u5757\u70ed\u66ff\u6362(HMR)"),(0,a.kt)("p",null,"Webpack \u4e2d\u7684\u6a21\u5757\u70ed\u66ff\u6362\uff0c\u6307\u7684\u662f\u6211\u4eec\u53ef\u4ee5\u5728\u5e94\u7528\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u5b9e\u65f6\u7684\u53bb\u66ff\u6362\u6389\u5e94\u7528\u4e2d\u7684\u67d0\u4e2a\u6a21\u5757\uff0c\u800c\u5e94\u7528\u7684\u8fd0\u884c\u72b6\u6001\u4e0d\u4f1a\u56e0\u6b64\u800c\u6539\u53d8\u3002"),(0,a.kt)("p",null,"\u81ea\u52a8\u5237\u65b0\u4e0e HMR \u7684\u533a\u522b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u81ea\u52a8\u5237\u65b0\u4f1a\u5bfc\u81f4\u6574\u4e2a\u5e94\u7528\u7684\u6574\u4f53\u5237\u65b0\uff0c\u90a3\u9875\u9762\u4e2d\u7684\u72b6\u6001\u4fe1\u606f\u90fd\u4f1a\u4e22\u5931\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 HMR \u53ef\u4ee5\u5b9e\u73b0\u53ea\u5c06\u4fee\u6539\u7684\u6a21\u5757\u5b9e\u65f6\u66ff\u6362\u81f3\u5e94\u7528\u4e2d\uff0c\u4e0d\u5fc5\u5b8c\u5168\u5237\u65b0\u6574\u4e2a\u5e94\u7528\u3002")),(0,a.kt)("p",null,"HMR \u53ef\u4ee5\u7b97\u662f Webpack \u4e2d\u6700\u4e3a\u5f3a\u5927\u7684\u7279\u6027\u4e4b\u4e00\uff0c\u800c\u4e14\u4e5f\u662f\u6700\u53d7\u6b22\u8fce\u7684\u7279\u6027\uff0c\u56e0\u4e3a\u5b83\u786e\u5b9e\u6781\u5927\u7a0b\u5ea6\u5730\u63d0\u9ad8\u4e86\u5f00\u53d1\u8005\u7684\u5de5\u4f5c\u6548\u7387\u3002"),(0,a.kt)("h2",{id:"\u5f00\u542f-hmr"},"\u5f00\u542f HMR"),(0,a.kt)("p",null,"HMR \u5df2\u7ecf\u96c6\u6210\u5728\u4e86 webpack \u6a21\u5757\u4e2d\u4e86\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u518d\u5355\u72ec\u5b89\u88c5\u4ec0\u4e48\u6a21\u5757\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u8fd9\u4e2a\u7279\u6027\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u5c31\u662f\uff0c\u5728\u8fd0\u884c webpack-dev-server \u547d\u4ee4\u65f6\uff0c\u901a\u8fc7 --hot \u53c2\u6570\u53bb\u5f00\u542f\u8fd9\u4e2a\u7279\u6027\u3002"),(0,a.kt)("p",null,"\u6216\u8005\u4e5f\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u901a\u8fc7\u6dfb\u52a0\u5bf9\u5e94\u7684\u914d\u7f6e\u6765\u5f00\u542f\u8fd9\u4e2a\u529f\u80fd\u3002\u90a3\u6211\u4eec\u8fd9\u91cc\u6253\u5f00\u914d\u7f6e\u6587\u4ef6\uff0c\u8fd9\u91cc\u9700\u8981\u914d\u7f6e\u4e24\u4e2a\u5730\u65b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u9700\u8981\u5c06 devServer \u5bf9\u8c61\u4e2d\u7684 hot \u5c5e\u6027\u8bbe\u7f6e\u4e3a true\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u7136\u540e\u9700\u8981\u8f7d\u5165\u4e00\u4e2a\u63d2\u4ef6\uff0c\u8fd9\u4e2a\u63d2\u4ef6\u662f webpack \u5185\u7f6e\u7684\u4e00\u4e2a\u63d2\u4ef6\uff0c\u6240\u4ee5\u6211\u4eec\u5148\u5bfc\u5165 webpack \u6a21\u5757\uff0c\u6709\u4e86\u8fd9\u4e2a\u6a21\u5757\u8fc7\u540e\uff0c\u8fd9\u91cc\u4f7f\u7528\u7684\u662f\u4e00\u4e2a\u53eb\u4f5c HotModuleReplacementPlugin \u7684\u63d2\u4ef6\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="webpack.config.js"',title:'"webpack.config.js"'},"const webpack = require('webpack');\n\nmodule.exports = {\n  // ...\n  devServer: {\n    // \u5f00\u542f HMR \u7279\u6027\uff0c\u5982\u679c\u8d44\u6e90\u4e0d\u652f\u6301 HMR \u4f1a fallback \u5230 live reloading\n    hot: true,\n    // \u53ea\u4f7f\u7528 HMR\uff0c\u4e0d\u4f1a fallback \u5230 live reloading\n    // hotOnly: true\n  },\n  plugins: [\n    // ...\n    // HMR \u7279\u6027\u6240\u9700\u8981\u7684\u63d2\u4ef6\n    new webpack.HotModuleReplacementPlugin(),\n  ],\n};\n")),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0cHMR \u5e76\u975e\u6240\u6709\u4fee\u6539\u90fd\u4f1a\u5b9e\u65f6\u66f4\u65b0\u5230\u9875\u9762\u4e14\u4e0d\u81ea\u52a8\u5237\u65b0\uff0c\u5c24\u5176\u662f\u8fd0\u884c\u811a\u672c\u53d1\u751f\u53d8\u5316\u3002"),(0,a.kt)("h2",{id:"hmr-\u7591\u95ee"},"HMR \u7591\u95ee"),(0,a.kt)("p",null,"Q1\uff1a\u53ef\u80fd\u4f60\u4f1a\u95ee\uff0c\u4e3a\u4ec0\u4e48\u6211\u4eec\u5f00\u542f HMR \u8fc7\u540e\uff0c\u6837\u5f0f\u6587\u4ef6\u7684\u4fee\u6539\u5c31\u53ef\u4ee5\u76f4\u63a5\u70ed\u66f4\u65b0\u5462\uff1f\u6211\u4eec\u597d\u50cf\u4e5f\u6ca1\u6709\u624b\u52a8\u5904\u7406\u6837\u5f0f\u6a21\u5757\u7684\u66f4\u65b0\u554a\uff1f"),(0,a.kt)("p",null,"A1\uff1a\u8fd9\u662f\u56e0\u4e3a\u6837\u5f0f\u6587\u4ef6\u662f\u7ecf\u8fc7 Loader \u5904\u7406\u7684\uff0c\u5728 style-loader \u4e2d\u5c31\u5df2\u7ecf\u81ea\u52a8\u5904\u7406\u4e86\u6837\u5f0f\u6587\u4ef6\u7684\u70ed\u66f4\u65b0\uff0c\u6240\u4ee5\u5c31\u4e0d\u9700\u8981\u6211\u4eec\u989d\u5916\u624b\u52a8\u53bb\u5904\u7406\u4e86\u3002"),(0,a.kt)("p",null,"Q2\uff1a\u90a3\u4f60\u53ef\u80fd\u4f1a\u60f3\uff0c\u51ed\u4ec0\u4e48\u6837\u5f0f\u5c31\u53ef\u4ee5\u81ea\u52a8\u5904\u7406\uff0c\u800c\u6211\u4eec\u7684\u811a\u672c\u5c31\u9700\u8981\u81ea\u5df1\u624b\u52a8\u5904\u7406\u5462\uff1f"),(0,a.kt)("p",null,"A2\uff1a\u8fd9\u4e2a\u539f\u56e0\u4e5f\u5f88\u7b80\u5355\uff0c\u56e0\u4e3a\u6837\u5f0f\u6a21\u5757\u66f4\u65b0\u8fc7\u540e\uff0c\u53ea\u9700\u8981\u628a\u66f4\u65b0\u540e\u7684 CSS \u53ca\u65f6\u66ff\u6362\u5230\u9875\u9762\u4e2d\uff0c\u5b83\u5c31\u53ef\u4ee5\u8986\u76d6\u6389\u4e4b\u524d\u7684\u6837\u5f0f\uff0c\u4ece\u800c\u5b9e\u73b0\u66f4\u65b0\u3002\u800c\u6211\u4eec",(0,a.kt)("strong",{parentName:"p"},"\u6240\u7f16\u5199\u7684 JavaScript \u6a21\u5757\u662f\u6ca1\u6709\u4efb\u4f55\u89c4\u5f8b\u7684"),"\uff0c\u4f60\u53ef\u80fd\u5bfc\u51fa\u7684\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u4e5f\u53ef\u80fd\u5bfc\u51fa\u7684\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8fd8\u53ef\u80fd\u5bfc\u51fa\u7684\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4f7f\u7528\u65f6\u4e5f\u5404\u4e0d\u76f8\u540c\u3002\u6240\u4ee5 Webpack \u9762\u5bf9\u8fd9\u4e9b\u6beb\u65e0\u89c4\u5f8b\u7684 JS \u6a21\u5757\uff0c\u6839\u672c\u4e0d\u77e5\u9053\u8be5\u600e\u4e48\u5904\u7406\u66f4\u65b0\u540e\u7684\u6a21\u5757\uff0c\u4e5f\u5c31\u65e0\u6cd5\u76f4\u63a5\u5b9e\u73b0\u4e00\u4e2a\u53ef\u4ee5\u901a\u7528\u6240\u6709\u60c5\u51b5\u7684\u6a21\u5757\u66ff\u6362\u65b9\u6848\u3002\u90a3\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u6837\u5f0f\u6587\u4ef6\u53ef\u4ee5\u76f4\u63a5\u70ed\u66f4\u65b0\uff0c\u800c JS \u6587\u4ef6\u66f4\u65b0\u540e\u9875\u9762\u8fd8\u662f\u56de\u9000\u5230\u81ea\u52a8\u5237\u65b0\u7684\u539f\u56e0\u3002"),(0,a.kt)("p",null,"Q3\uff1a\u90a3\u53ef\u80fd\u8fd8\u6709\u4e00\u4e9b\u5e73\u65f6\u4f7f\u7528 vue-cli \u6216\u8005 create-react-app \u8fd9\u79cd\u6846\u67b6\u811a\u624b\u67b6\u5de5\u5177\u7684\u4eba\u4f1a\u8bf4\uff0c\u201c\u6211\u7684\u9879\u76ee\u5c31\u6ca1\u6709\u624b\u52a8\u5904\u7406\uff0cJavaScript \u4ee3\u7801\u7167\u6837\u53ef\u4ee5\u70ed\u66ff\u6362\uff0c\u4e5f\u6ca1\u4f60\u8bf4\u7684\u90a3\u4e48\u9ebb\u70e6\u201d\u3002"),(0,a.kt)("p",null,"A3\uff1a\u8fd9\u662f\u56e0\u4e3a\u4f60\u4f7f\u7528\u7684\u662f\u6846\u67b6\uff0c\u4f7f\u7528\u6846\u67b6\u5f00\u53d1\u65f6\uff0c\u6211\u4eec\u9879\u76ee\u4e2d\u7684\u6bcf\u4e2a\u6587\u4ef6\u5c31\u6709\u4e86\u89c4\u5f8b\uff0c\u4f8b\u5982 React \u4e2d\u8981\u6c42\u6bcf\u4e2a\u6a21\u5757\u5bfc\u51fa\u7684\u5fc5\u987b\u662f\u4e00\u4e2a\u51fd\u6570\u6216\u8005\u7c7b\uff0c\u90a3\u8fd9\u6837\u5c31\u53ef\u4ee5\u6709\u901a\u7528\u7684\u66ff\u6362\u529e\u6cd5\uff0c\u6240\u4ee5\u8fd9\u4e9b\u5de5\u5177\u5185\u90e8\u90fd\u5df2\u7ecf\u5e2e\u4f60\u5b9e\u73b0\u4e86\u901a\u7528\u7684\u66ff\u6362\u64cd\u4f5c\uff0c\u81ea\u7136\u5c31\u4e0d\u9700\u8981\u624b\u52a8\u5904\u7406\u4e86\u3002"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u662f\u4f7f\u7528 React \u6216\u8005 Vue.js \u8fd9\u7c7b\u7684\u6846\u67b6\u5f00\u53d1\uff0c\u90a3\u4e48\u4f7f\u7528 HMR \u529f\u80fd\u4f1a\u66f4\u52a0\u7b80\u5355\uff0c\u56e0\u4e3a\u5927\u90e8\u5206\u6846\u67b6\u90fd\u6709\u6210\u719f\u7684 HMR \u65b9\u6848\uff0c\u4f60\u53ea\u9700\u8981\u4f7f\u7528\u5c31\u53ef\u4ee5\u4e86\u3002\u4f46\u662f\u5982\u679c\u4f60\u662f\u4f7f\u7528\u7eaf\u539f\u751f JavaScript \u5f00\u53d1\uff0c\u90a3 HMR \u529f\u80fd\u4f7f\u7528\u8d77\u6765\u76f8\u5bf9\u5c31\u4f1a\u9ebb\u70e6\u4e00\u70b9\u3002\u8fd9\u4e5f\u6b63\u662f\u4e3a\u4ec0\u4e48\u5927\u90e8\u5206\u4eba\u90fd\u559c\u6b22\u9009\u62e9\u96c6\u6210\u5f0f\u6846\u67b6\u7684\u539f\u56e0\u3002"),(0,a.kt)("p",null,"\u5173\u4e8e\u6846\u67b6\u7684 HMR\uff0c\u56e0\u4e3a\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u662f\u5f00\u7bb1\u5373\u7528\u7684\uff0c\u6240\u4ee5\u8fd9\u91cc\u4e0d\u505a\u8fc7\u591a\u4ecb\u7ecd\uff0c\u8be6\u7ec6\u53ef\u4ee5\u53c2\u8003\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gaearon/react-hot-loader"},"React HMR \u65b9\u6848")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vue-loader.vuejs.org/guide/hot-reload.html"},"Vue.js HMR \u65b9\u6848"))))}k.isMDXComponent=!0}}]);