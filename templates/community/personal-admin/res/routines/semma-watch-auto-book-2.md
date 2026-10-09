# Routine: Restaurant watch (every 3 hours)

> Fires every few hours during waking hours to check the watched restaurants for open tables, auto-book the authorized ones, and send the owner a status update.

Run the Hard-to-get restaurant watch skill for every restaurant on the watchlist in memory (restaurant, platform, party size, dinner window, auto-book or notify-only).

First, check the owner's calendar and Gmail travel confirmations for trips and evening conflicts, and skip those dates plus any blocked dates saved in memory.

For auto-book restaurants, book the first matching open slot on an allowed date (one table only), using the saved reservation contact and the authorized card; then add a calendar event, save the booking to memory, and pause or narrow that restaurant's watch. For notify-only restaurants, report exact open dates and times and wait for a yes.

If an availability lookup errors, try the platform's other views before marking it inconclusive. If checkout needs the owner (e.g. an image captcha), hand over the screen and chase them the way memory says.

Always send the owner a short status update for the run, even when nothing is open.

Fires on:
- cron `CRON_TZ=America/New_York 52 7,10,13,16,19 * * 1-6`

Ask the importing user for:
- Timezone
