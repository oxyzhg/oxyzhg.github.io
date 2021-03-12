(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{105:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),c=(t(0),t(143)),l={id:"webpack5",title:"Webpack 5"},i={unversionedId:"engineering/webpack/webpack5",id:"engineering/webpack/webpack5",isDocsHomePage:!1,title:"Webpack 5",description:"Webpack5 \u5df2\u7ecf\u6b63\u5f0f\u53d1\u5e03\u4e86\uff0c\u5e76\u5e26\u6765\u4e86\u8bf8\u591a\u91cd\u5927\u7684\u53d8\u66f4\uff0c\u5c06\u4f1a\u4f7f\u524d\u7aef\u7684\u6784\u5efa\u6548\u7387\u4e0e\u8d28\u91cf\u5927\u4e3a\u63d0\u5347\u3002",source:"@site/docs/engineering/webpack/webpack5.md",slug:"/engineering/webpack/webpack5",permalink:"/fex/docs/engineering/webpack/webpack5",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/engineering/webpack/webpack5.md",version:"current",sidebar:"engineering",previous:{title:"Hot Module Replacement",permalink:"/fex/docs/engineering/webpack/hot-module-replacement"},next:{title:"Tree Shaking",permalink:"/fex/docs/engineering/tree-shaking"}},b=[{value:"\u65b0\u7279\u6027",id:"\u65b0\u7279\u6027",children:[{value:"\u7f16\u8bd1\u7f13\u5b58",id:"\u7f16\u8bd1\u7f13\u5b58",children:[]},{value:"\u957f\u6548\u7f13\u5b58",id:"\u957f\u6548\u7f13\u5b58",children:[]},{value:"\u79fb\u9664 Node polyfill \u811a\u672c",id:"\u79fb\u9664-node-polyfill-\u811a\u672c",children:[]},{value:"\u66f4\u4f18\u7684 tree-shaking",id:"\u66f4\u4f18\u7684-tree-shaking",children:[]},{value:"Module Federation",id:"module-federation",children:[]}]},{value:"\u5347\u7ea7\u91c7\u5751",id:"\u5347\u7ea7\u91c7\u5751",children:[]}],o={toc:b};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Webpack5 \u5df2\u7ecf\u6b63\u5f0f\u53d1\u5e03\u4e86\uff0c\u5e76\u5e26\u6765\u4e86\u8bf8\u591a\u91cd\u5927\u7684\u53d8\u66f4\uff0c\u5c06\u4f1a\u4f7f\u524d\u7aef\u7684\u6784\u5efa\u6548\u7387\u4e0e\u8d28\u91cf\u5927\u4e3a\u63d0\u5347\u3002"),Object(c.b)("p",null,"\u672c\u6b21\u7248\u672c\u66f4\u65b0\u91cd\u70b9\u5728\u4e8e\u4ee5\u4e0b\u51e0\u70b9\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5c1d\u8bd5\u7528\u6301\u4e45\u6027\u7f13\u5b58\u6765\u63d0\u9ad8\u6784\u5efa\u6027\u80fd\u3002"),Object(c.b)("li",{parentName:"ul"},"\u5c1d\u8bd5\u7528\u66f4\u597d\u7684\u7b97\u6cd5\u548c\u9ed8\u8ba4\u503c\u6765\u6539\u8fdb\u957f\u671f\u7f13\u5b58\u3002"),Object(c.b)("li",{parentName:"ul"},"\u5c1d\u8bd5\u7528\u66f4\u597d\u7684 Tree Shaking \u548c\u4ee3\u7801\u751f\u6210\u6765\u6539\u5584\u5305\u5927\u5c0f\u3002"),Object(c.b)("li",{parentName:"ul"},"\u5c1d\u8bd5\u6539\u5584\u4e0e\u7f51\u7edc\u5e73\u53f0\u7684\u517c\u5bb9\u6027\u3002"),Object(c.b)("li",{parentName:"ul"},"\u5c1d\u8bd5\u5728\u4e0d\u5f15\u5165\u4efb\u4f55\u7834\u574f\u6027\u53d8\u5316\u7684\u60c5\u51b5\u4e0b\uff0c\u6e05\u7406\u90a3\u4e9b\u5728\u5b9e\u73b0 v4 \u529f\u80fd\u65f6\u5904\u4e8e\u5947\u602a\u72b6\u6001\u7684\u5185\u90e8\u7ed3\u6784\u3002")),Object(c.b)("p",null,"\u5347\u7ea7\u5e26\u6765\u7684\u7279\u6027\u6709\uff1a\u4f18\u5316\u6301\u4e45\u7f13\u5b58\u3001\u4f18\u5316\u957f\u671f\u7f13\u5b58\u3001\u66f4\u4f18\u7684 tree-shaking\u3001\u79fb\u9664 Node Polyfill \u811a\u672c\u3001Module Federation \u7b49\u3002"),Object(c.b)("h2",{id:"\u65b0\u7279\u6027"},"\u65b0\u7279\u6027"),Object(c.b)("h3",{id:"\u7f16\u8bd1\u7f13\u5b58"},"\u7f16\u8bd1\u7f13\u5b58"),Object(c.b)("p",null,"webpack4 \u53ca\u4e4b\u524d\u7684\u7248\u672c\u6ca1\u6709\u6301\u4e45\u5316\u7f13\u5b58\u7684\u80fd\u529b\u7684\uff0c\u4f46\u53ef\u4ee5\u501f\u52a9 plugin \u6216 loader \u6765\u5b9e\u73b0\u3002\u4f8b\u5982\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528 cache-loader \u6765\u7f13\u5b58\u7f16\u8bd1\u7ed3\u679c\u5230\u786c\u76d8\uff0c\u518d\u6b21\u6784\u5efa\u65f6\u5728\u7f13\u5b58\u7684\u57fa\u7840\u4e0a\u589e\u91cf\u7f16\u8bd1\u957f\u671f\u7f13\u5b58\u3002"),Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528\u81ea\u5e26\u7f13\u5b58\u7684 loader\uff0c\u5982\uff1ababel-loader\uff0c\u53ef\u4ee5\u914d\u7f6e cacheDirectory \u7f13\u5b58 babel \u7f16\u8bd1\u7684\u7ed3\u679c\u3002"),Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528 hard-source-webpack-plugin \u6765\u4e3a\u6a21\u5757\u63d0\u4f9b\u4e2d\u95f4\u7f13\u5b58\u3002")),Object(c.b)("p",null,"\u4f7f\u7528\u4ee5\u4e0a\u7f13\u5b58\u65b9\u6848\u7684\u7ed3\u679c\uff0c\u9ed8\u8ba4\u5b58\u50a8\u5728 ",Object(c.b)("em",{parentName:"p"},"node_modules/.cache")," \u76ee\u5f55\u3002"),Object(c.b)("p",null,"webpack5 \u7edf\u4e00\u4e86\u6301\u4e45\u5316\u7f13\u5b58\u7684\u65b9\u6848\uff0c\u6709\u6548\u964d\u4f4e\u4e86\u914d\u7f6e\u7684\u590d\u6742\u6027\u3002\u53e6\u5916\u7531\u4e8e webpack \u63d0\u4f9b\u4e86\u6784\u5efa\u7684 runtime\uff0c\u6240\u6709\u88ab webpack \u5904\u7406\u7684\u6a21\u5757\u90fd\u80fd\u5f97\u5230\u6709\u6548\u7684\u7f13\u5b58\uff0c\u5927\u5927\u63d0\u9ad8\u4e86\u7f13\u5b58\u7684\u8986\u76d6\u7387\uff0c\u56e0\u6b64\u8be5\u6301\u4e45\u5316\u7f13\u5b58\u65b9\u6848\u5c06\u4f1a\u6bd4\u5176\u4ed6\u7b2c\u4e09\u65b9\u63d2\u4ef6\u7f13\u5b58\u6027\u80fd\u8981\u597d\u5f88\u591a\u3002"),Object(c.b)("p",null,"webpack5 \u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e ",Object(c.b)("a",{parentName:"p",href:"https://webpack.js.org/configuration/other-options/#cache"},"cache")," \u5c5e\u6027\u8bbe\u7f6e\u7f13\u5b58\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  cache: {\n    // \u5c06\u7f13\u5b58\u7c7b\u578b\u8bbe\u7f6e\u4e3a\u6587\u4ef6\u7cfb\u7edf\n    type: 'filesystem',\n    cacheDirectory: 'node_modules/.cache/webpack', // default\n    buildDependencies: {\n      // \u5c06\u4f60\u7684 config \u6dfb\u52a0\u4e3a buildDependency\uff0c\u4ee5\u4fbf\u5728\u6539\u53d8 config \u65f6\u83b7\u5f97\u7f13\u5b58\u65e0\u6548\n      config: [__filename],\n      // \u5982\u679c\u6709\u5176\u4ed6\u7684\u4e1c\u897f\u88ab\u6784\u5efa\u4f9d\u8d56\uff0c\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u6dfb\u52a0\u5b83\u4eec\n      // \u6ce8\u610f\uff0cwebpack.config\uff0c\u52a0\u8f7d\u5668\u548c\u6240\u6709\u4ece\u4f60\u7684\u914d\u7f6e\u4e2d\u5f15\u7528\u7684\u6a21\u5757\u90fd\u4f1a\u88ab\u81ea\u52a8\u6dfb\u52a0\n    },\n    version: '1.0',\n  },\n};\n")),Object(c.b)("p",null,"\u6ce8\u610f\u4e8b\u9879\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"cache")," \u7684\u5c5e\u6027 ",Object(c.b)("inlineCode",{parentName:"li"},"type")," \u4f1a\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u88ab\u9ed8\u8ba4\u8bbe\u7f6e\u6210 ",Object(c.b)("inlineCode",{parentName:"li"},"memory"),"\uff0c\u800c\u4e14\u5728\u751f\u4ea7\u6a21\u5f0f\u4e2d\u88ab\u7981\u7528\uff0c\u6240\u4ee5\u5982\u679c\u60f3\u8981\u5728\u751f\u4ea7\u6253\u5305\u65f6\u4f7f\u7528\u7f13\u5b58\u9700\u8981\u663e\u5f0f\u7684\u8bbe\u7f6e\u3002"),Object(c.b)("li",{parentName:"ul"},"\u4e3a\u4e86\u9632\u6b62\u7f13\u5b58\u8fc7\u4e8e\u56fa\u5b9a\uff0c\u5bfc\u81f4\u66f4\u6539\u6784\u5efa\u914d\u7f6e\u65e0\u611f\u77e5\uff0c\u4f9d\u7136\u4f7f\u7528\u65e7\u7684\u7f13\u5b58\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6bcf\u6b21\u4fee\u6539\u6784\u5efa\u914d\u7f6e\u6587\u4ef6\u90fd\u4f1a\u5bfc\u81f4\u91cd\u65b0\u5f00\u59cb\u7f13\u5b58\u3002\u5f53\u7136\u4e5f\u53ef\u4ee5\u81ea\u5df1\u4e3b\u52a8\u8bbe\u7f6e ",Object(c.b)("inlineCode",{parentName:"li"},"version")," \u6765\u63a7\u5236\u7f13\u5b58\u7684\u66f4\u65b0\u3002")),Object(c.b)("h3",{id:"\u957f\u6548\u7f13\u5b58"},"\u957f\u6548\u7f13\u5b58"),Object(c.b)("p",null,"\u957f\u6548\u7f13\u5b58\u6307\u7684\u662f\u80fd\u5145\u5206\u5229\u7528\u6d4f\u89c8\u5668\u7f13\u5b58\uff0c\u5c3d\u91cf\u51cf\u5c11\u7531\u4e8e\u6a21\u5757\u53d8\u66f4\u5bfc\u81f4\u7684\u6784\u5efa\u6587\u4ef6 hash \u503c\u7684\u6539\u53d8\uff0c\u4ece\u800c\u5bfc\u81f4\u6587\u4ef6\u7f13\u5b58\u5931\u6548\u3002"),Object(c.b)("p",null,"webpack4 \u53ca\u4e4b\u524d\u7684\u7248\u672c moduleId \u548c chunkId \u9ed8\u8ba4\u662f\u81ea\u589e\u7684\uff0c\u66f4\u6539\u6a21\u5757\u7684\u6570\u91cf\uff0c\u5bb9\u6613\u5bfc\u81f4\u7f13\u5b58\u7684\u5931\u6548\uff0c\u8fd9\u4e0d\u5229\u4e8e\u6d4f\u89c8\u5668\u8fdb\u884c\u957f\u6548\u7f13\u5b58\u3002"),Object(c.b)("p",null,"v4 \u4e4b\u524d\u7684\u89e3\u51b3\u529e\u6cd5\u662f\u4f7f\u7528 HashedModuleIdsPlugin \u56fa\u5b9a moduleId\uff0c\u5b83\u4f1a\u4f7f\u7528\u6a21\u5757\u8def\u5f84\u751f\u6210\u7684 hash \u4f5c\u4e3a moduleId\uff1b\u4f7f\u7528 NamedChunksPlugin \u6765\u56fa\u5b9a chunkId\u3002"),Object(c.b)("p",null,"\u5176\u4e2d webpack4 \u4e2d\u53ef\u4ee5\u6839\u636e\u5982\u4e0b\u914d\u7f6e\u6765\u89e3\u51b3\u6b64\u95ee\u9898\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"optimization.moduleIds = 'hashed';\noptimization.chunkIds = 'named';\n")),Object(c.b)("p",null,"webpack5 \u589e\u52a0\u4e86",Object(c.b)("strong",{parentName:"p"},"\u786e\u5b9a\u7684")," moduleId, chunkId \u7684\u652f\u6301\uff0c\u5982\u4e0b\u914d\u7f6e\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"optimization.moduleIds = 'deterministic';\noptimization.chunkIds = 'deterministic';\n")),Object(c.b)("p",null,"\u6b64\u914d\u7f6e\u5728\u751f\u4ea7\u6a21\u5f0f\u4e0b\u662f\u9ed8\u8ba4\u5f00\u542f\u7684\uff0c\u5b83\u7684\u4f5c\u7528\u662f\u4ee5\u786e\u5b9a\u7684\u65b9\u5f0f\u4e3a module \u548c chunk \u5206\u914d 3-5 \u4f4d\u6570\u5b57 id\uff0c\u76f8\u6bd4\u4e8e v4 \u7248\u672c\u7684\u9009\u9879 hashed\uff0c\u5b83\u4f1a\u5bfc\u81f4\u66f4\u5c0f\u7684\u6587\u4ef6 bundles\u3002"),Object(c.b)("p",null,"\u7531\u4e8e moduleId \u548c chunkId \u786e\u5b9a\u4e86\uff0c\u6784\u5efa\u7684\u6587\u4ef6\u7684 hash \u503c\u4e5f\u4f1a\u786e\u5b9a\uff0c\u6709\u5229\u4e8e\u6d4f\u89c8\u5668\u957f\u6548\u7f13\u5b58\u3002\u540c\u65f6\u6b64\u914d\u7f6e\u6709\u5229\u4e8e\u51cf\u5c11\u6587\u4ef6\u6253\u5305\u5927\u5c0f\u3002"),Object(c.b)("p",null,"\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\uff0c\u5efa\u8bae\u4f7f\u7528\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"optimization.moduleIds = 'named';\noptimization.chunkIds = 'named';\n")),Object(c.b)("p",null,"\u6b64\u9009\u9879\u751f\u4ea7\u5bf9\u8c03\u8bd5\u66f4\u53cb\u597d\u7684\u53ef\u8bfb\u7684 id\u3002"),Object(c.b)("h3",{id:"\u79fb\u9664-node-polyfill-\u811a\u672c"},"\u79fb\u9664 Node polyfill \u811a\u672c"),Object(c.b)("p",null,"webpack4 \u7248\u672c\u4e2d\u9644\u5e26\u4e86\u5927\u591a\u6570 Node.js \u6838\u5fc3\u6a21\u5757\u7684 polyfill\uff0c\u4e00\u65e6\u524d\u7aef\u4f7f\u7528\u4e86\u4efb\u4f55\u6838\u5fc3\u6a21\u5757\uff0c\u8fd9\u4e9b\u6a21\u5757\u5c31\u4f1a\u81ea\u52a8\u5e94\u7528\uff0c\u4f46\u662f\u5176\u5b9e\u6709\u4e9b\u662f\u4e0d\u5fc5\u8981\u7684\u3002"),Object(c.b)("p",null,"webpack5 \u5c06\u4e0d\u518d\u81ea\u52a8\u4e3a Node.js \u6a21\u5757\u6dfb\u52a0 polyfill\uff0c\u800c\u662f\u66f4\u4e13\u6ce8\u7684\u6295\u5165\u5230\u524d\u7aef\u6a21\u5757\u7684\u517c\u5bb9\u4e2d\u3002\u8fd9\u662f\u4e00\u4e2a Breaking Change\uff0c\u7528\u6237\u53ef\u6839\u636e\u63d0\u793a\u624b\u52a8\u6dfb\u52a0 polyfill\uff0c\u6216\u6839\u636e\u63d0\u793a\u8bbe\u7f6e ",Object(c.b)("inlineCode",{parentName:"p"},"resolve.fallback")," \u5c5e\u6027\u3002"),Object(c.b)("h3",{id:"\u66f4\u4f18\u7684-tree-shaking"},"\u66f4\u4f18\u7684 tree-shaking"),Object(c.b)("p",null,"\u5bf9\u4e8e\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"import * as module from 'module'")," \u5f15\u5165\u5d4c\u5957\u7684\u6a21\u5757\uff0c\u5728 v4 \u7248\u672c\u4e0d\u80fd\u8ddf\u8e2a\u5bf9\u5bfc\u51fa\u7684\u5d4c\u5957\u5c5e\u6027\u7684\u8bbf\u95ee\uff0c\u5bfc\u81f4\u6574\u4e2a module \u6a21\u5757\u90fd\u4f1a\u88ab\u5bfc\u5165\u5e76\u8f93\u51fa\u5230\u6700\u7ec8\u4ea7\u7269\u4e2d\uff0c\u4f46\u5b9e\u9645\u4e0a\u6211\u4eec\u53ea\u7528\u5230\u5176\u4e2d\u7684\u4e00\u90e8\u5206\uff0c\u8fd9\u65e0\u7591\u662f\u589e\u52a0\u4e86\u6700\u7ec8\u4ea7\u7269\u7684\u4f53\u79ef\u3002\u800c webpack5 \u73b0\u5728\u80fd\u591f\u8ddf\u8e2a\u5bf9\u5bfc\u51fa\u7684\u5d4c\u5957\u5c5e\u6027\u7684\u8bbf\u95ee\uff0c\u53ef\u4ee5\u6e05\u9664\u672a\u4f7f\u7528\u7684\u5bfc\u51fa\u548c\u6df7\u6dc6\u5bfc\u51fa\uff0c\u6709\u6548\u51cf\u5c0f\u6700\u7ec8\u4ea7\u7269\u7684\u4f53\u79ef\u3002"),Object(c.b)("p",null,"\u5bf9\u4e8e\u5185\u90e8\u6a21\u5757\uff0c\u5728 v4 \u7248\u672c\u6ca1\u6709\u5206\u6790\u6a21\u5757\u7684\u5bfc\u51fa\u548c\u5f15\u7528\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\u3002webpack5 \u65b0\u589e\u4e86 ",Object(c.b)("inlineCode",{parentName:"p"},"optimization.innerGraph")," \u9009\u9879\uff0c\u5728\u751f\u4ea7\u6a21\u5f0f\u4e0b\u662f\u9ed8\u8ba4\u542f\u7528\u7684\uff0c\u5b83\u53ef\u4ee5\u5bf9\u6a21\u5757\u4e2d\u7684\u6807\u5fd7\u8fdb\u884c\u5206\u6790\uff0c\u627e\u51fa\u5bfc\u51fa\u548c\u5f15\u7528\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\u3002\u5185\u90e8\u4f9d\u8d56\u7b97\u6cd5\u4f1a\u627e\u51fa\u5bfc\u51fa\u6a21\u5757\u5bf9\u4f9d\u8d56\u7684\u5f15\u7528\uff0c\u8fd9\u5141\u8bb8\u5c06\u66f4\u591a\u7684\u51fa\u53e3\u6807\u8bb0\u4e3a\u672a\u4f7f\u7528\uff0c\u5e76\u4ece\u4ee3\u7801\u4e2d\u7701\u7565\u5f88\u591a\u7684\u4ee3\u7801\u3002"),Object(c.b)("p",null,"\u53e6\u5916\uff0cwebpack5 \u589e\u52a0\u4e86\u5bf9\u4e00\u4e9b CommonJS \u6784\u9020\u7684\u652f\u6301\uff0c\u5141\u8bb8\u6d88\u9664\u672a\u4f7f\u7528\u7684 CommonJs \u5bfc\u51fa\uff0c\u5e76\u4ece ",Object(c.b)("inlineCode",{parentName:"p"},"require()")," \u8c03\u7528\u4e2d\u8ddf\u8e2a\u5f15\u7528\u7684\u5bfc\u51fa\u540d\u79f0\u3002"),Object(c.b)("h3",{id:"module-federation"},"Module Federation"),Object(c.b)("p",null,"Module Federation \u4f7f\u5f97\u4f7f JavaScript \u5e94\u7528\u5f97\u4ee5\u4ece\u53e6\u4e00\u4e2a JavaScript \u5e94\u7528\u4e2d\u52a8\u6001\u5730\u52a0\u8f7d\u4ee3\u7801\uff0c\u540c\u65f6\u5171\u4eab\u4f9d\u8d56\u3002\u76f8\u5f53\u4e8e webpack \u63d0\u4f9b\u4e86\u7ebf\u4e0a runtime \u7684\u73af\u5883\uff0c\u591a\u4e2a\u5e94\u7528\u5229\u7528 CDN \u5171\u4eab\u7ec4\u4ef6\u6216\u5e94\u7528\uff0c\u4e0d\u9700\u8981\u672c\u5730\u5b89\u88c5 npm \u5305\u518d\u6784\u5efa\u4e86\uff0c\u8fd9\u5c31\u6709\u70b9\u4e91\u7ec4\u4ef6\u7684\u6982\u5ff5\u4e86\u3002"),Object(c.b)("p",null,"\u5b98\u65b9\u63d0\u4f9b\u4e86\u4e00\u4e9b\u573a\u666f\u7684\u793a\u4f8b\uff0c\u8be6\u60c5\u53c2\u8003 ",Object(c.b)("a",{parentName:"p",href:"https://github.com/module-federation/module-federation-examples"},"module-federation-examples")),Object(c.b)("h2",{id:"\u5347\u7ea7\u91c7\u5751"},"\u5347\u7ea7\u91c7\u5751"),Object(c.b)("p",null,"\u53c2\u8003\u8d44\u6599\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://mp.weixin.qq.com/s/P3foOrcu4StJDGdX9xavng"},"\u6784\u5efa\u6548\u7387\u5927\u5e45\u63d0\u5347\uff0cwebpack5 \u5728\u4f01\u9e45\u8f85\u5bfc\u7684\u5347\u7ea7\u5b9e\u8df5")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://webpack.docschina.org/blog/2020-10-10-webpack-5-release/"},"Webpack 5 \u53d1\u5e03")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://webpack.js.org/blog/2020-10-10-webpack-5-release/"},"Webpack 5 release (2020-10-10)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://webpack.js.org/concepts/module-federation/"},"Module Federation")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://medium.com/swlh/webpack-5-module-federation-a-game-changer-to-javascript-architecture-bcdd30e02669"},"Webpack 5 Module Federation: A game-changer in JavaScript architecture"))))}p.isMDXComponent=!0},143:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return s}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),p=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,s=u["".concat(l,".").concat(m)]||u[m]||d[m]||c;return t?r.a.createElement(s,i(i({ref:n},o),{},{components:t})):r.a.createElement(s,i({ref:n},o))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,l=new Array(c);l[0]=m;var i={};for(var b in n)hasOwnProperty.call(n,b)&&(i[b]=n[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var o=2;o<c;o++)l[o]=t[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);