---
sidebar_position: 2
---

# 配置文件

预设 `Simplified Chinese` 和 `en_US` 版config, 其他语言请自行翻译.

<details>
  <summary>config.yml</summary>

  ```yaml
    Database:
    # MYSQL, SQLITE
    Method: MYSQL
    SQL:
      host: localhost
      port: 3306
      user: root
      password: root
      database: yuillustration

    # 自定义占位符
    placeholder:
    bar:
      # 空白填充字符
      empty: '§7|'
      # 填充字符
      fill: '§a|'
      # 进度条长度
      length: 20

    # 请勿删除
    icon:
    # 无法使用变量
    no-next-icon:
      material: BARRIER
      name: '&c没有下一页了'
    no-previous-icon:
      material: BARRIER
      name: '&c没有上一页了'
  ```

</details>

<details>
  <summary>category.yml</summary>

  ```yaml
  # 该类别的唯一识别id，请勿重复，在gui/category文件夹中的文件名也必须与此相同
  default:
    name: "默认分类"
    # 是否在主页面中显示该分类
    show: true
    # 这里写类别显示在mainUI上的物品样式
    icon:
      name: "&6默认分类"
      material: WOODEN_SWORD
      custom-model-data: 10001
      shiny: true
      lore:
        - "&7这是一个默认分类"

  test:
    name: "测试分类"
    show: true
    icon:
      name: "&6测试分类"
      material: WOODEN_AXE
      custom-model-data: 10001
      lore:
        - "&7这是一个示例分类"
  ```

</details>

<details>
  <summary>illustration/default.yml</summary>

  ```yaml
  # 该条目的唯一识别id，请勿重复
example:
  # 类别，若不填则默认default
  category: default
  # 未解锁时是否在ui中显示
  show: true
  # 在ui中的图标，必须存在，否则会报错
  icon:
    name: "&6example"
    material: WOODEN_SWORD
    custom-model-data: 10001
    shiny: true
    lore:
      - "&7This is an example item."
  # 若不存在则默认已解锁
  unlock:
    # 可选的解锁类型有: item/event/both/none
    # item - 拾起物品解锁
    # event - 触发对应事件解锁
    # both - 两者同时达成解锁
    # none - 不需要解锁
    type: item
    item:
      name: "example" # 带有该名字的物品获取后解锁
      # 带有该lore的物品获取后解锁
      lore:
      - "example"
    event:
      # 内置的事件类型有:
      # player-join: 玩家加入事件
      # player-quit: 玩家离开事件
      # entity-kill: 实体死亡事件(击杀怪物事件)
      # waystone-active: 激活传送石事件
      type: "entity-kill" # 触发的事件类型
      # 当type为entity-kill时，该字段才有效
      entity-info:
        name: "exampleMob" # 当名字中包含该字符串时触发，忽略颜色符号
        amount: 10 # 当击杀够该数量的生物时触发，不填则默认1，若为0也认为是1
      # 当type为waystone-active时，该字段才有效
      waystone-name: "exampleWaystone" # 传送石名称
  # 解锁后触发的奖励
  reward:
    # kether语句，可以在 https://kether.tabooproject.org/list.html 查看kether语句大全
    content: |-
      command inline "give {{ sender }} diamond 1" as op
      tell color inline "&a你解锁了一个名叫 {{ &entry }} &a的条目!"
    compat:
      # mmocore兼容的奖励
      mmocore:
        attribute: "strength" # 属性名，不填默认strength
        amount: 1 # 属性值，不填默认1
  ```

</details>

<details>
  <summary>gui/main.yml</summary>

  ```yaml
  title: "智慧之书"

  # 抽象字符布局
  # @始终代表填充为图鉴类别的icon，若不存在则不会显示图鉴类别在main中
  # layout的行数代表了gui的行数，最大不能超过6行
  layout:
    - "####S####"
    - "#P@#@#@N#"
    - "####B####"

  # 以下的icon都是可以全自定义的
  # icon-x x代表layout中的字符，注意x只有一个字符，否则将会错误读取
  # type 代表图标类型，有normal, previous, next，不填则默认为normal
  # normal - 普通图标，自定义图标
  # previous - 上一页图标
  # next - 下一页图标
  icon-#:
    type: normal
    # 支持模糊解析，例如有拼写错误一般也可以解析出来
    material: BLACK_STAINED_GLASS_PANE
    name: ' '
  icon-S:
    material: SKULL
    # 物品是否发光
    shiny: true
    name: '{player_name}'
    lore:
      - '&a个人信息'
  icon-B:
    material: NAME_TAG
    name: '总解锁进度'
    lore:
      - '{bar-total} &a{unlocked-total}&f/&a{count-total}'
  icon-N:
    type: next
    material: ARROW
    name: '下一页'
  icon-P:
    type: previous
    material: ARROW
    name: '上一页'
  ```

</details>

<details>
  <summary>gui/category/default.yml</summary>

  ```yaml
  title: "智慧之书 | 默认分类"
  # 必填，类别的唯一识别id
  category: "default"
  
  # 抽象字符布局
  # @始终代表填充为图鉴类别的icon，若不存在则不会显示图鉴类别在main中
  # 图鉴条目会展示在@对应的格子中
  # layout的行数代表了gui的行数，最大不能超过6行
  layout:
    - "####SB###"
    - "#@@@@@@@#"
    - "#@@@@@@@#"
    - "#@@@@@@@#"
    - "P@@@@@@@N"
    - "####M####"
  
  # 以下的icon都是可以全自定义的
  icon-#:
    type: normal
    material: BLACK_STAINED_GLASS_PANE
    name: ' '
  icon-S:
    material: SKULL
    name: '{player_name}'
    lore:
      - '&a个人信息'
  icon-B:
    material: NAME_TAG
    name: '解锁进度'
    lore:
      - '{bar-default} &a{unlocked-default}&f/&a{count-default}'
  icon-N:
    type: next
    material: ARROW
    name: '下一页'
  icon-P:
    type: previous
    material: ARROW
    name: '上一页'
  icon-M:
    type: main
    material: ARROW
    name: '返回主页面'
  ```
  
</details>