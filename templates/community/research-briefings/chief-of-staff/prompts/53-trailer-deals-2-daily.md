---
description: "Grok Bot routine: Semi-trailer deals 2× daily — Twice-daily verified trailer shortlist; optionally forward to a designated contact."
argument-hint: "[extra context]"
---

Twice-daily 53′ semi-trailer deal watch. Criteria: model year recent enough, purchase price under budget, swing-out doors, air-ride; reject rentals and down-payment bait. Live-verify before delivering a ranked top 10 with links. Prefer local region when useful. Optionally auto-forward the shortlist by SMS to a designated contact after each run. Do not buy.

Fires on:
- cron `22 9,14 * * *`

Ask the importing user for:
- Timezone

${@:-}
