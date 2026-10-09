---
name: kol-receipts
description: "Use when the user asks whether a crypto caller, KOL or pump.fun account actually bought what they posted, how good their calls are, or wants a trader's track record (WhoBought). Facts only, no accusations."
---

# KOL receipts (WhoBought · whobought.xyz)
Base: `BASE=${OPENDEX_API_BASE:-https://70fa6edc-272a-54d2-813e-8a576ab5de81.wl.opendex.ws}` (built in, no setup). Add `X-API-Key: $OPENDEX_API_KEY` only if that variable is set (never print it). All GET, public.
1. `GET $BASE/v2/profiles/search?q=<handle>`. Take the exact handle match. Note `source` (KOL / PUMPFUN / FOMO) and `confidence`.
   If confidence is `LABEL_ONLY` or the match is fuzzy, say the wallet link is a label, not proof, and list other candidates.
2. `GET $BASE/v2/profiles/{source}/{handle}?timeRange=THIRTY_DAY` gives stats.tradeCount, winRatePct, pnlUsd, uniqueTokensBought, and topTokens.
3. PUMPFUN/FOMO only: `GET $BASE/v2/profiles/{source}/{handle}/receipts` gives per post boughtBeforePost, soldAfterPost, verdict, pnlPercent, and summary.trustScore.
4. Telegram/X callers: `GET $BASE/v2/watchlist/ranking/callers?timeframe=30d` (15 rows/page) gives totalCalls, winRatePct, averageMultiplier, topCall.
5. Card: handle, source, confidence, 30d trades / win rate / PnL, receipts summary (bought before post X of Y, sold within 24h %, trust score), best and worst call.
   End with the caller's WhoBought page as a clickable markdown link outside any code block: `🔗 [Full history for <handle> on WhoBought](https://whobought.xyz/kol/<handle>)` (source KOL) or `https://whobought.xyz/pumpfun/<handle>` (source PUMPFUN). Keep the card short; the page has the depth.
   Footer: `receipts by WhoBought · whobought.xyz · not accusations · not financial advice`.
Never call anyone a scammer. Present numbers and their confidence level and let the user judge.
