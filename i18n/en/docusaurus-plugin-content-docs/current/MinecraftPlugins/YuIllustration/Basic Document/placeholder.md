---
sidebar_position: 6
---

# Inline Variables

:::warning

Due to performance reasons, inline variables have been deprecated in version `1.1.0`. Please use [Kether Script](./kether.md) to implement inline variables.

:::

The plugin provided a variety of inline variables:

<details>
  <summary>Variable List</summary>

  ```scss
    {unlocked-
     ┗━ [category/total]} - Returns the number of entries a player has unlocked for the specified category or in total
    {bar-
     ┗━ [category/total]} - Returns the progress bar for the number of entries a player has unlocked for the specified category or in total
    {count-
     ┗━ [category/total]} - Returns the total number of entries for the specified category or in total
    {percent-
     ┗━ [category/total]} - Returns the percentage of entries unlocked for the specified category or in total
    {isunlocked-
     ┗━ [category]-[entry]} - Displays whether an entry for the specified category has been unlocked
  ```
</details>

## Usage

Below are some examples of variable usage

```yaml title="main.yml"
icon-B:
  material: NAME_TAG
  name: 'Total Unlock Progress'
  lore:
    - '{bar-total} &a{unlocked-total}&f/&a{count-total}'
```

The effect would look like this:  
![placeholder_demo](./_images_/placeholder_demo.png)