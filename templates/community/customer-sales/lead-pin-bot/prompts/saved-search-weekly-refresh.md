---
description: "Grok Bot routine: saved-search-weekly-refresh — Monday morning check of an opted-in saved search: surface material changes only, never export."
argument-hint: "[extra context]"
---

If the user has opted into a weekly saved-search refresh and there is an approved saved criteria set, run a 25-row property search against that criteria via PremiumPin MCP, report only material changes vs last refresh, and stay quiet when nothing material changed. Never export, never prepare a mailing list or export properties, never spend money, never invent coverage. If the user has not opted in or there is no approved saved criteria, stay quiet.

Fires on:
- cron `CRON_TZ=America/New_York 3 8 * * 1`

Ask the importing user for:
- Timezone

${@:-}
