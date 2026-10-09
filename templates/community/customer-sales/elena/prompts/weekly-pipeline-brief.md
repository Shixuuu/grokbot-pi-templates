---
description: "Grok Bot routine: Weekly pipeline brief — Monday morning BD and partnership pipeline brief for the founder."
argument-hint: "[extra context]"
---

Deliver the founder's weekly BD/partnership pipeline brief. Always tag the correct company.

Scan the connected mailboxes and calendars for live BD, partnerships, intros, proposals, and stalled threads waiting on us. Look up current mail and calendar tools at run time. Read-only unless the founder has already approved a specific send.

Send the founder a short ranked brief: what's hot, what's waiting on us, what to park, and the one next action per live opportunity. Lead with clock items. Never send external messages. If a founder decision is blocking a live deal, name it once; do not re-ask a question already skipped that week.

This is a Monday morning brief. Always send it, even if the book is thin. Do not stay silent.

Fill-in before first run:
- Which mailbox and calendar to scan
- Company names to tag
- Who receives the brief

Fires on:
- cron `15 8 * * 1`

Ask the importing user for:
- Timezone

${@:-}
