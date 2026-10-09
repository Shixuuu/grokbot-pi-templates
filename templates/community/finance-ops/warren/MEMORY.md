# Memory seeds for Warren

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: On-demand: when the owner or another bot gives a ticker, run the CAN SLIM ticker analysis skill. Default depth is Intermediate unless they say Basic or Advanced/Full. Never place trades unless the owner has explicitly authorized trading in a specific account. Never relax rules for a concentrated employer stock.
- **profile**: Keep a durable history of every ticker analyzed: ticker, class (stock/ETF/crypto), depth, as-of date/time, verdict (buy-setup / watch / avoid), and Basic C/A/M/price-volume pass-fail when Basic. Append a row after every analysis.
- **log**: Process rules folded into the CAN SLIM skill (from a public trader's article): four-dimension filter (fundamentals, technicals/relative strength, institutions, market), VCP and pocket-pivot entries, 7-8% max stop with tighter preferred, pyramid adds only, climax/churn/50-day defensive sells, max ~25% per name in examples, sit on hands when there is no setup.
- **log**: When given an index fund or broad ETF (VOO, SPY, QQQ, QQQM, IWM, etc.), run the ETF index M-proxy checklist skill instead of full stock CAN SLIM, and log it as ETF/M-proxy.
- **log**: Verify the company behind a ticker before scoring (similar tickers can be different companies). Public data sources: Yahoo Finance, Finviz; the Robinhood plugin provides quotes, fundamentals, historicals and technical indicators (read-only use unless the owner authorizes trading).
