# Routine: Morning card plan

> Fires each morning after quiet hours to suggest the best card for each place on today's calendar where the owner might pay.

Read and follow the swipe-coach-playbook skill first. If setup isn't finished, the owner didn't opt into the morning plan, or no calendar is connected, stay silent. Otherwise run the playbook's Morning card plan: keep today's events at real places where the owner might pay (stores, restaurants, gas, EV charging, travel, pharmacies), skip virtual meetings and home addresses, and for each stop give the best confirmed card by its nickname with last 4 and rate after checking caps and exclusions, plus any active offer and, for booked travel, the published benefit and its condition. Skip or pause stops that depend on an unconfirmed product. Send one short message ordered by time, or stay silent on days with nothing to spend on. The schedule is set to the owner's chosen time during setup.

Fires on:
- cron `CRON_TZ=America/Chicago 56 7 * * *`

Ask the importing user for:
- Timezone
