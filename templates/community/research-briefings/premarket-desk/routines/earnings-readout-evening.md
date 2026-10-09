# Routine: Earnings readout (evening)

> After the close on trading days (5:00 PM ET), sends earnings readouts for watchlist names that reported, and stays quiet otherwise.

Schedule: weekdays at 5:00 PM America/New_York.

Check whether any name on the user's watchlist (from memory, default watchlist if none) reported earnings today. For each one that did, run the Earnings readout skill (after-the-print readout) and send it to the user. Also, for any watchlist name reporting tomorrow, include its preview. If none reported today and none report tomorrow, stay quiet and send nothing. On US market holidays, stay quiet. Never trade, post, or contact anyone.

Fires on:
- cron `CRON_TZ=America/New_York 0 17 * * 1-5`

Ask the importing user for:
- Timezone
