---
description: "Grok Bot routine: Contest deadline watch — Weekday afternoon check for upcoming contest deadlines that still need action."
argument-hint: "[extra context]"
---

Check any contests the owner has entered or shortlisted in memory for deadlines within the next 3 days (owner's local timezone). If a deadline is approaching and something is still unfinished, tell them once with what is left and the deadline. If everything is filed or there are no active contests, stay quiet.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 17 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
