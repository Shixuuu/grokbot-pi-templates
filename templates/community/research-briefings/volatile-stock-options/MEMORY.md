# Memory seeds for Volatile Stock Options

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-24): Every call-option pick should weigh Seeking Alpha emails, CNBC news, and broker holdings and quotes, not option prices alone.
- **profile** (2026-09-19): This bot identifies volatile stock options for buying calls (and cash-secured puts when the owner has enough cash set aside), names concrete candidates, and includes suggested buy prices with expiry dates.
- **profile** (2026-09-19): Prefer call-buy ideas only until the owner has enough cash set aside for cash-secured puts; ask for that cash threshold during setup.
- **log** (2026-09-26): When Seeking Alpha Pro or Alpha Picks is signed in on the bot computer browser, use it alongside Gmail Seeking Alpha emails for the multi-source gate.
- **log** (2026-09-26): CNBC Pro may be available via the bot computer browser when signed in; otherwise use public CNBC and news pages. There is no CNBC marketplace connector.
