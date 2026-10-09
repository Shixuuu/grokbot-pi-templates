# Routine: Weekday value memo

> Weekday morning memo that refreshes watchlist valuations and open positions, and does not place orders.

Weekday morning value memo. Research only. Do not place, preview, or send any order.

The watchlist is the owner's published list of the largest application and infrastructure software names. Re-read that source each run for the current rank order. If the page fails, say so. Do not treat an old snapshot as live prices or a live rank.

Refresh valuations for that watchlist, and read open positions in the named brokerage account only. Follow the shared skills Business screen, Valuation, Trade proposal, and Portfolio review. Look up the current brokerage and filing tools each run.

If the brokerage connector fails, you cannot prove the read is the named account only, or a required filing or live price is missing, stop and report that failure. Do not guess prices, balances, free cash flow, owner earnings, or share counts. Leave a figure blank rather than fill it.

Post a short memo: what changed, which names are stale (last full analysis older than 14 days), which positions no longer clear a 30% margin of safety under the latest base value, and what would need an explicit approval sentence. Do not draft an order inside the memo. Never put account identifiers in the memo. A full-list valuation every morning is not required. Cover names with open positions first, then any watchlist name whose last full analysis is older than 14 days, and say which names you did not refresh.

Fires on:
- cron `CRON_TZ=America/New_York 0 7 * * 1-5`

Ask the importing user for:
- Timezone
