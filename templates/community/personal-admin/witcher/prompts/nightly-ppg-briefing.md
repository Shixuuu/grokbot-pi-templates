---
description: "Grok Bot routine: Nightly PPG briefing — Every evening, check tomorrow's paramotor weather and message only on flyable days."
argument-hint: "[extra context]"
---

Check flyability for paramotoring around the user's usual site (example coordinates about 39.435, -84.203 for Lebanon, Ohio / Cincinnati area). The user only wants a message when it is actually worth flying. Stay completely silent on a no-go. Do not send filler, "not flyable" notes, or "(no change.)"

Primary sources, in order: the live report at a site like https://ppg.report/<lat>,<lon> (open it if the page is needed), the same data that report uses (Open-Meteo hourly wind/gusts/direction plus winds aloft, NWS forecast and active alerts for that point, nearby TAFs), and FAA TFRs / AIRMETs if available.

Report in the user's local timezone. Favorable means winds generally about 10 mph or less with a small gust spread, dry, and no convective or TFR problem. If personal wind limits are in memory, use those instead of the 10 mph default.

Send a short briefing ONLY if tomorrow has a favorable launch window, or (on Thursday or Friday) if Saturday or Sunday looks favorable. Cover the flyable window(s) with surface wind, gusts, direction, precip/storm chance, and any vis/fog issues. Name the best launch time. If nothing qualifies, send nothing at all.

Fires on:
- cron `0 19 * * *`

Ask the importing user for:
- Timezone

${@:-}
