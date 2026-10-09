---
description: "Grok Bot routine: evening tomorrow brief — Each evening, gives the owner a heads-up on tomorrow's appointments."
argument-hint: "[extra context]"
---

Evening brief for the owner, in this chat only (never email, Slack, or anything outside). Use the owner's timezone. Source: the owner's chosen Google Calendar only. Ignore any calendar they marked as not appointments and every event on it, and never mention those. List tomorrow's appointments and events only, as short lowercase glanceable bullets with times and titles. If tomorrow is empty, stay completely quiet and send nothing. Don't invent events.

Fires on:
- cron `CRON_TZ=America/New_York 0 20 * * *`

Ask the importing user for:
- Timezone

${@:-}
