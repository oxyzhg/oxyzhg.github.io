"use strict";(self.webpackChunkfex=self.webpackChunkfex||[]).push([[8617],{3905:function(e,n,t){t.d(n,{Zo:function(){return k},kt:function(){return m}});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),u=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},k=function(e){var n=u(e.components);return l.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,d=c["".concat(p,".").concat(m)]||c[m]||s[m]||r;return t?l.createElement(d,i(i({ref:n},k),{},{components:t})):l.createElement(d,i({ref:n},k))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5415:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return k},default:function(){return c}});var l=t(7462),a=t(3366),r=(t(7294),t(3905)),i=["components"],o={id:"optimization-analysis",title:"Webpack \u6784\u5efa\u4f18\u5316\u5206\u6790"},p=void 0,u={unversionedId:"engineering/webpack/optimization-analysis",id:"engineering/webpack/optimization-analysis",isDocsHomePage:!1,title:"Webpack \u6784\u5efa\u4f18\u5316\u5206\u6790",description:"\u5728 Compiler \u548c Compilation \u7684\u5de5\u4f5c\u6d41\u7a0b\u4e2d\u8017\u65f6\u5206\u6790\uff1a",source:"@site/docs/engineering/webpack/optimization-analysis.md",sourceDirName:"engineering/webpack",slug:"/engineering/webpack/optimization-analysis",permalink:"/fex/docs/engineering/webpack/optimization-analysis",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/engineering/webpack/optimization-analysis.md",tags:[],version:"current",frontMatter:{id:"optimization-analysis",title:"Webpack \u6784\u5efa\u4f18\u5316\u5206\u6790"},sidebar:"engineering",previous:{title:"Webpack \u5b8c\u6574\u7684\u6784\u5efa\u6d41\u7a0b",permalink:"/fex/docs/engineering/webpack/build-process"},next:{title:"Source Map \u914d\u7f6e\u5206\u6790",permalink:"/fex/docs/engineering/webpack/source-map"}},k=[{value:"\u7f16\u8bd1\u9636\u6bb5\u4f18\u5316\u5206\u6790",id:"\u7f16\u8bd1\u9636\u6bb5\u4f18\u5316\u5206\u6790",children:[{value:"\u51cf\u5c11\u6267\u884c\u7f16\u8bd1\u7684\u6a21\u5757",id:"\u51cf\u5c11\u6267\u884c\u7f16\u8bd1\u7684\u6a21\u5757",children:[]},{value:"\u63d0\u5347\u5355\u4e2a\u6a21\u5757\u6784\u5efa\u7684\u901f\u5ea6",id:"\u63d0\u5347\u5355\u4e2a\u6a21\u5757\u6784\u5efa\u7684\u901f\u5ea6",children:[]},{value:"\u5e76\u884c\u6784\u5efa\u4ee5\u63d0\u5347\u603b\u4f53\u6548\u7387",id:"\u5e76\u884c\u6784\u5efa\u4ee5\u63d0\u5347\u603b\u4f53\u6548\u7387",children:[]}]},{value:"\u6253\u5305\u9636\u6bb5\u4f18\u5316\u5206\u6790",id:"\u6253\u5305\u9636\u6bb5\u4f18\u5316\u5206\u6790",children:[{value:"\u63d0\u5347\u5f53\u524d\u4efb\u52a1\u7684\u5de5\u4f5c\u6548\u7387",id:"\u63d0\u5347\u5f53\u524d\u4efb\u52a1\u7684\u5de5\u4f5c\u6548\u7387",children:[]},{value:"\u63d0\u5347\u540e\u7eed\u73af\u8282\u7684\u5de5\u4f5c\u6548\u7387",id:"\u63d0\u5347\u540e\u7eed\u73af\u8282\u7684\u5de5\u4f5c\u6548\u7387",children:[]}]},{value:"\u4f18\u5316\u65b9\u6848\u603b\u7ed3",id:"\u4f18\u5316\u65b9\u6848\u603b\u7ed3",children:[]}],s={toc:k};function c(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728 Compiler \u548c Compilation \u7684\u5de5\u4f5c\u6d41\u7a0b\u4e2d\u8017\u65f6\u5206\u6790\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e Compiler \u5b9e\u4f8b\u800c\u8a00\uff0c\u8017\u65f6\u6700\u957f\u7684\u663e\u7136\u662f\u751f\u6210\u7f16\u8bd1\u8fc7\u7a0b\u5b9e\u4f8b\u540e\u7684 make \u9636\u6bb5\uff0c\u5728\u8fd9\u4e2a\u9636\u6bb5\u91cc\uff0c\u4f1a\u6267\u884c\u6a21\u5757\u7f16\u8bd1\u5230\u4f18\u5316\u7684\u5b8c\u6574\u8fc7\u7a0b\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e Compilation \u5b9e\u4f8b\u7684\u5de5\u4f5c\u6d41\u7a0b\u6765\u8bf4\uff0c\u4e0d\u540c\u7684\u9879\u76ee\u548c\u914d\u7f6e\u5404\u6709\u4e0d\u540c\uff0c\u4f46\u603b\u4f53\u800c\u8a00\uff0c\u7f16\u8bd1\u6a21\u5757\u548c\u540e\u7eed\u4f18\u5316\u9636\u6bb5\u7684\u751f\u6210\u4ea7\u7269\u5e76\u538b\u7f29\u4ee3\u7801\u7684\u8fc7\u7a0b\u90fd\u662f\u6bd4\u8f83\u8017\u65f6\u7684\u3002")),(0,r.kt)("p",null,"\u4e0d\u540c\u9879\u76ee\u7684\u6784\u5efa\uff0c\u5728\u6574\u4e2a\u6d41\u7a0b\u7684\u524d\u671f\u521d\u59cb\u5316\u9636\u6bb5\u4e0e\u6700\u540e\u7684\u4ea7\u7269\u751f\u6210\u9636\u6bb5\u7684\u6784\u5efa\u65f6\u95f4\u533a\u522b\u4e0d\u5927\u3002\u771f\u6b63\u5f71\u54cd\u6574\u4e2a\u6784\u5efa\u6548\u7387\u7684\u8fd8\u662f Compilation \u5b9e\u4f8b\u7684\u5904\u7406\u8fc7\u7a0b\uff0c\u8fd9\u4e00\u8fc7\u7a0b\u53c8\u53ef\u5206\u4e3a\u4e24\u4e2a\u9636\u6bb5\uff1a\u7f16\u8bd1\u6a21\u5757\u548c\u4f18\u5316\u5904\u7406\u3002"),(0,r.kt)("h2",{id:"\u7f16\u8bd1\u9636\u6bb5\u4f18\u5316\u5206\u6790"},"\u7f16\u8bd1\u9636\u6bb5\u4f18\u5316\u5206\u6790"),(0,r.kt)("p",null,"\u7f16\u8bd1\u6a21\u5757\u9636\u6bb5\u6240\u8017\u7684\u65f6\u95f4\u662f\u4ece\u5355\u4e2a\u5165\u53e3\u70b9\u5f00\u59cb\uff0c\u7f16\u8bd1\u6bcf\u4e2a\u6a21\u5757\u7684\u65f6\u95f4\u7684\u603b\u548c\u3002\u8981\u63d0\u5347\u8fd9\u4e00\u9636\u6bb5\u7684\u6784\u5efa\u6548\u7387\uff0c\u5927\u81f4\u53ef\u4ee5\u5206\u4e3a\u4e09\u4e2a\u65b9\u5411\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u51cf\u5c11\u6267\u884c\u7f16\u8bd1\u7684\u6a21\u5757"),(0,r.kt)("li",{parentName:"ol"},"\u63d0\u5347\u5355\u4e2a\u6a21\u5757\u6784\u5efa\u7684\u901f\u5ea6"),(0,r.kt)("li",{parentName:"ol"},"\u5e76\u884c\u6784\u5efa\u4ee5\u63d0\u5347\u603b\u4f53\u6548\u7387")),(0,r.kt)("h3",{id:"\u51cf\u5c11\u6267\u884c\u7f16\u8bd1\u7684\u6a21\u5757"},"\u51cf\u5c11\u6267\u884c\u7f16\u8bd1\u7684\u6a21\u5757"),(0,r.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u9879\u76ee\u6bcf\u6b21\u6784\u5efa\u90fd\u9700\u8981\u7f16\u8bd1 1000 \u4e2a\u6a21\u5757\uff0c\u4f46\u662f\u901a\u8fc7\u5206\u6790\u540e\u53d1\u73b0\u5176\u4e2d\u6709 500 \u4e2a\u4e0d\u9700\u8981\u7f16\u8bd1\uff0c\u663e\u800c\u6613\u89c1\uff0c\u7ecf\u8fc7\u4f18\u5316\u540e\uff0c\u6784\u5efa\u6548\u7387\u53ef\u4ee5\u5927\u5e45\u63d0\u5347\u3002"),(0,r.kt)("h4",{id:"ignoreplugin"},"IgnorePlugin"),(0,r.kt)("p",null,"\u6709\u7684\u4f9d\u8d56\u5305\uff0c\u9664\u4e86\u9879\u76ee\u6240\u9700\u7684\u6a21\u5757\u5185\u5bb9\u5916\uff0c\u8fd8\u4f1a\u9644\u5e26\u4e00\u4e9b\u591a\u4f59\u7684\u6a21\u5757\u3002\u5178\u578b\u7684\u4f8b\u5b50\u662f moment \u8fd9\u4e2a\u5305\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u5728\u6784\u5efa\u65f6\u4f1a\u81ea\u52a8\u5f15\u5165\u5176 locale \u76ee\u5f55\u4e0b\u7684\u591a\u56fd\u8bed\u8a00\u5305\uff0c\u4f46\u5bf9\u4e8e\u5927\u591a\u6570\u60c5\u51b5\u800c\u8a00\uff0c\u9879\u76ee\u4e2d\u53ea\u9700\u8981\u5f15\u5165\u672c\u56fd\u8bed\u8a00\u5305\u5373\u53ef\u3002\u800c Webpack \u63d0\u4f9b\u7684 IgnorePlugin \u5373\u53ef\u5728\u6784\u5efa\u6a21\u5757\u65f6\u76f4\u63a5\u5254\u9664\u90a3\u4e9b\u9700\u8981\u88ab\u6392\u9664\u7684\u6a21\u5757\uff0c\u4ece\u800c\u63d0\u5347\u6784\u5efa\u6a21\u5757\u7684\u901f\u5ea6\uff0c\u5e76\u51cf\u5c11\u4ea7\u7269\u4f53\u79ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const config = {\n  plugins: [\n    new webpack.IgnorePlugin({\n      resourceRegExp: /^\\.\\/locale$/,\n      contextRegExp: /moment$/,\n    }),\n  ],\n};\n")),(0,r.kt)("h4",{id:"\u6309\u9700\u5f15\u5165\u7c7b\u5e93\u6a21\u5757"},"\u6309\u9700\u5f15\u5165\u7c7b\u5e93\u6a21\u5757"),(0,r.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u4e00\u822c\u9002\u7528\u4e8e\u5de5\u5177\u7c7b\u5e93\u6027\u8d28\u7684\u4f9d\u8d56\u5305\u7684\u4f18\u5316\uff0c\u5178\u578b\u4f8b\u5b50\u662f lodash \u4f9d\u8d56\u5305\u3002\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6548\u679c\u6700\u4f73\u7684\u65b9\u5f0f\u662f\u5728\u5bfc\u5165\u58f0\u660e\u65f6\u53ea\u5bfc\u5165\u4f9d\u8d56\u5305\u5185\u7684\u7279\u5b9a\u6a21\u5757\u3002\u9664\u4e86\u5728\u5bfc\u5165\u65f6\u58f0\u660e\u7279\u5b9a\u6a21\u5757\u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528 babel-plugin-lodash \u6216 babel-plugin-import \u7b49\u63d2\u4ef6\u8fbe\u5230\u540c\u6837\u7684\u6548\u679c\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5173\u4e8e Tree Shaking \u8fd9\u91cc\u8981\u6ce8\u610f\u4e24\u70b9\uff1a1. \u8be5\u529f\u80fd\u4f9d\u8d56 ES Module \u6a21\u5757\u5316\u65b9\u6848\uff1b2.\u8be5\u529f\u80fd\u5728\u4f18\u5316\u9636\u6bb5\u8fdb\u884c\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u8fd9\u5e76\u4e0d\u80fd\u5bf9\u6a21\u5757\u7f16\u8bd1\u9636\u6bb5\u8d77\u4f5c\u7528\u3002")),(0,r.kt)("h4",{id:"dllplugin"},"DllPlugin"),(0,r.kt)("p",null,"DllPlugin \u7684\u6838\u5fc3\u601d\u60f3\u662f\u5c06\u9879\u76ee\u4f9d\u8d56\u7684\u6846\u67b6\u7b49\u6a21\u5757\u5355\u72ec\u6784\u5efa\u6253\u5305\uff0c\u4e0e\u666e\u901a\u6784\u5efa\u6d41\u7a0b\u533a\u5206\u5f00\u3002\u4f8b\u5982\uff0c\u539f\u5148\u4e00\u4e2a\u4f9d\u8d56 react \u4e0e react-dom \u7684\u9879\u76ee\uff0c\u7ecf\u8fc7 DllPlugin \u548c DllReferencePlugin \u4f18\u5316\u540e\uff0c\u518d\u6b21\u6784\u5efa\u7684\u6548\u7387\u4f1a\u5f97\u5230\u6781\u5927\u7684\u63d0\u9ad8\u3002"),(0,r.kt)("h4",{id:"externals"},"Externals"),(0,r.kt)("p",null,"Webpack \u914d\u7f6e\u4e2d\u7684 externals \u548c DllPlugin \u89e3\u51b3\u7684\u662f\u540c\u4e00\u7c7b\u95ee\u9898\uff1a\u5c06\u4f9d\u8d56\u7684\u6846\u67b6\u7b49\u6a21\u5757\u4ece\u6784\u5efa\u8fc7\u7a0b\u4e2d\u79fb\u9664\u3002\u5b83\u4eec\u7684\u533a\u522b\u5728\u4e8e\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u914d\u7f6e\u65b9\u9762\uff0cexternals \u66f4\u7b80\u5355\uff0c\u800c DllPlugin \u9700\u8981\u72ec\u7acb\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ol"},"DllPlugin \u5305\u542b\u4e86\u4f9d\u8d56\u5305\u7684\u72ec\u7acb\u6784\u5efa\u6d41\u7a0b\uff0c\u800c externals \u914d\u7f6e\u4e2d\u4e0d\u5305\u542b\u4f9d\u8d56\u6846\u67b6\u7684\u751f\u6210\u65b9\u5f0f\uff0c\u901a\u5e38\u4f7f\u7528\u5df2\u4f20\u5165 CDN \u7684\u4f9d\u8d56\u5305\u3002"),(0,r.kt)("li",{parentName:"ol"},"externals \u914d\u7f6e\u7684\u4f9d\u8d56\u5305\u9700\u8981\u5355\u72ec\u6307\u5b9a\u4f9d\u8d56\u6a21\u5757\u7684\u52a0\u8f7d\u65b9\u5f0f\uff1a\u5168\u5c40\u5bf9\u8c61\u3001CommonJS\u3001AMD \u7b49\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u5f15\u7528\u4f9d\u8d56\u5305\u7684\u5b50\u6a21\u5757\u65f6\uff0cDllPlugin \u65e0\u987b\u66f4\u6539\uff0c\u800c externals \u5219\u4f1a\u5c06\u5b50\u6a21\u5757\u6253\u5165\u9879\u76ee\u5305\u4e2d\u3002")),(0,r.kt)("h3",{id:"\u63d0\u5347\u5355\u4e2a\u6a21\u5757\u6784\u5efa\u7684\u901f\u5ea6"},"\u63d0\u5347\u5355\u4e2a\u6a21\u5757\u6784\u5efa\u7684\u901f\u5ea6"),(0,r.kt)("p",null,"\u63d0\u5347\u7f16\u8bd1\u9636\u6bb5\u6548\u7387\u7684\u7b2c\u4e8c\u4e2a\u65b9\u5411\uff0c\u662f\u5728\u4fdd\u6301\u6784\u5efa\u6a21\u5757\u6570\u91cf\u4e0d\u53d8\u7684\u60c5\u51b5\u4e0b\uff0c\u63d0\u5347\u5355\u4e2a\u6a21\u5757\u6784\u5efa\u7684\u901f\u5ea6\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u662f\u901a\u8fc7\u51cf\u5c11\u6784\u5efa\u5355\u4e2a\u6a21\u5757\u65f6\u7684\u4e00\u4e9b\u5904\u7406\u903b\u8f91\u6765\u63d0\u5347\u901f\u5ea6\u3002"),(0,r.kt)("h4",{id:"includeexclude"},"include/exclude"),(0,r.kt)("p",null,"include \u7684\u7528\u9014\u662f\u53ea\u5bf9\u7b26\u5408\u6761\u4ef6\u7684\u6a21\u5757\u4f7f\u7528\u6307\u5b9a Loader \u8fdb\u884c\u8f6c\u6362\u5904\u7406\u3002\u800c exclude \u5219\u76f8\u53cd\uff0c\u4e0d\u5bf9\u7279\u5b9a\u6761\u4ef6\u7684\u6a21\u5757\u4f7f\u7528\u8be5 Loader. \u4f8b\u5982\u4e0d\u4f7f\u7528 babel-loader \u5904\u7406 node_modules \u4e2d\u7684\u6a21\u5757\u3002"),(0,r.kt)("h4",{id:"noparse"},"noParse"),(0,r.kt)("p",null,"module.noParse \u662f\u5728\u4e0a\u8ff0 include/exclude \u7684\u57fa\u7840\u4e0a\uff0c\u8fdb\u4e00\u6b65\u7701\u7565\u4e86\u4f7f\u7528\u9ed8\u8ba4 js \u6a21\u5757\u7f16\u8bd1\u5668\u8fdb\u884c\u7f16\u8bd1\u3002"),(0,r.kt)("h4",{id:"sourcemap"},"SourceMap"),(0,r.kt)("p",null,'\u5bf9\u4e8e\u751f\u4ea7\u73af\u5883\u7684\u4ee3\u7801\u6784\u5efa\u800c\u8a00\uff0c\u4f1a\u6839\u636e\u9879\u76ee\u5b9e\u9645\u60c5\u51b5\u5224\u65ad\u662f\u5426\u5f00\u542f Source Map\u3002\u5728\u5f00\u542f Source Map \u7684\u60c5\u51b5\u4e0b\uff0c\u4f18\u5148\u9009\u62e9\u4e0e\u6e90\u6587\u4ef6\u5206\u79bb\u7684\u7c7b\u578b\uff0c\u4f8b\u5982 "source-map"\u3002'),(0,r.kt)("h4",{id:"resolve"},"Resolve"),(0,r.kt)("p",null,"Webpack \u4e2d\u7684 resolve \u914d\u7f6e\u5236\u5b9a\u7684\u662f\u5728\u6784\u5efa\u65f6\u6307\u5b9a\u67e5\u627e\u6a21\u5757\u6587\u4ef6\u7684\u89c4\u5219\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"resolve.modules"),"\uff1a\u6307\u5b9a\u67e5\u627e\u6a21\u5757\u7684\u76ee\u5f55\u8303\u56f4\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"resolve.extensions"),"\uff1a\u6307\u5b9a\u67e5\u627e\u6a21\u5757\u7684\u6587\u4ef6\u7c7b\u578b\u8303\u56f4\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"resolve.mainFields"),"\uff1a\u6307\u5b9a\u67e5\u627e\u6a21\u5757\u7684 package.json \u4e2d\u4e3b\u6587\u4ef6\u7684\u5c5e\u6027\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"resolve.symlinks"),"\uff1a\u6307\u5b9a\u5728\u67e5\u627e\u6a21\u5757\u65f6\u662f\u5426\u5904\u7406\u8f6f\u8fde\u63a5\u3002")),(0,r.kt)("p",null,"\u8fd9\u4e9b\u89c4\u5219\u5728\u5904\u7406\u6bcf\u4e2a\u6a21\u5757\u65f6\u90fd\u4f1a\u6709\u6240\u5e94\u7528\uff0c\u56e0\u6b64\u5c3d\u7ba1\u5bf9\u5c0f\u578b\u9879\u76ee\u7684\u6784\u5efa\u901f\u5ea6\u6765\u8bf4\u5f71\u54cd\u4e0d\u5927\uff0c\u4f46\u5bf9\u4e8e\u5927\u578b\u7684\u6a21\u5757\u4f17\u591a\u7684\u9879\u76ee\u800c\u8a00\uff0c\u8fd9\u4e9b\u914d\u7f6e\u7684\u53d8\u5316\u5c31\u53ef\u80fd\u4ea7\u751f\u5ba2\u89c2\u7684\u6784\u5efa\u65f6\u957f\u533a\u522b\u3002"),(0,r.kt)("h3",{id:"\u5e76\u884c\u6784\u5efa\u4ee5\u63d0\u5347\u603b\u4f53\u6548\u7387"},"\u5e76\u884c\u6784\u5efa\u4ee5\u63d0\u5347\u603b\u4f53\u6548\u7387"),(0,r.kt)("h4",{id:"thread-loader"},"thread-loader"),(0,r.kt)("p",null,"\u5b83\u4f5c\u7528\u4e8e\u6a21\u5757\u7f16\u8bd1\u7684 Loader \u4e0a\uff0c\u7528\u4e8e\u5728\u7279\u5b9a Loader \u7684\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\uff0c\u4ee5\u5f00\u542f\u591a\u8fdb\u7a0b\u7684\u65b9\u5f0f\u52a0\u901f\u7f16\u8bd1\u3002"),(0,r.kt)("h2",{id:"\u6253\u5305\u9636\u6bb5\u4f18\u5316\u5206\u6790"},"\u6253\u5305\u9636\u6bb5\u4f18\u5316\u5206\u6790"),(0,r.kt)("p",null,"Webpack \u7f16\u8bd1\u8fc7\u7a0b\u53ef\u4ee5\u7ec6\u5206\u4e3a 12 \u4e2a\u9636\u6bb5\uff1a\u751f\u6210\u4f9d\u8d56\u9879\u3001\u751f\u6210 Chunk\u3001\u4f18\u5316 Module\u3001\u4f18\u5316 Chunk\u3001\u4f18\u5316 Tree\u3001\u4f18\u5316 ChunkModules\u3001\u751f\u6210 Module Ids\u3001\u751f\u6210 Chunk Ids\u3001\u751f\u6210 Hash\u3001\u751f\u6210 ModuleAssets\u3001\u751f\u6210 ChunkAssets\u3001\u4f18\u5316 Assets\u3002\u6bcf\u4e2a\u4efb\u52a1\u4f9d\u6b21\u5bf9\u6570\u636e\u8fdb\u884c\u4e00\u5b9a\u7684\u5904\u7406\uff0c\u5e76\u5c06\u7ed3\u679c\u4f20\u9012\u7ed9\u4e0b\u4e00\u4efb\u52a1\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u8fd9\u4e00\u9636\u6bb5\u7684\u4f18\u5316\u4e5f\u53ef\u4ee5\u5206\u4e3a\u4e24\u4e2a\u4e0d\u540c\u7684\u65b9\u5411\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9488\u5bf9\u67d0\u4e9b\u4efb\u52a1\uff0c\u4f7f\u7528\u6548\u7387\u66f4\u9ad8\u7684\u5de5\u5177\u6216\u914d\u7f6e\u9879\uff0c\u4ece\u800c",(0,r.kt)("strong",{parentName:"li"},"\u63d0\u5347\u5f53\u524d\u4efb\u52a1\u7684\u5de5\u4f5c\u6548\u7387"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u63d0\u5347\u7279\u5b9a\u4efb\u52a1\u7684\u4f18\u5316\u6548\u679c\uff0c\u4ee5\u51cf\u5c11\u4f20\u9012\u7ed9\u4e0b\u4e00\u4efb\u52a1\u7684\u6570\u636e\u91cf\uff0c\u4ece\u800c",(0,r.kt)("strong",{parentName:"li"},"\u63d0\u5347\u540e\u7eed\u73af\u8282\u7684\u5de5\u4f5c\u6548\u7387"),"\u3002")),(0,r.kt)("h3",{id:"\u63d0\u5347\u5f53\u524d\u4efb\u52a1\u7684\u5de5\u4f5c\u6548\u7387"},"\u63d0\u5347\u5f53\u524d\u4efb\u52a1\u7684\u5de5\u4f5c\u6548\u7387"),(0,r.kt)("p",null,"\u4e00\u822c\u5728\u9879\u76ee\u7684\u4f18\u5316\u9636\u6bb5\uff0c\u4e3b\u8981\u8017\u65f6\u7684\u4efb\u52a1\u6709\u4e24\u4e2a\uff1a\u4e00\u4e2a\u662f\u751f\u6210 ChunkAssets\uff0c\u5373\u6839\u636e Chunk \u4fe1\u606f",(0,r.kt)("strong",{parentName:"p"},"\u751f\u6210 Chunk \u7684\u4ea7\u7269\u4ee3\u7801"),"\uff1b\u53e6\u4e00\u4e2a\u662f\u4f18\u5316 Assets\uff0c\u5373",(0,r.kt)("strong",{parentName:"p"},"\u538b\u7f29 Chunk \u4ea7\u7269\u4ee3\u7801"),"\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e00\u4e2a\u4efb\u52a1\u4e3b\u8981\u5728 Webpack \u5f15\u64ce\u5185\u90e8\u7684\u6a21\u5757\u4e2d\u5904\u7406\uff0c\u76f8\u5bf9\u800c\u8a00\u4f18\u5316\u624b\u6bb5\u8f83\u5c11\uff0c\u4e3b\u8981\u96c6\u4e2d\u5728\u5229\u7528\u7f13\u5b58\u65b9\u9762\u3002\u800c\u5728\u538b\u7f29 Chunk \u4ea7\u7269\u4ee3\u7801\u7684\u8fc7\u7a0b\u4e2d\u4f1a\u7528\u5230\u4e00\u4e9b\u7b2c\u4e09\u65b9\u63d2\u4ef6\uff0c\u9009\u62e9\u4e0d\u540c\u7684\u63d2\u4ef6\uff0c\u4ee5\u53ca\u63d2\u4ef6\u4e2d\u7684\u4e0d\u540c\u914d\u7f6e\u90fd\u53ef\u80fd\u4f1a\u5bf9\u5176\u4e2d\u7684\u6548\u7387\u4ea7\u751f\u5f71\u54cd\u3002"),(0,r.kt)("h4",{id:"\u9762\u5411-js-\u7684\u538b\u7f29\u5de5\u5177"},"\u9762\u5411 JS \u7684\u538b\u7f29\u5de5\u5177"),(0,r.kt)("p",null,"Webpack4 \u5185\u7f6e\u4e86 TerserWebpackPlugin \u4f5c\u4e3a JS \u538b\u7f29\u5de5\u5177\u3002\uff08\u4e4b\u524d\u7684\u7248\u672c\u662f UglifyJSWebpackPlugin\uff09"),(0,r.kt)("p",null,"TerserWebpackPlugin \u5de5\u4f5c\u8fc7\u7a0b\u4e2d\uff0c\u5bf9\u6267\u884c\u6548\u7387\u4ea7\u751f\u5f71\u54cd\u7684\u914d\u7f6e\u4e3b\u8981\u5206\u4e3a 3 \u4e2a\u65b9\u9762\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Cache \u9009\u9879"),"\uff1a\u9ed8\u8ba4\u5f00\u542f\uff0c\u4f7f\u7528\u7f13\u5b58\u80fd\u591f\u6781\u5927\u7a0b\u5ea6\u4e0a\u63d0\u5347\u518d\u6b21\u6784\u5efa\u65f6\u7684\u5de5\u4f5c\u6548\u7387\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Parallel \u9009\u9879"),"\uff1a\u9ed8\u8ba4\u5f00\u542f\uff0c\u5e76\u53d1\u9009\u9879\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u80fd\u591f\u63d0\u5347\u8be5\u63d2\u4ef6\u7684\u5de5\u4f5c\u6548\u7387\uff0c\u4f46\u5177\u4f53\u63d0\u5347\u7684\u7a0b\u5ea6\u5219\u56e0\u9879\u76ee\u800c\u5f02\u3002\u5728\u5c0f\u578b\u9879\u76ee\u4e2d\uff0c\u591a\u8fdb\u7a0b\u901a\u4fe1\u7684\u989d\u5916\u6d88\u8017\u53ef\u80fd\u4f1a\u62b5\u6d88\u5176\u5e26\u6765\u7684\u76ca\u5904\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"terserOptions \u9009\u9879"),"\uff1a\u5373 Terser \u5de5\u5177\u4e2d\u7684 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/terser/terser#minify-options"},"minify")," \u9009\u9879\u96c6\u5408\u3002\u8fd9\u4e9b\u9009\u9879\u662f\u5bf9\u5177\u4f53\u538b\u7f29\u5904\u7406\u8fc7\u7a0b\u4ea7\u751f\u5f71\u54cd\u7684\u914d\u7f6e\u9879\u3002")),(0,r.kt)("p",null,"\u6211\u4eec\u4e3b\u8981\u6765\u770b\u5176\u4e2d\u7684 compress \u548c mangle \u9009\u9879\uff0c\u4e0d\u540c\u9009\u9879\u7684\u538b\u7f29\u7ed3\u679c\u5982\u4e0b\u9762\u7684\u4ee3\u7801\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'//\u6e90\u4ee3\u7801./src/example-terser-opts.js\nfunction HelloWorld() {\n  const foo = \'1234\'\n  console.log(HelloWorld, foo)\n}\nHelloWorld()\n//\u9ed8\u8ba4\u914d\u7f6e\u9879compress={}, mangle=true\u7684\u538b\u7f29\u540e\u4ee3\u7801\nfunction(e,t){!function e(){console.log(e,"1234")}()}});\n//compress=false\u7684\u538b\u7f29\u540e\u4ee3\u7801\nfunction(e,r){function t(){var e="1234";console.log(t,e)}t()}});\n//mangle=false\u7684\u538b\u7f29\u4ee3\u7801\nfunction(module,exports){!function HelloWorld(){console.log(HelloWorld,"1234")}()}});\n//compress=false\uff0cmangle=false\u7684\u538b\u7f29\u540e\u4ee3\u7801\nfunction(module,exports){function HelloWorld(){var foo="1234";console.log(HelloWorld,foo)}HelloWorld()}});\n')),(0,r.kt)("p",null,"\u4ece\u4e0a\u9762\u4f8b\u5b50\u53ef\u4ee5\u770b\u51fa\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"compress")," \u53c2\u6570\u7684\u4f5c\u7528\u662f\u6267\u884c\u7279\u5b9a\u7684\u538b\u7f29\u7b56\u7565\uff0c\u4f8b\u5982\u7701\u7565\u53d8\u91cf\u8d4b\u503c\u7684\u8bed\u53e5\uff0c\u4ece\u800c\u5c06\u53d8\u91cf\u7684\u503c\u76f4\u63a5\u66ff\u6362\u5230\u5f15\u5165\u53d8\u91cf\u7684\u4f4d\u7f6e\u4e0a\uff0c\u51cf\u5c0f\u4ee3\u7801\u4f53\u79ef\u3002\u800c\u5f53 compress \u53c2\u6570\u4e3a false \u65f6\uff0c\u8fd9\u7c7b\u538b\u7f29\u7b56\u7565\u4e0d\u518d\u751f\u6548\uff0c\u5bf9\u538b\u7f29\u8d28\u91cf\u7684\u5f71\u54cd\u6709\u9650\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mangle")," \u53c2\u6570\u7684\u4f5c\u7528\u662f\u5bf9\u6e90\u4ee3\u7801\u4e2d\u7684\u53d8\u91cf\u4e0e\u51fd\u6570\u540d\u79f0\u8fdb\u884c\u538b\u7f29\uff0c\u5bf9\u4ee3\u7801\u538b\u7f29\u7684\u6548\u679c\u5f71\u54cd\u975e\u5e38\u5927\u3002")),(0,r.kt)("h4",{id:"\u9762\u5411-css-\u7684\u538b\u7f29\u5de5\u5177"},"\u9762\u5411 CSS \u7684\u538b\u7f29\u5de5\u5177"),(0,r.kt)("p",null,"CSS \u540c\u6837\u6709\u51e0\u79cd\u538b\u7f29\u5de5\u5177\u53ef\u4f9b\u9009\u62e9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OptimizeCSSAssetsPlugin\uff08\u5728 Create-React-App \u4e2d\u4f7f\u7528\uff09"),(0,r.kt)("li",{parentName:"ul"},"OptimizeCSSNanoPlugin\uff08\u5728 VUE-CLI \u4e2d\u4f7f\u7528\uff09"),(0,r.kt)("li",{parentName:"ul"},"CSSMinimizerWebpackPlugin\uff082020 \u5e74 Webpack \u793e\u533a\u65b0\u53d1\u5e03\u7684 CSS \u538b\u7f29\u63d2\u4ef6\uff09")),(0,r.kt)("p",null,"\u8fd9\u4e09\u4e2a\u63d2\u4ef6\u5728\u538b\u7f29 CSS \u4ee3\u7801\u529f\u80fd\u65b9\u9762\uff0c\u90fd\u9ed8\u8ba4\u57fa\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://cssnano.co/"},"cssnano")," \u5b9e\u73b0\uff0c\u56e0\u6b64\u5728\u538b\u7f29\u8d28\u91cf\u65b9\u9762\u6ca1\u6709\u4ec0\u4e48\u5dee\u522b\u3002\u5728\u538b\u7f29\u6548\u7387\u65b9\u9762\uff0c\u6700\u65b0\u53d1\u5e03\u7684 CSSMinimizerWebpackPlugin \u652f\u6301\u4e86\u7f13\u5b58\u548c\u591a\u8fdb\u7a0b\uff0c\u8fd9\u662f\u53e6\u5916\u4e24\u4e2a\u5de5\u5177\u4e0d\u5177\u5907\u7684\u3002"),(0,r.kt)("h3",{id:"\u63d0\u5347\u540e\u7eed\u73af\u8282\u7684\u5de5\u4f5c\u6548\u7387"},"\u63d0\u5347\u540e\u7eed\u73af\u8282\u7684\u5de5\u4f5c\u6548\u7387"),(0,r.kt)("p",null,"\u4f18\u5316\u9636\u6bb5\u7684\u53e6\u4e00\u7c7b\u4f18\u5316\u65b9\u5411\u662f\u901a\u8fc7\u5bf9\u672c\u73af\u8282\u7684\u5904\u7406\u51cf\u5c11\u540e\u7eed\u73af\u8282\u5904\u7406\u5185\u5bb9\uff0c\u4ee5\u4fbf\u63d0\u5347\u540e\u7eed\u73af\u8282\u7684\u5de5\u4f5c\u6548\u7387\u3002\u6bd4\u5982\uff1aSplit Chunks\uff08\u5206\u5305\uff09 \u548c Tree Shaking\uff08\u6447\u6811\uff09\u3002"),(0,r.kt)("h4",{id:"split-chunks"},"Split Chunks"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Split Chunks\uff08\u5206\u5305\uff09\u662f\u6307\u5728 Chunk \u751f\u6210\u4e4b\u540e\uff0c\u5c06\u539f\u5148\u4ee5\u5165\u53e3\u70b9\u6765\u5212\u5206\u7684 Chunks \u6839\u636e\u4e00\u5b9a\u7684\u89c4\u5219\uff08\u4f8b\u5982\u5f02\u6b65\u5f15\u5165\u6216\u5206\u79bb\u516c\u5171\u4f9d\u8d56\u7b49\u539f\u5219\uff09\uff0c\u5206\u79bb\u51fa\u5b50 Chunk \u7684\u8fc7\u7a0b\u3002")),(0,r.kt)("p",null,"Split Chunks \u6709\u8bf8\u591a\u4f18\u70b9\uff0c\u4f8b\u5982\u6709\u5229\u4e8e\u7f13\u5b58\u547d\u4e2d\u3001\u6709\u5229\u4e8e\u8fd0\u884c\u65f6\u7684\u6301\u4e45\u5316\u6587\u4ef6\u7f13\u5b58\u7b49\u3002\u5176\u4e2d\u6709\u4e00\u7c7b\u60c5\u51b5\u80fd\u63d0\u5347\u540e\u7eed\u73af\u8282\u7684\u5de5\u4f5c\u6548\u7387\uff0c\u5373\u901a\u8fc7\u5206\u5305\u6765\u62bd\u79bb\u591a\u4e2a\u5165\u53e3\u70b9\u5f15\u7528\u7684\u516c\u5171\u4f9d\u8d56\u3002"),(0,r.kt)("p",null,"Webpack4 \u5185\u7f6e\u4e86 SplitChunksPlugin \u63d2\u4ef6\uff0c\u8be5\u63d2\u4ef6\u5728 production \u6a21\u5f0f\u4e0b\u9ed8\u8ba4\u542f\u7528\u3002\u5176\u9ed8\u8ba4\u7684\u5206\u5305\u89c4\u5219\u53ea\u4f1a\u5206\u79bb\u52a8\u6001\u5f15\u5165\u7684\u6a21\u5757\uff0c\u5728\u5904\u7406\u52a8\u6001\u5f15\u5165\u7684\u6a21\u5757\u65f6\u80fd\u591f\u81ea\u52a8\u5206\u79bb\u5176\u4e2d\u7684\u516c\u5171\u4f9d\u8d56\u3002\u800c\u5bf9\u4e8e\u591a\u5165\u53e3\u9759\u6001\u5f15\u7528\u76f8\u540c\u4f9d\u8d56\u5305\u7684\u60c5\u51b5\uff0c\u5219\u4e0d\u4f1a\u5904\u7406\u5206\u5305\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"chunks:'all'")," \u5c06\u6240\u6709\u7684\u4f9d\u8d56\u60c5\u51b5\u90fd\u8fdb\u884c\u5206\u5305\u5904\u7406\uff0c\u4ece\u800c\u51cf\u5c11\u4e86\u91cd\u590d\u5f15\u5165\u76f8\u540c\u6a21\u5757\u4ee3\u7801\u7684\u60c5\u51b5\u3002"),(0,r.kt)("h4",{id:"tree-shaking"},"Tree Shaking"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tree Shaking\uff08\u6447\u6811\uff09\u662f\u6307\u5728\u6784\u5efa\u6253\u5305\u8fc7\u7a0b\u4e2d\uff0c\u79fb\u9664\u90a3\u4e9b\u5f15\u5165\u4f46\u672a\u88ab\u4f7f\u7528\u7684\u4ee3\u7801\uff08Dead-code elimination\uff09\u3002")),(0,r.kt)("p",null,"\u6ce8\u610f\u51e0\u70b9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"ES Module"),"\uff1a\u53ea\u6709\u901a\u8fc7 ESM \u5bfc\u5165\u5bfc\u51fa\u7684\u6a21\u5757\u624d\u80fd\u88ab Tree Shaking \u547d\u4e2d\uff0c\u8fd9\u5f97\u76ca\u4e8e ESM \u80fd\u5728\u7f16\u8bd1\u9636\u6bb5\u5bf9\u4f9d\u8d56\u8fdb\u884c\u9759\u6001\u5206\u6790\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5f15\u5165\u65b9\u5f0f"),"\uff1a\u4ee5 default \u65b9\u5f0f\u5f15\u5165\u7684\u6a21\u5757\uff0c\u65e0\u6cd5\u88ab Tree Shaking \u547d\u4e2d\uff1b\u800c\u5f15\u5165\u5355\u4e2a\u5bfc\u51fa\u5bf9\u8c61\u7684\u65b9\u5f0f\uff0c\u65e0\u8bba\u662f\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"import * as xxx")," \u7684\u8bed\u6cd5\uff0c\u8fd8\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"import {xxx}")," \u7684\u8bed\u6cd5\uff0c\u90fd\u53ef\u4ee5 Tree Shaking \u547d\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"SideEffects"),"\uff1a\u5728 Webpack4 \u4e2d\uff0c\u4f1a\u6839\u636e\u4f9d\u8d56\u6a21\u5757 package.json \u4e2d\u7684 sideEffects \u5c5e\u6027\u6765\u786e\u8ba4\u5bf9\u5e94\u7684\u4f9d\u8d56\u5305\u4ee3\u7801\u662f\u5426\u4f1a\u4ea7\u751f\u526f\u4f5c\u7528\u3002\u53ea\u6709 sideEffects \u4e3a false \u7684\u4f9d\u8d56\u5305\uff08\u6216\u4e0d\u5728 sideEffects \u5bf9\u5e94\u6570\u7ec4\u4e2d\u7684\u6587\u4ef6\uff09\uff0c\u624d\u53ef\u4ee5\u5b9e\u73b0\u5b89\u5168\u79fb\u9664\u672a\u4f7f\u7528\u4ee3\u7801\u7684\u529f\u80fd\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Babel"),"\uff1a\u5728 babel7 \u4e4b\u524d\u7684\u7248\u672c\u7684 babel-preset-env \u4e2d\uff0cmodules \u9ed8\u8ba4\u662f commonjs\uff0c\u56e0\u6b64\u5728\u5904\u7406\u6a21\u5757\u65f6\uff0c\u5373\u4f7f\u539f\u6765\u662f ESM \u6a21\u5757\u5316\u65b9\u6848\u4e5f\u4f1a\u88ab\u53d8\u5f02\u6210 commonjs \u65b9\u6848\uff0c\u800c\u65e0\u6cd5\u5728\u4f18\u5316\u9636\u6bb5\u88ab TreeShaking \u547d\u4e2d\uff1b\u800c\u5728 babel7 \u4e2d\uff0cmodules \u9ed8\u8ba4\u4e3a auto\uff0c\u8fd9\u6837\u5728\u8f6c\u6362\u4e2d\u5982\u679c\u662f ESM \u6a21\u5757\u4e0d\u4f1a\u88ab\u8f6c\u6362\u4e3a commonjs\uff0c\u4e5f\u80fd\u5728\u540e\u9762\u7684\u4f18\u5316\u9636\u6bb5\u88ab TreeShaking \u547d\u4e2d\u3002")),(0,r.kt)("h2",{id:"\u4f18\u5316\u65b9\u6848\u603b\u7ed3"},"\u4f18\u5316\u65b9\u6848\u603b\u7ed3"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u9636\u6bb5\u4f18\u5316\uff1a")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u51cf\u5c11\u6267\u884c\u7f16\u8bd1\u7684\u6a21\u5757",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"IgnorePlugin"),(0,r.kt)("li",{parentName:"ul"},"\u6309\u9700\u5f15\u5165"),(0,r.kt)("li",{parentName:"ul"},"DllPlugin"),(0,r.kt)("li",{parentName:"ul"},"Externals"))),(0,r.kt)("li",{parentName:"ol"},"\u63d0\u5347\u5355\u4e2a\u6a21\u5757\u7f16\u8bd1\u901f\u5ea6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"include/exclude"),(0,r.kt)("li",{parentName:"ul"},"noParse"),(0,r.kt)("li",{parentName:"ul"},"SourceMap"),(0,r.kt)("li",{parentName:"ul"},"Resolve"))),(0,r.kt)("li",{parentName:"ol"},"\u5e76\u884c\u6784\u5efa",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"thread-loader")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6253\u5305\u9636\u6bb5\u4f18\u5316\uff1a")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u63d0\u5347\u5f53\u524d\u4efb\u52a1\u7684\u5de5\u4f5c\u6548\u7387",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u538b\u7f29 JS"),(0,r.kt)("li",{parentName:"ul"},"\u538b\u7f29 CSS"))),(0,r.kt)("li",{parentName:"ol"},"\u63d0\u5347\u540e\u7eed\u73af\u8282\u7684\u5de5\u4f5c\u6548\u7387",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Split Chunks"),(0,r.kt)("li",{parentName:"ul"},"Tree Shaking")))))}c.isMDXComponent=!0}}]);