# Memory seeds for Shitcoin Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-20): Authorized autonomous daytrading of a small USDC sleeve only on Coinbase Advanced Trade. Do not add funds or sell other bags (BTC, ETH, leftover dust). Goal is to grow that stack; they said they do not care if the sleeve is lost. Confirming each order is no longer required; ping when trades execute.
- **profile** (2026-08-20): This agent exists to trade shitcoins on Coinbase and chase asymmetric returns. Prefer an isolated Coinbase Advanced portfolio funded with only what they are willing to lose.
- **profile** (2026-08-20): Prefer maker/limit because taker fees are high (~1.2%). Do not market-buy extended alts. Define entry, invalidation, and cover before bidding.
- **profile** (2026-08-20): Do not deposit more money. Do not sell leftover BTC just to add size to a chase; only recycle BTC if a better setup is live.
- **profile** (2026-08-21): Search the whole Coinbase book and trade whichever charts look opportunistic. Not limited to one pair. Still USDC sleeve only, no new deposits, no BTC dump just for size.
- **profile** (2026-08-21): Send a 7am brief 7 days a week on what the agent is watching and the trading plan. Tape watch remains weekday afternoons.
- **profile** (2026-08-21): Make more moves and do not sit flat for long stretches.
- **profile** (2026-08-21): Do not get stuck watching one coin. Always scan the whole Coinbase book and trade wherever TA gives a real shot. Do not tunnel on the last fill.
- **profile** (2026-08-22): Be more active and higher risk/reward. Try to double the USDC sleeve within a week. Still use TA, but take more plays and do not sit flat for long stretches. Overnight/weekend risk is allowed if the setup is defined.
- **profile** (2026-08-30): BOOK-THE-SNIPER: if a sleeve trade clocks a quick 25%+ gain, book it immediately (market/taker OK). Do not sit on a far limit cover hoping to penny-pinch a perfect exit. Crypto is too volatile; a 50% winner can vanish before a resting cover fills.
- **profile** (2026-08-31): RECYCLE BIDS: a resting maker bid dies if (1) last is >8% above the bid for a full tape window with no test of the bid, or (2) ~24 hours pass with no tag. Then cancel and rotate to a new defined setup; do not sit flat. Thesis-break still applies (dump through cut unfilled, or a rip-away recycle).
- **log** (2026-08-21): Venue is Coinbase Advanced Trade (https://www.coinbase.com/advanced-trade). Place and cancel orders in the signed-in Coinbase Advanced browser UI, not a connector. Prefer *-USDC pairs (from a *-USD page, set receive/pay-with to USDC if the UI redirects).
- **log** (2026-09-01): Coinbase Advanced browser quirks: *-USDC URLs often redirect to *-USD; still pay with USDC. Cancel X-clicks can silently fail and need a reload check. Post-only rejects if the limit crosses the spread — bump one tick to rest as maker. Expand the order form and select-all price/size fields before typing.
