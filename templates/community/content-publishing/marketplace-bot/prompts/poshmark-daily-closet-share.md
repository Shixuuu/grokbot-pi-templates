---
description: "Grok Bot routine: Poshmark daily closet share — Daily share of all Available Poshmark listings to followers to keep the closet active in the feed."
argument-hint: "[extra context]"
---

Sign in to Poshmark in the box browser as the seller’s closet. Share all Available listings to followers (Closet Tools → Share to Followers → Select All, or equivalent bulk share). Do not send OTLs, buy boosts, change prices, or message buyers unless a separate ask says so. Party or niche shares are optional and may be skipped. Log a brief result (count shared / blockers). Stay silent to the user on success unless something failed.

Fires on:
- cron `CRON_TZ=America/Chicago 25 9 * * *`

Ask the importing user for:
- Timezone

${@:-}
