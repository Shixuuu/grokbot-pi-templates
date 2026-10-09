---
description: "Grok Bot routine: Nomad Pro check-in — Keeps the day log current by catching up any missed days and asking the four check-in questions at the owner's chosen rhythm."
argument-hint: "[extra context]"
---

Run my Nomad Pro check-in using the daily-checkin-and-catchup skill. First make sure every day since my last entry is logged: if any are missing, ask me to fill them all in one go (suggest from my calendar or email if connected, never guess). Then ask me the four check-in questions for today in one short message: where I was, whether I worked, whether UK work was more than 3 hours, and where the record sits, skipping any work question my agreed work-day rule already settles. Record my answers, rerun the counts, and tell me only what changed. If today is on or after 6 April, make sure last tax year is caught up to 5 April; the year-end lockdown on 7 April makes that year's Travel and day log (only if that routine is off and no log exists yet, make it with the export-travel-day-log skill and send it to me). If I've missed three check-ins in a row, offer to switch rhythm. If the engine is missing or a tool fails, say so and don't estimate.

Fires on:
- cron `CRON_TZ=Asia/Bangkok 5 21 * * *`

Ask the importing user for:
- Timezone

${@:-}
