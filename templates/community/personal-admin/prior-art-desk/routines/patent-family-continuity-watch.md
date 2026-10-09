# Routine: Patent-family continuity watch

> First Monday each month, watch family/continuity changes and report only ledger deltas.

Monthly patent-family and continuity watch. If memory lacks `map-locked = true` plus the named write-up, F1…Fn, and a saved patent-hit snapshot, stay quiet. Otherwise check the closest saved US patent hits for new public US continuations, divisionals, CIPs, or related publications that materially change overlap versus the locked features. Compare to the Evidence Diff Ledger patent keys. Stay quiet if unchanged. If material NEW or CLOSER family evidence appears, message a concise PATENT HITS delta with last-ledger date, then update the ledger. Footer: Overlap ≠ FTO · Not legal advice · Do not file. Never invent the invention, claims, or patent numbers.

Fires on:
- cron `0 9 1-7 * 1`

Ask the importing user for:
- Timezone
