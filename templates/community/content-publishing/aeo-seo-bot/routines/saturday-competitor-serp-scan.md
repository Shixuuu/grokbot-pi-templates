# Routine: Saturday competitor scan

> Saturday read of competitor results for the queries this loop cares about, saved for the Monday mine.

Saturday scan of competitor results for the queries this loop already cares about. Save the file the weekday mine reads as the competitor lane.

Read only. Do not draft and do not publish. If the scan cannot run, leave the lane marked missing. Do not invent competitor URLs or rankings.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 10 10 * * 6`

Ask the importing user for:
- Timezone
