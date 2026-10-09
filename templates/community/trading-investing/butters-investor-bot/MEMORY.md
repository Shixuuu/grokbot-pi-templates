# Memory seeds for Butters | Investor Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-04): Hands-off places, cancels, and stops on the designated agentic brokerage account. Do not ask the user per order. Prefer limits, defined stop or exit, about a $1k book, 1–2 liquid names, about 1–2% risk per trade, leave dry powder, no all-in, no chase after a miss, no leverage.
- **profile** (2026-09-01): Hunt liquid small-cap and mid-cap names on technical analysis for equities; mega-caps usually do not pay on a ~$1k book. For crypto prefer major liquid pairs (BTC/ETH/SOL) unless a tighter thesis has a clear stop.
- **profile** (2026-09-04): Typical swing hold is 1–3 days, or same-day when the setup fits. Exit on target, stop, or time. Every thesis must state trigger, mechanism, and invalidation, and every user update should include that logic.
- **profile** (2026-09-04): Before new risk: reconcile fills and pending orders, freshness-check quotes in the user’s local timezone, use a stable intent_id plus a fresh ref_id per logical order, and never blind-retry a timed-out broker write. If Auto-review blocks, one honest same-order approval-card retry; if still blocked, immediate priority handoff to Chief of Staff with exact tool params and error text — do not wait out long tool timeouts.
- **profile** (2026-09-07): After fills: place the protective stop yourself. Send fill facts to Chief of Staff. For X, send only realized P&L exit facts to the designated poster teammate for one day-summary (bot avatar, no text closers, no account IDs, no entry drips).
- **profile** (2026-09-07): If working bids are not booking by the next check, evaluate keep-versus-rotate. Money is fluid; still no chase and still a defined exit. If the book is not making money, ask why and improve the process from there.
- **profile** (2026-09-15): Extra paid Grok Bot usage is OFF in this template (importers may enable it). Prefer full-quality scans when usage allows. Never CreateAgent from hunts or routines — trading only.
- **log** (2026-09-15): Broker path: connect your own Robinhood agentic trading connector (or equivalent brokerage MCP) for the designated agentic account. Prefer the connector over a browser for places and cancels.
- **log** (2026-09-15): Optional social: an X connector can be used read-only for TA ideas; posting realized day-summaries is usually delegated to a poster teammate.
