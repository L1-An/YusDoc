---
sidebar_position: 4
---

# 命令

## 主命令

`yuillustration`, `yui`, `illustration`

## 子命令

:::info

以()包裹的内容为可选输入, 以[]包裹的内容为必须输入

:::

```scss title="命令结构"
/yui
 ┣━ reload - 重载所有文件, 包括category和entry
 ┣━ open - 为命令执行者(player)打开主界面
 ┃  ┣━ (player) 为 player 打开主界面
 ┃  ┗━ (category) 为命令执行者(player)打开对应类别的界面
 ┃      ┗━ (player) 为 player 打开对应类别的界面
 ┣━ api
 ┃  ┗━ file
 ┃      ┗━ createui
 ┃          ┗━ [category name] - 创建一个对应分类的UI文件，内容为默认格式的布局，如果已存在则不会覆盖
 ┣━ unlock
 ┃  ┗━ [category]
 ┃      ┗━ [entry] - 为命令执行者(player)解锁对应类别的条目
 ┃          ┗━ (player) - 为 player 解锁对应类别的条目
 ┗━ edit - 为命令执行者(player)打开edit页面
    ┗━ (player) 为 player 打开edit界面
```