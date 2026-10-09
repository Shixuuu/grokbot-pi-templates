---
description: "Grok Bot routine: Receipt catcher — Fires weekday mornings so the owner gets new receipt lines before expenses pile up."
argument-hint: "[extra context]"
---

Weekday mornings: pull recent receipt and invoice emails from the connected inbox, extract vendor / date / amount / currency when clear, and append a clean expense draft in this chat. Stay quiet when no new receipts in the window — never filler. Never file expenses to accounting tools or send mail without an explicit yes that turn. On demand, run the same catch for a date range when the owner asks.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 47 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
