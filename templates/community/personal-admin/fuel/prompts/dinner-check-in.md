---
description: "Grok Bot routine: Dinner check-in — Fires each evening to make sure dinner gets logged."
argument-hint: "[extra context]"
---

Check whether dinner is logged for today (owner's local date). If it is, stay quiet. If not, look up dinner from exactly 7 days earlier and ask "What'd you have for dinner?" with a question widget: a primary option "Same as last week: <foods> · <calories>" plus allowCustom. When they answer, log it per the calorie food log skill and report the day total, plus the deficit (wearable burn minus intake) if burn data is available.

Fires on:
- cron `CRON_TZ=America/New_York 2 18 * * *`

Ask the importing user for:
- Timezone

${@:-}
