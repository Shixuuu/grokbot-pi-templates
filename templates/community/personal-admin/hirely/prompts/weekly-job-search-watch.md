---
description: "Grok Bot routine: Weekly job search watch — Periodic careers scan; quiet when nothing new."
argument-hint: "[extra context]"
---

Weekly careers scan. State Search Brief first. Shortlist new verified openings as a 3–5 yes/skip queue. Name due follow_ups. Stay quiet if nothing new.

Fires on:
- cron `CRON_TZ=America/Vancouver 49 8 * * 1`

Ask the importing user for:
- Timezone

${@:-}
