---
sidebar_position: 5
---

# 使用

首先在 `config.yml` 中创建一个新的键, 其与你的 `MythicSpawner` 的 `id` 对应  
例如创建了一个名为 `test` 的刷怪点, 那么下一步就是在 `config.yml` 配置它.

<details>
<summary> config.yml </summary>

```yaml title="hologramText:"
test:
  - '%name%'
  - '&c&l重生时间'
  - '%warmup%'
```

</details>  

保存配置文件后, 执行 `/mmholo reload` 指令, 即可生成出 `Spawner: test` 的 `Hologram`

## 刷新Hologram

当 `Spawner` 移动后, `Hologram` 不会自动移动, 这需要你手动刷新它, 输入指令 `/mmholo refresh <spawner-id>` 即可.