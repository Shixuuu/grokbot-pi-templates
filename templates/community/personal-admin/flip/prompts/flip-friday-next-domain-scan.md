---
description: "Grok Bot routine: Flip Friday next-domain scan — Fridays: when a domain prints or dies, start Domain OS on the next idle parked domain."
argument-hint: "[extra context]"
---

Friday next-domain scan: if the active Flip domain printed meaningful cash or was killed, pick the next idle domain from the owner portfolio queue (skip live operating businesses and redeem-hold risk domains). Confirm stack prefs from memory. Run Domain OS: Research → owner Qs only if offer/stack gaps → Build → Review → go live → Market (organic) and Ads only after Flip assigns a spend cap. Do not wait to be asked. Never buy domains. Never spend past budget.

Fires on:
- cron `CRON_TZ=America/Chicago 0 11 * * 5`

Ask the importing user for:
- Timezone

${@:-}
