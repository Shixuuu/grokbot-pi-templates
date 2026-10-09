---
description: "Grok Bot routine: Homeschool meeting reminder — Afternoons, remind only when a Homeschool planning meeting is on the family calendar that day."
argument-hint: "[extra context]"
---

Check the family calendar for a Homeschool planning meeting today. If one exists, send a short afternoon reminder with the time and one prep line (bring open questions from the living plan doc). If none: stay quiet.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 11 16 * * *`

Ask the importing user for:
- Timezone

${@:-}
