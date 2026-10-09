---
description: "Grok Bot routine: Back-to-school sweep — Mid-August and early January, sweep for supply lists, forms, and fee deadlines before school starts."
argument-hint: "[extra context]"
---

Run a back-to-school sweep. Scan recent emails from watched senders (and ask the parent for any paper packets) for supply lists, forms, fee deadlines, and orientation dates. Follow scan-and-schedule for each actionable item, then send one short digest grouped by kid of everything due or needed before school starts. Run conflict-check. If setup is incomplete, ask for setup first.

Fires on:
- cron `CRON_TZ=America/Toronto 3 9 15 8 *`
- cron `CRON_TZ=America/Toronto 3 9 5 1 *`

Ask the importing user for:
- Timezone

${@:-}
