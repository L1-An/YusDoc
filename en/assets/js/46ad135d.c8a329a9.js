"use strict";(self.webpackChunkyusdoc=self.webpackChunkyusdoc||[]).push([[9382],{3905:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>m});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),c=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},p=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return a?t.createElement(m,l(l({ref:r},p),{},{components:a})):t.createElement(m,l({ref:r},p))}));function m(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9140:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=a(7462),n=(a(7294),a(3905));const o={sidebar_position:1},l="VariableReader",i={unversionedId:"Develop/TabooLib/Utils/VariableReader",id:"Develop/TabooLib/Utils/VariableReader",title:"VariableReader",description:"\u8fd9\u662f TabooLib \u63d0\u4f9b\u7684\u4e00\u4e2a\u5de5\u5177\u7c7b, \u7528\u4e8e\u5904\u7406\u5b57\u7b26\u4e32\u4e2d\u5d4c\u5165\u53d8\u91cf\u7684\u8bfb\u53d6\u548c\u64cd\u4f5c.",source:"@site/docs/Develop/TabooLib/Utils/VariableReader.md",sourceDirName:"Develop/TabooLib/Utils",slug:"/Develop/TabooLib/Utils/VariableReader",permalink:"/YusDoc/en/docs/Develop/TabooLib/Utils/VariableReader",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Develop/TabooLib/Utils/VariableReader.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Utils",permalink:"/YusDoc/en/docs/category/utils"}},s={},c=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u57fa\u672c\u7684\u53d8\u91cf\u66ff\u6362",id:"\u57fa\u672c\u7684\u53d8\u91cf\u66ff\u6362",level:3},{value:"\u81ea\u5b9a\u4e49\u6807\u8bb0",id:"\u81ea\u5b9a\u4e49\u6807\u8bb0",level:3},{value:"\u5c06\u5b57\u7b26\u4e32\u89e3\u6790\u4e3a part \u5217\u8868",id:"\u5c06\u5b57\u7b26\u4e32\u89e3\u6790\u4e3a-part-\u5217\u8868",level:3}],p={toc:c},u="wrapper";function b(e){let{components:r,...a}=e;return(0,n.kt)(u,(0,t.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"variablereader"},"VariableReader"),(0,n.kt)("p",null,"\u8fd9\u662f ",(0,n.kt)("strong",{parentName:"p"},"TabooLib")," \u63d0\u4f9b\u7684\u4e00\u4e2a\u5de5\u5177\u7c7b, \u7528\u4e8e\u5904\u7406\u5b57\u7b26\u4e32\u4e2d\u5d4c\u5165\u53d8\u91cf\u7684\u8bfb\u53d6\u548c\u64cd\u4f5c.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/TabooLib/taboolib/blob/master/common-util/src/main/kotlin/taboolib/common/util/VariableReader.kt"},"VariableReader.kt")),(0,n.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,n.kt)("h3",{id:"\u57fa\u672c\u7684\u53d8\u91cf\u66ff\u6362"},"\u57fa\u672c\u7684\u53d8\u91cf\u66ff\u6362"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},'// \u8bbe\u7f6e\u8bfb\u53d6\u5668, \u4ee5 "{{" \u5f00\u5934, \u4ee5 "}}" \u7ed3\u5c3e\nval reader = VariableReader("{{", "}}")\n// \u8bbe\u7f6e\u8bfb\u53d6\u5668\u8981\u5904\u7406\u7684\u5b57\u7b26\u4e32\nval source = "Hello, {{name}}! Today is {{day}}."\nval result = reader.replaceNested(source) {\n    when (this) {\n        "name" -> "TabooLib"\n        "day" -> "Monday"\n        else -> this\n    }\n}\nprintln(result) // \u8f93\u51fa: Hello, TabooLib! Today is Monday.\n')),(0,n.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u6807\u8bb0"},"\u81ea\u5b9a\u4e49\u6807\u8bb0"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},'// \u8bbe\u7f6e\u8bfb\u53d6\u5668, \u4ee5 "<" \u5f00\u5934, \u4ee5 ">" \u7ed3\u5c3e\nval reader = VariableReader("<", ">")\n// \u8bbe\u7f6e\u8bfb\u53d6\u5668\u8981\u5904\u7406\u7684\u5b57\u7b26\u4e32\nval source = "Hello, <name>! Today is <day>."\nval result = reader.replaceNested(source) {\n    when (this) {\n        "name" -> "TabooLib"\n        "day" -> "Monday"\n        else -> this\n    }\n}\nprintln(result) // \u8f93\u51fa: Hello, TabooLib! Today is Monday.\n')),(0,n.kt)("h3",{id:"\u5c06\u5b57\u7b26\u4e32\u89e3\u6790\u4e3a-part-\u5217\u8868"},"\u5c06\u5b57\u7b26\u4e32\u89e3\u6790\u4e3a part \u5217\u8868"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},'// \u8bbe\u7f6e\u8bfb\u53d6\u5668, \u4ee5 "{{" \u5f00\u5934, \u4ee5 "}}" \u7ed3\u5c3e\nval reader = VariableReader("{{", "}}")\n// \u8bbe\u7f6e\u8bfb\u53d6\u5668\u8981\u5904\u7406\u7684\u5b57\u7b26\u4e32\nval source = "Here is a number: {{number}}, and here is a string: {{string}}."\nval parts = reader.readToFlatten(source)\nparts.forEach {\n    println("Text: ${it.text}, IsVariable: ${it.isVariable}")\n}\n')),(0,n.kt)("p",null,"\u5c06\u4f1a\u8fd4\u56de\u4ee5\u4e0b\u5185\u5bb9"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Text: 'Here is a number: ', IsVariable: false\nText: 'number', IsVariable: true\nText: ', and here is a string: ', IsVariable: false\nText: 'string', IsVariable: true\nText: '.', IsVariable: false\n")))}b.isMDXComponent=!0}}]);