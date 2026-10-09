---
name: shill-timing
description: "Use when the user asks if a caller, KOL or shill tweet \"bought before posting\", \"dumped on followers\", or wants the exact buy/sell timing around a post about a Solana token. Returns minutes before/after with a confidence label. Facts, not accusations. Read-only, never trades."
---

# Shill Timing (WhoBought · whobought.xyz)
Base: `BASE=${OPENDEX_API_BASE:-https://70fa6edc-272a-54d2-813e-8a576ab5de81.wl.opendex.ws}` (built in, no setup). Add `X-API-Key: $OPENDEX_API_KEY` only if that variable is set (never print it). All GET, public, chain `SOL`.

1. Get the token (CA, link or `$TICKER` as in ape-check) and, if given, the caller handle or tweet (read it with the X connector if available: handle + post time).
2. `GET $BASE/v2/token/SOL/{ca}` (tokenSymbol, createdAtTimestamp), then `GET $BASE/v2/token/SOL/{ca}/chart-markers?from=<createdAtTimestamp/1000>` (the default window is only 12h; `truncated: true` = partial).
   Posts: `kind: TWEET` (handle, followers, timestamp, url) and `kind: THESIS` (pump.fun/Fomo post: authorWallet, labels[].label/source, marketCapUsd, timestamp).
   No handle given: check the X tweets (max 8) and the theses whose labels include source `KOL` (max 4).
3. Link each post to a wallet, with confidence:
   - **HIGH**: THESIS authorWallet (the post's own wallet).
   - **MEDIUM**: X/TG handle → `GET $BASE/v2/profiles/search?q=<handle>`, exact handle match with confidence `PLATFORM_WALLET` or `SWAP_VERIFIED` → `GET $BASE/v2/profiles/{source}/{handle}/card` wallets[].address. Same name on another platform: likely, not proven.
   - **LOW**: profile confidence `LABEL_ONLY`, or only `GET $BASE/v2/wallets/labeled?query=<handle>` with an exact label match.
   - None found: say "no linked wallet: can't check on-chain". Never guess a wallet.
4. Per wallet: `GET $BASE/v2/traders/SOL/{wallet}/tokens/{ca}/swaps` (swaps[]: side BUY/SELL, timestamp, amountUsd, marketCapUsd, txHash). Pages hold 20; fetch `?cursor=` only if a page is full and the cursor changed (max 5), dedupe by txHash.
   Totals: `GET $BASE/v2/token/SOL/{ca}/top-traders/{wallet}` (boughtUsd, soldUsd, pnlUsd, remainingUsd). 404 = not a top trader: use `GET $BASE/v2/traders/SOL/{wallet}/tokens/{ca}/pnl?timeRange=NINETY_DAY` item.boughtUsd, soldUsd, profitUsd, balanceUsd.
   On 503/429 retry twice (2s, 4s); still failing = say which part is unavailable.
5. Compute vs the post timestamp: first BUY and last BUY before (minutes, or seconds if <1 min, with $ and MC), buys after the post (count, $), first SELL after (minutes, $ sold after), still holding (remainingUsd ≥ $1). Bought only after the post = say so.
   Facts line: "bought 5 min before, sold 16 min after", or "no buys before the post". Never say "dumped on", "scam" or "insider".
   Optional context: `GET $BASE/v2/profiles/{source}/{handle}/receipts` summary.trustScore, soldWithin24hPercent. Receipts can lag: if they disagree with swaps, trust swaps and say so.
6. Card:
   ```
   ⏱️ Shill Timing: $AnyPS5 · 3 posts checked
   Stigman · pump.fun post 20:56 UTC at MC $147K · HIGH
     bought $588 5.2 min before · first sell 16.3 min after ($2.9K) · sold out · PnL +$2.3K
   @BagCalls · X 21:48 UTC (94.7K followers) · MEDIUM
     bought $348 67.9 min before · first sell 274 min after ($728) · still holding $495
   @badattrading_ · X 07:33 UTC · no linked wallet: can't check on-chain
   shill timing by WhoBought · whobought.xyz · facts, not accusations · not financial advice
   ```
   Right after the closing ``` put the link on its own line, outside the code block, as a markdown link so it is clickable: `🔗 [Full holders, wallets & history for $SYM on WhoBought](https://whobought.xyz/t/<addr>)`. Never put URLs inside the code block.
   Times in UTC unless the user's zone is known. Offer: kol-receipts for the caller's track record.
Depth lives on the site: keep the card short; for the full holder list, wallets, chart and history send the user to `https://whobought.xyz/t/<addr>`, and for a caller to `https://whobought.xyz/<kol|pumpfun>/<handle>`. Don't paste long tables in chat.
Rules: read-only. Never buy, sell, sign or connect a wallet. 404 = unknown token/no swaps, 401/402 = base needs a key/plan, 429 = slow down.
