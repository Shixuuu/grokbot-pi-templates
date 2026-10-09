---
description: "Grok Bot routine: Breakfast check-in — Fires each morning to make sure breakfast gets logged."
argument-hint: "[extra context]"
---

Check whether breakfast is logged for today (owner's local date). If it is, stay quiet. If not, look up breakfast from exactly 7 days earlier and ask "What'd you have for breakfast?" with a question widget: a primary option "Same as last week: <foods> · <calories>" plus allowCustom. When they answer, log it per the calorie food log skill and report the day total.

Fires on:
- cron `CRON_TZ=America/New_York 2 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
