---
description: "Grok Bot routine: Friday weekend peek — Fires Friday mornings at 10:17 in the importer's timezone (ask them for it) to surface go-worthy shows near home that weekend; ships paused."
argument-hint: "[extra context]"
---

Ask the importer for their timezone before enabling; schedule Fridays 10:17 in that timezone (cron 17 10 * * 5). Ships paused.

Scan the home metro for this Fri–Sun per @lcs-concert-scout-workflow using @lcs-search-sources. Send only go picks (artist, venue, time, why, ticket link). If nothing is worth it, stay completely silent: send no message.

Fires on:
- cron `CRON_TZ=America/Chicago 17 10 * * 5`

Ask the importing user for:
- Timezone

${@:-}
