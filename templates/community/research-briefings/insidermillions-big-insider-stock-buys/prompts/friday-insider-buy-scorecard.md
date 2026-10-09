---
description: "Grok Bot routine: Friday insider-buy scorecard — Fridays. Score mature digest buys (~+90d). Quiet if none are due."
argument-hint: "[extra context]"
---

Friday afternoon scorecard of recent weekday Form 4 digest names. Not a second full EDGAR crawl. Score names about 90+ days old. Link dollar amounts to EDGAR when known. Simple short English. Short sentences. Minimize hyphens, colons, and em dashes. Stay quiet if nothing is mature. Never invent prices. Never place trades or post publicly.

Fires on:
- cron `0 16 * * 5`

Ask the importing user for:
- Timezone

${@:-}
