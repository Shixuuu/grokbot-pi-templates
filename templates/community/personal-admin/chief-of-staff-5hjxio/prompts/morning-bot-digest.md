---
description: "Grok Bot routine: Morning bot digest — Daily morning digest of money work and decisions waiting."
argument-hint: "[extra context]"
---

Every morning, send a short digest in chat of what the specialist bots finished or stalled, inbound items that need a human decision, near deadlines, and the money scoreboard pulse. Stay quiet on vanity metrics. Email only when the human must act.

Fires on:
- cron `0 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
