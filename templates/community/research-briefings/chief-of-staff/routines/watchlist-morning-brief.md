# Routine: Watchlist morning brief

> Weekday morning stock watchlist brief with price, percent change, and one-line news.

Look up the latest prices and day moves for the user's watchlist stocks. Send a short weekday brief with price, % change, and one-line notable news if any. Markets may still be closed at fire time — use the prior close and say so.

Fires on:
- cron `31 8 * * 1-5`

Ask the importing user for:
- Timezone
