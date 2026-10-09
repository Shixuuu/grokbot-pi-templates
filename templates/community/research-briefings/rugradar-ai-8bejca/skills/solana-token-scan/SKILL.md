---
name: solana-token-scan
description: "Use this when the user pastes a Solana token (mint) address or asks for a quick scan or deep scan of a token or its creator."
---

# Solana token scan (Quick and Deep)

Research only, never financial advice. Never ask for private keys, seed phrases or wallet signatures. Never trade.

## Rules for every scan
- Use only free public endpoints. Respect their rate limits and terms. Never try to get around an IP block (no proxies, rotating IPs or scraping via the browser to dodge a block).
- Pace RPC calls at least 0.35 s apart. On HTTP 429, retry once after 2 s at most, then record the failure and move on.
- Return partial findings straight away. List every failed call and the information that is missing because of it.
- Label every finding as one of three types: **Verified on-chain** (from RPC data, with a Solscan link), **Third-party claim** (for example a RugCheck flag), or **Suspected** (a pattern, not proof).
- Never say a creator "rugged" a token unless the on-chain transactions show it (for example a creator buy followed by a profitable dump, or liquidity being removed). A RugCheck "creator history" flag is a third-party claim.
- Never say work is continuing in the background unless a task really is running.
- Cite a link for every claim: `https://solscan.io/tx/<sig>`, `https://solscan.io/token/<mint>`, `https://rugcheck.xyz/tokens/<mint>`.

## Quick scan (usually about 2 s)
1. Solana public RPC `https://api.mainnet-beta.solana.com`, `getAccountInfo` with `jsonParsed`. Get the token program, supply, decimals, mint authority, freeze authority, and the metadata update authority (Token-2022 `tokenMetadata` extension).
2. RPC `getTokenLargestAccounts` (one attempt only; it often returns 429 on the public RPC). If it fails, say holder concentration is unavailable.
3. RugCheck `https://api.rugcheck.xyz/v1/tokens/<mint>/report`. Get the normalised score, risk flags, holder count, creator, liquidity and markets. The server allows about 15 requests per window.
4. DEX Screener `https://api.dexscreener.com/tokens/v1/solana/<mint>` for price, liquidity and FDV, one attempt only. If it is blocked (Cloudflare 1015 or 429), say market data is unavailable.
Then report the findings, what is missing, a risk level with the reasons, and the uncertainties.

## Deep scan (about 30 s for 15 transactions; slower when rate-limited)
Run this only when asked, and cap the work unless the user asks for more.
1. Get the creator from the RugCheck report (`creator`) and its prior launches (`creatorTokens`, a third-party list).
2. RPC `getSignaturesForAddress` on the creator (limit 100). Then fetch up to 15 relevant transactions with `getTransaction` (`jsonParsed`, `maxSupportedTransactionVersion: 0`).
3. For each launch checked, work out the creator's buys and sells and the net SOL change from `meta.preBalances` and `postBalances` and the token balances. Find the wallets that funded the creator (incoming system transfers before the launch).
4. Separate confirmed wallet links (direct transfers with a signature) from suspected ones (timing, similar amounts, look-alike addresses).
5. Report the transaction signatures that failed, and the time range of the history that was actually covered.

## Sources that do not work here
The pump.fun website API returns "not found". Solscan, Birdeye and Bubblemaps APIs need keys or a browser, so use them as citation links only.
