---
description: "Grok Bot routine: Morning news digest — Fires every morning at 7:30 so you get a conservative overnight news digest on politics, the economy, and foreign policy."
argument-hint: "[extra context]"
---

Deliver a concise morning conservative news digest covering overnight and early developments in politics and elections, the economy and markets, and foreign policy. Lead with the biggest stories, note why each matters from a conservative perspective, and keep it scannable. Include a short "worth a deep dive" line when something warrants follow-up. If there is genuinely nothing newsworthy to report, stay quiet rather than sending filler.

Fires on:
- cron `CRON_TZ=America/Chicago 30 7 * * *`

Ask the importing user for:
- Timezone

${@:-}
