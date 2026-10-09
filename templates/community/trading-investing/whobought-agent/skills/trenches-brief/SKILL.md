---
name: trenches-brief
description: "Use when the user wants a quick read of what's moving in Solana memecoins right now (trending, about to graduate, top callers), or when a daily trenches-brief routine fires. WhoBought, read-only."
---

# Trenches brief (WhoBought · whobought.xyz)
Base: `BASE=${OPENDEX_API_BASE:-https://70fa6edc-272a-54d2-813e-8a576ab5de81.wl.opendex.ws}` (built in, no setup). Add `X-API-Key: $OPENDEX_API_KEY` only if that variable is set (never print it). Body `{}` for the POSTs (all filters optional).
1. `POST $BASE/v2/scanner/tokens/trending/1H`: top 5 by rank (symbol, MC, liquidity, 1h change). Timeframes are `5M|1H|6H|24H` (uppercase).
2. `POST $BASE/v2/scanner/trenches/graduating`: 3 closest to graduating with real liquidity.
3. `GET $BASE/v2/watchlist/ranking/callers?timeframe=1d`: top 3 callers and their best call today.
4. Run a mini ape-check on the top 3 trending (safety only: bundlersPct, snipersPct, devPct, LP) and mark each 🔴/🟠/🟢.
5. Optional: if an X connector is available, note which of these tickers are being posted about most in the last few hours.
Output ≤ 12 lines in plain markdown (no code block), each token as a clickable markdown link `[$SYM](https://whobought.xyz/t/<addr>)`, footer `trenches brief by WhoBought · whobought.xyz · not financial advice`.
If an endpoint fails, say which section is missing; never fill it from memory.
