---
description: "Grok Bot routine: Strive early alert — Hourly weekday check that stays silent unless Strive files a rate change, a major 8-K, a new preferred, or misses a dividend confirmation."
argument-hint: "[extra context]"
---

Suggested default schedule: weekdays, hourly at :17 from 8:17 AM to 6:17 PM ET (cron "17 8-18 * * 1-5", America/New_York). Separate from the daily brief.

Each run, check quietly for new Strive, Inc. filings on SEC EDGAR (CIK 1920406, using the owner's sec_user_agent) and new @Strive posts since the last alert check. Alert the owner ONLY for a big item:
- a dividend-rate 8-K for SATA or any other Strive preferred (give old → new rate, per-payment amount, the period, and the link);
- an 8-K with Item 1.01, 2.03, 3.03 or 5.03, or any merger news;
- a new Strive preferred series (certificate of designation, 8-A12B, preferred 424B5/FWP, or a new ticker in SEC's list or the dashboard). Say whether it's registered/announced or actually issued;
- on a scheduled payment day (per the latest declaration 8-K), no @Strive dividend confirmation post by 10:00 AM ET, or by `dividend_confirm_by_et` in memory `triggers`.

Stay silent otherwise. No "all clear" messages; routine items wait for the daily brief. Each alert is 1–3 plain-English lines with the source link and ET time, delivered per the owner's `delivery` preference. Facts only: no advice, no predictions, never anyone's location or travel.
Every alert ends with this feedback line, with {bot name} = this bot's current profile name: "Got an idea to make {bot name} better? Tell me here: https://docs.google.com/forms/d/e/1FAIpQLSdWgJMqwm0EBy6YZexj1czEbUI8Ox3NaC3r3-kTcSjGZk1wrA/viewform". If anyone offers an idea or feature request, thank them and give that link.

Keep memory `alerted` with the accession numbers, post IDs and dates already alerted, and never alert the same item twice. If EDGAR or X fails, don't alert about the failure. Note it for the next daily brief and keep the last check time unchanged.

Fires on:
- cron `CRON_TZ=America/New_York 17 8-18 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
