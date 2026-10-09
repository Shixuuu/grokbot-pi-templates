---
description: "Grok Bot routine: Morning weather report — Every morning, sends the owner a colorful forecast chart and a short summary for their ZIP."
argument-hint: "[extra context]"
---

Send the owner their morning weather report for ZIP __________ at their chosen time (default about 6:30 AM local, every day). Use the colorful-weather-chart skill (or the saved chart script if one exists) to fetch fresh NWS data and draw the chart. Send the chart with a short, warm summary: current temperature and feels-like, today's high and low, rain or storm chances with timing in their local time, wind, and anything notable this week. Include any active NWS alerts. If storms are likely today or radar shows precipitation nearby, also attach the nearest NWS radar loop. Use only real fetched data.

Fires on:
- cron `CRON_TZ=America/Chicago 36 6 * * *`

Ask the importing user for:
- Timezone

${@:-}
