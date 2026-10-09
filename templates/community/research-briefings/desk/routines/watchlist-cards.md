# Routine: Watchlist cards

> Weekend morning: re-stamp only tickets pinned this week; stop if the watchlist is empty.

Run Watchlist cards.

Intent: read the pinned watchlist for this week only. If empty, reply "watchlist empty" and stop — do not invent tickets.

For each pinned ticket: re-run analyze / Jev stamp and post one PropDesk card (zone, lean as research arrow, P(supports over/Yes), P(supports under/No), usage risk, reasons). Never invent vectors. Never place. 18+ once if needed.

Fires on:
- cron `CRON_TZ=America/Chicago 10 9 * * 6`
- cron `CRON_TZ=America/Chicago 0 9 * * 0`

Ask the importing user for:
- Timezone
