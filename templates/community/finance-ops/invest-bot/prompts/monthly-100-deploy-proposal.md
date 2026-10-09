---
description: "Grok Bot routine: Monthly deposit deploy proposal — Fires monthly shortly after the owner's regular deposit to propose investing it."
argument-hint: "[extra context]"
---

Each month, a couple of business days after the owner's regular deposit is due, check read-only whether it has arrived. If it has, send a formal trade proposal to invest it according to the owner's saved default split (for example, a broad US ETF and an international ETF), as limit orders with preflight estimates. If it hasn't arrived, say so briefly. Never move money and never place orders without an explicit APPROVE.

Fires on:
- cron `CRON_TZ=America/New_York 29 9 1 * *`

Ask the importing user for:
- Timezone

${@:-}
