"use strict";(self.webpackChunkyusdoc=self.webpackChunkyusdoc||[]).push([[9960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:5},l="Introduction to Kether Scripts",o={unversionedId:"MinecraftPlugins/YuIllustration/Basic Document/kether",id:"MinecraftPlugins/YuIllustration/Basic Document/kether",title:"Introduction to Kether Scripts",description:"Kether is a scripting language built into TabooLib6. This section will briefly introduce you to this scripting language.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/MinecraftPlugins/YuIllustration/Basic Document/kether.md",sourceDirName:"MinecraftPlugins/YuIllustration/Basic Document",slug:"/MinecraftPlugins/YuIllustration/Basic Document/kether",permalink:"/YusDoc/en/docs/MinecraftPlugins/YuIllustration/Basic Document/kether",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/MinecraftPlugins/YuIllustration/Basic Document/kether.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Creating and Editing Entries",permalink:"/YusDoc/en/docs/MinecraftPlugins/YuIllustration/Basic Document/create_entry"},next:{title:"Inline Variables",permalink:"/YusDoc/en/docs/MinecraftPlugins/YuIllustration/Basic Document/placeholder"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Example",id:"example",level:3},{value:"Analysis",id:"analysis",level:4},{value:"Statements",id:"statements",level:3},{value:"Built-in Statements",id:"built-in-statements",level:4},{value:"Commonly Used Statements",id:"commonly-used-statements",level:4},{value:"Conclusion",id:"conclusion",level:3}],d={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-kether-scripts"},"Introduction to Kether Scripts"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Kether")," is a scripting language built into ",(0,r.kt)("strong",{parentName:"p"},"TabooLib6"),". This section will briefly introduce you to this scripting language.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For Chinese readers who want to delve deeper into Kether, it's recommended to read a more detailed ",(0,r.kt)("a",{parentName:"p",href:"https://www.yuque.com/sacredcraft/kether/home"},"Kether Guide"),".")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Kether is a single-line driven scripting language, composed of line-by-line scripts.",(0,r.kt)("br",{parentName:"p"}),"\n","In ",(0,r.kt)("strong",{parentName:"p"},"YuIllustration"),", Kether scripts are used as rewards when players unlock an entry in the encyclopedia.  "),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"For instance, in the default configuration:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"illustration/default.yml Click to expand"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'example:\n  # Reward triggered after unlocking\n  reward:\n    # Kether statements, you can view a complete list of Kether statements at https://kether.tabooproject.org/list.html\n    content: |-\n      command inline "give {{ sender }} diamond 1" as op\n      tell color inline "&aYou have unlocked an entry named {{ &entry }} &a!"\n'))),(0,r.kt)("h4",{id:"analysis"},"Analysis"),(0,r.kt)("p",null,"The content under the ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," key is the Kether statement triggered after unlocking an entry.\nThe example configuration contains two Kether statements, namely ",(0,r.kt)("inlineCode",{parentName:"p"},"command")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tell"),".\nNext, we will analyze the functions of these two statements in detail:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kether"},'command inline "give {{ sender }} diamond 1" as op\n')),(0,r.kt)("p",null,"For this statement, ",(0,r.kt)("inlineCode",{parentName:"p"},"command")," denotes executing a command, ",(0,r.kt)("inlineCode",{parentName:"p"},"inline")," is an inline statement used to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"player name")," as an argument into the command, ",(0,r.kt)("inlineCode",{parentName:"p"},"as op")," means the command is executed ",(0,r.kt)("strong",{parentName:"p"},"with op permissions"),", it could also be ",(0,r.kt)("inlineCode",{parentName:"p"},"as console")," or omitted (executed as the player). "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"inline")," statement only returns the action enclosed in ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ }}")," as a string, so ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ sender }}")," returns the name of the script executor, which is the player name.\nThus: ",(0,r.kt)("inlineCode",{parentName:"p"},'inline "give {{ sender }} diamond 1"')," this entire line becomes an argument for ",(0,r.kt)("inlineCode",{parentName:"p"},"command")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Also, ",(0,r.kt)("strong",{parentName:"p"},"kether")," supports parsing any ",(0,r.kt)("strong",{parentName:"p"},"PAPI")," variable, as shown:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kether"},'command inline "give {{ papi %player_name% }} diamond 1" as op\n')),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kether"},'tell color inline "&aYou have unlocked an entry named {{ &entry }} &a!"\n')),(0,r.kt)("p",null,"For this statement, ",(0,r.kt)("inlineCode",{parentName:"p"},"tell")," denotes sending a message to the player, ",(0,r.kt)("inlineCode",{parentName:"p"},"color")," is a color conversion statement used to convert color codes like ",(0,r.kt)("inlineCode",{parentName:"p"},"&a")," into colored text, and ",(0,r.kt)("inlineCode",{parentName:"p"},"inline")," is an inline statement used to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"entry name")," as an argument into the message content."),(0,r.kt)("p",null,"But ",(0,r.kt)("inlineCode",{parentName:"p"},"color")," only converts color codes into colored text and does not output anything by itself, so ",(0,r.kt)("inlineCode",{parentName:"p"},"tell")," is used for output. Therefore, actually, the whole line ",(0,r.kt)("inlineCode",{parentName:"p"},'color inline "&aYou have unlocked an entry named {{ &entry }} &a!"')," is an argument for ",(0,r.kt)("inlineCode",{parentName:"p"},"tell"),".\n\u5bf9\u4e8e\u8fd9\u4e00\u53e5, ",(0,r.kt)("inlineCode",{parentName:"p"},"tell")," \u662f\u8bed\u53e5\u540d\u79f0, \u4ee3\u8868\u5411\u73a9\u5bb6\u53d1\u9001\u4fe1\u606f, ",(0,r.kt)("inlineCode",{parentName:"p"},"color")," \u662f\u989c\u8272\u8f6c\u6362\u8bed\u53e5, \u7528\u4e8e\u5c06\u5f62\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"&a")," \u7684\u989c\u8272\u4ee3\u7801\u8f6c\u6362\u6210\u989c\u8272\u5b57\u7b26, ",(0,r.kt)("inlineCode",{parentName:"p"},"inline")," \u662f\u5185\u8054\u8bed\u53e5, \u7528\u4e8e\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6761\u76ee\u540d\u79f0")," \u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u4fe1\u606f\u5185\u5bb9\u4e2d.  "),(0,r.kt)("p",null,"\u4f46 ",(0,r.kt)("inlineCode",{parentName:"p"},"color")," \u53ea\u80fd\u5c06\u989c\u8272\u4ee3\u7801\u8f6c\u6362\u4e3a\u989c\u8272\u5b57\u7b26, \u800c\u4e0d\u5177\u6709\u8f93\u51fa\u7684\u529f\u80fd, \u90a3\u4e48 ",(0,r.kt)("inlineCode",{parentName:"p"},"tell")," \u5c31\u662f\u7528\u6765\u8f93\u51fa\u7684. \u90a3\u4e48\u5b9e\u9645\u4e0a, ",(0,r.kt)("inlineCode",{parentName:"p"},'color inilne "&a\u4f60\u89e3\u9501\u4e86\u4e00\u4e2a\u540d\u53eb {{ &entry }} &a\u7684\u6761\u76ee!"')," \u8fd9\u6574\u4e00\u884c\u90fd\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"tell")," \u7684\u53c2\u6570."),(0,r.kt)("h3",{id:"statements"},"Statements"),(0,r.kt)("h4",{id:"built-in-statements"},"Built-in Statements"),(0,r.kt)("p",null,"Kether Script is divided into ",(0,r.kt)("strong",{parentName:"p"},"public statements")," and ",(0,r.kt)("strong",{parentName:"p"},"private statements"),", with ",(0,r.kt)("inlineCode",{parentName:"p"},"YuIllustration")," providing a series of ",(0,r.kt)("strong",{parentName:"p"},"public statements")," for use, as shown in the table below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Statement"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Note"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bar <category>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Returns the progress bar for a category or overall"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fill ",(0,r.kt)("inlineCode",{parentName:"td"},"<category>")," with ",(0,r.kt)("inlineCode",{parentName:"td"},"total")," to return overall progress"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bar default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"count <category>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Returns the number of entries for a category or overall"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fill ",(0,r.kt)("inlineCode",{parentName:"td"},"<category>")," with ",(0,r.kt)("inlineCode",{parentName:"td"},"total")," to return overall progress"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"count default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"isunlocked <category> <entry>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Returns whether an entry in a category is unlocked"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"isunlocked default example"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"percent <category>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Returns the progress percentage for a category or overall"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fill ",(0,r.kt)("inlineCode",{parentName:"td"},"<category>")," with ",(0,r.kt)("inlineCode",{parentName:"td"},"total")," to return overall progress"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"percent default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"toast <material> <action> [data/nbt <value>] [by/with <frame:task/goal/challenge>]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sends an achievement message"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server version must be higher than 1.13, requires ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/frengor/UltimateAdvancementAPI"},"UltimateAdvancementAPI")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'toast diamond color inline "&aYou have unlocked the {{ &entry }} &a entry!" data 10001 by challenge'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unlocked <category>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Returns the number of unlocked entries in a category"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unlocked default"))))),(0,r.kt)("h4",{id:"commonly-used-statements"},"Commonly Used Statements"),(0,r.kt)("p",null,"For encyclopedia entry unlock rewards, the following are commonly used statements:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Statement"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Note"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tell <action>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sends a message"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'tell color "&aI\'m a message!"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"command <action>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Executes a command"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'command inline "give {{ sender }} diamond 1"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actionbar <action>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sends action bar message"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'actionbar color "&aHi, there is actionbar!"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"title <action> subtitle <action> by (fadeIn) (stay) (fadeOut)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sends a title and subtitle"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Subtitle can be omitted to only send the main title, and vice versa"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'title color "&aWelcome" subtitle color "&cTo &3Yu&bIllustration" by 10 40 10'))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"As outlined above, mastering the statements listed in the table above can fulfill most functions required for rewarding players upon unlocking encyclopedia entries. If you have any ",(0,r.kt)("strong",{parentName:"p"},"questions")," or ",(0,r.kt)("strong",{parentName:"p"},"suggestions"),", please join the",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/SzPBHGttaR"},"Discord\u9891\u9053")," to discuss."))}c.isMDXComponent=!0}}]);