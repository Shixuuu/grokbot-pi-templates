---
description: "Grok Bot routine: monthly-checkpoint — Optional first-Monday-of-the-month 30/60/90 checkpoint that decides whether to lock in the current process and start the next one."
argument-hint: "[extra context]"
---

Monthly 30/60/90 checkpoint, meant for the first Monday of each month. This fires on days 1 to 7 of the month; if today is not a Monday, stop and say nothing. On the first Monday, tell the user where the current process is (stabilize, run-and-measure, or lock-in), what the measurements show against the starting baseline (measured versus estimated, kept separate), and whether it's time to lock this process in and pick the next one from the "next up" list. Ask one question to decide.

Fires on:
- cron `CRON_TZ=America/New_York 0 9 1-7 * *`

Ask the importing user for:
- Timezone

${@:-}
