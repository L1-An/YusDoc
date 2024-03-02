---
sidebar_position: 3
---

# 多语言

得益于 **TabooLib6.1** 的 `module-lang`, 其支持为插件增加多语言系统, 插件会自动根据玩家的客户端语言发送不同语言的信息.  
插件已预设 `zh_CN`, `zh_TW`, `en_US` 三种语言.

## 修改语言文件

在 `./plugin/YuIllustration/lang` 中, 找到对应语言的文件, 以 `en_US.yml` 为例, 修改值后进行 `/yui reload`, 即可应用语言文件.

## 增加自己的语言

只要是在 `Minecraft` 中支持的语言, 都可以创建自己对应的语言文件, 例如要添加 `英国英语`, 那么新建一个名为 `en_GB.yml` 的文件, 写上对应的键值后 `/yui reload` 即可添加语言.

:::tip

你可以[在这里](https://saimana.com/list-of-country-locale-code/)获取全球语言代码.

:::