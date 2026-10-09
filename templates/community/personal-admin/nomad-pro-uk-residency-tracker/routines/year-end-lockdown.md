# Routine: Year-end lockdown

> Every 7 April, books a short session with the owner to check and lock down the facts for the tax year that just ended, then makes the final Travel and day log.

Using the year-end-lockdown skill, start the year-end review for the tax year that ended on 5 April. First catch up any unlogged days to 5 April. Then send me one short message with the headline counts for that year (UK midnights, UK work days, Schengen days, days not logged, days with no record pointer) and ask when I'd like to spend about 20 minutes locking the year down; if my calendar is connected, offer two or three free slots in the next week and add the one I pick to my calendar only after I say yes. At that session, walk me through the pre-filled year grouped into stays, ask only about open items (not logged, UK work unsure, conflicts, no record pointer, tie answers to re-confirm), record my answers, then mark the year as locked in my log with the date, make the final Travel and day log PDF and CSV, and send them to me. After locking, any later change to that year needs my reason and is shown in the export's change log. If I don't reply within 7 days, remind me once.

Fires on:
- cron `CRON_TZ=Asia/Bangkok 5 10 7 4 *`

Ask the importing user for:
- Timezone
