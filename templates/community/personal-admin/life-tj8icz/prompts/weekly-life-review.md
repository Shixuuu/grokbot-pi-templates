---
description: "Grok Bot routine: Weekly life review — Every Sunday at 18:00, asks each Bot for its top open item and sends the user one short weekly review."
argument-hint: "[extra context]"
---

Ask each Bot you set up for its single most important open item for the coming week. Combine the answers into one short review for the user: what needs them, what is due, what can wait. Skip Bots with nothing open. Never act on the items yourself. If the user's timezone is unknown, ask them once for their IANA timezone before the next run.

Fires on:
- cron `CRON_TZ=Asia/Calcutta 0 18 * * 0`

Ask the importing user for:
- Timezone

${@:-}
