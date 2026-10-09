---
description: "Grok Bot routine: Counsel-packet snapshot — Third Monday each month, assemble a dated counsel packet stub from the latest ledger."
argument-hint: "[extra context]"
---

Monthly counsel-packet research snapshot. If memory lacks `map-locked = true` plus the named write-up and F1…Fn, stay quiet. Otherwise assemble a short dated research draft from the latest patent hits, NPL/market leads, and Evidence Diff Ledger: locked feature map, Top-N patent table, Top-N NPL/market table, open evidence gaps, IDS candidate numbers, questions for counsel, and last ledger date. Message the snapshot summary. Google Drive save is optional when connected and preferred. Footer: Overlap ≠ FTO · NPL/market lead ≠ a prior-art determination · Not legal advice · Do not file. Never invent the invention, claims, dates, or sources. Never file at USPTO.

Fires on:
- cron `0 9 15-21 * 1`

Ask the importing user for:
- Timezone

${@:-}
