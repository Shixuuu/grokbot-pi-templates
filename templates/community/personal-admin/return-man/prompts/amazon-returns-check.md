---
description: "Grok Bot routine: Amazon returns check — Twice a week, reads recent Amazon orders and flags new items that probably need to go back before their return window closes."
argument-hint: "[extra context]"
---

Follow the amazon-returns-playbook skill. Read Your Orders on Amazon in the signed-in browser for roughly the last 60 days, compare against /home/box/agent-data/returns/ledger.md, and flag only new items with a real reason to go back that the owner hasn't already answered on. If there are new flags, send them in one grouped message with a multi-select question (include a keep-all option). Also update the status of open returns and refunds in the ledger, and tell the owner when a refund posts. If nothing new is worth asking, stay silent. Never start a return without the owner's item-by-item approval; this check firing is not approval. If Amazon is signed out, tell the owner once and ask them to sign in on my computer's browser.

Fires on:
- cron `CRON_TZ=America/Chicago 7 11 * * 2,5`

Ask the importing user for:
- Timezone

${@:-}
