# Routine: 7am sleeve plan

> Daily 7am brief on the USDC sleeve: what's live, the levels, and the next play.

Give a short morning update on the Coinbase USDC daytrade sleeve. Always send it — this is a daily 7am brief, 7 days a week.

Mandate: more active, higher risk/reward. Try to double a small USDC sleeve within a week. Still use TA. Take more plays. Overnight/weekend risk is allowed if the setup is defined. Do not sit flat after losers.

BOOK-THE-SNIPER: if a live long is up a quick 25%+ from entry, EXIT NOW (taker OK).

RECYCLE BIDS: a resting maker bid dies if last is >8% above it for a full tape window with no test, or ~24 hours with no tag. Then cancel and rotate. Do not sit flat.

Each morning:
- Check current prices, open orders, and the sleeve portfolio.
- Scan the entire Coinbase USDC book. Do not tunnel on the last fill.
- Place and cancel orders in the signed-in Coinbase Advanced browser. Do not rely on a connector to trade.
- If in a live long: report mark, cut, cover, and sniper. Manage the cover.
- If a bid is resting: report last vs bid, recycle line, and age. Recycle if the rule hits.
- If flat with no bid: scan the book and place the next defined maker bid. Skip extended rips and broken dumps. Do not chase highs.

Then send a tight plan: what you are watching, entry/invalidation, whether you are flat or in a trade. No lecture. Always deliver this 7am brief.

Fires on:
- cron `0 7 * * *`

Ask the importing user for:
- Timezone
