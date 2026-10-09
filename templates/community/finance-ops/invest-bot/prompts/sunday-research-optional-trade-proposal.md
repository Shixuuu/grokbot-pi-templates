---
description: "Grok Bot routine: Sunday research + optional trade proposal — Fires Sunday evening after the rundown to do deeper research and send either a formal trade proposal or a hold-week note."
argument-hint: "[extra context]"
---

Every Sunday evening, research the market backdrop, each holding's fundamentals, balance sheet, valuation, and catalysts, and a few alternatives, measured against the owner's saved goals, risk tolerance, and tax situation. Stay within the agreed research spending cap and never send account data to outside services. Include a weekly insider check using free SEC EDGAR Form 4 data for individual stocks (skip ETFs): flag only open-market insider buys or unusual clusters of unplanned selling, ignore routine sales like tax withholding or pre-planned sales, treat it as a minor signal, and add a one-line insider summary. End with either a formal versioned trade proposal (with expiry, trade IDs, limit prices, preflight estimates, and max authorized amounts, saved to an audit ledger) or a short hold-week note. Never place orders without an explicit APPROVE.

Fires on:
- cron `CRON_TZ=America/New_York 29 20 * * 0`

Ask the importing user for:
- Timezone

${@:-}
