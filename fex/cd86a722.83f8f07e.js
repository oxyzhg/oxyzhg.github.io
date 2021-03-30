(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(150)),i={id:"readme",title:"\u6982\u89c8",slug:"/performance"},c={unversionedId:"performance/readme",id:"performance/readme",isDocsHomePage:!1,title:"\u6982\u89c8",description:"\u6027\u80fd\u662f\u524d\u7aef\u9886\u57df\u5173\u6ce8\u5ea6\u975e\u5e38\u9ad8\u7684\u8bdd\u9898\uff0c\u56e0\u4e3a\u9875\u9762\u6027\u80fd\u7684\u597d\u574f\u4f1a\u76f4\u63a5\u5f71\u54cd\u7528\u6237\u4f53\u9a8c\u3002\u4e3a\u4e86\u4e0d\u65ad\u63d0\u5347\u7528\u6237\u4f53\u9a8c\uff0c\u524d\u7aef\u5de5\u7a0b\u5e08\u5f80\u5f80\u4f1a\u5bf9\u9875\u9762\u6027\u80fd\u4e0d\u65ad\u6539\u8fdb\uff0c\u800c\u8fd9\u4e2a\u6539\u8fdb\u7684\u8fc7\u7a0b\u5c31\u53eb\u6027\u80fd\u4f18\u5316\u3002",source:"@site/docs/performance/index.md",slug:"/performance",permalink:"/fex/docs/performance",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/performance/index.md",version:"current",sidebar:"performance",next:{title:"Webpack \u6784\u5efa\u4f18\u5316\u5206\u6790",permalink:"/fex/docs/engineering/webpack/optimization-analysis"}},b=[{value:"\u6027\u80fd\u6307\u6807",id:"\u6027\u80fd\u6307\u6807",children:[{value:"\u9996\u5c4f\u7ed8\u5236 (First Paint, FP)",id:"\u9996\u5c4f\u7ed8\u5236-first-paint-fp",children:[]},{value:"\u9996\u5c4f\u5185\u5bb9\u7ed8\u5236 (First Contentful Paint, FCP)",id:"\u9996\u5c4f\u5185\u5bb9\u7ed8\u5236-first-contentful-paint-fcp",children:[]},{value:"\u53ef\u4ea4\u4e92\u65f6\u95f4 (Time to Interactive, TTI)",id:"\u53ef\u4ea4\u4e92\u65f6\u95f4-time-to-interactive-tti",children:[]},{value:"\u603b\u963b\u585e\u65f6\u95f4 (Total Blocking Time, TBT)",id:"\u603b\u963b\u585e\u65f6\u95f4-total-blocking-time-tbt",children:[]},{value:"\u6700\u5927\u5185\u5bb9\u7ed8\u5236 (Largest Contentful Paint, LCP)",id:"\u6700\u5927\u5185\u5bb9\u7ed8\u5236-largest-contentful-paint-lcp",children:[]}]},{value:"\u7edf\u8ba1\u65b9\u5f0f",id:"\u7edf\u8ba1\u65b9\u5f0f",children:[{value:"\u5e73\u5747\u503c\u7edf\u8ba1",id:"\u5e73\u5747\u503c\u7edf\u8ba1",children:[]},{value:"\u767e\u4f4d\u6570\u7edf\u8ba1",id:"\u767e\u4f4d\u6570\u7edf\u8ba1",children:[]}]},{value:"\u4f18\u5316\u601d\u8def",id:"\u4f18\u5316\u601d\u8def",children:[{value:"\u52a0\u8f7d\u6027\u80fd\u4f18\u5316",id:"\u52a0\u8f7d\u6027\u80fd\u4f18\u5316",children:[]},{value:"\u6e32\u67d3\u6027\u80fd\u4f18\u5316",id:"\u6e32\u67d3\u6027\u80fd\u4f18\u5316",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],o={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u6027\u80fd\u662f\u524d\u7aef\u9886\u57df\u5173\u6ce8\u5ea6\u975e\u5e38\u9ad8\u7684\u8bdd\u9898\uff0c\u56e0\u4e3a\u9875\u9762\u6027\u80fd\u7684\u597d\u574f\u4f1a\u76f4\u63a5\u5f71\u54cd\u7528\u6237\u4f53\u9a8c\u3002\u4e3a\u4e86\u4e0d\u65ad\u63d0\u5347\u7528\u6237\u4f53\u9a8c\uff0c\u524d\u7aef\u5de5\u7a0b\u5e08\u5f80\u5f80\u4f1a\u5bf9\u9875\u9762\u6027\u80fd\u4e0d\u65ad\u6539\u8fdb\uff0c\u800c\u8fd9\u4e2a\u6539\u8fdb\u7684\u8fc7\u7a0b\u5c31\u53eb\u6027\u80fd\u4f18\u5316\u3002"),Object(l.b)("h2",{id:"\u6027\u80fd\u6307\u6807"},"\u6027\u80fd\u6307\u6807"),Object(l.b)("p",null,"\u6027\u80fd\u662f\u6307\u7a0b\u5e8f\u7684\u8fd0\u884c\u901f\u5ea6\uff0c\u800c\u524d\u7aef\u6027\u80fd\u662f\u6307\u9875\u9762\u7684\u54cd\u5e94\u901f\u5ea6\uff0c\u63d0\u5230\u901f\u5ea6\u5fc5\u7136\u79bb\u4e0d\u5f00\u4e00\u4e2a\u53d8\u91cf\uff0c\u90a3\u5c31\u662f\u65f6\u95f4\u3002\u6240\u4ee5\u6211\u4eec\u4f1a\u770b\u5230\u6027\u80fd\u6307\u6807\u90fd\u662f\u4ee5\u65f6\u95f4\u4e3a\u5355\u4f4d\u6765\u6d4b\u91cf\u7684\u3002"),Object(l.b)("h3",{id:"\u9996\u5c4f\u7ed8\u5236-first-paint-fp"},"\u9996\u5c4f\u7ed8\u5236 (First Paint, FP)"),Object(l.b)("p",null,"\u9996\u5c4f\u7ed8\u5236\u65f6\u95f4\uff0c\u6307\u4ece\u5f00\u59cb\u52a0\u8f7d\u5230\u6d4f\u89c8\u5668\u9996\u6b21\u7ed8\u5236\u50cf\u7d20\u5230\u5c4f\u5e55\u4e0a\u7684\u65f6\u95f4\uff0c\u4e5f\u5c31\u662f\u9875\u9762\u5728\u5c4f\u5e55\u4e0a\u9996\u6b21\u53d1\u751f\u89c6\u89c9\u53d8\u5316\u7684\u65f6\u95f4\u3002\u6ce8\u610f\u9996\u5c4f\u7ed8\u5236\u4e0d\u5305\u62ec\u9ed8\u8ba4\u7684\u80cc\u666f\u7ed8\u5236\uff0c\u4f46\u5305\u62ec\u975e\u9ed8\u8ba4\u7684\u80cc\u666f\u7ed8\u5236\u3002\u7531\u4e8e\u9996\u6b21\u7ed8\u5236\u4e4b\u524d\u7f51\u9875\u5448\u73b0\u9ed8\u8ba4\u80cc\u666f\u767d\u8272\uff0c\u6240\u4ee5\u4e5f\u79f0\u767d\u5c4f\u65f6\u95f4\u3002"),Object(l.b)("p",null,"\u83b7\u53d6\u5230\u8fd9\u4e2a\u6307\u6807\u503c\u4e5f\u975e\u5e38\u7b80\u5355\uff0c\u5728 HTML5 \u4e0b\u53ef\u4ee5\u901a\u8fc7 ",Object(l.b)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Performance"},"Performance API")," \u6765\u83b7\u53d6\uff0c\u5177\u4f53\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"performance.getEntriesByName('first-paint');\n\n// [\n//   {\n//     duration: 0,                  // \u8be5\u4e8b\u4ef6\u7684\u8017\u65f6\n//     entryType: 'paint',           // \u6027\u80fd\u6307\u6807\u5b9e\u4f8b\u7684\u7c7b\u578b\n//     name: 'first-paint',          // \u6027\u80fd\u6307\u6807\u540d\u79f0\n//     startTime: 225.8849999998347, // \u6027\u80fd\u6307\u6807\u5f00\u59cb\u91c7\u96c6\u65f6\u95f4\n//   },\n// ];\n")),Object(l.b)("p",null,"\u8fd4\u56de\u4e00\u4e2a ",Object(l.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry"},"PerformanceEntry")," \u5bf9\u8c61\u7684\u5217\u8868\u3002"),Object(l.b)("h3",{id:"\u9996\u5c4f\u5185\u5bb9\u7ed8\u5236-first-contentful-paint-fcp"},"\u9996\u5c4f\u5185\u5bb9\u7ed8\u5236 (First Contentful Paint, FCP)"),Object(l.b)("p",null,"\u9996\u5c4f\u5185\u5bb9\u7ed8\u5236\u65f6\u95f4\uff0c\u6307\u6d4f\u89c8\u5668\u9996\u6b21\u7ed8\u5236\u6765\u81ea DOM \u7684\u5185\u5bb9\u65f6\u95f4\uff0c\u8fd9\u4e2a\u5185\u5bb9\u53ef\u4ee5\u662f\u6587\u5b57\u3001\u56fe\u7247\u3001\u975e\u7a7a\u767d\u7684 canvas \u548c svg\u3002"),Object(l.b)("p",null,"\u83b7\u53d6\u8fd9\u4e2a\u6307\u6807\u7684\u5177\u4f53\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"performance.getEntriesByName('first-contentful-paint');\n")),Object(l.b)("p",null,"FCP \u6709\u65f6\u5019\u4f1a\u548c FP \u65f6\u95f4\u76f8\u540c\uff0c\u4e5f\u53ef\u80fd\u665a\u4e8e FP\u3002\u56e0\u4e3a FP \u53ea\u9700\u8981\u6ee1\u8db3",Object(l.b)("strong",{parentName:"p"},"\u5f00\u59cb\u7ed8\u5236"),"\u8fd9\u4e00\u4e2a\u6761\u4ef6\u5373\u53ef\uff0c\u800c FCP \u8fd8\u8981\u6ee1\u8db3\u7b2c\u4e8c\u4e2a\u6761\u4ef6\uff0c\u90a3\u5c31\u662f",Object(l.b)("strong",{parentName:"p"},"\u7ed8\u5236\u7684\u50cf\u7d20\u6709\u5185\u5bb9"),"\u3002"),Object(l.b)("h3",{id:"\u53ef\u4ea4\u4e92\u65f6\u95f4-time-to-interactive-tti"},"\u53ef\u4ea4\u4e92\u65f6\u95f4 (Time to Interactive, TTI)"),Object(l.b)("p",null,"\u53ef\u4ea4\u4e92\u65f6\u95f4\uff0c\u6307\u7f51\u9875\u5728\u89c6\u89c9\u4e0a\u90fd\u5df2\u6e32\u67d3\u51fa\u4e86\uff0c\u6d4f\u89c8\u5668\u53ef\u4ee5\u54cd\u5e94\u7528\u6237\u7684\u64cd\u4f5c\u4e86\u3002\u867d\u7136\u7406\u89e3\u8d77\u6765\u6bd4\u8f83\u7b80\u5355\uff0c\u4f46\u5b9e\u9645\u6d4b\u91cf\u8d77\u6765\u8981\u8003\u8651\u4e24\u4e2a\u6761\u4ef6\uff1a\u7b2c\u4e00\u4e2a\u6761\u4ef6\u662f\u4e3b\u7ebf\u7a0b\u7684\u957f\u4efb\u52a1\uff08\u957f\u4efb\u52a1\u662f\u6307\u8017\u65f6\u8d85\u8fc7 50ms\uff09\u6267\u884c\u5b8c\u6210\u540e\uff0c\u7b2c\u4e8c\u4e2a\u6761\u4ef6\u662f\u968f\u540e\u7f51\u7edc\u9759\u9ed8\u65f6\u95f4\u8fbe\u5230 5s\uff0c\u8fd9\u91cc\u7684\u9759\u9ed8\u65f6\u95f4\u662f\u6307\u8bf7\u6c42\u6570\u4e0d\u8d85\u8fc7 2 \u4e2a\uff0c\u6392\u9664\u5931\u8d25\u7684\u8d44\u6e90\u8bf7\u6c42\u548c\u672a\u4f7f\u7528 GET \u65b9\u6cd5\u8fdb\u884c\u7684\u7f51\u7edc\u8bf7\u6c42\u3002"),Object(l.b)("p",null,"TTI \u6d4b\u91cf\u53ef\u4ee5\u4f7f\u7528 Google \u63d0\u4f9b\u7684\u6a21\u5757 ",Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/tti-polyfill"},"tti-polyfill"),"\uff0c\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"import ttiPolyfill from 'tti-polyfill';\n\nttiPolyfill.getFirstConsistentlyInteractive(opts).then((tti) => {\n  // Use `tti` value in some way.\n});\n")),Object(l.b)("h3",{id:"\u603b\u963b\u585e\u65f6\u95f4-total-blocking-time-tbt"},"\u603b\u963b\u585e\u65f6\u95f4 (Total Blocking Time, TBT)"),Object(l.b)("p",null,"\u603b\u963b\u585e\u65f6\u95f4\uff0c\u6307\u963b\u585e\u7528\u6237\u54cd\u5e94\uff08\u6bd4\u5982\u952e\u76d8\u8f93\u5165\u3001\u9f20\u6807\u70b9\u51fb\uff09\u7684\u6240\u6709\u65f6\u95f4\u3002\u6307\u6807\u503c\u662f\u5c06 FCP \u4e4b\u540e\u4e00\u76f4\u5230 TTI \u8fd9\u6bb5\u65f6\u95f4\u5185\u7684\u963b\u585e\u90e8\u5206\u65f6\u95f4\u603b\u548c\uff0c\u963b\u585e\u90e8\u5206\u662f\u6307\u957f\u4efb\u52a1\u6267\u884c\u65f6\u95f4\u51cf\u53bb 50ms\u3002"),Object(l.b)("p",null,"\u83b7\u53d6\u957f\u4efb\u52a1\u8017\u65f6\u7684\u65b9\u5f0f\u5982\u4e0b\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"var observer = new PerformanceObserver(function (list) {\n  var perfEntries = list.getEntries();\n\n  for (const perfEntrie of perfEntries) {\n    console.log(perfEntrie.toJSON());\n    // {\n    //   attribution: [TaskAttributionTiming],\n    //   duration: 6047.770000004675,\n    //   entryType: 'longtask',\n    //   name: 'self',\n    //   startTime: 22.444999995059334,\n    // };\n  }\n});\n\nobserver.observe({\n  // highlight-next-line\n  entryTypes: ['longtask'],\n});\n")),Object(l.b)("p",null,"\u9996\u5148\u901a\u8fc7 ",Object(l.b)("inlineCode",{parentName:"p"},"PerformanceObserver")," \u51fd\u6570\u6784\u9020\u4e00\u4e2a\u6027\u80fd\u76d1\u6d4b\u5b9e\u4f8b\uff0c\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u53c2\u6570\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"getEntries()")," \u65b9\u6cd5\u6765\u83b7\u53d6 ",Object(l.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry"},"PerformanceEntry")," \u5b9e\u4f8b\u6570\u7ec4\uff0c\u6bcf\u4e2a\u5b9e\u4f8b\u5bf9\u5e94\u4e00\u4e2a\u957f\u4efb\u52a1\u3002\u7136\u540e\u8981\u6307\u5b9a\u76d1\u6d4b\u5b9e\u4f8b\u7684\u5b9e\u4f53\u7c7b\u578b\u4e3a ",Object(l.b)("inlineCode",{parentName:"p"},"longtask"),"\uff0c\u4e4b\u540e\u9875\u9762\u6267\u884c\u64cd\u4f5c\u5c31\u53ef\u4ee5\u83b7\u53d6\u957f\u4efb\u52a1\u5b9e\u4f8b\u3002"),Object(l.b)("h3",{id:"\u6700\u5927\u5185\u5bb9\u7ed8\u5236-largest-contentful-paint-lcp"},"\u6700\u5927\u5185\u5bb9\u7ed8\u5236 (Largest Contentful Paint, LCP)"),Object(l.b)("p",null,"\u6700\u5927\u5185\u5bb9\u7ed8\u753b\uff0c\u6307\u89c6\u53e3\u5185\u53ef\u89c1\u7684\u6700\u5927\u56fe\u50cf\u6216\u6587\u672c\u5757\u7684\u7ed8\u5236\u65f6\u95f4\u3002\u6d4b\u91cf\u8fd9\u4e2a\u6307\u6807\u7684\u503c\u548c TBT \u76f8\u4f3c\uff0c\u4e0d\u540c\u7684\u662f\u5c06\u5b9e\u4f53\u7c7b\u578b\u8bbe\u4e3a",Object(l.b)("inlineCode",{parentName:"p"},"largest-contentful-paint"),"\u3002"),Object(l.b)("h2",{id:"\u7edf\u8ba1\u65b9\u5f0f"},"\u7edf\u8ba1\u65b9\u5f0f"),Object(l.b)("p",null,"\u867d\u7136\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e9b\u65b9\u5f0f\u6765\u7cbe\u786e\u5730\u91c7\u96c6\u6027\u80fd\u6307\u6807\uff0c\u4f46\u4e0d\u540c\u7684\u7528\u6237\u3001\u4e0d\u540c\u7684\u73af\u5883\u91c7\u96c6\u540c\u4e00\u6307\u6807\u503c\u4f1a\u6709\u6240\u5dee\u5f02\u3002\u6240\u4ee5\u901a\u5e38\u9700\u8981\u5bf9\u5927\u91cf\u91c7\u96c6\u7684\u6027\u80fd\u6307\u6807\u6570\u636e\u8fdb\u884c\u7edf\u8ba1\u624d\u80fd\u7528\u6765\u91cf\u5316\u3002"),Object(l.b)("h3",{id:"\u5e73\u5747\u503c\u7edf\u8ba1"},"\u5e73\u5747\u503c\u7edf\u8ba1"),Object(l.b)("p",null,"\u5e73\u5747\u503c\u7edf\u8ba1\u5e94\u8be5\u662f\u5927\u5bb6\u6700\u5bb9\u6613\u60f3\u5230\u7684\u7edf\u8ba1\u65b9\u6cd5\uff0c\u5c06\u6240\u6709\u7528\u6237\u4ea7\u751f\u7684\u6027\u80fd\u6307\u6807\u503c\u6536\u96c6\u8d77\u6765\uff0c\u7136\u540e\u5bf9\u8fd9\u4e9b\u6570\u636e\u53d6\u5e73\u5747\u503c\uff0c\u6700\u7ec8\u5f97\u5230\u5e73\u5747\u8017\u65f6\u6570\u636e\u3002\u8fd9\u79cd\u7edf\u8ba1\u65b9\u5f0f\u6700\u5927\u7684\u95ee\u9898\u5c31\u662f\u5bb9\u6613\u53d7\u6781\u503c\u5f71\u54cd\u3002"),Object(l.b)("h3",{id:"\u767e\u4f4d\u6570\u7edf\u8ba1"},"\u767e\u4f4d\u6570\u7edf\u8ba1"),Object(l.b)("p",null,"\u767e\u5206\u4f4d\u6570\u7edf\u8ba1\u53ef\u4ee5\u89e3\u51b3\u6781\u503c\u95ee\u9898\u3002\u767e\u5206\u4f4d\u6570\u662f\u5bf9\u5e94\u4e8e\u767e\u5206\u4f4d\u7684\u5b9e\u9645\u6570\u503c\uff0c\u6bd4\u5982\u7b2c 70 \u767e\u5206\u4f4d\u6570\uff1a\u5c06\u6570\u636e\u4ece\u5c0f\u5230\u5927\u6392\u5217\uff0c\u5904\u4e8e\u7b2c 70% \u7684\u6570\u636e\u79f0\u4e3a 70 \u5206\u4f4d\u6570\uff0c\u8868\u793a 70% \u7684\u6027\u80fd\u6570\u636e\u5747\u5c0f\u4e8e\u7b49\u4e8e\u8be5\u503c\uff0c\u90a3\u5269\u4e0b\u7684 30% \u7684\u6570\u636e\u5747\u5927\u4e8e\u7b49\u4e8e\u8be5\u503c\u4e86\u3002"),Object(l.b)("p",null,"\u767e\u5206\u4f4d\u6570\u7684\u597d\u5904\u5728\u4e8e\uff0c\u5bf9\u4e8e\u6027\u80fd\u9700\u6c42\u4e0d\u540c\u7684\u9875\u9762\u6216\u5e94\u7528\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e0d\u540c\u7684\u767e\u5206\u4f4d\u6570\u3002\u5bf9\u6027\u80fd\u8981\u6c42\u8d8a\u9ad8\uff0c\u4f7f\u7528\u8d8a\u5927\u7684\u767e\u5206\u4f4d\u6570\u3002"),Object(l.b)("p",null,"\u6bd4\u5982\u5728\u8ffd\u6c42\u6781\u81f4\u6027\u80fd\u7684\u60c5\u51b5\u4e0b\uff0c\u8981\u6c42 99% \u7684\u7528\u6237\u90fd\u8981\u5c0f\u4e8e 3 \u79d2\uff0c\u6211\u4eec\u770b\u9875\u9762\u52a0\u8f7d\u65f6\u957f\u65f6\u5019\u5c31\u5e94\u8be5\u770b 99 \u5206\u4f4d\u6570\u3002\u800c\u67d0\u4e9b\u91cd\u8981\u7a0b\u5ea6\u6bd4\u8f83\u4f4e\u7684\u9875\u9762\uff0c\u53ef\u4ee5\u53ea\u8981\u6c42 50% \u7684\u7528\u6237\u9875\u9762\u52a0\u8f7d\u65f6\u957f\u5c0f\u4e8e 3 \u79d2\uff0c\u90a3\u4e48\u5bf9\u5e94\u7684\u5c31\u662f 50 \u5206\u4f4d\u6570\uff0c\u4e5f\u79f0\u4e2d\u4f4d\u6570\u3002"),Object(l.b)("h2",{id:"\u4f18\u5316\u601d\u8def"},"\u4f18\u5316\u601d\u8def"),Object(l.b)("p",null,"\u6709\u4e86\u6027\u80fd\u6307\u6807\u548c\u7edf\u8ba1\u65b9\u5f0f\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u6b63\u5f0f\u5f00\u59cb\u9488\u5bf9\u4e0d\u540c\u7684\u6307\u6807\u503c\u8fdb\u884c\u4f18\u5316\u4e86\u3002\u524d\u7aef\u6027\u80fd\u4f18\u5316\u4e00\u822c\u53ef\u4ee5\u4ece\u4e24\u4e2a\u65b9\u5411\u5165\u624b\uff1a",Object(l.b)("strong",{parentName:"p"},"\u52a0\u8f7d\u6027\u80fd\u4f18\u5316"),"\u548c",Object(l.b)("strong",{parentName:"p"},"\u6e32\u67d3\u6027\u80fd\u4f18\u5316"),"\u3002"),Object(l.b)("p",null,"\u867d\u7136\u4e0d\u540c\u65b9\u5411\u7684\u4f18\u5316\u624b\u6bb5\u4e0d\u540c\uff0c\u4f46\u5927\u4f53\u4e0a\u90fd\u9075\u5faa\u4e24\u4e2a\u601d\u8def\uff1a",Object(l.b)("strong",{parentName:"p"},"\u505a\u51cf\u6cd5"),"\u548c",Object(l.b)("strong",{parentName:"p"},"\u505a\u9664\u6cd5"),"\u3002\u505a\u51cf\u6cd5\u662f\u76f4\u63a5\u51cf\u5c11\u8017\u65f6\u64cd\u4f5c\u6216\u8d44\u6e90\u4f53\u79ef\uff0c\u505a\u9664\u6cd5\u662f\u5728\u8017\u65f6\u64cd\u4f5c\u548c\u8d44\u6e90\u4f53\u79ef\u65e0\u6cd5\u51cf\u5c11\u7684\u60c5\u51b5\u4e0b\uff0c\u5bf9\u5176\u8fdb\u884c\u62c6\u5206\u5904\u7406\u6216\u8005\u5bf9\u4e0d\u53ef\u62c6\u5206\u7684\u5185\u5bb9\u8fdb\u884c\u987a\u5e8f\u8c03\u6362\u3002"),Object(l.b)("h3",{id:"\u52a0\u8f7d\u6027\u80fd\u4f18\u5316"},"\u52a0\u8f7d\u6027\u80fd\u4f18\u5316"),Object(l.b)("p",null,"\u505a\u51cf\u6cd5\u7684\u6709\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"\u91c7\u7528 gzip \u538b\u7f29"),"\uff0c\u5178\u578b\u7684\u51cf\u5c11\u8d44\u6e90\u7684\u4f20\u8f93\u4f53\u79ef\uff1b"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"\u4f7f\u7528\u7f13\u5b58"),"\uff0c\u5f3a\u5236\u7f13\u5b58\u53ef\u4ee5\u51cf\u5c11\u6d4f\u89c8\u5668\u8bf7\u6c42\u6b21\u6570\uff0c\u800c\u534f\u5546\u7f13\u5b58\u53ef\u4ee5\u51cf\u5c11\u4f20\u8f93\u4f53\u79ef\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528\u96ea\u78a7\u56fe\uff0c\u51cf\u5c11\u6d4f\u89c8\u5668\u8bf7\u6c42\u6b21\u6570\u3002")),Object(l.b)("p",null,"\u505a\u9664\u6cd5\u7684\u6709\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"HTTP/2 \u591a\u8def\u590d\u7528\uff0c\u628a\u591a\u4e2a\u8bf7\u6c42\u62c6\u5206\u6210\u4e8c\u8fdb\u5236\u5e27\uff0c\u5e76\u53d1\u4f20\u8f93\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u61d2\u52a0\u8f7d\uff0c\u5c06 Web \u5e94\u7528\u62c6\u5206\u6210\u4e0d\u540c\u7684\u6a21\u5757\u6216\u6587\u4ef6\uff0c\u6309\u9700\u52a0\u8f7d\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u628a script \u6807\u7b7e\u653e\u5230 body \u5e95\u90e8\uff0c\u901a\u8fc7\u8c03\u6574\u987a\u5e8f\u6765\u63a7\u5236\u6e32\u67d3\u65f6\u95f4\u3002")),Object(l.b)("h3",{id:"\u6e32\u67d3\u6027\u80fd\u4f18\u5316"},"\u6e32\u67d3\u6027\u80fd\u4f18\u5316"),Object(l.b)("p",null,"\u505a\u51cf\u6cd5\u7684\u6709\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u907f\u514d\u91cd\u6392\u4e0e\u91cd\u7ed8\uff0c\u51cf\u5c11\u6e32\u67d3\u5f15\u64ce\u7684\u7ed8\u5236\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u9632\u6296\u64cd\u4f5c\uff0c\u51cf\u5c11\u51fd\u6570\u8c03\u7528\u6216\u8bf7\u6c42\u6b21\u6570\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u51cf\u5c11 DOM \u64cd\u4f5c\uff0c\u51cf\u5c11\u6e32\u67d3\u5f15\u64ce\u548c\u811a\u672c\u5f15\u64ce\u7684\u5207\u6362\uff0c\u540c\u65f6\u4e5f\u51cf\u5c11\u6e32\u67d3\u5f15\u64ce\u7ed8\u5236\u3002")),Object(l.b)("p",null,"\u505a\u9664\u6cd5\u7684\u6709\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u9aa8\u67b6\u5c4f\uff0c\u5c06\u9875\u9762\u5185\u5bb9\u8fdb\u884c\u62c6\u5206\uff0c\u8c03\u6574\u4e0d\u540c\u90e8\u5206\u7684\u663e\u793a\u987a\u5e8f\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528 Web Worker\uff0c\u5c06\u4e00\u4e9b\u957f\u4efb\u52a1\u62c6\u5206\u51fa\u6765\uff0c\u653e\u5230 Web Worker \u4e2d\u6267\u884c\uff1b"),Object(l.b)("li",{parentName:"ul"},"React Fiber\uff0c\u5c06\u540c\u6b65\u89c6\u56fe\u7684\u4efb\u52a1\u8fdb\u884c\u62c6\u5206\uff0c\u53ef\u8c03\u6362\u987a\u5e8f\uff0c\u53ef\u6682\u505c\u3002")),Object(l.b)("p",null,"\u5728\u4e0d\u540c\u7684\u65b9\u5411\u4e0a\uff0c\u5bf9\u4e0d\u540c\u6b65\u9aa4\uff0c",Object(l.b)("strong",{parentName:"p"},"\u4f18\u5148\u8003\u8651\u505a\u51cf\u6cd5\uff0c\u7136\u540e\u518d\u8003\u8651\u505a\u9664\u6cd5"),"\u3002"),Object(l.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(l.b)("p",null,"\u524d\u7aef\u6027\u80fd\u4f18\u5316\u5b9e\u9645\u4e0a\u5305\u62ec\u4e24\u4e2a\u6b65\u9aa4\uff0c\u5373",Object(l.b)("strong",{parentName:"p"},"\u91cf\u5316"),"\u548c",Object(l.b)("strong",{parentName:"p"},"\u4f18\u5316"),"\u3002"),Object(l.b)("p",null,"\u5728\u91cf\u5316\u8fc7\u7a0b\u4e2d\uff0c\u5148\u91c7\u96c6\u7279\u5b9a\u7684\u6307\u6807\uff0c\u6bd4\u8f83\u91cd\u8981\u7684\u6307\u6807\u6709\uff1a\u9996\u5c4f\u7ed8\u5236\u3001\u9996\u5c4f\u5185\u5bb9\u7ed8\u5236\u3001\u53ef\u4ea4\u4e92\u65f6\u95f4\u3001\u603b\u963b\u585e\u65f6\u95f4\u3001\u6700\u5927\u5185\u5bb9\u7ed8\u5236\uff1b\u7136\u540e\u5bf9\u4e0d\u540c\u7528\u6237\u4ea7\u751f\u7684\u6307\u6807\u503c\u8fdb\u884c\u7edf\u8ba1\uff0c\u8fd9\u91cc\u63a8\u8350\u4f7f\u7528\u767e\u5206\u4f4d\u6570\u7edf\u8ba1\u6cd5\uff0c\u5bf9\u4e8e\u4e0d\u540c\u6027\u80fd\u9700\u6c42\u7684\u9875\u9762\u8bbe\u7f6e\u4e0d\u540c\u7684\u767e\u5206\u4f4d\u6570\u3002"),Object(l.b)("p",null,"\u5728\u4f18\u5316\u8fc7\u7a0b\u4e2d\uff0c\u8981\u6839\u636e\u6027\u80fd\u6307\u6807\u7edf\u8ba1\u7ed3\u679c\u8fdb\u884c\u4f18\u5316\uff0c\u53ef\u901a\u8fc7\u505a\u51cf\u6cd5\u548c\u505a\u9664\u6cd5\u7684\u601d\u8def\u5206\u522b\u5bf9\u52a0\u8f7d\u6027\u80fd\u548c\u6e32\u67d3\u6027\u80fd\u8fdb\u884c\u4f18\u5316\u3002\u5728\u4e0d\u540c\u7684\u65b9\u5411\u4e0a\uff0c\u5bf9\u4e0d\u540c\u6b65\u9aa4\uff0c\u4f18\u5148\u8003\u8651\u505a\u51cf\u6cd5\uff0c\u7136\u540e\u518d\u8003\u8651\u505a\u9664\u6cd5\u3002"))}p.isMDXComponent=!0},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,O=u["".concat(i,".").concat(m)]||u[m]||s[m]||l;return n?a.a.createElement(O,c(c({ref:t},o),{},{components:n})):a.a.createElement(O,c({ref:t},o))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var o=2;o<l;o++)i[o]=n[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);