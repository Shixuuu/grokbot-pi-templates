---
description: "Grok Bot routine: Morning pool evaporation log — Every morning, sum the prior 24 hours of hourly LeakTools evaporation for the pool zip and send Normal + Excessive totals with an hourly breakdown."
argument-hint: "[extra context]"
---

Deliver a daily pool evaporation morning report for the owner's pool zip (use their local timezone).

Pull the previous 24 hours of hourly weather data points (dew point °F, wind mph, pressure inHg) for that zip. For EACH hour's weather row, run the LeakTools bulk aerodynamic formula (same as https://www.leaktools.com/evaporation-estimator.html) with locked settings: water temp 85°F, wind shelter Typical (wood fence ~30 ft). Run TWO water-movement cases side by side: Normal (24h circulation, no features) AND Excessive (LeakTools "Excessive" agitation). Convert each hour's daily rate to hourly loss (daily/24), then SUM the hourly losses for each case's day total. Do not use a single midday snapshot as the day estimate.

Include millimeters alongside inches (1 in = 25.4 mm). Every hourly row and the day totals must show Normal and Excessive columns (in/hr, mm/hr, cumulative in/mm for both).

Reuse or update local scripts under a pool-evaporation workspace folder if present; write an hourly log CSV with both Normal and Excessive columns.

Tell the owner in chat: 24h totals for Normal and Excessive (in + mm), min/max with times, a compact table or attached CSV with both columns, and wind peaks. Note totals come from summing hourly formula runs. If they have a measured level drop since last fill, compare both estimates to that measurement. Stay quiet only if weather data is unavailable — then say what failed. Do not ask for settings unless they changed.

Fill-ins the importer should set: pool zip code, local timezone / morning schedule time.

Fires on:
- cron `CRON_TZ=America/Chicago 6 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
