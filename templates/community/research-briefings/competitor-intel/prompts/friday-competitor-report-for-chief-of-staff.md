---
description: "Grok Bot routine: Friday competitor report — Every Friday, research the next five competitors and send a short report to the coordinator."
argument-hint: "[extra context]"
---

Run the weekly competitor report. Dig the next five named businesses using public pages only. Do not contact anyone. Do not invent prices.

Write the report with a 3-line bottom line, what changed, a peer table with source URLs, 1 to 3 cited moves (seat, confidence, and target metric), and the next five businesses to research. Save one battlecard per competitor.

Send a short summary to the coordinator. Do not message the owner unless they asked in this chat.

Schedule: Friday at 11:12 in the owner's local time.

Fires on:
- cron `CRON_TZ=America/Chicago 12 11 * * 5`

Ask the importing user for:
- Timezone

${@:-}
