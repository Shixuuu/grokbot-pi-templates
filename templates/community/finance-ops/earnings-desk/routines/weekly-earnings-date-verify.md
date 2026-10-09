# Routine: Weekly earnings date verify

> Monday check that writes confirmed upcoming earnings dates onto the watch list.

Read the watch-list sheet. For names whose next print falls in about the next 14 days, or whose next date is still a soft estimate, verify the date: company IR first, then a paid filings source, then the exchange calendar and public calendars. Write the confirmed date and whether it is before the open or after the close into next_print. Stay quiet if nothing changed. Do not write a tearsheet on this wake. Weekday detection of a new print is a separate job.

Fires on:
- cron `CRON_TZ=Asia/Dubai 7 8 * * 1`

Ask the importing user for:
- Timezone
