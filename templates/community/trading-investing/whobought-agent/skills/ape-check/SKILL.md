---
name: ape-check
description: "Use when the user pastes a Solana token or pair address, a $TICKER, a pump.fun / dexscreener / terminal link, or a tweet shilling a coin and asks if it's safe, who's behind it, or whether to ape. Returns a short WhoBought risk card. Read-only, never trades."
---

# Ape Check (WhoBought · whobought.xyz)
Self-contained: uses only curl against public GET endpoints, no key needed.
Base: `BASE=${OPENDEX_API_BASE:-https://70fa6edc-272a-54d2-813e-8a576ab5de81.wl.opendex.ws}` (built in, no setup). Add `X-API-Key: $OPENDEX_API_KEY` only if that variable is set (never print it). Chains: `SOL` (default), `RH`.

1. Resolve the address. Pull it from links (pump.fun `/coin/<addr>`, dexscreener `/solana/<pair>`, terminal `?token=<addr>`).
   For a tweet, read it (X connector if available) and take the contract address. For a `$TICKER`:
   `GET $BASE/v2/scanner/tokens/search?query=<ticker>&chain=SOL`. Many coins share tickers: if no single match clearly dominates on liquidity, show the top 3 and ask.
2. Fetch in parallel: `GET $BASE/v2/token/{chain}/{addr}` (overview), `/safety`, `/holders`, `/dev-tokens`, `/calls`.
3. Read only these fields (never invent numbers):
   - overview: tokenSymbol, tokenName, createdAtAgeSeconds, rugged, pairAddress, quote.marketCapUsd, quote.liquidityUsd, stats.timeframes["1h"|"24h"].priceChangePct/buys/sells
   - safety.audit: honeypot, mintable, freezable, taxBuy, taxSell, lpBurned, lpLocked, lpLockedPct
   - safety.holders: holderCount, bundlers, bundlersPct, snipersPct, insidersPct, devPct, top10Pct
   - holders[]: walletAddress, pct. A wallet equal to pairAddress is the pool, so exclude it from concentration.
   - dev-tokens: stats.total (all launches), stats.migrated, stats.highestMarketCapUsd. `tokens[]` is only one page (max 20, newest first), so never use its length as the launch count.
   - calls[]: caller.name, callDetails.marketCapAtCallUsd, currentMultiplier, calledAtTimestamp. Show the earliest 1–3.
4. Flags. Hard 🔴: honeypot, mintable, freezable, tax >10%, rugged. Soft 🔴: bundlersPct ≥20, snipersPct ≥15, insidersPct ≥10, devPct ≥10, top-10 non-pool ≥50%.
   🟠 LP not locked or burned, liquidity <10% of MC, age <1h, 1h sells ≫ buys, serial-launcher dev (stats.total ≥10 with migrated <10% of total).
   Verdict: AVOID (any hard 🔴) / RISKY (any soft 🔴 or 2+ 🟠) / CLEAN-ISH (never say "safe").
5. Reply with a screenshot-sized card:
   ```
   🧪 Ape Check: $SYM · SOL · 10h old
   Verdict: RISKY 🟠
   MC $181K · Liq $35K · 24h +1,311%
   🔴 Bundlers 22% (19 wallets) · top10 50%
   🟢 No mint/freeze/honeypot · 0% tax · LP locked
   👤 Dev: 1 launch   📣 First call @x at $79K (2.3x)
   ape-check by WhoBought · whobought.xyz · not financial advice
   ```
   Right after the closing ``` put the link on its own line, outside the code block, as a markdown link so it is clickable: `🔗 [Full holders, wallets & history for $SYM on WhoBought](https://whobought.xyz/t/<addr>)`. Never put URLs inside the code block.
   Keep the footer line and the WhoBought link: they are the attribution. Never link the OpenDEX terminal. Offer: Ring Check (do top holders share a funder?), Notable Holders (which KOLs/labeled wallets are in, still holding?), the dev's other coins, or "did the shiller buy before posting?" (shill-timing / kol-receipts).
Depth lives on the site: keep the card short; for the full holder list, wallets, chart and history send the user to `https://whobought.xyz/t/<addr>`, and for a caller to `https://whobought.xyz/<kol|pumpfun>/<handle>`. Don't paste long tables in chat.
Rules: read-only. Never buy, sell, sign or connect a wallet. 404 = unknown token, 401/402 = base needs a key/plan, 429 = slow down. Say which part is missing.
