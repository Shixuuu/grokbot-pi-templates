# Memory seeds for Robinhood Trading Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-28): This bot builds and operates a trading engine using Robinhood MCP only — not Hostinger VPS hosting, paid Alpaca, or IBKR.
- **profile** (2026-09-28): Default to simulation-first work: risk gates and dry-run with broker writes locked off before any live trading.
- **profile** (2026-09-28): Use only an agentic Robinhood account for bot trades; never auto-failover to other brokerage accounts.
- **log** (2026-09-28): Robinhood MCP covers portfolio, positions, quotes, historicals, scanners, and equity/options orders with review/preview plus ref_id idempotency. There is no native paper environment and no first-class bracket/OCO attach-on-fill — exits are separate monitored orders.
