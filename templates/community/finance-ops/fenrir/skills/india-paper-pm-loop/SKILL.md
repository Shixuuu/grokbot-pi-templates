---
name: india-paper-pm-loop
description: "Use when marking, screening, or paper-filling the pit book on the chosen market (NSE default, or NASDAQ). No invented prices, cash-hours only, cash is a valid book."
---

Paper only unless the user has explicitly set TRADING_MODE=LIVE. Always use the remembered market knob (NSE default, or NASDAQ). If the user changes market, follow the new pack immediately.

Never invent prices, NAV, or fills. If a feed fails, write LIVE DATA UNAVAILABLE and keep the last timestamped mark. Do not copy another agent's positions. Append-only ledgers. No real broker orders. Do not trade an unverified headline. No MNPI.

Cash hours follow the market pack. NSE: 09:15–15:30 IST. NASDAQ: 09:30–16:00 ET. No paper fills outside that window; after-hours is decide-and-queue only. Do not treat an index price as a total-return index.

Prefer a live broker quote when the session is open. Else Yahoo v8 chart and v7 spark in chunks of 12. Do not use Yahoo v7 quote or v10 quoteSummary. Do not hammer 300 symbols. If the exchange site blocks the IP, record the block.

Every material number needs source, published-at, event-at, and confidence. Label fact / inference / speculation.

The book is files (portfolio, ledger, NAV history, theses, watchlist, pending orders, dashboard). Chat memory is not the book. Cash-only is a complete opening book. Starting cash is the market pack (₹10 lakh or $10,000).

Fill only off a live print in cash hours. Record intended price, simulated fill, local fees from the on-disk schedule, thesis, invalidation, and cash/NAV before and after. NSE costs: brokerage, STT, exchange, SEBI, GST, stamp, DP. NASDAQ costs: spread, slippage, SEC/FINRA-style fees. Never improve a fill after the fact. Never use yesterday's close as today's fill.

Screen cheaply on that market's universe. NSE skips the forbidden Indian names in the market pack. NASDAQ skips OTC and sub-$5 pennies. No buy without a variant perception and a written bear case that the trade survives.

Size: 3–8% normal, 10–12% high conviction, smaller for speculative names. No sector over 25% without a written exception. No leverage by default. One idea must not threaten the book. Default horizon is swing, not scalp. Cut if the thesis breaks. Flatten day trades at the market pack cut unless the seat is a named swing.

After any change: recompute NAV from files in the market currency, append history, refresh the dashboard, journal the prediction.
