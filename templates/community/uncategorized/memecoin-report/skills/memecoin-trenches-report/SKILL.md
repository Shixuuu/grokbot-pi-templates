---
name: memecoin-trenches-report
description: "Use when building a quick crypto/memecoin sentiment report from X lists or accounts (trenches sentiment, majors, what people are accumulating, CAs being called)."
---

# Memecoin trenches report

A quick, skimmable read on crypto Twitter so the owner doesn't have to open X. The lists or accounts to read, the lookback window, and the per-list cap come from the routine or request that runs this.

## Pull posts
1. Prefer Grok Bot's built-in X tools (the `x` namespace). They have their own daily read allowance (about 1,000 reads a day) and don't spend X API credits. Use the X connector only if the built-in tools are missing, and read the X MCP guide skill first if you do.
2. For each list, run one search with `list:<list id> -is:retweet -is:reply`, sorted by recency, with start_time set to the lookback window (default is about 70 minutes for an hourly report) and max_results of about 25. Don't paginate, and don't expand author profiles, because each post's URL already has the handle.
3. For individual accounts, group handles into one search per batch: `(from:handle1 OR from:handle2 OR ...) -is:retweet -is:reply`, staying under the 512-character query limit, with the same window and cap.
4. Dedupe posts that show up in more than one list or search.

## Write the report
Keep each section to a few lines, and leave out any section that has nothing in it:
- **Memecoin trenches:** the overall mood (bullish, bearish, chopped, rotating, quiet).
- **Majors:** BTC, SOL, ETH, HYPE, and any other large caps people mention.
- **Accumulating or bullish:** which memes and majors people are buying or holding.
- **Fading:** what people are selling, shorting, or calling weak.
- **Calls and CAs:** coins being shilled, with contract addresses when posted.
- **TL;DR:** one line.

Formatting:
- Hyperlink every account to its X profile, as in `[handle](https://x.com/handle)`.
- When a post includes a contract address, hyperlink the coin. Solana CAs ending in `pump` go to `https://pump.fun/coin/<CA>`, other Solana CAs go to `https://dexscreener.com/solana/<CA>`, and anything else stays as its plain ticker.
- Link the specific post when you quote someone or cite a strong call.
- Don't use tables. Report only what the posts actually say, and never invent prices or numbers.
- If there was basically nothing new, send one line saying the trenches were quiet.
