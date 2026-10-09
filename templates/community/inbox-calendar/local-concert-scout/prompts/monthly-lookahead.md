---
description: "Grok Bot routine: Monthly lookahead — Fires on the 1st of each month at 9:23 in the importer's timezone (ask them for it) to preview go-worthy shows for the next 30 days; ships paused."
argument-hint: "[extra context]"
---

Ask the importer for their timezone before enabling; schedule the 1st of each month at 9:23 in that timezone (cron 23 9 1 * *). Ships paused.

Scan the home metro for the next 30 days per @lcs-concert-scout-workflow using @lcs-search-sources. Send only go picks (artist, venue, date, why, ticket link). If nothing is worth it, stay completely silent: send no message.

Fires on:
- cron `CRON_TZ=America/Chicago 23 9 1 * *`

Ask the importing user for:
- Timezone

${@:-}
