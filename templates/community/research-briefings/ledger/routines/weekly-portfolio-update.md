# Routine: monthly-portfolio-session

> Monthly deep portfolio session in Ledger chat on the 1st — charts and briefing, no COS ping.

Monthly portfolio session across all linked investment accounts on Finance (Plaid). Pull balances, holdings, month-over-month value deltas where possible, and anything material (big moves, cash drag, new positions). Use the Finance trend charts skill for portfolio mix and top holdings charts. Optionally run X stock sentiment on large held tickers if the X connector is linked. Write the full numbers-first briefing with charts in this Ledger chat. Do not ping the chief-of-staff / orchestrator on this run unless the owner asked. Stay quiet when nothing material changed — no filler. If Finance needs auth, start authentication and wait; never invent numbers. Facts and deltas only — no investment advice.

Fires on:
- cron `CRON_TZ=America/New_York 36 8 1 * *`

Ask the importing user for:
- Timezone
