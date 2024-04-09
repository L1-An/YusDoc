---
sidebar_position: 5
---

# 更新记录

## Ver 1.1.0

更新于: `07 Apr. 2024`

- ✅ 重構完成unlock模塊，方便開發者註冊新的事件
- ✅ 重構完成變量模塊，現在換為性能更好的的KetherParser方案，具體使用方法請參閱[wiki](./Basic%20Document/kether.md)
- ✅ 新增ActionToast
- 🛠 修復解鎖條件為item的條目在解鎖後仍然會consume的bug
- ✅ 新增Event type: Craft_Item
- ✅ 新增Event type: Interact_Item
- ✅ 新增物品名稱檢測模式(STRICT, FUZZY)
- 🛠 修復遠程下載源的問題

## Ver 1.0.4

更新于: `10 Mar. 2024`

- ✅ 新增/yui api eval [Kether Script]指令，允許用指令來測試kether腳本
- 🛠 修復解鎖卡使用後不會消耗的bug
- ✅ 新增解鎖對應類別全部條目後獲得獎勵
- 🛠 修復指令權限問題
- ✅ 新增/yui version指令，用於獲取當前插件版本
- ✅ 新增配置文件updater，以後會自動更新每個版本新增的配置文件內容
- 🛠 修復EntryEditor-mmoitems不會正常保存的問題
- 🛠 修復unlock指令會出現兩次解鎖提示的bug
- ✅ 新增Typewriter插件Adapter，添加了一些圖鑑解鎖的事件供該插件使用
- 🛠 修復Deunlock後不會移除添加過的屬性的bug
- 🛠 修復玩家介面中不會顯示設置為show: false但已解鎖的條目的bug
- 🛠 修復拾取物品解鎖事件中consume不會消耗的問題
- 🛠 修復無法給mythiclib正常加上屬性點的bug

## Ver 1.0.3

更新于: `07 Mar. 2024`

- ✅ 新增`config.yml`中的`icon.no-next-icon`和`icon.no-previous-icon`支持**custom-model-data**
- ✅ 新增命令權限節點, 具體請查詢[command](./Start/command.md)
- 🛠 修復拾取物品解鎖無法正確抓取物品lore的問題
- 🛠 修復unlock指令跳錯的問題
- 🛠 修復reward-mmocore和mythiclib中enable按鈕的語言問題
- ✅ 新增解鎖條件: item拾取後支持扣除物品（**但尚未測試**）
- ✅ 新增圖鑑解鎖卡功能: 用`/yui get <category> <entry>`獲取解鎖卡，手持解鎖卡右鍵即可解鎖對應圖鑑
- ✅ 新增命令: `/yui deunlock <category> <entry>` 將玩家已解鎖的條目重新封鎖，相當於在玩家檔案中刪除對應條目
- 🛠 優化指令細節: 所有需要傳入`category`和`entry`的指令都會嚴格檢查，防止出現類別/條目不存在的錯誤信息；在tab補全條目時會根據類別名稱智能補全

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