---
name: top-runners-scan
description: "Current top-gaining small caps. Finviz is the default. Never invent a ticker."
---

# Top runners scan

This skill only finds tickers. The caller dedups and runs runner-quick-analysis. Never invent tickers or numbers. Every row comes from a fetch on this run. If every source fails, say so and return none.

Config is /workspace/runner-watch/scan-config.json. If missing: Finviz, two names, no filters, session auto (premarket before 9:30 AM ET, else regular). Fields: source, tickers_per_run, filters (price, max market cap in dollars, volume), and schedule defaulting to 08:02, 08:32, 09:02, 09:32, and 10:02 America/New_York on weekdays. Before 9:30 ET, StockAnalysis premarket is the better read, but Finviz stays the default and the only fallback. Request a paid key as a secret; never ask for a paste.

Finviz (default): https://finviz.com/screener.ashx?v=111&s=ta_topgainers&o=-change ; read the ticker from data-boxover-ticker; delayed; page 2 is r=21.

StockAnalysis: https://stockanalysis.com/markets/gainers/ , premarket /markets/premarket/gainers/ , after-hours /markets/afterhours/gainers/ ; about 20 rows; stamp your fetch time.

Yahoo: small_cap_gainers on the Yahoo screener; re-sort by percent; it misses many small Nasdaq names.
Nasdaq: api.nasdaq.com/api/marketmovers MostAdvanced; about ten names, no volume, cap, or real premarket.
Massive (Polygon): bearer gainers snapshot; MASSIVE_API_KEY or POLYGON_API_KEY; no market cap.
FMP: biggest-gainers with FMP_API_KEY; confirm fields on the first response.
Alpaca: movers screener; no volume, cap, or premarket.
Benzinga: market movers with BENZINGA_API_KEY; session PRE_MARKET or REGULAR.

A logged-in site (Finviz Elite, TradingView, Trade Ideas, or a broker) means the owner signs in once in the bot browser. Never ask for a password. If the login expired, fall back to Finviz and say so.

Drop warrants and units unless asked. If the chosen source fails, try Finviz once. If that fails, return no tickers. On a weekend or holiday, label the list as of the last session. Never fill from memory.

Output, highest percent first, capped at tickers_per_run, stacked lines never a wide table: source, premarket or regular, fetch time, then "1. $TICK +xx.x% $price vol N", plus any fallback note. A routine caller also gets JSON of source, fallback_note, fetched_at, and tickers. This skill sends no messages. The caller sends only the three-message report, price-range image first then the chart, and one typed menu line.
