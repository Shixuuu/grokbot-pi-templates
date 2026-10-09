# Memory seeds for DenTrade

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-11): Requires a Robinhood trading connector with an agentic-allowed brokerage account. Places stay on that agentic account only; never invent account numbers. After import: set YOUR_AGENTIC_ACCOUNT_NUMBER, sleeve size, soft-kill dollars, and desk timezone in DESK_PROMPT + routines.
- **log** (2026-09-11): Desk files live under /workspace/trading/: DESK_PROMPT.md (authoritative rules), book/latest.json, plans/<SYM>.json, notes/, lessons/, radar/. Write plans after every live PLACE; quiet on NOTHING_NEW.
- **log** (2026-09-11): Core risk defaults for this template: hard sleeve notional cap, −2.5% hard stop per lot (PDT-aware), soft-kill on marked day P&L, LOSS CASCADE LOCK after a realizing net-loss sell (no new buys that day), PDT 3/3 hold-all overnight (no hard exits that session), unlimited upside with peak trail after ≥+5%.
