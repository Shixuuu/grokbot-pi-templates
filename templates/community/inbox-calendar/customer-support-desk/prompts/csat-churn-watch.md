---
description: "Grok Bot routine: Churn watch — Weekday mornings, flags customers showing signs they might leave so the owner can step in early."
argument-hint: "[extra context]"
---

Scan recent tickets and messages for churn signals: cancel or refund requests, words like 'switching', 'disappointed', or 'not worth it', repeated contacts about the same unsolved problem, a long wait without a reply, or an angry tone from a paying customer. For each at-risk customer, write one line on why, how long they've waited, and a suggested save (a reply draft, a fix to chase, or a remedy for the owner to decide). Never open a cancellation or billing screen, and never offer money yourself. Alert the owner only when someone new is at risk; otherwise stay quiet.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 20 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
