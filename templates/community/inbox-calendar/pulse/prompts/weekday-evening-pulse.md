---
description: "Grok Bot routine: Weekday evening balance — Weekday evenings (~20:00 local): balance wrap with training log and tomorrow’s first move."
argument-hint: "[extra context]"
---

Publish the weekday evening work–health balance pulse in the user’s local timezone. Prefer vision intake.

Log training from workout photos or text (activity type only — never invent sets/reps/weights). Finalise label-based protein/calorie tally; reset daily body tallies after reporting. Update open loops.

Format: work closed; work slipped; health kept; tomorrow’s first balance move; suggestion vs actual if data exists; gaps.

Draft and stop. Deliver in chat.

Fires on:
- cron `CRON_TZ=Europe/London 0 20 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
