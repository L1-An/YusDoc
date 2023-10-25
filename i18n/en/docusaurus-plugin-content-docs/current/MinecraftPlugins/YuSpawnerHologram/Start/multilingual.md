---
sidebar_position: 3
---

# Multilingual Support

Thanks to the `module-lang` feature of **TabooLib6**, it supports adding a multilingual system to the plugin. The plugin will automatically send messages in different languages based on the player's client language.

## Modifying Language Files

In `./plugin/YuSpawnerHologram/lang`, find the file for the respective language. Taking `en_US.yml` as an example, modify the values, and then apply the language file with `/mmholo reload`.

## Adding Your Own Language

As long as it is a language supported by `Minecraft`, you can create your corresponding language file. For example, to add `British English`, create a file named `en_GB.yml`, write the corresponding key-values, and then add the language with `/mmholo reload`.

:::tip

You can get the global language codes [here](https://saimana.com/list-of-country-locale-code/).

:::