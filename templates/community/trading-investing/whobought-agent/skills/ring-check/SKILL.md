---
name: ring-check
description: "Use when the user asks whether a Solana token's top holders are connected, \"is this a cabal / bundle / one guy with many wallets\", or who funded the holders. Groups top holders by funding wallet into a WhoBought ring card. Read-only, never trades."
---

# Ring Check (WhoBought · whobought.xyz)
Base: `BASE=${OPENDEX_API_BASE:-https://70fa6edc-272a-54d2-813e-8a576ab5de81.wl.opendex.ws}` (built in, no setup). Add `X-API-Key: $OPENDEX_API_KEY` only if that variable is set (never print it). All GET, public, chain `SOL`.

1. Resolve the token address as in ape-check (link, CA, or `$TICKER` via `/v2/scanner/tokens/search?query=`).
2. In parallel: `GET $BASE/v2/token/SOL/{ca}` (tokenSymbol, createdAtTimestamp, pairAddress, quote.marketCapUsd), `/holders` (holders[].walletAddress, pct; holderCount; distribution.bundlerPct, insiderPct, sniperPct), `/pairs` (pairs[].pairAddress).
   Drop every pool (any pairs[].pairAddress or overview pairAddress). Keep the top 20 remaining holders.
3. For those 20, in parallel (e.g. `xargs -P 10`): `GET $BASE/v2/traders/SOL/{wallet}/funding`. Read `summary.firstFunding`: sourceAddress, amount, asset.symbol, blockTime.timestamp, labelEvidence.label / entityType; and `summary.attributedSource.label / entityType` as fallback.
   `summary` null = no funding data. Non-200 (503 etc.): retry once, then count it as unchecked and say the check is partial ("18/20 checked").
4. Sort:
   - Exchange/service: entityType `cex`, `bridge`, `dex` or `service`. List by label (e.g. "Binance 2: 2 holders, 5.4%"). Never a ring.
   - Group the rest by firstFunding.sourceAddress. A group with 2+ holders is a candidate.
   - For each candidate, `GET $BASE/v2/traders/SOL/{funder}/transfers?direction=outgoing&limit=100` and count distinct `items[].destinationAddress`. **≥50 = busy hub** (likely an unlabeled exchange, platform or airdrop sender): list it under "busy hubs", not as a ring.
   - Every amount under 0.01 SOL = dust-sized (could be spam/airdrop): list as a weak dust link.
   - Otherwise it's a **shared funder ring**. Show funder (short), wallet count, combined pct (sum of holders[].pct), and the funding timing vs createdAtTimestamp ("funded 3h before launch").
5. Flags: 🔴 rings ≥10% of supply combined, or any single ring ≥5%. 🟠 rings 3–10% or 2+ rings. 🟢 no ring among the top 20. Add distribution.bundlerPct as context.
6. Card (ring line format: `• <funder short> → N wallets · X% combined · <amounts> · funded <timing>`):
   ```
   🕸️ Ring Check: $AnyPS5 · MC $275K · top 20 holders (pool excluded) · 20/20 checked
   🟢 No shared-funder ring in the top 20
   Busy hubs (weak): F7p3…gmNe → 4 wallets · 6.8% · 6Dp9…WCvS → 3 wallets · 5.4% (dust, 0.0015 SOL each)
   Exchange-funded: Binance 2 (1 · 1.6%) · Bitvavo (1 · 1.3%) · CoinSpot (1 · 1.0%)
   Bundlers 49.4% (platform estimate)
   ring check by WhoBought · whobought.xyz · shared funder ≠ same person · not financial advice
   ```
   Right after the closing ``` put the link on its own line, outside the code block, as a markdown link so it is clickable: `🔗 [Full holders, wallets & history for $SYM on WhoBought](https://whobought.xyz/t/<addr>)`. Never put URLs inside the code block.
   Omit empty lines. Offer: full wallet list, notable-holders, or ape-check.
Words: say "shared funder", never "scam", "cabal" or "same person". Only the first funding is checked, so a ring hidden behind fresh hop wallets may not show.
Depth lives on the site: keep the card short; for the full holder list, wallets, chart and history send the user to `https://whobought.xyz/t/<addr>`, and for a caller to `https://whobought.xyz/<kol|pumpfun>/<handle>`. Don't paste long tables in chat.
Rules: read-only. Never buy, sell, sign or connect a wallet. 404 = unknown token, 401/402 = base needs a key/plan, 429 = slow down.
