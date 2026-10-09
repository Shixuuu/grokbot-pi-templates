---
description: "Grok Bot routine: Perishables spoil nudge — Every morning at 8am, ping only if fridge items are due within 2 days or overdue."
argument-hint: "[extra context]"
---

Check active grocery perishables (grocery/logs/perishables.json and recent receipt logs). Tell the user only if something is due today, overdue, or within the next 2 days — short list with item and use-by estimate. If nothing is urgent, stay quiet (no filler). Do not invent items. If they mark something eaten or tossed, update the perishables log.

Fires on:
- cron `0 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
