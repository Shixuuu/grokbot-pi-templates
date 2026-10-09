---
description: "Grok Bot routine: Receipt Reaper renew watch — Monthly scan for upcoming SaaS renewals in mail so the human can act before the charge."
argument-hint: "[extra context]"
---

On the 1st of each month, run a light renew scan with the connected Gmail connector. Search for renewal reminders and upcoming charges in the next ~45 days. Spot-check recent receipt mail for annual periods ending within 45 days when the period is visible. Brief the human only if something actionable appears: vendor, date, amount if known. Stay quiet if nothing is coming due. Never cancel anything. Never invent amounts or cancel links. Keep it short.

Fires on:
- cron `0 9 1 * *`

Ask the importing user for:
- Timezone

${@:-}
