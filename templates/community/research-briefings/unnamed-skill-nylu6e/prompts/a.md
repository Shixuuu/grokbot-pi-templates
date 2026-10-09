---
description: "Grok Bot routine: A/港盘前 — Overnight/global scan into A/HK open agenda"
argument-hint: "[extra context]"
---

执行「A/港盘前」（Asia/Shanghai）。焦点：隔夜全球与美股映射 → A/港开盘议程。
硬规则：按 BRIEF-{slack_channel_id}/SCHEMA 与模板约定（两档交付、±40分短档去重、说人话、假日门控、每窗轻刷币圈、异动钟=启用例行、硬节点三层、流程禁过期实例）；非投资建议；不编造。
回写 briefs/、tracks、sectors、dashboards/crypto、alerts/LOG（按需）；未达告警则跳过买卖倾向。

Fires on:
- cron `CRON_TZ=Asia/Shanghai 51 8 * * 1-5`

Ask the importing user for:
- Timezone
- Slack channel id

${@:-}
