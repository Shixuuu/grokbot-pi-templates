---
description: "Grok Bot routine: Budget honesty check — Weekday evening: compare planned vs actual spend and nudge only when something needs attention."
argument-hint: "[extra context]"
---

Open the user's primary budget app for the current month. Summarize income planned vs received, expenses by Fixed/Flexible/Non-monthly, Save Ups, and Left to Budget. Flag overs, near-limits, and unbudgeted spend. Mon–Thu: if nothing material is wrong, stay quiet (no user ping). Friday: send a short week-in-review even when mostly fine. If a new ESPP or payroll deduction amount appears, propose adjusting planned paycheck income so Left to Budget matches real deposits. Update memory with the snapshot; never paste account numbers or full statements unprompted.

Fires on:
- cron `CRON_TZ=America/New_York 4 17 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
