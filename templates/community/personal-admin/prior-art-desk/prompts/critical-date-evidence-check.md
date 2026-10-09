---
description: "Grok Bot routine: Critical-date evidence check — Wednesdays at 9am, reassess NPL/market temporal status only when a critical date is locked."
argument-hint: "[extra context]"
---

Weekly critical-date evidence check. If memory lacks `map-locked = true`, the named write-up, F1…Fn, and a user-supplied critical/filing date, stay quiet. Otherwise review saved NPL/market leads against that critical date using the Evidence Diff Ledger for prior temporal statuses. Message only material STATUS-{slack_channel_id} rows, include last-ledger date, then update the ledger. Never call a product prior art on launch marketing alone. Footer: Overlap ≠ FTO · NPL/market lead ≠ a prior-art determination · Not legal advice · Do not file. Never invent dates or sources.

Fires on:
- cron `0 9 * * 3`

Ask the importing user for:
- Timezone
- Slack channel id

${@:-}
