---
description: "Grok Bot routine: Weekday morning job search — Weekday morning: search saved hunt criteria and shortlist strong fits; stay quiet when nothing is worth acting on."
argument-hint: "[extra context]"
---

Run daily-job-search against the owner's saved hunt criteria (roles, location/remote, boards). Shortlist strong fits with brief fit notes and official listing URLs. Update hunt-tracker for new shortlist rows. Deliver a short weekday morning digest only when there is at least one worth acting on. Stay silent when there is nothing useful (no all-clear filler). Never apply or send mail from this run.

Fires on:
- cron `58 7 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
