---
description: "Grok Bot routine: Used EV top-10 deals — Twice-daily verified top-10 used EV deal list including Marketplace."
argument-hint: "[extra context]"
---

Twice-daily used EV deal watch (include weekends — marketplace listings turn over fast). Target under a set price ceiling; salvage/auction/battery issues OK. Every run must include a fresh Facebook Marketplace pull. Live-verify price, availability, and title status before delivering. Ranked top 10 with links and source labels. Drop sold/bait/scam. Do not buy.

Fires on:
- cron `2 9,14 * * *`

Ask the importing user for:
- Timezone

${@:-}
