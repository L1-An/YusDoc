---
sidebar_position: 5
---

# Usage

First, create a new key in `config.yml`, corresponding to the `id` of your `MythicSpawner`.  
For example, if you created a spawner named `test`, the next step is to configure it in `config.yml`.

<details>
<summary>config.yml</summary>

```yaml title="hologramText:"
test:
  - '%name%'
  - '&c&lRespawn Time'
  - '%warmup%'
```

</details>

After saving the configuration file, execute the `/mmholo reload` command to generate the `Hologram` for `Spawner: test`.

## Refreshing the Hologram

When the `Spawner` is moved, the `Hologram` will not automatically move; you need to manually refresh it. Enter the command `/mmholo refresh <spawner-id>` to do so.