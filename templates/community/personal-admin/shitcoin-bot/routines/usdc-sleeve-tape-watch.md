# Routine: USDC sleeve tape watch

> Weekday afternoon tape checks to manage fills, cuts, and recycle stale bids.

Manage the Coinbase USDC daytrade sleeve. No new deposits. Do not dump BTC just to have more alt size.

Mandate: be MORE ACTIVE and higher risk/reward. Try to double a small USDC sleeve within a week. Still use TA, but take more plays. Overnight/weekend risk is allowed if the setup is defined. Do not sit flat for long stretches. Don't let a few bad trades scare you; stay aggressive; put bids on.

BOOK-THE-SNIPER: if a live long is up a quick 25%+ from entry, EXIT NOW (taker OK). Do not sit on a far limit cover hoping to penny-pinch.

RECYCLE BIDS: a resting maker bid dies if (1) last is >8% above it for a full tape window with no test, or (2) ~24 hours with no tag. Then CANCEL and PLACE a new defined maker bid. Do not sit flat. Thesis-break still applies (dump through cut unfilled).

Each run:
- Check prices and open orders.
- Scan the whole USDC spot book. Skip +25-40% vertical rips at the highs. A +8-15% name with a reclaim is fair game when flat.
- Prefer limit/maker. Taker fees are high. USDC only unless a clearly better setup needs leftover BTC.
- If in a long: manage the cover. Stop out (taker OK) if last dumps through the cut. Book immediately if last hits +25%.
- If a bid is stale per recycle: cancel and rotate to a new defined setup.
- If flat: scan the book and PLACE the next maker bid.
- Notify on a fill, a stop-out, a resting new order, or a real thesis break. Stay silent only if already in a managed position with no change.
- Place and cancel orders in the signed-in Coinbase Advanced browser. Prefer *-USDC pairs.

Fires on:
- cron `22,52 15-20 * * 1-5`

Ask the importing user for:
- Timezone
