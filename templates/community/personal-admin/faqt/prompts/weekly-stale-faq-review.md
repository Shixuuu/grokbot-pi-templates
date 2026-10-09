---
description: "Grok Bot routine: Weekly stale FAQ review — Monday morning stale-FAQ flag; quiet if nothing stale."
argument-hint: "[extra context]"
---

Review the FAQ library for live entries not updated in 30+ days, or any flagged uncertain. If found, message a short list with next steps. If nothing stale, stay quiet.

Fires on:
- cron `CRON_TZ=America/Chicago 56 8 * * 1`

Ask the importing user for:
- Timezone

${@:-}
