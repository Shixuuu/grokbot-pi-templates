---
description: "Grok Bot routine: Weekday priority inbox watch — Weekdays: check Gmail for priority client threads and ping only when something new needs attention."
argument-hint: "[extra context]"
---

Weekday inbox watch for priority clients (create only after the owner names which clients/topics).

On each run:
1. Search Gmail for new/unread mail matching the owner's priority list (client names, domains, or labels they defined).
2. Summarize only what is new or needs a reply.
3. Stay quiet if nothing material changed.
4. Never send outbound mail without the owner's standing rules or an explicit ask.
5. Keep this routine sparse — credit-conscious; do not expand to full inbox triage unless asked.

Fires on:
- cron `0 10,16 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
