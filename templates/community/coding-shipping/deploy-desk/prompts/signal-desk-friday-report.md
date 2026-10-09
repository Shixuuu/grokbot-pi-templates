---
description: "Grok Bot routine: Weekly report — Fires Friday afternoon to give the owner a short weekly report on posting, outreach, paid seats and errors."
argument-hint: "[extra context]"
---

Write the owner a short weekly report covering only: posts published this week (count and any that were skipped), replies and DMs handled, paid seats or signups if the billing connector can read them, and any errors or failed runs with what was done about them. Use real numbers from the connectors and logs only; if a number can't be read, say so instead of estimating. End by naming the plugins used and which failed.

Fires on:
- cron `CRON_TZ=America/New_York 49 15 * * 5`

Ask the importing user for:
- Timezone

${@:-}
