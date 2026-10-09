---
description: "Grok Bot routine: Check telegiornali YouTube — Nightly: verify public editions across sibling news channels via RSS/oembed and compile soft-comment posts from the last 24h."
argument-hint: "[extra context]"
---

Nightly health check of sibling news YouTube channels via RSS/oembed plus soft-comment log last 24h. Always message owner with verdict.

Fires on:
- cron `59 23 * * *`

Ask the importing user for:
- Timezone

${@:-}
