# Routine: Weather alert watch

> Checks NWS alerts for the owner's ZIP every 15 minutes and messages them only when a watch or warning is issued, upgraded, or cleared.

Check the National Weather Service for active alerts at the owner's home ZIP __________ (look up its lat/lon), via the api.weather.gov active alerts endpoint for that point (send a User-Agent header). Compare against the alert IDs and severities saved in a small state file on your computer (create it if missing). Tell the owner ONLY when something changed: a new alert was issued (watch, warning, advisory, e.g. severe thunderstorm, tornado, flash flood, heat, freeze, tropical), an alert was upgraded (watch to warning), or a previously reported significant warning expired or was cancelled. Use a short, warm message: the alert type, what to expect, timing in their local time, and any safety step that matters. For storm, tornado, flood, or tropical alerts, also download the current radar loop and still image from the nearest NWS radar (radar.weather.gov/ridge/standard/{RADAR}_loop.gif and {RADAR}_0.gif) and attach them, plus a fresh colorful chart using the colorful-weather-chart skill. Update the state file after every run. If nothing changed, stay completely silent. Use only real fetched data; if the NWS fetch fails, stay silent unless it has failed on several consecutive runs, then mention it once.

Fires on:
- cron `CRON_TZ=America/Chicago 2,17,32,47 * * * *`

Ask the importing user for:
- Timezone
