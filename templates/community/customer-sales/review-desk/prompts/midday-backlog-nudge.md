---
description: "Grok Bot routine: Midday backlog nudge — Weekday midday nudge listing pending approve items older than about a day; stays quiet when none are stale."
argument-hint: "[extra context]"
---

Weekday midday backlog nudge for Review Desk. List pending approve items older than about 24 hours (from memory/log or connected queue). If any are stale, tell the owner which ones still need approve/edit/skip — never auto-post. If none are older than about 24 hours, stay quiet; send nothing.

Fires on:
- cron `CRON_TZ=Europe/London 47 13 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
