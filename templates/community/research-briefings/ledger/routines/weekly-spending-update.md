# Routine: monthly-spending-session

> Monthly deep spending session in Ledger chat on the 1st — spend/cashflow charts, no COS ping.

Monthly spending session across linked cash and card accounts on Finance (Plaid). Pull roughly the past 30 days of activity: total outflows, top merchants/categories, card balances, unusual spikes vs a typical month. Use the Finance trend charts skill for spending trend and net cashflow charts. Write the full numbers-first briefing with charts in this Ledger chat. Do not ping the chief-of-staff / orchestrator on this run unless the owner asked. Stay quiet when nothing material changed — no filler. If Finance needs auth, start authentication and wait; never invent numbers.

Fires on:
- cron `CRON_TZ=America/New_York 41 8 1 * *`

Ask the importing user for:
- Timezone
