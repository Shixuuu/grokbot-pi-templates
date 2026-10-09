---
name: notable-holders
description: "Use when the user asks which KOLs, known traders or labeled wallets are in a Solana token, \"who's in this\", \"any smart money\", or whether known names still hold. Returns a WhoBought card with position, PnL and holding status. Read-only, never trades."
---

# Notable Holders (WhoBought · whobought.xyz)
Base: `BASE=${OPENDEX_API_BASE:-https://70fa6edc-272a-54d2-813e-8a576ab5de81.wl.opendex.ws}` (built in, no setup). Add `X-API-Key: $OPENDEX_API_KEY` only if that variable is set (never print it). All GET, public, chain `SOL`.

1. Resolve the token address as in ape-check.
2. In parallel: `GET $BASE/v2/token/SOL/{ca}` (tokenSymbol, quote.marketCapUsd) and `GET $BASE/v2/token/SOL/{ca}/top-traders` (traders[], up to 120: walletAddress, rank, boughtUsd, soldUsd, pnlUsd, remainingUsd, balancePct, buys, sells, holderSinceTimestampStr).
3. Label lookup for each trader, in parallel (e.g. `xargs -P 12`, ~4s for 120): `GET $BASE/v2/wallets/labeled?query={wallet}`. Keep only `wallets[]` whose walletAddress equals the wallet exactly. Read labels[].label and labels[].source (KOL, PUMPFUN, FOMO…).
   Failed lookups: retry once, then say how many were skipped.
4. Per labeled wallet: status **holding** if remainingUsd ≥ $1 (show $ left and balancePct = % of their own bag still held, not % of supply), else **sold out**. PnL = pnlUsd (realized + unrealized).
   boughtUsd 0 with soldUsd > 0 = tokens came by transfer, so PnL is overstated: say so.
   Sort: KOL labels first, then holding before sold out, then by pnlUsd. Show at most 10, plus a count of the rest.
5. Card:
   ```
   ⭐ Notable Holders: $AnyPS5 · MC $274K · 18 labeled wallets in top 120 traders
   Holding (4): BagCalls (KOL) $496 left · 24% of bag · PnL +$1.1K · in since Oct 7 20:40
     Inanimate Carbon Rod (FOMO) $1.6K left · 32% · +$1.8K · turbosiaha (PUMPFUN) $6.4K · 43% · +$1.7K
   Sold out (14): Stigman (KOL) +$2.3K · Xanse. (KOL) +$1.9K · PandanSuji (PUMPFUN) +$5.3K · ton (FOMO) +$3.0K*
   * got tokens by transfer, PnL overstated
   notable holders by WhoBought · whobought.xyz · not financial advice
   ```
   Right after the closing ``` put the link on its own line, outside the code block, as a markdown link so it is clickable: `🔗 [Full holders, wallets & history for $SYM on WhoBought](https://whobought.xyz/t/<addr>)`. Never put URLs inside the code block.
   Labels are platform or community tags, not verified identities. Offer: shill-timing for a KOL's buy/sell timing, ring-check, or kol-receipts.
Depth lives on the site: keep the card short; for the full holder list, wallets, chart and history send the user to `https://whobought.xyz/t/<addr>`, and for a caller to `https://whobought.xyz/<kol|pumpfun>/<handle>`. Don't paste long tables in chat.
Rules: read-only. Never buy, sell, sign or connect a wallet. 404 = unknown token, 401/402 = base needs a key/plan, 429 = slow down.
