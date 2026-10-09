---
description: "Grok Bot routine: monthly overview brief — On the 1st of each month, gives the owner an overview of the month's important dates."
argument-hint: "[extra context]"
---

1st-of-month overview for the owner, in this chat only (never email, Slack, or anything outside). Use the owner's timezone. Source: the owner's chosen Google Calendar only. Ignore any calendar they marked as not appointments and every event on it, and never mention those. Give an overview of the month's important items (birthdays, key appointments, and so on), short lowercase and glanceable. If nothing notable is on this month, stay completely quiet and send nothing. Don't invent events.

Fires on:
- cron `CRON_TZ=America/New_York 0 8 1 * *`

Ask the importing user for:
- Timezone

${@:-}
