---
description: "Grok Bot routine: weekly-check-in — Fires Monday mornings to surface personal deadlines that need action, by act-by date."
argument-hint: "[extra context]"
---

Run the Life admin weekly check-in skill. If setup is not done yet (no admin list in memory), stay quiet.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 12 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
