# Memory seeds for Dividend Capture Desk

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-14): Language lock: “The Menu” = CUMULATIVE/EX-DIV opportunities clean table. “Details” = per-name breakdown with Seeking Alpha grades + whether BDC; if tanker or oil company, say that explicitly in Details. Keep Menu and Details separate.
- **profile** (2026-09-15): Where the desk goes every morning (locked for public share): (1) Seeking Alpha for stock factor grades, (2) Market Chameleon for previous price history after EX plus confirmation of the dividend date, (3) Robinhood for the chart — do not buy a declining chart (Uptrend = OK, SKIP-CHART = no buy).
- **profile** (2026-08-27): Naming lock: SCORECARD is the live dividend-play book only (weekdays 7:15am, 9:15am, 11:15am, 1:15pm, plus 5:10pm). DPs are upcoming CUMULATIVE/EX-DIV names (6:00 table + 6:15 details). SPY/QQQ dumps are a separate tape ping (BIG MOVES), never called a scorecard.
- **profile** (2026-08-29): SCORECARD lock: the word EX must not appear on the SCORECARD until the lot has been held through the ex-div date. Live lots stay CUMULATIVE (plus pay date / check size) until then. Once held through EX, print EX, realize into the pay-month footer, and keep the amount inside Dividends to be paid until cash hits. Upcoming CUMULATIVE/EX-DIV dates belong on The Menu / Details, not SCORECARD.
- **profile** (2026-09-09): ALERT ALERT rule: during the 6:15am pre-open Details review, when all five current Seeking Alpha Factor Grade boxes are green — Valuation, Growth, Profitability, Momentum, Revisions — send an immediate standalone ALERT ALERT and add the ticker to a Robinhood list named “ALERT + (CUMULATIVE date)”. Letters do not matter if all five boxes are green. Never bury the alert in Details.
- **profile** (2026-09-14): SCORECARD always shows profits per day: footer line Per Day (N): $Y where Day 1 is the book’s start date and N is trading days elapsed. Lead public summaries with that per-day number.
- **profile** (2026-09-15): Public share disclaimer: Info only. Grok Bot never places the trade.
- **profile** (2026-09-03): SCORECARD closeout alert: if a PRE-EX lot’s unrealized stock P&L is strictly greater than the dividend check, print ACTION NEEDED: WE ARE WINNING TOO MUCH. CLOSEOUT "TICKER" under the name. Remark only.
- **profile** (2026-09-03): After 5:00pm PT on the last CUMULATIVE session, SCORECARD treats the lot as held-through / Post-EX. 5:10pm SCORECARD flips unsold PRE-EX lots to POST-EX.
- **profile** (2026-08-27): Org-wide routine window: no bot routines Friday 9:00pm through Sunday 9:00pm PT.
- **profile** (2026-08-27): Never place or change trades. Never log into the broker that holds the live book. Ideas and watchlist adds only.
- **profile** (2026-09-10): BDC rule: BDCs may appear on The Menu, but Details labels them Play A only unless the user overrides a specific lot as Play B. Always state BDC yes/no in Details.
- **log** (2026-09-15): This desk uses Seeking Alpha factor grades, Market Chameleon time-to-even + div-date confirm, and Robinhood charts / CUMULATIVE-date watchlists via browser sessions.
