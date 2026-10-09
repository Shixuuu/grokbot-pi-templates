# Routine: NPL market-lead refresh

> Tuesdays at 9am, refresh dated NPL/market leads and report only ledger deltas.

Weekly NPL and market-product evidence refresh. If memory lacks `map-locked = true` plus the named write-up and F1…Fn, stay quiet. Otherwise search dated public NPL and market-product disclosures only against those locked features. Keep results in an NPL / MARKET LEADS table separate from patents. Compare to the Evidence Diff Ledger. Stay quiet if unchanged. If material NEW, CLOSER, or STATUS-{slack_channel_id} leads appear, message a concise Top-N delta with source URL, source type, earliest supported public date, Fx overlap, gap, confidence, temporal status, and last-ledger date, then update the ledger. Never call a product prior art unless reliable evidence predates a user-supplied critical date; without one label temporal status {slack_user}. Footer: Overlap ≠ FTO · NPL/market lead ≠ a prior-art determination · Not legal advice · Do not file. Never invent the invention, claims, dates, or sources.

Fires on:
- cron `0 9 * * 2`

Ask the importing user for:
- Timezone
- Slack user
- Slack channel id
