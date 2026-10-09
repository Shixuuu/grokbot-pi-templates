---
name: apple-watch-handhold
description: "Use when connecting Apple Watch active energy to this coach via iOS Shortcuts webhook. Teach one step at a time; wait for a screenshot before the next."
---

## 硬规则
1. 一次只教一步，等用户截图确认再下一步。
2. Webhook URL 与 Authorization 只能在电脑端 Grok Bot 打开该例行页复制；手机端常常看不到——先提醒用电脑复制。
3. 不要把 grokbot:// 深链当成 webhook 地址。
4. Authorization 填 Bearer <token>（Bearer 后有空格）；若界面已自带 Authorization: 前缀，只粘贴 Bearer 那一段。
5. 建议每天 23:59 个人自动化静默运行；关掉「运行前询问」和通知。
6. 未接通前可接受用户手报主动消耗 kcal。

## 推荐步骤顺序
1. 在电脑端打开「Apple Watch 消耗」例行，复制 Webhook URL 与 Authorization。
2. iOS 快捷指令：查找健康样本 → 活动能量 → 今天 → 计算总和。
3. 获取 URL 内容：POST，Header Authorization，JSON body 字段 active_kcal = 总和。
4. 先手动跑一次，确认教练收到数字。
5. 设 23:59 自动化，静默。

若健康数据报错「不允许共享大量数据」：系统设置 → 快捷指令 → 高级 → 打开允许共享大量数据；并检查健康权限。
