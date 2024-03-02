---
sidebar_position: 3
---

# Kether脚本入门

> **Kether** 是一门内置于 **TabooLib6** 中的脚本语言, 在本节中将会简单带你入门这门脚本语言.

:::tip

对于中文读者，若你想要进一步深度学习Kether, 建议阅读更详细的[Kether指南](https://www.yuque.com/sacredcraft/kether/home)

:::

## 简介

Kether是一个以单行语句驱动的脚本语言, 由一行一行的脚本构成.  
在 **YuIllustration** 中, Kether脚本是用于当玩家解锁图鉴后作为奖励使用.  

### 示例

例如在默认配置中:

<details>
<summary>illustration/default.yml 点击以展开</summary>

```yaml
example:
  # 解锁后触发的奖励
  reward:
    # kether语句，可以在 https://kether.tabooproject.org/list.html 查看kether语句大全
    content: |-
      command inline "give {{ sender }} diamond 1" as op
      tell color inline "&a你解锁了一个名叫 {{ &entry }} &a的条目!"
  ```

</details>

#### 解析

`content` 键里的内容就是解锁图鉴后触发的kether语句.  
示例配置中有两句Kether语句, 分别是 `command` 和 `tell`.  
接下来将详细解析这两个语句的作用:

```kether
command inline "give {{ sender }} diamond 1" as op
```
对于这一句, `command` 是语句名称, 代表执行指令, `inline` 是内联语句, 用于将 `玩家名` 作为参数传入指令中, `as op` 代表以**op身份**执行该命令, 也可以是 `as console` 或不加(则是以玩家身份执行).  
  
`inline` 语句的作用只有在文本内将以 `{{ }}` 扩起来的动作返回为字符, 因此 `{{ sender }}` 返回的就是脚本执行者的名称, 也就是玩家名.  
那么: `inline "give {{ sender }} diamond 1"`这一整行都作为 `command` 的参数了  

--- 
另外, **kether**也支持解析任何**PAPI**变量, 使用方法为:
```kether
command inline "give {{ papi %player_name% }} diamond 1" as op
```

--- 
```kether
tell color inline "&a你解锁了一个名叫 {{ &entry }} &a的条目!"
```
对于这一句, `tell` 是语句名称, 代表向玩家发送信息, `color` 是颜色转换语句, 用于将形如 `&a` 的颜色代码转换成颜色字符, `inline` 是内联语句, 用于将 `条目名称` 作为参数传入信息内容中.  
  
但 `color` 只能将颜色代码转换为颜色字符, 而不具有输出的功能, 那么 `tell` 就是用来输出的. 那么实际上, `color inilne "&a你解锁了一个名叫 {{ &entry }} &a的条目!"` 这整一行都是 `tell` 的参数.

### 常用的语句

对于图鉴解锁奖励, 常用的语句有如下几个:

|语句|说明|备注|示例|
|:--|:--|:--|:--|
|`tell <action>`|发送信息| - |`tell color "&a翻斗花园牛爷爷"`|
|`command <action>`|执行指令| - |`command inline "give {{ sender }} diamond 1"`|
|`actionbar <action>`|发送动作栏信息| - |`actionbar color "&a牛奶奶偷了刘奶奶的牛奶"`|
|`title <action> subtitle <action> by (fadeIn) (stay) (fadeOut)`|发送标题和副标题|也可以不传入subtitle, 这样就默认只发送主标题, 反之亦然|`title color "&a大锤八十" subtitle color "&c小锤四十" by 10 40 10`|
|`toast <material> <action> [(by/with) (task/goal/challenge)]`|发送成就信息|需要服务端版本高于1.13|`toast diamond color inline "&a你解锁了 {{ &entry }} &a条目!" by challenge`|

---

### 总结

综上所述, 只要能够熟练掌握上述表格中的几个语句几乎就能胜任大部分图鉴条目解锁后给予奖励所需的功能. 若还有**不明确**或**想提出建议**的请加入[Discord频道](https://discord.com/invite/SzPBHGttaR)讨论