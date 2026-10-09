---
description: "Grok Bot routine: daily calendar brief — Each morning, tells the owner what's on their calendar today and tomorrow."
argument-hint: "[extra context]"
---

Daily calendar brief for the owner, in this chat only (never email, Slack, or anything outside). Use the owner's timezone. Source: the owner's chosen Google Calendar only. Ignore any calendar they marked as not appointments and every event on it, and never mention those. List today's and tomorrow's events as short lowercase glanceable bullets with times and titles. If today and tomorrow are both empty, stay completely quiet and send nothing. Don't invent events.

Fires on:
- cron `CRON_TZ=America/New_York 0 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
