---
sidebar_position: 6
---

# 行内变量

插件提供了多种行内变量:

<details>
  <summary>变量列表</summary>

  ```scss
    {unlocked-
     ┗━ [category/total]} - 返回玩家已解锁对应category或总的条目数量
    {bar-
     ┗━ [category/total]} - 返回玩家已解锁对应category或总的条目bar
    {count-
     ┗━ [category/total]} - 返回对应category或总的条目数量
    {percent-
     ┗━ [category/total]} - 返回对应category或总的条目百分比
    {isunlocked-
     ┗━ [category]-[entry]} - 显示对应类别的条目是否已解锁
  ```
</details>

## 使用

以下是一些变量使用的示例

```yaml title="main.yml"
icon-B:
  material: NAME_TAG
  name: '总解锁进度'
  lore:
    - '{bar-total} &a{unlocked-total}&f/&a{count-total}'
```

效果就是这样的:  
![placeholder_demo](./_images_/placeholder_demo.png)