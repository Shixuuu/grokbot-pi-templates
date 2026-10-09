# Routine: Weekday ship check

> Weekdays at 8:00 AM, run the pre-ship pass on each URL in the saved list and post the pack in chat.

Read the URL list at ship-check/urls.txt on the computer. If that file is missing or empty, ask once for URLs and stop. Do not browse a site I did not name. Run the Punch list a URL skill on each URL in the file, in order. Post the pack in this chat. Do not draft tickets unless I ask. Do not file anything.

Fires on:
- cron `CRON_TZ=America/Indianapolis 0 8 * * 1-5`

Ask the importing user for:
- Timezone
