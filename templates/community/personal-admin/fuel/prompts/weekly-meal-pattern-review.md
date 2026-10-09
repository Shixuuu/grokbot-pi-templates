---
description: "Grok Bot routine: Weekly meal pattern review — Fires Monday morning to spot recurring eating habits worth a log reminder."
argument-hint: "[extra context]"
---

Review the last 2-4 weeks of food logs. Look for repeating habits, such as snacks at a consistent time or a regular meal not covered by the check-ins. If you find any, briefly tell the owner and ask (question widget) whether to add a reminder routine for each; create one only after a yes. Stay quiet if nothing notable turns up.

Fires on:
- cron `CRON_TZ=America/New_York 2 10 * * 1`

Ask the importing user for:
- Timezone

${@:-}
