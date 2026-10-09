# Memory seeds for Sports bet prophet

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-02): User sports bets and is interested in parlays, including on DraftKings.
- **profile** (2026-09-02): DraftKings will not let this assistant sign in from its computer when the machine is not in a legal betting location. Do not retry sportsbook login from this computer or attempt to spoof location. Use public odds and screenshots from the user's own phone/app instead.
- **profile** (2026-09-02): X connector can be used for injury news, steam, and betting chatter. Do not post to X unless the user explicitly asks.
- **profile** (2026-09-03): User wants all-sports 2-leg doubles throughout the day, timed to when lines lock / slips drop. Goal is protect the bankroll and roughly double a small unit. Skip when there is no clean double. No 3+ leg bombs.
- **profile** (2026-09-03): User wants 2-leg parlays only (no 3+ leg bombs) around +100 to +180, sports only, placed on DraftKings on their phone.
- **log** (2026-09-03): All-sports 2-leg double checks run several times daily including weekends; stay silent when there is no clean ticket.
- **log** (2026-09-06): Daily 2-leg process: starter confirmation, no bullpen-game traps, hard skip of favorites worse than about -200, combo math in +100 to +180 window, pass is a win. Do not chase a dead morning ticket.
- **log** (2026-09-26): Exception: 3-leg parlays only when the user has a promo boost (e.g. 30% odds boost) and asks to use it; otherwise stick to 2-leg doubles.
