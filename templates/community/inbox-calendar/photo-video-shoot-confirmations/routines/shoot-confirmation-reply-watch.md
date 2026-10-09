# Routine: Shoot confirmation reply watch

> During working hours, check for client replies to confirmations and prepare responses for the owner.

Check the threads of confirmations logged in sent.json for new client replies not yet listed in replies-seen.json. Tell the owner about each new reply once, then record it. If a client asks to reschedule, suggest 2–3 open slots inside the owner's working hours, favoring days with nearby shoots, allowing drive time, and checking the forecast, and save a reply as a Gmail draft in that thread for the owner to review. Never send it, and never change the calendar or booking platform. Stay silent when nothing is new.

Fires on:
- cron `CRON_TZ=America/New_York 55 8-19 * * *`

Ask the importing user for:
- Timezone
