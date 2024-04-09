---
sidebar_position: 5
---

# Changelog

## Ver 1.1.0

Updated on: `07 Apr. 2024`

- ✅ Refactored unlock module for easier event registration by developers
- ✅ Refactored the variable module, now using the more performant KetherParser solution, for usage please see [wiki](./Basic%20Document/kether.md)
- ✅ Added ActionToast
- 🛠 Fixed the bug where items' unlock conditions would still consume the item after unlocking
- ✅ Added Event type: Craft_Item
- ✅ Added Event type: Interact_Item
- ✅ Added item name detection mode (STRICT, FUZZY)
- 🛠 Fixed remote download source issue

## Ver 1.0.4

Updated on: `10 Mar. 2024`

- ✅ Added `/yui api eval [Kether Script]` command, allowing the testing of kether scripts via command
- 🛠 Fixed the bug where unlock cards were not consumed after use
- ✅ Added reward for unlocking all entries in a category
- 🛠 Fixed command permission issues
- ✅ Added `/yui version` command to get the current plugin version
- ✅ Added configuration file updater, which will automatically update contents for each version
- 🛠 Fixed the issue where EntryEditor-mmoitems would not save properly
- 🛠 Fixed the bug where the unlock command would show unlock prompts twice
- ✅ Added Typewriter plugin Adapter, added some encyclopedia unlock events for the plugin use
- 🛠 Fixed the bug where attributes added after Deunlock were not removed
- 🛠 Fixed the bug where entries set to show: false but unlocked did not appear in the player interface
- 🛠 Fixed the issue where items' pickup unlock events did not consume the item
- 🛠 Fixed the issue where attributes could not be properly added to mythiclib

## Ver 1.0.3

Updated on: `07 Mar. 2024`

- ✅ Added support for **custom-model-data** in `config.yml` for `icon.no-next-icon` and `icon.no-previous-icon`
- ✅ Added command permission nodes, for details please check [command](./Start/command.md)
- 🛠 Fixed the issue where pickup item unlock could not correctly capture item lore
- 🛠 Fixed the unlock command error
- 🛠 Fixed the language issue with the enable button in reward-mmocore and mythiclib
- ✅ Added unlock condition: Item pickup now supports deduction of items (**not yet tested**)
- ✅ Added encyclopedia unlock card feature: Use `/yui get <category> <entry>` to get an unlock card, right-click with the unlock card in hand to unlock the corresponding encyclopedia
- ✅ Added command: `/yui deunlock <category> <entry>` to re-lock an entry that the player has unlocked, essentially deleting the corresponding entry in the player's profile
- 🛠 Optimized command details: All commands requiring `category` and `entry` will strictly check to prevent error messages of nonexistent categories/entries; tab completion of entries will intelligently complete based on category name

## Ver 1.0.2

Updated on: `04 Mar. 2024`

- ✅ Added inline variable `{isunlocked-<category>-<entry>}` - Displays whether an entry of the corresponding category is unlocked, returns the value of the `placeholder.isunlocked.true/false` key in config.yml
- ✅ Added PAPI variable `yuillustration_isunlocked_<category>_<entry>` - Same effect as the inline variable
- 🛠 Optimized GUI loader and GUI configuration file format
- ✅ Added BattlePass support: Added quest type `illustration_unlock` - Triggered by unlocking any entry
- ✅ Added Chemdah support: Added quest type `illustration_unlock` - Triggered by unlocking any entry
- 🛠 Fixed some language file bugs
- ✅ Added Metrics statistics system

## Ver 1.0.1.1

Updated on: `03 Mar. 2024`

- ✅ Added MythicLib attribute support (also supports MMOItems)
- ✅ Allowed category and entry icon to display variables

## Ver 1.0.1

Updated on: `02 Mar. 2024`

- ✅ Added in-GUI editing feature
- ✅ Added local storage feature
- 🛠 Optimized code structure

## Ver 1.0.0

Updated on: `26 Feb. 2024`

- ✅ Perfected basic functionality
- 🛠 Optimized code structure

## Ver 1.0.0 Dev-3

Updated on: `25 Feb. 2024`

- 🛠 Optimized code structure
- ✅ Perfected `Unlock` module
- ✅ Perfected parts of the `Reward` module

## Ver 1.0.0 Dev-2

Updated on: `17 Feb. 2024`

- 🛠 Fixed issues in `Dev-1`
- ✅ Added various placeholders
- 🛠 Optimized code structure

## Ver 1.0.0 Dev-1

Updated on: `16 Feb. 2024`

- ✅ Completed `ui` module
- 🛠 Optimized code structure
