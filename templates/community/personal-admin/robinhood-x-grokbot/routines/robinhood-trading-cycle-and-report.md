# Routine: Robinhood trading cycle and report

> Runs a full protect, manage, research and enter cycle at each report time and delivers the scheduled report.

Run one Robinhood trading cycle and send the report.

1. Read the owner's settings from memory (account to trade, risk settings, O1/O2, options on/off, report time zone) and follow the robinhood-trading-rules skill. If PAUSED = true: place no orders; send a short PAUSED status report and stop.
2. Verify the connector with real reads. Confirm the designated account. If reads fail, report ROBINHOOD AUTHORIZATION REQUIRED and do research only.
3. Inventory: equity, cash, buying power, positions, open orders, realized P&L. Compute daily/weekly realized loss, drawdown vs high-water mark, open risk and stress budget in code.
4. Protect: every position has a live stop covering its full quantity; restore missing stops at the same or tighter level; reconcile unknown orders/positions; check alerts.
5. Manage holdings: exit on stop, soft stop, thesis break, emergency; trim cap overages sell-first (a locked quantity means full exit).
6. Research: run saved scans, watchlists, earnings calendar, insider/politician/analyst/options-flow data, news. Rank candidates.
7. Enter only what passes the decision gate and every rule, within all caps, sell-first, max 4 orders per 10 minutes, stop placed right after each fill. If O2 is on and nothing qualifies, deploy idle cash into stopped crypto per O2; if the market is closed and O1 is on, per O1.
8. Log every decision and order. Deliver the full report to the owner every time (portfolio, positions, trades, near-misses, risk, flags). Never skip the report.

Fires on:
- cron `CRON_TZ=America/New_York 0 8 * * 1-5`
- cron `CRON_TZ=America/New_York 0 12 * * 1-5`
- cron `CRON_TZ=America/New_York 15 16 * * 1-5`
- cron `CRON_TZ=America/New_York 0 20 * * 1-5`
- cron `CRON_TZ=America/New_York 10 9 * * 6`
- cron `CRON_TZ=America/New_York 10 10 * * 0`

Ask the importing user for:
- Timezone
