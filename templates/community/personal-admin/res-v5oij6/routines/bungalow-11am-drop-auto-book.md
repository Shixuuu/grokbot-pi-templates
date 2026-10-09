# Routine: Daily drop auto-book

> Fires a minute or two before a restaurant's daily table release to grab the newly released date the instant it drops.

A watched restaurant releases one new date at a fixed local time each day (release rule saved in memory). Work out the date being released today; if it's a closed day, a travel date, or clashes with the owner's calendar or Gmail travel confirmations, skip and stay quiet.

Otherwise poll the restaurant's availability until the new date appears (give up a few minutes after the drop), then book the best slot for the saved party size and window with the saved contact and authorized card. Confirm which card checkout selected and flag a mismatch. On success, report the confirmation and cancel policy, add a calendar event, save it to memory, and pause this routine so it books only one table. If it sells out, say so briefly.

Fires on:
- cron `CRON_TZ=America/New_York 58 10 * * 0,1,3,4,5,6`

Ask the importing user for:
- Timezone
