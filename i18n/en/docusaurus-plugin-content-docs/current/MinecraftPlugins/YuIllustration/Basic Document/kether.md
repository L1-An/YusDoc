---
sidebar_position: 5
---

# Introduction to Kether Scripts

> **Kether** is a scripting language built into **TabooLib6**. This section will briefly introduce you to this scripting language.

:::tip

For Chinese readers who want to delve deeper into Kether, it's recommended to read a more detailed [Kether Guide](https://www.yuque.com/sacredcraft/kether/home).

:::

## Introduction

Kether is a single-line driven scripting language, composed of line-by-line scripts.  
In **YuIllustration**, Kether scripts are used as rewards when players unlock an entry in the encyclopedia.  

### Example

For instance, in the default configuration:

<details>
<summary>illustration/default.yml Click to expand</summary>

```yaml
example:
  # Reward triggered after unlocking
  reward:
    # Kether statements, you can view a complete list of Kether statements at https://kether.tabooproject.org/list.html
    content: |-
      command inline "give {{ sender }} diamond 1" as op
      tell color inline "&aYou have unlocked an entry named {{ &entry }} &a!"
  ```

</details>

#### Analysis

The content under the `content` key is the Kether statement triggered after unlocking an entry.
The example configuration contains two Kether statements, namely `command` and `tell`.
Next, we will analyze the functions of these two statements in detail:

```kether
command inline "give {{ sender }} diamond 1" as op
```
For this statement, `command` denotes executing a command, `inline` is an inline statement used to pass the `player name` as an argument into the command, `as op` means the command is executed **with op permissions**, it could also be `as console` or omitted (executed as the player). 

The `inline` statement only returns the action enclosed in `{{ }}` as a string, so `{{ sender }}` returns the name of the script executor, which is the player name.
Thus: `inline "give {{ sender }} diamond 1"` this entire line becomes an argument for `command`

--- 
Also, **kether** supports parsing any **PAPI** variable, as shown:
```kether
command inline "give {{ papi %player_name% }} diamond 1" as op
```

--- 
```kether
tell color inline "&aYou have unlocked an entry named {{ &entry }} &a!"
```
For this statement, `tell` denotes sending a message to the player, `color` is a color conversion statement used to convert color codes like `&a` into colored text, and `inline` is an inline statement used to pass the `entry name` as an argument into the message content.

But `color` only converts color codes into colored text and does not output anything by itself, so `tell` is used for output. Therefore, actually, the whole line `color inline "&aYou have unlocked an entry named {{ &entry }} &a!"` is an argument for `tell`.
对于这一句, `tell` 是语句名称, 代表向玩家发送信息, `color` 是颜色转换语句, 用于将形如 `&a` 的颜色代码转换成颜色字符, `inline` 是内联语句, 用于将 `条目名称` 作为参数传入信息内容中.  
  
但 `color` 只能将颜色代码转换为颜色字符, 而不具有输出的功能, 那么 `tell` 就是用来输出的. 那么实际上, `color inilne "&a你解锁了一个名叫 {{ &entry }} &a的条目!"` 这整一行都是 `tell` 的参数.

### Statements

#### Built-in Statements

Kether Script is divided into **public statements** and **private statements**, with `YuIllustration` providing a series of **public statements** for use, as shown in the table below:

|Statement|Description|Note|Example|
|:--|:--|:--|:--|
|`bar <category>`|Returns the progress bar for a category or overall|Fill `<category>` with `total` to return overall progress|`bar default`|
|`count <category>`|Returns the number of entries for a category or overall|Fill `<category>` with `total` to return overall progress|`count default`|
|`isunlocked <category> <entry>`|Returns whether an entry in a category is unlocked| - |`isunlocked default example`|
|`percent <category>`|Returns the progress percentage for a category or overall|Fill `<category>` with `total` to return overall progress|`percent default`|
|`toast <material> <action> [data/nbt <value>] [by/with <frame:task/goal/challenge>]`|Sends an achievement message|Server version must be higher than 1.13, requires [UltimateAdvancementAPI](https://github.com/frengor/UltimateAdvancementAPI)|`toast diamond color inline "&aYou have unlocked the {{ &entry }} &a entry!" data 10001 by challenge`|
|`unlocked <category>`|Returns the number of unlocked entries in a category| - |`unlocked default`|

#### Commonly Used Statements
For encyclopedia entry unlock rewards, the following are commonly used statements:

|Statement|Description|Note|Example|
|:--|:--|:--|:--|
|`tell <action>`|Sends a message| - |`tell color "&aI'm a message!"`|
|`command <action>`|Executes a command| - |`command inline "give {{ sender }} diamond 1"`|
|`actionbar <action>`|Sends action bar message| - |`actionbar color "&aHi, there is actionbar!"`|
|`title <action> subtitle <action> by (fadeIn) (stay) (fadeOut)`|Sends a title and subtitle|Subtitle can be omitted to only send the main title, and vice versa|`title color "&aWelcome" subtitle color "&cTo &3Yu&bIllustration" by 10 40 10`|

---

### Conclusion

As outlined above, mastering the statements listed in the table above can fulfill most functions required for rewarding players upon unlocking encyclopedia entries. If you have any **questions** or **suggestions**, please join the[Discord频道](https://discord.com/invite/SzPBHGttaR) to discuss.