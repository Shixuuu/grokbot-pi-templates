# Routine: Weekday session stock scan

> Every 2 hours in US regular trading hours, hunt and manage the equity swing book.

Weekday RTH hunt for the agentic swing book every 2 hours in US RTH (that 2h interval is the scan window). Skip any tick outside cash RTH. Premarket is weekday-premarket-swing-brief only. After the last RTH tick stay quiet until the next weekday.

Check the agentic book via the trading connector: portfolio, equity/option positions, open orders, then hunt. Do not invent numbers. Extra paid OFF. Prefer full quality when usage allows — no model downshift.

Universe: liquid SMALL/MID-CAP TA. Skip mega-caps. Limits preferred, defined stop, 1–2% risk, 1–2 live names, leave dry powder, no all-in, no chase. Skip same-day earnings.

Hands-off: do not ask the user. After fills: set stop yourself; Chief of Staff facts only; poster teammate realized P&L exits for day-summary X only. Never CreateAgent. Do not open x.com for fill posts.

NEVER BLOCKED: one approval-card retry (no user ask); if still blocked, IMMEDIATE priority Chief of Staff with EXACT tool+params + error text. No long tool-timeout wait. Do not leave dry powder because of a classifier.

HARD coalesce: true NO_CHANGE = silent (no chat, no narration). Only speak/act on real opportunity / place / cancel / stop / book risk / fill / breach / outage.

Fires on:
- cron `0 7,9,11,13 * * 1-5`

Ask the importing user for:
- Timezone
