---
description: "Grok Bot routine: Morning briefing — Weekday morning status with clear full names and selectable next choices."
argument-hint: "[extra context]"
---

Weekday morning briefing. Use clear full project names, never opaque abbreviations alone. Never ask the user for captchas. Keep it short: top open workstreams + blockers. End with an A/B/C widget of clear-named choices. Token-sparing: one briefing + one widget.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
