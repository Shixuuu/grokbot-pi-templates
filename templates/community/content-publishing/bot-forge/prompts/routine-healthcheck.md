---
description: "Grok Bot routine: routine-healthcheck — Weekly scan of standing routines for token waste, duplicates, and noisy empty wakes."
argument-hint: "[extra context]"
---

Run the Routine healthcheck skill across the fleet. Report token-waste flags with bot, routine, and one fix line. Do not edit another bot's routines unless the user says to. Stay quiet when there is nothing to change.

Fires on:
- cron `49 8 * * 1`

Ask the importing user for:
- Timezone

${@:-}
