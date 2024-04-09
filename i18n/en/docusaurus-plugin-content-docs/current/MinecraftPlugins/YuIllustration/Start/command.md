---
sidebar_position: 4
---

# Commands

## Main Command

`yuillustration`, `yui`, `illustration`

## Subcommands

:::info

Content wrapped in () is optional, while content wrapped in [] is required.

:::

```scss title="Command Structure"
/yui (yuillustration.command)
 ┣━ reload - Reloads all files, including categories and entries - (yuillustration.command.reload)
 ┣━ open - Opens the main interface for the command executor (player) - (yuillustration.command.reload)
 ┃  ┣━ (player) Opens the main interface for player
 ┃  ┗━ (category) Opens the interface for the specified category for the command executor (player)
 ┃      ┗━ (player) Opens the interface for the specified category for player
 ┣━ edit - Opens the edit page for the command executor (player) - (yuillustration.command.edit)
 ┃  ┗━ (player) Opens the edit interface for player
 ┣━ api - (yuillustration.command.api)
 ┃  ┗━ file
 ┃      ┗━ createui
 ┃          ┗━ [category name] - Creates a UI file for the specified category with a default layout. It won't overwrite if it already exists.
 ┣━ unlock - (yuillustration.command.unlock)
 ┃  ┗━ [category]
 ┃      ┗━ [entry] - Unlocks the entry of the specified category for the command executor (player)
 ┃          ┗━ (player) - Unlocks the entry of the specified category for player
 ┣━ deunlock - (yuillustration.command.deunlock)
 ┃  ┗━ [category]
 ┃      ┗━ [entry] - Reversely unlocks the entry of the specified category for the command executor (player), in other words, cancels the unlock
 ┃          ┗━ (player) - Reversely unlocks the entry of the specified category for player, in other words, cancels the unlock
 ┣━ get
 ┃  ┗━ [category]
 ┃      ┗━ [entry] - Gives the unlock card of the entry of the specified category to the command executor (player)
 ┃          ┗━ (player) - Gives the unlock card of the entry of the specified category to player
 ┗━ version - Gets the current plugin version
```