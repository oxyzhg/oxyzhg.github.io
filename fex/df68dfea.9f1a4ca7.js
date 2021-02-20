(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),l=(n(0),n(112)),c={id:"csrf",title:"CSRF \u653b\u51fb"},b={unversionedId:"advanced/security/csrf",id:"advanced/security/csrf",isDocsHomePage:!1,title:"CSRF \u653b\u51fb",description:"\u4ec0\u4e48\u662f CSRF",source:"@site/docs/advanced/security/csrf.md",slug:"/advanced/security/csrf",permalink:"/fex/docs/advanced/security/csrf",editUrl:"https://github.com/oxyzhg/fex/edit/main/docs/advanced/security/csrf.md",version:"current",sidebar:"advanced",previous:{title:"XSS \u653b\u51fb",permalink:"/fex/docs/advanced/security/xss"}},i=[{value:"\u4ec0\u4e48\u662f CSRF",id:"\u4ec0\u4e48\u662f-csrf",children:[]},{value:"\u5e38\u89c1\u7684\u653b\u51fb\u7c7b\u578b",id:"\u5e38\u89c1\u7684\u653b\u51fb\u7c7b\u578b",children:[{value:"GET \u7c7b\u578b",id:"get-\u7c7b\u578b",children:[]},{value:"POST \u7c7b\u578b",id:"post-\u7c7b\u578b",children:[]},{value:"\u94fe\u63a5\u7c7b\u578b",id:"\u94fe\u63a5\u7c7b\u578b",children:[]}]},{value:"CSRF \u7684\u7279\u70b9",id:"csrf-\u7684\u7279\u70b9",children:[]},{value:"\u9632\u62a4\u7b56\u7565",id:"\u9632\u62a4\u7b56\u7565",children:[{value:"\u540c\u6e90\u68c0\u6d4b",id:"\u540c\u6e90\u68c0\u6d4b",children:[]},{value:"CSRF Token",id:"csrf-token",children:[]},{value:"\u53cc\u91cd Cookie \u9a8c\u8bc1",id:"\u53cc\u91cd-cookie-\u9a8c\u8bc1",children:[]}]}],o={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u4ec0\u4e48\u662f-csrf"},"\u4ec0\u4e48\u662f CSRF"),Object(l.b)("p",null,"CSRF\uff08Cross-site request forgery\uff09\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\uff1a\u653b\u51fb\u8005\u8bf1\u5bfc\u53d7\u5bb3\u8005\u8fdb\u5165\u7b2c\u4e09\u65b9\u7f51\u7ad9\uff0c\u5728\u7b2c\u4e09\u65b9\u7f51\u7ad9\u4e2d\uff0c\u5411\u88ab\u653b\u51fb\u7f51\u7ad9\u53d1\u9001\u8de8\u7ad9\u8bf7\u6c42\u3002\u5229\u7528\u53d7\u5bb3\u8005\u5728\u88ab\u653b\u51fb\u7f51\u7ad9\u5df2\u7ecf\u83b7\u53d6\u7684\u6ce8\u518c\u51ed\u8bc1\uff0c\u7ed5\u8fc7\u540e\u53f0\u7684\u7528\u6237\u9a8c\u8bc1\uff0c\u8fbe\u5230\u5192\u5145\u7528\u6237\u5bf9\u88ab\u653b\u51fb\u7684\u7f51\u7ad9\u6267\u884c\u67d0\u9879\u64cd\u4f5c\u7684\u76ee\u7684\u3002"),Object(l.b)("p",null,"\u4e00\u4e2a\u5178\u578b\u7684 CSRF \u653b\u51fb\u6709\u7740\u5982\u4e0b\u7684\u6d41\u7a0b\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53d7\u5bb3\u8005\u767b\u5f55 a.com\uff0c\u5e76\u4fdd\u7559\u4e86\u767b\u5f55\u51ed\u8bc1\uff08Cookie\uff09\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u653b\u51fb\u8005\u5f15\u8bf1\u53d7\u5bb3\u8005\u8bbf\u95ee\u4e86 b.com\uff1b"),Object(l.b)("li",{parentName:"ul"},"b.com \u5411 a.com \u53d1\u9001\u4e86\u4e00\u4e2a\u8bf7\u6c42\uff1aa.com/act=xx\uff1b\u6d4f\u89c8\u5668\u4f1a\u9ed8\u8ba4\u643a\u5e26 a.com \u7684 Cookie\uff1b"),Object(l.b)("li",{parentName:"ul"},"a.com \u63a5\u6536\u5230\u8bf7\u6c42\u540e\uff0c\u5bf9\u8bf7\u6c42\u8fdb\u884c\u9a8c\u8bc1\uff0c\u5e76\u786e\u8ba4\u662f\u53d7\u5bb3\u8005\u7684\u51ed\u8bc1\uff0c\u8bef\u4ee5\u4e3a\u662f\u53d7\u5bb3\u8005\u81ea\u5df1\u53d1\u9001\u7684\u8bf7\u6c42\uff1b"),Object(l.b)("li",{parentName:"ul"},"a.com \u4ee5\u53d7\u5bb3\u8005\u7684\u540d\u4e49\u6267\u884c\u4e86 act=xx\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u653b\u51fb\u5b8c\u6210\uff0c\u653b\u51fb\u8005\u5728\u53d7\u5bb3\u8005\u4e0d\u77e5\u60c5\u7684\u60c5\u51b5\u4e0b\uff0c\u5192\u5145\u53d7\u5bb3\u8005\uff0c\u8ba9 a.com \u6267\u884c\u4e86\u81ea\u5df1\u5b9a\u4e49\u7684\u64cd\u4f5c\uff1b")),Object(l.b)("h2",{id:"\u5e38\u89c1\u7684\u653b\u51fb\u7c7b\u578b"},"\u5e38\u89c1\u7684\u653b\u51fb\u7c7b\u578b"),Object(l.b)("h3",{id:"get-\u7c7b\u578b"},"GET \u7c7b\u578b"),Object(l.b)("p",null,"GET \u7c7b\u578b\u7684 CSRF \u5229\u7528\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u4e00\u4e2a HTTP \u8bf7\u6c42\uff0c\u4e00\u822c\u4f1a\u8fd9\u6837\u5229\u7528\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-markdown"},"![](https://awps-assets.meituan.net/mit-x/blog-images-bundle-2018b/ff0cdbee.example/withdraw?amount=10000&for=hacker)\n")),Object(l.b)("p",null,"\u5728\u53d7\u5bb3\u8005\u8bbf\u95ee\u542b\u6709\u8fd9\u4e2a img \u7684\u9875\u9762\u540e\uff0c\u6d4f\u89c8\u5668\u4f1a\u81ea\u52a8\u5411 ",Object(l.b)("inlineCode",{parentName:"p"},"http://bank.example/withdraw?account=xiaoming&amount=10000&for=hacker")," \u53d1\u51fa\u4e00\u6b21 HTTP \u8bf7\u6c42\u3002bank.example \u5c31\u4f1a\u6536\u5230\u5305\u542b\u53d7\u5bb3\u8005\u767b\u5f55\u4fe1\u606f\u7684\u4e00\u6b21\u8de8\u57df\u8bf7\u6c42\u3002"),Object(l.b)("h3",{id:"post-\u7c7b\u578b"},"POST \u7c7b\u578b"),Object(l.b)("p",null,"\u8fd9\u79cd\u7c7b\u578b\u7684 CSRF \u5229\u7528\u8d77\u6765\u901a\u5e38\u4f7f\u7528\u7684\u662f\u4e00\u4e2a\u81ea\u52a8\u63d0\u4ea4\u7684\u8868\u5355\uff0c\u5982\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<form action="http://bank.example/withdraw" method="POST">\n  <input type="hidden" name="account" value="xiaoming" />\n  <input type="hidden" name="amount" value="10000" />\n  <input type="hidden" name="for" value="hacker" />\n</form>\n<script>\n  document.forms[0].submit();\n<\/script>\n')),Object(l.b)("p",null,"\u8bbf\u95ee\u8be5\u9875\u9762\u540e\uff0c\u8868\u5355\u4f1a\u81ea\u52a8\u63d0\u4ea4\uff0c\u76f8\u5f53\u4e8e\u6a21\u62df\u7528\u6237\u5b8c\u6210\u4e86\u4e00\u6b21 POST \u64cd\u4f5c\u3002"),Object(l.b)("p",null,"POST \u7c7b\u578b\u7684\u653b\u51fb\u901a\u5e38\u6bd4 GET \u8981\u6c42\u66f4\u52a0\u4e25\u683c\u4e00\u70b9\uff0c\u4f46\u4ecd\u5e76\u4e0d\u590d\u6742\u3002\u4efb\u4f55\u4e2a\u4eba\u7f51\u7ad9\u3001\u535a\u5ba2\uff0c\u88ab\u9ed1\u5ba2\u4e0a\u4f20\u9875\u9762\u7684\u7f51\u7ad9\u90fd\u6709\u53ef\u80fd\u662f\u53d1\u8d77\u653b\u51fb\u7684\u6765\u6e90\uff0c\u540e\u7aef\u63a5\u53e3\u4e0d\u80fd\u5c06\u5b89\u5168\u5bc4\u6258\u5728\u4ec5\u5141\u8bb8 POST \u4e0a\u9762\u3002"),Object(l.b)("h3",{id:"\u94fe\u63a5\u7c7b\u578b"},"\u94fe\u63a5\u7c7b\u578b"),Object(l.b)("p",null,"\u94fe\u63a5\u7c7b\u578b\u7684 CSRF \u5e76\u4e0d\u5e38\u89c1\uff0c\u6bd4\u8d77\u5176\u4ed6\u4e24\u79cd\u7528\u6237\u6253\u5f00\u9875\u9762\u5c31\u4e2d\u62db\u7684\u60c5\u51b5\uff0c\u8fd9\u79cd\u9700\u8981\u7528\u6237\u70b9\u51fb\u94fe\u63a5\u624d\u4f1a\u89e6\u53d1\u3002\u8fd9\u79cd\u7c7b\u578b\u901a\u5e38\u662f\u5728\u8bba\u575b\u4e2d\u53d1\u5e03\u7684\u56fe\u7247\u4e2d\u5d4c\u5165\u6076\u610f\u94fe\u63a5\uff0c\u6216\u8005\u4ee5\u5e7f\u544a\u7684\u5f62\u5f0f\u8bf1\u5bfc\u7528\u6237\u4e2d\u62db\uff0c\u653b\u51fb\u8005\u901a\u5e38\u4f1a\u4ee5\u6bd4\u8f83\u5938\u5f20\u7684\u8bcd\u8bed\u8bf1\u9a97\u7528\u6237\u70b9\u51fb\uff0c\u4f8b\u5982\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'<a href="http://test.com/csrf/withdraw.php?amount=1000&for=hacker" taget="_blank">\u91cd\u78c5\u6d88\u606f\uff01\uff01</a>\n')),Object(l.b)("p",null,"\u7531\u4e8e\u4e4b\u524d\u7528\u6237\u767b\u5f55\u4e86\u4fe1\u4efb\u7684\u7f51\u7ad9 A\uff0c\u5e76\u4e14\u4fdd\u5b58\u767b\u5f55\u72b6\u6001\uff0c\u53ea\u8981\u7528\u6237\u4e3b\u52a8\u8bbf\u95ee\u4e0a\u9762\u7684\u8fd9\u4e2a PHP \u9875\u9762\uff0c\u5219\u8868\u793a\u653b\u51fb\u6210\u529f\u3002"),Object(l.b)("h2",{id:"csrf-\u7684\u7279\u70b9"},"CSRF \u7684\u7279\u70b9"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u653b\u51fb\u4e00\u822c\u53d1\u8d77\u5728\u7b2c\u4e09\u65b9\u7f51\u7ad9\uff0c\u800c\u4e0d\u662f\u88ab\u653b\u51fb\u7684\u7f51\u7ad9\u3002\u88ab\u653b\u51fb\u7684\u7f51\u7ad9\u65e0\u6cd5\u9632\u6b62\u653b\u51fb\u53d1\u751f\u3002"),Object(l.b)("li",{parentName:"ul"},"\u653b\u51fb\u5229\u7528\u53d7\u5bb3\u8005\u5728\u88ab\u653b\u51fb\u7f51\u7ad9\u7684\u767b\u5f55\u51ed\u8bc1\uff0c\u5192\u5145\u53d7\u5bb3\u8005\u63d0\u4ea4\u64cd\u4f5c\uff1b\u800c\u4e0d\u662f\u76f4\u63a5\u7a83\u53d6\u6570\u636e\u3002"),Object(l.b)("li",{parentName:"ul"},"\u6574\u4e2a\u8fc7\u7a0b\u653b\u51fb\u8005\u5e76\u4e0d\u80fd\u83b7\u53d6\u5230\u53d7\u5bb3\u8005\u7684\u767b\u5f55\u51ed\u8bc1\uff0c\u4ec5\u4ec5\u662f\u201c\u5192\u7528\u201d\u3002"),Object(l.b)("li",{parentName:"ul"},"\u8de8\u7ad9\u8bf7\u6c42\u53ef\u4ee5\u7528\u5404\u79cd\u65b9\u5f0f\uff1a\u56fe\u7247 URL\u3001\u8d85\u94fe\u63a5\u3001CORS\u3001Form \u63d0\u4ea4\u7b49\u3002\u90e8\u5206\u8bf7\u6c42\u65b9\u5f0f\u53ef\u4ee5\u76f4\u63a5\u5d4c\u5165\u5728\u7b2c\u4e09\u65b9\u8bba\u575b\u3001\u6587\u7ae0\u4e2d\uff0c\u96be\u4ee5\u8fdb\u884c\u8ffd\u8e2a\u3002")),Object(l.b)("h2",{id:"\u9632\u62a4\u7b56\u7565"},"\u9632\u62a4\u7b56\u7565"),Object(l.b)("p",null,"CSRF \u901a\u5e38\u4ece\u7b2c\u4e09\u65b9\u7f51\u7ad9\u53d1\u8d77\uff0c\u88ab\u653b\u51fb\u7684\u7f51\u7ad9\u65e0\u6cd5\u9632\u6b62\u653b\u51fb\u53d1\u751f\uff0c\u53ea\u80fd\u901a\u8fc7\u589e\u5f3a\u81ea\u5df1\u7f51\u7ad9\u9488\u5bf9 CSRF \u7684\u9632\u62a4\u80fd\u529b\u6765\u63d0\u5347\u5b89\u5168\u6027\u3002"),Object(l.b)("p",null,"\u4e0a\u6587\u4e2d\u8bb2\u4e86 CSRF \u7684\u4e24\u4e2a\u7279\u70b9\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"CSRF \u901a\u5e38\u53d1\u751f\u5728\u7b2c\u4e09\u65b9\u57df\u540d\u3002"),Object(l.b)("li",{parentName:"ul"},"CSRF \u653b\u51fb\u8005\u4e0d\u80fd\u83b7\u53d6\u5230 Cookie \u7b49\u4fe1\u606f\uff0c\u53ea\u662f\u4f7f\u7528\u3002")),Object(l.b)("p",null,"\u9488\u5bf9\u8fd9\u4e24\u70b9\uff0c\u6211\u4eec\u53ef\u4ee5\u4e13\u95e8\u5236\u5b9a\u9632\u62a4\u7b56\u7565\uff0c\u5982\u4e0b\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u963b\u6b62\u4e0d\u660e\u5916\u57df\u7684\u8bbf\u95ee",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u540c\u6e90\u68c0\u6d4b"),Object(l.b)("li",{parentName:"ul"},"Samesite Cookie"))),Object(l.b)("li",{parentName:"ul"},"\u63d0\u4ea4\u65f6\u8981\u6c42\u9644\u52a0\u672c\u57df\u624d\u80fd\u83b7\u53d6\u7684\u4fe1\u606f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"CSRF Token"),Object(l.b)("li",{parentName:"ul"},"\u53cc\u91cd Cookie \u9a8c\u8bc1")))),Object(l.b)("h3",{id:"\u540c\u6e90\u68c0\u6d4b"},"\u540c\u6e90\u68c0\u6d4b"),Object(l.b)("p",null,"\u65e2\u7136 CSRF \u5927\u591a\u6765\u81ea\u7b2c\u4e09\u65b9\u7f51\u7ad9\uff0c\u90a3\u4e48\u6211\u4eec\u5c31\u76f4\u63a5\u7981\u6b62\u5916\u57df\uff08\u6216\u8005\u4e0d\u53d7\u4fe1\u4efb\u7684\u57df\u540d\uff09\u5bf9\u6211\u4eec\u53d1\u8d77\u8bf7\u6c42\u3002"),Object(l.b)("p",null,"\u5728 HTTP \u534f\u8bae\u4e2d\uff0c\u6bcf\u4e00\u4e2a\u5f02\u6b65\u8bf7\u6c42\u90fd\u4f1a\u643a\u5e26\u4e24\u4e2a Request Header\uff0c\u7528\u4e8e\u6807\u8bb0\u6765\u6e90\u57df\u540d\uff1a",Object(l.b)("inlineCode",{parentName:"p"},"Origin")," \u548c ",Object(l.b)("inlineCode",{parentName:"p"},"Referer"),"\u3002\u5b83\u4eec\u5728\u6d4f\u89c8\u5668\u53d1\u8d77\u8bf7\u6c42\u65f6\uff0c\u5927\u591a\u6570\u60c5\u51b5\u4f1a\u81ea\u52a8\u5e26\u4e0a\uff0c\u5e76\u4e14\u4e0d\u80fd\u7531\u524d\u7aef\u81ea\u5b9a\u4e49\u5185\u5bb9\u3002"),Object(l.b)("p",null,"\u670d\u52a1\u5668\u53ef\u4ee5\u901a\u8fc7\u89e3\u6790\u8fd9\u4e24\u4e2a Header \u4e2d\u7684\u57df\u540d\uff0c\u786e\u5b9a\u8bf7\u6c42\u7684\u6765\u6e90\u57df\u3002\u5982\u679c Origin \u5b58\u5728\uff0c\u90a3\u4e48\u76f4\u63a5\u4f7f\u7528 Origin \u4e2d\u7684\u5b57\u6bb5\u786e\u8ba4\u6765\u6e90\u57df\u540d\u5c31\u53ef\u4ee5\u3002\u4f46\u662f Origin \u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u5e76\u4e0d\u5b58\u5728\uff1aIE11 \u540c\u6e90\u7b56\u7565\u3001302 \u91cd\u5b9a\u5411\uff0c\u8fd9\u65f6\u53ef\u4ee5\u89e3\u6790 Referer \u8fdb\u884c\u5224\u65ad\u3002"),Object(l.b)("p",null,"2014 \u5e74\uff0cW3C \u7684 Web \u5e94\u7528\u5b89\u5168\u5de5\u4f5c\u7ec4\u53d1\u5e03\u4e86 Referrer Policy \u8349\u6848\uff0c\u5bf9\u6d4f\u89c8\u5668\u8be5\u5982\u4f55\u53d1\u9001 Referer \u505a\u4e86\u8be6\u7ec6\u7684\u89c4\u5b9a\u3002\u622a\u6b62\u73b0\u5728\u65b0\u7248\u6d4f\u89c8\u5668\u5927\u90e8\u5206\u5df2\u7ecf\u652f\u6301\u4e86\u8fd9\u4efd\u8349\u6848\uff0c\u6211\u4eec\u7ec8\u4e8e\u53ef\u4ee5\u7075\u6d3b\u5730\u63a7\u5236\u81ea\u5df1\u7f51\u7ad9\u7684 Referer \u7b56\u7565\u4e86\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Policy Name"),Object(l.b)("th",{parentName:"tr",align:null},"Value"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"No Referrer"),Object(l.b)("td",{parentName:"tr",align:null},"no-referrer")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"No Referrer When Downgrade"),Object(l.b)("td",{parentName:"tr",align:null},"no-referrer-when-downgrade")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Origin Only"),Object(l.b)("td",{parentName:"tr",align:null},"(same or strict) origin")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Origin When Cross Origin"),Object(l.b)("td",{parentName:"tr",align:null},"(strict) origin-when-cross-origin")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Unsafe URL"),Object(l.b)("td",{parentName:"tr",align:null},"unsafe-url")))),Object(l.b)("p",null,"\u6839\u636e\u4e0a\u9762\u7684\u8868\u683c\u56e0\u6b64\u9700\u8981\u628a Referrer Policy \u7684\u7b56\u7565\u8bbe\u7f6e\u6210 ",Object(l.b)("inlineCode",{parentName:"p"},"same-origin"),"\uff0c\u5bf9\u4e8e\u540c\u6e90\u7684\u94fe\u63a5\u548c\u5f15\u7528\uff0c\u4f1a\u53d1\u9001 Referer\uff0creferer \u503c\u4e3a Host \u4e0d\u5e26 Path\uff1b\u8de8\u57df\u8bbf\u95ee\u5219\u4e0d\u643a\u5e26 Referer\u3002\u4f8b\u5982\uff1aaaa.com \u5f15\u7528 bbb.com \u7684\u8d44\u6e90\uff0c\u4e0d\u4f1a\u53d1\u9001 Referer\u3002"),Object(l.b)("p",null,"\u8bbe\u7f6e Referrer Policy \u7684\u65b9\u6cd5\u6709\u4e09\u79cd\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5728 CSP \u8bbe\u7f6e"),Object(l.b)("li",{parentName:"ul"},"\u9875\u9762\u5934\u90e8\u589e\u52a0 meta \u6807\u7b7e"),Object(l.b)("li",{parentName:"ul"},"a \u6807\u7b7e\u589e\u52a0 referrerpolicy \u5c5e\u6027")),Object(l.b)("p",null,"\u53e6\u5916\u5728\u4ee5\u4e0b\u60c5\u51b5\u4e0b Referer \u6ca1\u6709\u6216\u8005\u4e0d\u53ef\u4fe1\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"IE6/7 \u4e0b\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"window.location.href=url")," \u8fdb\u884c\u754c\u9762\u7684\u8df3\u8f6c\uff0c\u4f1a\u4e22\u5931 Referer\u3002"),Object(l.b)("li",{parentName:"ul"},"IE6/7 \u4e0b\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"window.open"),"\uff0c\u4e5f\u4f1a\u7f3a\u5931 Referer\u3002"),Object(l.b)("li",{parentName:"ul"},"HTTPS \u9875\u9762\u8df3\u8f6c\u5230 HTTP \u9875\u9762\uff0c\u6240\u6709\u6d4f\u89c8\u5668 Referer \u90fd\u4e22\u5931\u3002")),Object(l.b)("p",null,"\u5982\u679c Origin \u548c Referer \u90fd\u4e0d\u5b58\u5728\uff0c\u5efa\u8bae\u76f4\u63a5\u8fdb\u884c\u963b\u6b62\u3002"),Object(l.b)("p",null,"\u7efc\u4e0a\u6240\u8ff0\uff1a\u540c\u6e90\u9a8c\u8bc1\u662f\u4e00\u4e2a\u76f8\u5bf9\u7b80\u5355\u7684\u9632\u8303\u65b9\u6cd5\uff0c\u80fd\u591f\u9632\u8303\u7edd\u5927\u591a\u6570\u7684 CSRF \u653b\u51fb\u3002\u4f46\u8fd9\u5e76\u4e0d\u662f\u4e07\u65e0\u4e00\u5931\u7684\uff0c\u5bf9\u4e8e\u5b89\u5168\u6027\u8981\u6c42\u8f83\u9ad8\uff0c\u6216\u8005\u6709\u8f83\u591a\u7528\u6237\u8f93\u5165\u5185\u5bb9\u7684\u7f51\u7ad9\uff0c\u6211\u4eec\u5c31\u8981\u5bf9\u5173\u952e\u7684\u63a5\u53e3\u505a\u989d\u5916\u7684\u9632\u62a4\u63aa\u65bd\u3002"),Object(l.b)("h3",{id:"csrf-token"},"CSRF Token"),Object(l.b)("p",null,"\u524d\u9762\u8bb2\u5230 CSRF \u7684\u53e6\u4e00\u4e2a\u7279\u5f81\u662f\uff0c\u653b\u51fb\u8005\u65e0\u6cd5\u76f4\u63a5\u7a83\u53d6\u5230\u7528\u6237\u7684\u4fe1\u606f\uff08Cookie\uff0cHeader\uff0c\u7f51\u7ad9\u5185\u5bb9\u7b49\uff09\uff0c\u4ec5\u4ec5\u662f\u5192\u7528 Cookie \u4e2d\u7684\u4fe1\u606f\u3002"),Object(l.b)("p",null,"\u800c CSRF \u653b\u51fb\u4e4b\u6240\u4ee5\u80fd\u591f\u6210\u529f\uff0c\u662f\u56e0\u4e3a\u670d\u52a1\u5668\u8bef\u628a\u653b\u51fb\u8005\u53d1\u9001\u7684\u8bf7\u6c42\u5f53\u6210\u4e86\u7528\u6237\u81ea\u5df1\u7684\u8bf7\u6c42\u3002\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u8981\u6c42\u6240\u6709\u7684\u7528\u6237\u8bf7\u6c42\u90fd\u643a\u5e26\u4e00\u4e2a CSRF \u653b\u51fb\u8005\u65e0\u6cd5\u83b7\u53d6\u5230\u7684 Token\u3002\u670d\u52a1\u5668\u901a\u8fc7\u6821\u9a8c\u8bf7\u6c42\u662f\u5426\u643a\u5e26\u6b63\u786e\u7684 Token\uff0c\u6765\u628a\u6b63\u5e38\u7684\u8bf7\u6c42\u548c\u653b\u51fb\u7684\u8bf7\u6c42\u533a\u5206\u5f00\uff0c\u4e5f\u53ef\u4ee5\u9632\u8303 CSRF \u7684\u653b\u51fb\u3002"),Object(l.b)("p",null,"CSRF Token \u7684\u9632\u62a4\u7b56\u7565\u5206\u4e3a\u4e09\u4e2a\u6b65\u9aa4\uff1a"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u5c06 CSRF Token \u8f93\u51fa\u5230\u9875\u9762\u4e2d"),Object(l.b)("li",{parentName:"ol"},"\u9875\u9762\u63d0\u4ea4\u7684\u8bf7\u6c42\u643a\u5e26\u8fd9\u4e2a Token"),Object(l.b)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u9a8c\u8bc1 Token \u662f\u5426\u6b63\u786e")),Object(l.b)("p",null,"Token \u662f\u4e00\u4e2a\u6bd4\u8f83\u6709\u6548\u7684 CSRF \u9632\u62a4\u65b9\u6cd5\uff0c\u53ea\u8981\u9875\u9762\u6ca1\u6709 XSS \u6f0f\u6d1e\u6cc4\u9732 Token\uff0c\u90a3\u4e48\u63a5\u53e3\u7684 CSRF \u653b\u51fb\u5c31\u65e0\u6cd5\u6210\u529f\u3002"),Object(l.b)("h3",{id:"\u53cc\u91cd-cookie-\u9a8c\u8bc1"},"\u53cc\u91cd Cookie \u9a8c\u8bc1"),Object(l.b)("hr",null),Object(l.b)("p",null,"\u53c2\u8003\u8d44\u6599\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://tech.meituan.com/2018/09/27/fe-security.html"},"\u524d\u7aef\u5b89\u5168\u7cfb\u5217\uff08\u4e00\uff09\uff1a\u5982\u4f55\u9632\u6b62 XSS \u653b\u51fb\uff1f")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://tech.meituan.com/2018/10/11/fe-security-csrf.html"},"\u524d\u7aef\u5b89\u5168\u7cfb\u5217\uff08\u4e8c\uff09\uff1a\u5982\u4f55\u9632\u6b62 CSRF \u653b\u51fb\uff1f"))))}u.isMDXComponent=!0},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||O[m]||l;return n?a.a.createElement(d,b(b({ref:t},o),{},{components:n})):a.a.createElement(d,b({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=m;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var o=2;o<l;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);