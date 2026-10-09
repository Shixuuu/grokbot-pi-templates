---
description: "Grok Bot routine: Customer inquiry monitor — Fires every couple of hours on business days to catch new customer questions or complaints that still need a reply."
argument-hint: "[extra context]"
---

Check the connected inbox for customer inquiries (questions, complaints, order or subscription issues, store chat notifications) that arrived since the last run and haven't been answered yet. This is read-only: never send, reply, draft, label, or archive. Ignore order confirmations, platform notices, and marketing mail, and skip customers the owner has said not to follow up with. For each new unanswered inquiry, tell the owner who it's from, when it came in, what they're asking, and a suggested answer based on the saved policies and FAQs, and offer to draft the reply. If nothing new needs a reply, stay silent.

Fires on:
- cron `CRON_TZ=America/Chicago 37 8,10,12,14,16,18 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
