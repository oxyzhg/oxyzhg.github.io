(self.webpackChunkfex=self.webpackChunkfex||[]).push([[7331],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),o=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=o(r),m=l,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:l,i[1]=c;for(var o=2;o<a;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3540:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return u},default:function(){return s}});var n=r(2122),l=r(9756),a=(r(7294),r(3905)),i=["components"],c={id:"project-practice",title:"\u9879\u76ee\u6027\u80fd\u4f18\u5316\u5b9e\u8df5"},p=void 0,o={unversionedId:"performance/project-practice",id:"performance/project-practice",isDocsHomePage:!1,title:"\u9879\u76ee\u6027\u80fd\u4f18\u5316\u5b9e\u8df5",description:"\u672c\u6587\u4ee5 Vue \u9879\u76ee\u4e3a\u4f8b\uff0c\u5206\u522b\u4ece\u4ee3\u7801\u5c42\u9762\u4f18\u5316\u3001webpack \u5c42\u9762\u4f18\u5316\u3001\u57fa\u7840\u7684 Web \u6280\u672f\u4f18\u5316\u4e09\u4e2a\u65b9\u9762\uff0c\u6982\u8ff0\u5e38\u89c1\u7684 Web \u4f18\u5316\u65b9\u5f0f\u3002\u5176\u4e2d\u4e00\u4e9b\u4f18\u5316\u65b9\u5f0f\u662f\u901a\u7528\u7684\uff0c\u53ef\u4ee5\u7528\u5230\u5176\u4ed6 SPA \u6846\u67b6\u5f00\u53d1\u7684\u5e94\u7528\u4e2d\u3002",source:"@site/docs/performance/project-practice.md",sourceDirName:"performance",slug:"/performance/project-practice",permalink:"/fex/docs/performance/project-practice",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/performance/project-practice.md",version:"current",frontMatter:{id:"project-practice",title:"\u9879\u76ee\u6027\u80fd\u4f18\u5316\u5b9e\u8df5"},sidebar:"performance",previous:{title:"Webpack \u6784\u5efa\u4f18\u5316\u5206\u6790",permalink:"/fex/docs/engineering/webpack/optimization-analysis"}},u=[{value:"\u4ee3\u7801\u5c42\u9762\u7684\u4f18\u5316",id:"\u4ee3\u7801\u5c42\u9762\u7684\u4f18\u5316",children:[{value:"v-if \u548c v-show \u533a\u5206\u4f7f\u7528\u573a\u666f",id:"v-if-\u548c-v-show-\u533a\u5206\u4f7f\u7528\u573a\u666f",children:[]},{value:"computed \u548c watch \u533a\u5206\u4f7f\u7528\u573a\u666f",id:"computed-\u548c-watch-\u533a\u5206\u4f7f\u7528\u573a\u666f",children:[]},{value:"v-for \u904d\u5386\u5fc5\u987b\u4e3a item \u6dfb\u52a0 key\uff0c\u4e14\u907f\u514d\u540c\u65f6\u4f7f\u7528 v-if",id:"v-for-\u904d\u5386\u5fc5\u987b\u4e3a-item-\u6dfb\u52a0-key\uff0c\u4e14\u907f\u514d\u540c\u65f6\u4f7f\u7528-v-if",children:[]},{value:"\u957f\u5217\u8868\u6027\u80fd\u4f18\u5316",id:"\u957f\u5217\u8868\u6027\u80fd\u4f18\u5316",children:[]},{value:"\u4e8b\u4ef6\u7684\u9500\u6bc1",id:"\u4e8b\u4ef6\u7684\u9500\u6bc1",children:[]},{value:"\u56fe\u7247\u8d44\u6e90\u61d2\u52a0\u8f7d",id:"\u56fe\u7247\u8d44\u6e90\u61d2\u52a0\u8f7d",children:[]},{value:"\u8def\u7531\u61d2\u52a0\u8f7d",id:"\u8def\u7531\u61d2\u52a0\u8f7d",children:[]},{value:"\u7b2c\u4e09\u65b9\u63d2\u4ef6\u7684\u6309\u9700\u5f15\u5165",id:"\u7b2c\u4e09\u65b9\u63d2\u4ef6\u7684\u6309\u9700\u5f15\u5165",children:[]},{value:"\u4f18\u5316\u65e0\u9650\u5217\u8868\u7684\u6027\u80fd",id:"\u4f18\u5316\u65e0\u9650\u5217\u8868\u7684\u6027\u80fd",children:[]}]},{value:"Webpack \u5c42\u9762\u7684\u4f18\u5316",id:"webpack-\u5c42\u9762\u7684\u4f18\u5316",children:[{value:"\u538b\u7f29\u56fe\u7247",id:"\u538b\u7f29\u56fe\u7247",children:[]},{value:"\u51cf\u5c11 ES6 \u8f6c\u4e3a ES5 \u7684\u5197\u4f59\u4ee3\u7801",id:"\u51cf\u5c11-es6-\u8f6c\u4e3a-es5-\u7684\u5197\u4f59\u4ee3\u7801",children:[]},{value:"\u63d0\u53d6\u516c\u5171\u4ee3\u7801",id:"\u63d0\u53d6\u516c\u5171\u4ee3\u7801",children:[]},{value:"\u4f18\u5316 SourceMap",id:"\u4f18\u5316-sourcemap",children:[]},{value:"\u6784\u5efa\u7ed3\u679c\u8f93\u51fa\u5206\u6790",id:"\u6784\u5efa\u7ed3\u679c\u8f93\u51fa\u5206\u6790",children:[]}]},{value:"Web \u5c42\u9762\u7684\u4f18\u5316",id:"web-\u5c42\u9762\u7684\u4f18\u5316",children:[{value:"\u5f00\u542f gzip \u538b\u7f29",id:"\u5f00\u542f-gzip-\u538b\u7f29",children:[]},{value:"\u6d4f\u89c8\u5668\u7f13\u5b58",id:"\u6d4f\u89c8\u5668\u7f13\u5b58",children:[]},{value:"CDN \u7684\u4f7f\u7528",id:"cdn-\u7684\u4f7f\u7528",children:[]},{value:"\u4f7f\u7528 Chrome Performance \u67e5\u627e\u6027\u80fd\u74f6\u9888",id:"\u4f7f\u7528-chrome-performance-\u67e5\u627e\u6027\u80fd\u74f6\u9888",children:[]}]}],d={toc:u};function s(e){var t=e.components,r=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ee5 Vue \u9879\u76ee\u4e3a\u4f8b\uff0c\u5206\u522b\u4ece\u4ee3\u7801\u5c42\u9762\u4f18\u5316\u3001webpack \u5c42\u9762\u4f18\u5316\u3001\u57fa\u7840\u7684 Web \u6280\u672f\u4f18\u5316\u4e09\u4e2a\u65b9\u9762\uff0c\u6982\u8ff0\u5e38\u89c1\u7684 Web \u4f18\u5316\u65b9\u5f0f\u3002\u5176\u4e2d\u4e00\u4e9b\u4f18\u5316\u65b9\u5f0f\u662f\u901a\u7528\u7684\uff0c\u53ef\u4ee5\u7528\u5230\u5176\u4ed6 SPA \u6846\u67b6\u5f00\u53d1\u7684\u5e94\u7528\u4e2d\u3002"),(0,a.kt)("h2",{id:"\u4ee3\u7801\u5c42\u9762\u7684\u4f18\u5316"},"\u4ee3\u7801\u5c42\u9762\u7684\u4f18\u5316"),(0,a.kt)("h3",{id:"v-if-\u548c-v-show-\u533a\u5206\u4f7f\u7528\u573a\u666f"},"v-if \u548c v-show \u533a\u5206\u4f7f\u7528\u573a\u666f"),(0,a.kt)("p",null,"v-if \u662f\u771f\u6b63\u7684\u6761\u4ef6\u6e32\u67d3\uff0c\u56e0\u4e3a\u5b83\u4f1a\u786e\u4fdd\u5728\u5207\u6362\u8fc7\u7a0b\u4e2d\u6761\u4ef6\u5757\u5185\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u548c\u5b50\u7ec4\u4ef6\u9002\u5f53\u5730\u88ab\u9500\u6bc1\u548c\u91cd\u5efa\uff1b\u4e5f\u662f",(0,a.kt)("strong",{parentName:"p"},"\u60f0\u6027\u7684"),"\uff1a\u5982\u679c\u5728\u521d\u59cb\u6e32\u67d3\u65f6\u6761\u4ef6\u4e3a\u5047\uff0c\u5219\u4ec0\u4e48\u4e5f\u4e0d\u505a\u2014\u2014\u76f4\u5230\u6761\u4ef6\u7b2c\u4e00\u6b21\u53d8\u4e3a\u771f\u65f6\uff0c\u624d\u4f1a\u5f00\u59cb\u6e32\u67d3\u6761\u4ef6\u5757\u3002"),(0,a.kt)("p",null,"v-show \u5c31\u7b80\u5355\u5f97\u591a\uff0c\u4e0d\u7ba1\u521d\u59cb\u6761\u4ef6\u662f\u4ec0\u4e48\uff0c\u5143\u7d20\u603b\u662f\u4f1a\u88ab\u6e32\u67d3\uff0c\u5e76\u4e14\u53ea\u662f\u7b80\u5355\u5730\u57fa\u4e8e CSS \u7684 display \u5c5e\u6027\u8fdb\u884c\u5207\u6362\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\uff0cv-if \u9002\u7528\u4e8e\u5728\u8fd0\u884c\u65f6\u5f88\u5c11\u6539\u53d8\u6761\u4ef6\uff0c\u4e0d\u9700\u8981\u9891\u7e41\u5207\u6362\u6761\u4ef6\u7684\u573a\u666f\uff1bv-show \u5219\u9002\u7528\u4e8e\u9700\u8981\u975e\u5e38\u9891\u7e41\u5207\u6362\u6761\u4ef6\u7684\u573a\u666f\u3002"),(0,a.kt)("h3",{id:"computed-\u548c-watch-\u533a\u5206\u4f7f\u7528\u573a\u666f"},"computed \u548c watch \u533a\u5206\u4f7f\u7528\u573a\u666f"),(0,a.kt)("p",null,"computed\uff1a\u662f\u8ba1\u7b97\u5c5e\u6027\uff0c\u4f9d\u8d56\u5176\u5b83\u5c5e\u6027\u503c\uff0c\u5e76\u4e14 computed \u7684\u503c\u6709\u7f13\u5b58\uff0c\u53ea\u6709\u5b83\u4f9d\u8d56\u7684\u5c5e\u6027\u503c\u53d1\u751f\u6539\u53d8\uff0c\u4e0b\u4e00\u6b21\u83b7\u53d6 computed \u7684\u503c\u65f6\u624d\u4f1a\u91cd\u65b0\u8ba1\u7b97 computed \u7684\u503c\u3002"),(0,a.kt)("p",null,"watch\uff1a\u66f4\u591a\u7684\u662f\u89c2\u5bdf\u7684\u4f5c\u7528\uff0c\u7c7b\u4f3c\u4e8e\u67d0\u4e9b\u6570\u636e\u7684\u76d1\u542c\u56de\u8c03 \uff0c\u6bcf\u5f53\u76d1\u542c\u7684\u6570\u636e\u53d8\u5316\u65f6\u90fd\u4f1a\u6267\u884c\u56de\u8c03\u8fdb\u884c\u540e\u7eed\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u573a\u666f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53\u6211\u4eec\u9700\u8981\u8fdb\u884c\u6570\u503c\u8ba1\u7b97\uff0c\u5e76\u4e14\u4f9d\u8d56\u4e8e\u5176\u5b83\u6570\u636e\u65f6\uff0c\u5e94\u8be5\u4f7f\u7528 computed\uff0c\u56e0\u4e3a\u53ef\u4ee5\u5229\u7528 computed \u7684\u7f13\u5b58\u7279\u6027\uff0c\u907f\u514d\u6bcf\u6b21\u83b7\u53d6\u503c\u65f6\uff0c\u90fd\u8981\u91cd\u65b0\u8ba1\u7b97\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u6211\u4eec\u9700\u8981\u5728\u6570\u636e\u53d8\u5316\u65f6\u6267\u884c\u5f02\u6b65\u6216\u5f00\u9500\u8f83\u5927\u7684\u64cd\u4f5c\u65f6\uff0c\u5e94\u8be5\u4f7f\u7528 watch\uff0c\u4f7f\u7528 watch \u9009\u9879\u5141\u8bb8\u6211\u4eec\u6267\u884c\u5f02\u6b65\u64cd\u4f5c\uff0c\u9650\u5236\u6211\u4eec\u6267\u884c\u8be5\u64cd\u4f5c\u7684\u9891\u7387\uff0c\u5e76\u5728\u6211\u4eec\u5f97\u5230\u6700\u7ec8\u7ed3\u679c\u524d\uff0c\u8bbe\u7f6e\u4e2d\u95f4\u72b6\u6001\u3002\u8fd9\u4e9b\u90fd\u662f\u8ba1\u7b97\u5c5e\u6027\u65e0\u6cd5\u505a\u5230\u7684\u3002")),(0,a.kt)("h3",{id:"v-for-\u904d\u5386\u5fc5\u987b\u4e3a-item-\u6dfb\u52a0-key\uff0c\u4e14\u907f\u514d\u540c\u65f6\u4f7f\u7528-v-if"},"v-for \u904d\u5386\u5fc5\u987b\u4e3a item \u6dfb\u52a0 key\uff0c\u4e14\u907f\u514d\u540c\u65f6\u4f7f\u7528 v-if"),(0,a.kt)("p",null,"\u5217\u8868\u6e32\u67d3\u65f6\uff0c\u9700\u8981\u4e3a\u6bcf\u4e00\u9879 item \u8bbe\u7f6e\u552f\u4e00 key \u503c\uff0c\u65b9\u4fbf DOM Diff \u65f6\u5feb\u901f\u627e\u5230\u53ef\u4ee5\u590d\u7528\u7684\u8282\u70b9\uff0c\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684 DOM \u64cd\u4f5c\uff0c\u63d0\u5347\u6e32\u67d3\u6027\u80fd\u3002"),(0,a.kt)("p",null,"v-for \u6bd4 v-if \u4f18\u5148\u7ea7\u66f4\u9ad8\uff0c\u5982\u679c\u6bcf\u4e00\u6b21\u90fd\u9700\u8981\u904d\u5386\u6574\u4e2a\u6570\u7ec4\uff0c\u5c06\u4f1a\u5f71\u54cd\u901f\u5ea6\uff0c\u5c24\u5176\u662f\u5f53\u4e4b\u9700\u8981\u6e32\u67d3\u5f88\u5c0f\u4e00\u90e8\u5206\u7684\u65f6\u5019\uff0c\u5fc5\u8981\u60c5\u51b5\u4e0b\u5e94\u8be5\u66ff\u6362\u6210 computed \u5c5e\u6027\u3002"),(0,a.kt)("h3",{id:"\u957f\u5217\u8868\u6027\u80fd\u4f18\u5316"},"\u957f\u5217\u8868\u6027\u80fd\u4f18\u5316"),(0,a.kt)("p",null,"Vue \u4f1a\u901a\u8fc7 Object.defineProperty \u5bf9\u6570\u636e\u8fdb\u884c\u52ab\u6301\uff0c\u6765\u5b9e\u73b0\u89c6\u56fe\u54cd\u5e94\u6570\u636e\u7684\u53d8\u5316\uff0c\u7136\u800c\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u7684\u7ec4\u4ef6\u5c31\u662f\u7eaf\u7cb9\u7684\u6570\u636e\u5c55\u793a\uff0c\u4e0d\u4f1a\u6709\u4efb\u4f55\u6539\u53d8\uff0c\u6211\u4eec\u5c31\u4e0d\u9700\u8981 Vue \u6765\u52ab\u6301\u6211\u4eec\u7684\u6570\u636e\uff0c\u5728\u5927\u91cf\u6570\u636e\u5c55\u793a\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd9\u80fd\u591f\u5f88\u660e\u663e\u7684\u51cf\u5c11\u7ec4\u4ef6\u521d\u59cb\u5316\u7684\u65f6\u95f4\u3002\u53ef\u4ee5\u901a\u8fc7 Object.freeze \u65b9\u6cd5\u6765\u51bb\u7ed3\u4e00\u4e2a\u5bf9\u8c61\uff0c\u4e00\u65e6\u88ab\u51bb\u7ed3\u7684\u5bf9\u8c61\u5c31\u518d\u4e5f\u4e0d\u80fd\u88ab\u4fee\u6539\u4e86\u3002"),(0,a.kt)("h3",{id:"\u4e8b\u4ef6\u7684\u9500\u6bc1"},"\u4e8b\u4ef6\u7684\u9500\u6bc1"),(0,a.kt)("p",null,"Vue \u7ec4\u4ef6\u9500\u6bc1\u65f6\uff0c\u4f1a\u81ea\u52a8\u6e05\u7406\u5b83\u4e0e\u5176\u5b83\u5b9e\u4f8b\u7684\u8fde\u63a5\uff0c\u89e3\u7ed1\u5b83\u7684\u5168\u90e8\u6307\u4ee4\u53ca\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u4f46\u662f\u4ec5\u9650\u4e8e\u7ec4\u4ef6\u672c\u8eab\u7684\u4e8b\u4ef6\u3002\u5982\u679c\u4f7f\u7528 addEventListene \u7b49\u65b9\u5f0f\u81ea\u5b9a\u4e49\u4e8b\u4ef6\uff0c\u662f\u4e0d\u4f1a\u81ea\u52a8\u9500\u6bc1\u7684\uff0c\u6211\u4eec\u9700\u8981\u5728\u7ec4\u4ef6\u9500\u6bc1\u65f6\u624b\u52a8\u79fb\u9664\u8fd9\u4e9b\u4e8b\u4ef6\u7684\u76d1\u542c\uff0c\u4ee5\u514d\u9020\u6210\u5185\u5b58\u6cc4\u9732\u3002\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  created() {\n    addEventListener('click', clickHandler, false);\n  },\n  beforeDestroy() {\n    removeEventListener('click', clickHandler, false);\n  },\n};\n")),(0,a.kt)("h3",{id:"\u56fe\u7247\u8d44\u6e90\u61d2\u52a0\u8f7d"},"\u56fe\u7247\u8d44\u6e90\u61d2\u52a0\u8f7d"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u56fe\u7247\u8fc7\u591a\u7684\u9875\u9762\uff0c\u4e3a\u4e86\u52a0\u901f\u9875\u9762\u52a0\u8f7d\u901f\u5ea6\uff0c\u6240\u4ee5\u5f88\u591a\u65f6\u5019\u6211\u4eec\u9700\u8981\u5c06\u9875\u9762\u5185\u672a\u51fa\u73b0\u5728\u53ef\u89c6\u533a\u57df\u5185\u7684\u56fe\u7247\u5148\u4e0d\u505a\u52a0\u8f7d\uff0c\u7b49\u5230\u6eda\u52a8\u5230\u53ef\u89c6\u533a\u57df\u540e\u518d\u53bb\u52a0\u8f7d\u3002\u8fd9\u6837\u5bf9\u4e8e\u9875\u9762\u52a0\u8f7d\u6027\u80fd\u4e0a\u4f1a\u6709\u5f88\u5927\u7684\u63d0\u5347\uff0c\u4e5f\u63d0\u9ad8\u4e86\u7528\u6237\u4f53\u9a8c\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5728\u9879\u76ee\u4e2d\u53ef\u4ee5\u4f7f\u7528 vue-lazyload \u63d2\u4ef6\uff0c\u6216\u8005\u901a\u8fc7 IntersectionObserver API \u81ea\u5b9a\u4e49\u5b9e\u73b0\u3002"),(0,a.kt)("h3",{id:"\u8def\u7531\u61d2\u52a0\u8f7d"},"\u8def\u7531\u61d2\u52a0\u8f7d"),(0,a.kt)("p",null,"Vue \u662f\u5355\u9875\u9762\u5e94\u7528\uff0c\u53ef\u80fd\u4f1a\u6709\u5f88\u591a\u7684\u8def\u7531\u5f15\u5165 \uff0c\u8fd9\u6837\u4f7f\u7528 webpcak \u6253\u5305\u540e\u7684\u6587\u4ef6\u5f88\u5927\uff0c\u5f53\u8fdb\u5165\u9996\u9875\u65f6\uff0c\u52a0\u8f7d\u7684\u8d44\u6e90\u8fc7\u591a\uff0c\u9875\u9762\u4f1a\u51fa\u73b0\u767d\u5c4f\u7684\u60c5\u51b5\uff0c\u4e0d\u5229\u4e8e\u7528\u6237\u4f53\u9a8c\u3002\u5982\u679c\u6211\u4eec\u80fd\u628a\u4e0d\u540c\u8def\u7531\u5bf9\u5e94\u7684\u7ec4\u4ef6\u5206\u5272\u6210\u4e0d\u540c\u7684\u4ee3\u7801\u5757\uff0c\u7136\u540e\u5f53\u8def\u7531\u88ab\u8bbf\u95ee\u7684\u65f6\u5019\u624d\u52a0\u8f7d\u5bf9\u5e94\u7684\u7ec4\u4ef6\uff0c\u8fd9\u6837\u5c31\u66f4\u52a0\u9ad8\u6548\u4e86\u3002\u8fd9\u6837\u4f1a\u5927\u5927\u63d0\u9ad8\u9996\u5c4f\u663e\u793a\u7684\u901f\u5ea6\uff0c\u4f46\u662f\u53ef\u80fd\u5176\u4ed6\u7684\u9875\u9762\u7684\u901f\u5ea6\u5c31\u4f1a\u964d\u4e0b\u6765\u3002"),(0,a.kt)("h3",{id:"\u7b2c\u4e09\u65b9\u63d2\u4ef6\u7684\u6309\u9700\u5f15\u5165"},"\u7b2c\u4e09\u65b9\u63d2\u4ef6\u7684\u6309\u9700\u5f15\u5165"),(0,a.kt)("p",null,"\u6211\u4eec\u5728\u9879\u76ee\u4e2d\u7ecf\u5e38\u4f1a\u9700\u8981\u5f15\u5165\u7b2c\u4e09\u65b9\u63d2\u4ef6\uff0c\u5982\u679c\u6211\u4eec\u76f4\u63a5\u5f15\u5165\u6574\u4e2a\u63d2\u4ef6\uff0c\u4f1a\u5bfc\u81f4\u9879\u76ee\u7684\u4f53\u79ef\u592a\u5927\uff0c\u6211\u4eec\u53ef\u4ee5\u501f\u52a9 babel-plugin-component \uff0c\u7136\u540e\u53ef\u4ee5\u53ea\u5f15\u5165\u9700\u8981\u7684\u7ec4\u4ef6\uff0c\u4ee5\u8fbe\u5230\u51cf\u5c0f\u9879\u76ee\u4f53\u79ef\u7684\u76ee\u7684\u3002"),(0,a.kt)("h3",{id:"\u4f18\u5316\u65e0\u9650\u5217\u8868\u7684\u6027\u80fd"},"\u4f18\u5316\u65e0\u9650\u5217\u8868\u7684\u6027\u80fd"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684\u5e94\u7528\u5b58\u5728\u975e\u5e38\u957f\u6216\u8005\u65e0\u9650\u6eda\u52a8\u7684\u5217\u8868\uff0c\u90a3\u4e48\u9700\u8981\u91c7\u7528\u7a97\u53e3\u5316\u7684\u6280\u672f\u6765\u4f18\u5316\u6027\u80fd\uff0c\u53ea\u9700\u8981\u6e32\u67d3\u5c11\u90e8\u5206\u533a\u57df\u7684\u5185\u5bb9\uff0c\u51cf\u5c11\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u548c\u521b\u5efa dom \u8282\u70b9\u7684\u65f6\u95f4\u3002\u4f60\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u5f00\u6e90\u9879\u76ee ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tangbc/vue-virtual-scroll-list"},"vue-virtual-scroll-list")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Akryum/vue-virtual-scroller"},"vue-virtual-scroller")," \u6765\u4f18\u5316\u8fd9\u79cd\u65e0\u9650\u5217\u8868\u7684\u573a\u666f\u7684\u3002"),(0,a.kt)("h2",{id:"webpack-\u5c42\u9762\u7684\u4f18\u5316"},"Webpack \u5c42\u9762\u7684\u4f18\u5316"),(0,a.kt)("h3",{id:"\u538b\u7f29\u56fe\u7247"},"\u538b\u7f29\u56fe\u7247"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u4e2d\u9664\u4e86\u53ef\u4ee5\u4f7f\u7528 url-loader \u8bbe\u7f6e limit \u5927\u5c0f\u6765\u5bf9\u56fe\u7247\u5904\u7406\uff0c\u5bf9\u5c0f\u4e8e limit \u7684\u56fe\u7247\u8f6c\u5316\u4e3a base64 \u683c\u5f0f\uff0c\u5176\u4f59\u7684\u4e0d\u505a\u64cd\u4f5c\u3002\u6240\u4ee5\u5bf9\u6709\u4e9b\u8f83\u5927\u7684\u56fe\u7247\u8d44\u6e90\uff0c\u5728\u8bf7\u6c42\u8d44\u6e90\u7684\u65f6\u5019\uff0c\u52a0\u8f7d\u4f1a\u5f88\u6162\uff0c\u6211\u4eec\u53ef\u4ee5\u7528 image-webpack-loader \u6765\u538b\u7f29\u56fe\u7247\u3002"),(0,a.kt)("h3",{id:"\u51cf\u5c11-es6-\u8f6c\u4e3a-es5-\u7684\u5197\u4f59\u4ee3\u7801"},"\u51cf\u5c11 ES6 \u8f6c\u4e3a ES5 \u7684\u5197\u4f59\u4ee3\u7801"),(0,a.kt)("p",null,"Babel \u63d2\u4ef6\u4f1a\u5728\u5c06 ES6 \u4ee3\u7801\u8f6c\u6362\u6210 ES5 \u4ee3\u7801\u65f6\u4f1a\u6ce8\u5165\u4e00\u4e9b\u8f85\u52a9\u51fd\u6570\uff0c\u4f8b\u5982\u4e0b\u9762\u7684 ES6 \u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class HelloWebpack extends Component{...}\n")),(0,a.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u518d\u88ab\u8f6c\u6362\u6210\u80fd\u6b63\u5e38\u8fd0\u884c\u7684 ES5 \u4ee3\u7801\u65f6\u9700\u8981\u4ee5\u4e0b\u4e24\u4e2a\u8f85\u52a9\u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-basic"},"babel-runtime/helpers/createClass  // \u7528\u4e8e\u5b9e\u73b0 class \u8bed\u6cd5\nbabel-runtime/helpers/inherits     // \u7528\u4e8e\u5b9e\u73b0 extends \u8bed\u6cd5\n")),(0,a.kt)("p",null,"\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cBabel \u4f1a\u5728\u6bcf\u4e2a\u8f93\u51fa\u6587\u4ef6\u4e2d\u5185\u5d4c\u8fd9\u4e9b\u4f9d\u8d56\u7684\u8f85\u52a9\u51fd\u6570\u4ee3\u7801\uff0c\u5982\u679c\u591a\u4e2a\u6e90\u4ee3\u7801\u6587\u4ef6\u90fd\u4f9d\u8d56\u8fd9\u4e9b\u8f85\u52a9\u51fd\u6570\uff0c\u90a3\u4e48\u8fd9\u4e9b\u8f85\u52a9\u51fd\u6570\u7684\u4ee3\u7801\u5c06\u4f1a\u51fa\u73b0\u5f88\u591a\u6b21\uff0c\u9020\u6210\u4ee3\u7801\u5197\u4f59\u3002\u4e3a\u4e86\u4e0d\u8ba9\u8fd9\u4e9b\u8f85\u52a9\u51fd\u6570\u7684\u4ee3\u7801\u91cd\u590d\u51fa\u73b0\uff0c\u53ef\u4ee5\u5728\u4f9d\u8d56\u5b83\u4eec\u65f6\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"require('babel-runtime/helpers/createClass')")," \u7684\u65b9\u5f0f\u5bfc\u5165\uff0c\u8fd9\u6837\u5c31\u80fd\u505a\u5230\u53ea\u8ba9\u5b83\u4eec\u51fa\u73b0\u4e00\u6b21\u3002babel-plugin-transform-runtime \u63d2\u4ef6\u5c31\u662f\u7528\u6765\u5b9e\u73b0\u8fd9\u4e2a\u4f5c\u7528\u7684\uff0c\u5c06\u76f8\u5173\u8f85\u52a9\u51fd\u6570\u8fdb\u884c\u66ff\u6362\u6210\u5bfc\u5165\u8bed\u53e5\uff0c\u4ece\u800c\u51cf\u5c0f babel \u7f16\u8bd1\u51fa\u6765\u7684\u4ee3\u7801\u7684\u6587\u4ef6\u5927\u5c0f\u3002"),(0,a.kt)("h3",{id:"\u63d0\u53d6\u516c\u5171\u4ee3\u7801"},"\u63d0\u53d6\u516c\u5171\u4ee3\u7801"),(0,a.kt)("p",null,"\u5982\u679c\u9879\u76ee\u4e2d\u6ca1\u6709\u53bb\u5c06\u6bcf\u4e2a\u9875\u9762\u7684\u7b2c\u4e09\u65b9\u5e93\u548c\u516c\u5171\u6a21\u5757\u63d0\u53d6\u51fa\u6765\uff0c\u5219\u9879\u76ee\u4f1a\u5b58\u5728\u4ee5\u4e0b\u95ee\u9898\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u76f8\u540c\u7684\u8d44\u6e90\u88ab\u91cd\u590d\u52a0\u8f7d\uff0c\u6d6a\u8d39\u7528\u6237\u7684\u6d41\u91cf\u548c\u670d\u52a1\u5668\u7684\u6210\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u9875\u9762\u9700\u8981\u52a0\u8f7d\u7684\u8d44\u6e90\u592a\u5927\uff0c\u5bfc\u81f4\u7f51\u9875\u9996\u5c4f\u52a0\u8f7d\u7f13\u6162\uff0c\u5f71\u54cd\u7528\u6237\u4f53\u9a8c\u3002")),(0,a.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5c06\u591a\u4e2a\u9875\u9762\u7684\u516c\u5171\u4ee3\u7801\u62bd\u79bb\u6210\u5355\u72ec\u7684\u6587\u4ef6\uff0c\u6765\u4f18\u5316\u4ee5\u4e0a\u95ee\u9898\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u79f0\u4e3a\u5206\u5305\u3002Webpack \u5185\u7f6e\u4e86\u4e13\u95e8\u7528\u4e8e\u63d0\u53d6\u591a\u4e2a Chunk \u4e2d\u7684\u516c\u5171\u90e8\u5206\u7684\u63d2\u4ef6 ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/plugins/split-chunks-plugin/"},"SplitChunksPlugin"),"\uff0c\u901a\u5e38\u6211\u4eec\u662f\u76f4\u63a5\u5728 optimization.splitChunks \u5c5e\u6027\u4e2d\u914d\u7f6e\u6765\u5b9e\u73b0\u3002"),(0,a.kt)("h3",{id:"\u4f18\u5316-sourcemap"},"\u4f18\u5316 SourceMap"),(0,a.kt)("p",null,"\u6211\u4eec\u5728\u9879\u76ee\u8fdb\u884c\u6253\u5305\u540e\uff0c\u4f1a\u5c06\u5f00\u53d1\u4e2d\u7684\u591a\u4e2a\u6587\u4ef6\u4ee3\u7801\u6253\u5305\u5230\u4e00\u4e2a\u6587\u4ef6\u4e2d\uff0c\u5e76\u4e14\u7ecf\u8fc7\u538b\u7f29\u3001\u53bb\u6389\u591a\u4f59\u7684\u7a7a\u683c\u3001babel \u7f16\u8bd1\u5316\u540e\uff0c\u6700\u7ec8\u5c06\u7f16\u8bd1\u5f97\u5230\u7684\u4ee3\u7801\u4f1a\u7528\u4e8e\u7ebf\u4e0a\u73af\u5883\uff0c\u90a3\u4e48\u8fd9\u6837\u5904\u7406\u540e\u7684\u4ee3\u7801\u548c\u6e90\u4ee3\u7801\u4f1a\u6709\u5f88\u5927\u7684\u5dee\u522b\uff0c\u5f53\u6709 bug \u7684\u65f6\u5019\uff0c\u6211\u4eec\u53ea\u80fd\u5b9a\u4f4d\u5230\u538b\u7f29\u5904\u7406\u540e\u7684\u4ee3\u7801\u4f4d\u7f6e\uff0c\u65e0\u6cd5\u5b9a\u4f4d\u5230\u5f00\u53d1\u73af\u5883\u4e2d\u7684\u4ee3\u7801\uff0c\u5bf9\u4e8e\u5f00\u53d1\u6765\u8bf4\u4e0d\u597d\u8c03\u5f0f\u5b9a\u4f4d\u95ee\u9898\uff0c\u56e0\u6b64 sourceMap \u51fa\u73b0\u4e86\uff0c\u5b83\u5c31\u662f\u4e3a\u4e86\u89e3\u51b3\u4e0d\u597d\u8c03\u5f0f\u4ee3\u7801\u95ee\u9898\u7684\u3002"),(0,a.kt)("p",null,"SourceMap \u7684\u53ef\u9009\u503c\u6709\u5f88\u591a\uff0c\u4e0d\u540c\u7684\u914d\u7f6e\u4e5f\u5b58\u5728\u8f83\u5927\u7684\u5dee\u5f02\uff0c\u6211\u4eec\u901a\u5e38\u4f1a\u6839\u636e\u4e0d\u540c\u7684\u573a\u666f\u9009\u62e9\u4e0d\u540c\u7684\u914d\u7f6e\u3002\u5f00\u53d1\u73af\u5883\u63a8\u8350\u4f7f\u7528 cheap-module-eval-source-map \u914d\u7f6e\uff0c\u751f\u6210\u73af\u5883\u63a8\u8350\u4f7f\u7528 cheap-module-source-map \u914d\u7f6e\u3002"),(0,a.kt)("h3",{id:"\u6784\u5efa\u7ed3\u679c\u8f93\u51fa\u5206\u6790"},"\u6784\u5efa\u7ed3\u679c\u8f93\u51fa\u5206\u6790"),(0,a.kt)("p",null,"Webpack \u8f93\u51fa\u7684\u4ee3\u7801\u53ef\u8bfb\u6027\u975e\u5e38\u5dee\u800c\u4e14\u6587\u4ef6\u975e\u5e38\u5927\uff0c\u8ba9\u6211\u4eec\u975e\u5e38\u5934\u75bc\u3002\u4e3a\u4e86\u66f4\u7b80\u5355\u3001\u76f4\u89c2\u5730\u5206\u6790\u8f93\u51fa\u7ed3\u679c\uff0c\u793e\u533a\u4e2d\u51fa\u73b0\u4e86\u8bb8\u591a\u53ef\u89c6\u5316\u5206\u6790\u5de5\u5177\u3002\u8fd9\u4e9b\u5de5\u5177\u4ee5\u56fe\u5f62\u7684\u65b9\u5f0f\u5c06\u7ed3\u679c\u66f4\u76f4\u89c2\u5730\u5c55\u793a\u51fa\u6765\uff0c\u8ba9\u6211\u4eec\u5feb\u901f\u4e86\u89e3\u95ee\u9898\u6240\u5728\u3002\u9879\u76ee\u4e2d\u901a\u5e38\u4f1a\u9009\u62e9\u4f7f\u7528 webpack-bundle-analyzer \u63d2\u4ef6\u751f\u6210\u5206\u6790\u62a5\u544a\uff0c\u7136\u540e\u6839\u636e\u62a5\u544a\u9009\u62e9\u6027\u4f18\u5316\u4e00\u4e9b\u5bf9\u6784\u5efa\u6027\u80fd\u5f71\u54cd\u8f83\u5927\u7684\u70b9\u3002"),(0,a.kt)("h2",{id:"web-\u5c42\u9762\u7684\u4f18\u5316"},"Web \u5c42\u9762\u7684\u4f18\u5316"),(0,a.kt)("h3",{id:"\u5f00\u542f-gzip-\u538b\u7f29"},"\u5f00\u542f gzip \u538b\u7f29"),(0,a.kt)("p",null,"gzip \u662f GNUzip \u7684\u7f29\u5199\uff0c\u6700\u65e9\u7528\u4e8e UNIX \u7cfb\u7edf\u7684\u6587\u4ef6\u538b\u7f29\u3002HTTP \u534f\u8bae\u4e0a\u7684 gzip \u7f16\u7801\u662f\u4e00\u79cd\u7528\u6765\u6539\u8fdb web \u5e94\u7528\u7a0b\u5e8f\u6027\u80fd\u7684\u6280\u672f\uff0cweb \u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\uff08\u6d4f\u89c8\u5668\uff09\u5fc5\u987b\u5171\u540c\u652f\u6301 gzip\u3002\u76ee\u524d\u4e3b\u6d41\u7684\u6d4f\u89c8\u5668\uff0cChrome\uff0cfirefox\uff0cIE \u7b49\u90fd\u652f\u6301\u8be5\u534f\u8bae\u3002\u5e38\u89c1\u7684\u670d\u52a1\u5668\u5982 Apache\uff0cNginx\uff0cIIS \u540c\u6837\u652f\u6301\uff0cgzip \u538b\u7f29\u6548\u7387\u975e\u5e38\u9ad8\uff0c\u901a\u5e38\u53ef\u4ee5\u8fbe\u5230 70% \u7684\u538b\u7f29\u7387\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u4f60\u7684\u7f51\u9875\u6709 30K\uff0c\u538b\u7f29\u4e4b\u540e\u5c31\u53d8\u6210\u4e86 9K \u5de6\u53f3\u3002"),(0,a.kt)("h3",{id:"\u6d4f\u89c8\u5668\u7f13\u5b58"},"\u6d4f\u89c8\u5668\u7f13\u5b58"),(0,a.kt)("p",null,"\u4e3a\u4e86\u63d0\u9ad8\u7528\u6237\u52a0\u8f7d\u9875\u9762\u7684\u901f\u5ea6\uff0c\u5bf9\u9759\u6001\u8d44\u6e90\u8fdb\u884c\u7f13\u5b58\u662f\u975e\u5e38\u5fc5\u8981\u7684\uff0c\u6839\u636e\u662f\u5426\u9700\u8981\u91cd\u65b0\u5411\u670d\u52a1\u5668\u53d1\u8d77\u8bf7\u6c42\u6765\u5206\u7c7b\uff0c\u5c06 HTTP \u7f13\u5b58\u89c4\u5219\u5206\u4e3a\u4e24\u7c7b\uff1a\u5f3a\u7f13\u5b58\u3001\u534f\u5546\u7f13\u5b58\u3002\u63a8\u8350\u9605\u8bfb",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844903801778864136"},"\u6df1\u5165\u7406\u89e3 HTTP \u7f13\u5b58\u673a\u5236\u53ca\u539f\u7406 "),"\u3002"),(0,a.kt)("h3",{id:"cdn-\u7684\u4f7f\u7528"},"CDN \u7684\u4f7f\u7528"),(0,a.kt)("p",null,"\u6d4f\u89c8\u5668\u4ece\u670d\u52a1\u5668\u4e0a\u4e0b\u8f7d\u8d44\u6e90\u6587\u4ef6\u65f6\u90fd\u8981\u548c\u670d\u52a1\u5668\u8fde\u63a5\uff0c\u800c\u5927\u90e8\u5206\u670d\u52a1\u5668\u7684\u5e26\u5bbd\u6709\u9650\uff0c\u5982\u679c\u8d85\u8fc7\u9650\u5236\uff0c\u7f51\u9875\u5c31\u534a\u5929\u53cd\u5e94\u4e0d\u8fc7\u6765\u3002\u800c CDN \u53ef\u4ee5\u901a\u8fc7\u4e0d\u540c\u7684\u57df\u540d\u6765\u52a0\u8f7d\u6587\u4ef6\uff0c\u4ece\u800c\u4f7f\u4e0b\u8f7d\u6587\u4ef6\u7684\u5e76\u53d1\u8fde\u63a5\u6570\u5927\u5927\u589e\u52a0\uff0c\u4e14 CDN \u5177\u6709\u66f4\u597d\u7684\u53ef\u7528\u6027\uff0c\u66f4\u4f4e\u7684\u7f51\u7edc\u5ef6\u8fdf\u548c\u4e22\u5305\u7387\u3002"),(0,a.kt)("h3",{id:"\u4f7f\u7528-chrome-performance-\u67e5\u627e\u6027\u80fd\u74f6\u9888"},"\u4f7f\u7528 Chrome Performance \u67e5\u627e\u6027\u80fd\u74f6\u9888"),(0,a.kt)("p",null,"Chrome \u7684 Performance \u9762\u677f\u53ef\u4ee5\u5f55\u5236\u4e00\u6bb5\u65f6\u95f4\u5185\u7684 js \u6267\u884c\u7ec6\u8282\u53ca\u65f6\u95f4\u3002\u4f7f\u7528 Chrome \u5f00\u53d1\u8005\u5de5\u5177\u5206\u6790\u9875\u9762\u6027\u80fd\u7684\u6b65\u9aa4\u5982\u4e0b\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6253\u5f00 Chrome Performance \u9762\u677f"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb Record \u5f00\u59cb\u5f55\u5236"),(0,a.kt)("li",{parentName:"ol"},"\u5237\u65b0\u9875\u9762\u6216\u5c55\u5f00\u67d0\u4e2a\u8282\u70b9"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb Stop \u505c\u6b62\u5f55\u5236")))}s.isMDXComponent=!0}}]);