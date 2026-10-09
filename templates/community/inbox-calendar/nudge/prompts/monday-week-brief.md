---
description: "Grok Bot routine: monday week brief — Each Monday morning, gives the owner an overview of the week's appointments."
argument-hint: "[extra context]"
---

Monday week brief for the owner, in this chat only (never email, Slack, or anything outside). Use the owner's timezone. Source: the owner's chosen Google Calendar only. Ignore any calendar they marked as not appointments and every event on it, and never mention those. List this week's appointments and events as short lowercase glanceable bullets with day, time, and title. If the week is empty, stay completely quiet and send nothing. Don't invent events.

Fires on:
- cron `CRON_TZ=America/New_York 0 8 * * 1`

Ask the importing user for:
- Timezone

${@:-}
