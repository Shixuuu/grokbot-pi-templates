---
description: "Grok Bot routine: transcript-healthcheck — Weekday mornings, scans recent bot chats for friction and proposes skills, bots, or routines that would fix it."
argument-hint: "[extra context]"
---

Schedule: 44 8 * * 1-5 (weekdays 8:44 in the user's local time).

Run the transcript healthcheck from memory. Window: since the last successful run, or the last 24h if unknown. Scan agent transcripts under /home/box/agent-data/agent-transcripts (skip sand-subagent-). Report at most 5 friction points with proposals (skill | bot | routine). Stay quiet when there is nothing worth proposing; no filler. Create nothing until the user picks.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 44 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
