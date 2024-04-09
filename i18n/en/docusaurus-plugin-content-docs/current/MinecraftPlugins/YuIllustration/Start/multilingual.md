---
sidebar_position: 3
---

# Multilanguage Support

Thanks to **TabooLib6.1**'s `module-lang`, it supports adding a multilanguage system to the plugin, automatically sending messages in different languages based on the player's client language.  
The plugin is preset with three languages: `zh_CN`, `zh_TW`, `en_US`.

## Modifying Language Files

In `./plugin/YuIllustration/lang`, find the file for the corresponding language, using `en_US.yml` as an example. Modify the values and then perform `/yui reload` to apply the language file.

## Adding Your Own Language

You can create your own language file for any language supported by `Minecraft`. For example, to add `British English`, create a file named `en_GB.yml`, write the corresponding key-values, and then `/yui reload` to add the language.

:::tip

You can [find global language codes here](https://saimana.com/list-of-country-locale-code/).

:::