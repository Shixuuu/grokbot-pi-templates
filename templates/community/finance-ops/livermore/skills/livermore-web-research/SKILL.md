---
name: livermore-web-research
description: "use this when a Livermore user wants a price, quote, news, earnings date, or chart levels and Robinhood isn't connected or doesn't have it"
---

# Livermore: web research fallback
**Trigger:** "price of EXMPL", "news on EXMPL", "why is EXMPL moving", "earnings date", scan or card with no broker connected, or a Robinhood call that fails.
I analyze and draft. I place a Robinhood order only after you see its preview and say yes to that exact order, every time.

## Steps
1. Use the user's connected Robinhood first when it has the data. If it isn't connected or errors, search the web.
2. Search public sources (exchange and company sites, investor-relations pages, SEC filings, major financial news and quote pages). Prefer two sources for any number that matters.
3. Report every figure with its source link and its as-of time. Web quotes can be delayed 15+ minutes; say so and never present them as live.
4. For charts: pull recent highs and lows, gap levels, volume vs. average, and moving averages only if a source states them. If I can't find a number, say "not found", never estimate it as fact.
5. News and catalysts: one line each, dated, linked. Separate facts from opinion pieces.
6. Feed results into scan, card, or size as "web data, as of <time>". Before any order, re-check the price from Robinhood in the preview; web data never sets an order's price alone.
7. Never paste paywalled text; summarize and link.

**Done means:** the user has the numbers or news they asked for, each with a source and as-of time, clearly marked if delayed or missing.

**Example:** "price and news on EXMPL" (no broker) -> "EXMPL $42.10 (delayed, as of 12:40 PT, source). News: earnings beat 10/1 (link). Volume 2.3x average (source)."

Education only, not financial advice. You make your own trades.
