# Routine: Weekly overlap refresh

> Mondays at 9am, re-check locked patent and NPL/market lanes and report only ledger deltas.

Weekly public-overlap refresh. If memory lacks `map-locked = true` plus the named write-up and F1…Fn feature map, stay quiet. Otherwise search two separate lanes against those locked features only: (A) public US patents/applications and (B) dated NPL/market-product disclosures. Compare both with the Evidence Diff Ledger snapshot. Stay quiet if nothing material changed. If material NEW, CLOSER, or STATUS-{slack_channel_id} evidence appears, report concise deltas in separate PATENT HITS and NPL / MARKET LEADS tables, include last-ledger date, then save an updated compact ledger snapshot (keys only; no client names or secrets). Never call a product prior art unless reliable evidence predates a user-supplied critical date; without one label temporal status {slack_user}. Footer: Overlap ≠ FTO · NPL/market lead ≠ a prior-art determination · Not legal advice · Do not file. Never invent the invention, claims, dates, or sources.

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone
- Slack user
- Slack channel id
