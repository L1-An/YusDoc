---
sidebar_position: 2
---

# Configuration File

Preset 'Simplified Chinese' and 'en_US' version of config, for other languages please translate yourself.

```yaml
# Translate By ChatGPT, please forgive me for any mistakes

# Choose the plugin that hologram depends on, available options: adyeshach, HolographicDisplays, DecentHolograms
# Please install at least one of the above plugins as a prerequisite dependency
# The priority of the dependency is: Adyeshach > DecentHolograms > HolographicDisplays
dependency: 'adyeshach'

# Time format, supported placeholders are: %HH% hours %mm% minutes %ss% seconds
durationFormat: "&6 %HH% &eHours&6 %mm% &eMinutes&6 %ss% &eSeconds"

# Text displayed when the spawner has already spawned monsters (replace the %warmup% line)
activeMsg: "&aIn Progress..."

# Text of the hologram
hologramText:
 # Default spawner info
  # %name% is the name of the monster summoned by the spawner, %warmup% is the warmup time, note: currently only supports using warmup, not cooldown
  default: # name of the spawner
    - '%name%'
    - '&c&lRespawn Time'
    - '%warmup%'
papiText:
 # Default spawner info
  default: # name of the spawner
    # Text displayed when the spawner has spawned monsters (replace the %warmup% line)
    running: "&aIn Progress..."
    # Text displayed when the spawner hasn't spawned monsters (replace the %warmup% line)
    waiting: "&cRespawning in %warmup%"
```