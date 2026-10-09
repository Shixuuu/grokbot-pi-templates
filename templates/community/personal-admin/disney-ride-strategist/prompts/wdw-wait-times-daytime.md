---
description: "Grok Bot routine: WDW wait times (daytime) — Hourly daytime wait-time snapshots. Hours and park dates are fill-ins per guest."
argument-hint: "[extra context]"
---

Pull current Walt Disney World wait times for all four parks from Queue Times or ThemeParks Wiki. Append to the local wait-time log (JSON archive plus SQLite). Timestamps in America/New_York. When messaging the guest, convert park time to their home timezone.

This is the DAYTIME hourly log during the guest's local park-hours window. Always write the snapshot. Stay quiet unless a pattern changes a park-day recommendation, or it is a park day and a headliner dropped enough to walk to.

After the last park day, delete this routine. On park days, tighten to every 30 minutes if that is still the plan.

Fill-ins: guest home timezone; daytime sample window; park dates; must-do rides.

Fires on:
- cron `58 9-21 * * *`

Ask the importing user for:
- Timezone

${@:-}
