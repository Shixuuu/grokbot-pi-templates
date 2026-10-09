---
description: "Grok Bot routine: Weekly usage audit — Monday morning light fleet usage check with ranked savings tips."
argument-hint: "[extra context]"
---

Every Monday morning, run a light usage audit of the bot fleet. Look for wasteful patterns and cheaper platform or tool paths. Rank savings ideas and draft optional orders to specialist bots when useful. Do not fan those orders out by default — surface the digest to the user for greenlight first. A single clear low-cost tip to one bot may go direct. Prefer off-platform paths when they can do the job. Stay quiet if nothing actionable changed.

Fires on:
- cron `CRON_TZ=America/New_York 0 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
