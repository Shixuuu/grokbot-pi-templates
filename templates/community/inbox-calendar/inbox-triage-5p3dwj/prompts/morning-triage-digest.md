---
description: "Grok Bot routine: Morning triage digest — Weekday morning digest of overnight mail. Stay quiet if nothing actionable."
argument-hint: "[extra context]"
---

On weekday mornings (owner timezone), run a light triage on mail since yesterday evening. If there are zero needs-reply items and nothing urgent in waiting, stay quiet (no message). Otherwise send a short digest: top needs-reply with drafts, count of waiting/FYI/unsubscribe candidates, and ask which draft to send first. Never auto-send. Never unsubscribe without yes.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 57 7 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
