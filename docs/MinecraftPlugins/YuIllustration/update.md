---
sidebar_position: 5
---

# 更新记录

## Ver 1.0.3

更新中...

- ✅ 新增`config.yml`中的`icon.no-next-icon`和`icon.no-previous-icon`支持**custom-model-data**
- ✅ 新增命令權限節點, 具體請查詢[command](./Start/command.md)
- 🛠 修復拾取物品解鎖無法正確抓取物品lore的問題
- 🛠 修復unlock指令跳錯的問題

## Ver 1.0.2

更新于: `04 Mar. 2024`

- ✅ 新增行内變量`{isunlocked-<category>-<entry>}`  - 顯示對應類別的條目是否已解鎖，返回 config.yml 中 `placeholder.isunlocked.true/false` 鍵的值
- ✅ 新增PAPI變量`yuillustration_isunlocked_<category>_<entry>` - 效果與行內變量相同
- 🛠 優化GUI讀取器和GUI配置文件的格式
- ✅ 新增BattlePass支持: 新增以下quest type: `illusration_unlock` - 解鎖任意條目觸發
- ✅ 新增Chemdah支持: 新增以下quest type: `illusration_unlock` - 解鎖任意條目觸發
- 🛠 修復一些語言文件的bug
- ✅ 新增Metrics統計信息系統

## Ver 1.0.1.1

更新于: `03 Mar. 2024`

- ✅ 新增MythicLib屬性支持(同時支持MMOItems)
- ✅ 允許類別和條目icon顯示變量

## Ver 1.0.1

更新于: `02 Mar. 2024`

- ✅ 新增GUI内编辑功能
- ✅ 新增本地存储功能
- 🛠 优化代码结构

## Ver 1.0.0

更新于: `26 Feb. 2024`

- ✅ 完善基本功能
- 🛠 优化代码结构

## Ver 1.0.0 Dev-3

更新于: `25 Feb. 2024`

- 🛠 优化代码结构
- ✅ 完善 `Unlock` 模块
- ✅ 完善部分 `Reward` 模块

## Ver 1.0.0 Dev-2

更新于: `17 Feb. 2024`

- 🛠 修复 `Dev-1` 中的问题
- ✅ 新增多种占位符
- 🛠 优化代码结构

## Ver 1.0.0 Dev-1

更新于: `16 Feb. 2024`

- ✅ 完成 `ui` 模块
- 🛠 优化代码结构