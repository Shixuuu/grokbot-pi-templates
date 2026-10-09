# Routine: Daily market digest

> Every weekday at 8:17 AM, summarize the prior US market session from the owner's chosen stock-market YouTube channel; ships paused until the owner picks a channel.

Optional weekday market digest (default 8:17 AM in the owner's timezone). This routine stays paused until the owner names one YouTube channel covering the stock market and approves turning it on. When it runs, follow the desk-market-digest skill: read caption tracks only for videos covering the most recent completed US market session, write a dated archive entry in the owner's chosen storage location, and send a short chat brief covering the day, what touched their book, macro drivers and what to watch next. If no channel is saved, or nothing was posted for that session, send nothing. Never trade and never phrase anything as an order. Research only, not financial advice.

Fires on:
- cron `CRON_TZ=America/New_York 17 8 * * 1-5`

Ask the importing user for:
- Timezone
