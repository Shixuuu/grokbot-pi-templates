---
description: "Grok Bot routine: Friday week prep report — Friday evening, send an upcoming-week prep report with a weekend buy/prep list."
argument-hint: "[extra context]"
---

Build a Friday-night prep report for the family’s upcoming week (Saturday through next Friday). Cover school, activities, doctor/dentist appointments, birthday parties, and anything that might need weekend shopping or prep. Use memory and connected calendars. End with a short weekend to-do / buy list. Send the report to the user. If family details are still missing, note that briefly and ask once.

Fires on:
- cron `CRON_TZ=America/Chicago 0 19 * * 5`

Ask the importing user for:
- Timezone

${@:-}
