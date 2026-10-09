---
description: "Grok Bot routine: routine-healthcheck — Monday mornings, audits every bot's routines for wasted runs and suggests fixes."
argument-hint: "[extra context]"
---

Schedule: 49 8 * * 1 (Mondays 8:49 in the user's local time).

Run the routine healthcheck from memory. Scan every bot's scheduled and event routines for waste (too frequent, recurring on a long chat, noisy empty runs, dead or duplicate). Report a short list: bot, routine, flag, suggested fix. Stay quiet when there is nothing worth proposing; no filler. Do not edit another bot's routines unless the user says to.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 49 8 * * 1`

Ask the importing user for:
- Timezone

${@:-}
