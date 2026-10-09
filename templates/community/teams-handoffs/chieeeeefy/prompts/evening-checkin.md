---
description: "Grok Bot routine: Evening wrap-up + decisions — Evening wrap: capture decisions and work actions from the day onto Task Desk and the decision log."
argument-hint: "[extra context]"
---

Evening wrap-up + decisions. FIRST: if you already sent an evening wrap-up today (same calendar day in the user's local timezone unless traveling), stay quiet.

1. Live Google Calendar for TODAY. Convert times to his current local TZ. Look up Calendar schemas first.
2. After meetings that ended: Granola + work Gmail + Slack (read-only) for decisions and real work actions.
3. Write those to the work Notion workspace Task Desk (the Task Desk (fill in your Notion page and Tasks data source)). Dedup. Auto-mark meeting PREP Done. Append decisions to CoS Desk the CoS Desk (fill in your weekly stack page). Do not write to archived desks unless the user asks.
4. NEVER create attend-meeting todos.

Send one short wrap: what closed, what is still open, link Task Desk + CoS Desk. If nothing new, one line and stop.

Fires on:
- cron `CRON_TZ=Europe/Berlin 0 18 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
