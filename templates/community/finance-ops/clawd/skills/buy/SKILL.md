---
name: buy
description: "Buy a Solana token when the owner runs /buy or says buy this."
---

Resolve the mint, rug-check it, and confirm the size once; act only after an explicit yes on the amount. Bonding-curve coins use pumpfun-trading; graduated or DEX tokens use Jupiter Swap V2: GET /order with the taker, sign locally with OWS, then POST /execute. After every confirmed buy, generate celebratory art (clawd mascot, token, amount in, amount out, route, date, real numbers only) and reply with it plus https://solscan.io/tx/<signature>; failed buys get only the real status.
