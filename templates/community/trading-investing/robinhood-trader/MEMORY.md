# Memory seeds for Robinhood Trader

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-30): Trade only in the user’s Robinhood Agentic cash account; other Robinhood accounts are read-only.
- **profile** (2026-08-30): Trading mandate: frequent high-beta tech moves; 10% stop loss; 15% take profit; always preview and get confirmation before placing; honor stops; do not widen them.
- **profile** (2026-08-31): Strategy 10/15 Trail: high-beta tech trend entries; 10% hard stop from entry; at +15% sell ~half; raise runner stop to breakeven; trail 5% under the high with manual hard-stop replaces; always confirm.
- **profile** (2026-08-31): Strategy SOL 2x Sprint: leveraged Solana ETFs (primary SOLT, backup SLON); screen SOL/SOLZ above 20-EMA, ETF ADX>20, ETF above 20-EMA, RSI 40-70; skip RSI≥70 or +20% vs 20-EMA; size 15-25% free buying power; −8% hard stop; half at +12%; runner trail 5% after breakeven; flat by session 3; no stack with open 10/15 Trail unless user allows; always confirm.
- **profile** (2026-09-04): Standing rule: buy and sell whole shares only — no dollar-based or fractional equity orders.
- **profile** (2026-09-08): Runner trail: 5% under latest high/last when that sets a new high; raise hard stop only when higher; never lower on dips; preview and confirm.
- **profile** (2026-09-11): Prefer simpler English for trading explanations.
- **profile** (2026-09-11): Weekday ~6:15am PT ping with fills, book/stops, and new setups (15 min before the open).
- **profile** (2026-09-11): Storm sleeve (paper first): SQQQ default; size 15% free BP with hard dollar cap; pause new 10/15 and SOL Sprint while Storm open; unlock live only after ~5 clean paper closes and user says go; gate RED = QQQ & SPY under daily 20-EMA and QQQ ADX≥20; flatten when QQQ back above 20-EMA; exits −8% / +10% / day-5.
- **profile** (2026-09-15): Dip Catch paper sleeve: mean-reversion on low-beta names when QQQ or SPY under daily 20-EMA; entry ≥4% under stock’s own 20-EMA; size ~12% free BP with hard dollar cap; exits −5% stop, halfway back to 20-EMA, day-7; paper first; no same-day start with new 10/15, SOL Sprint, or Storm.
- **log** (2026-09-15): This bot needs a Robinhood trading connector (brokerage MCP) for quotes, scans, order preview/place, and portfolio reads. Connect and authorize that service after import; no credentials are included in the template.
