---
description: "Grok Bot routine: Activity-window usage cadence — Temporary 5m cadence while team/user activity is fresh; self-pauses when idle."
argument-hint: "[extra context]"
---

Activity-window usage tick. Follow Usage status and throttle skill. Reuse one Spending tab and refresh — never open duplicates. While activity fresh (~5m): query Spending, richer brief if cooldown clear (Green ok), then idle DM Grok Bot Usage: ~{N}% (used% rounded up to next 5). If idle 5m: final brief if allowed, idle line, pause this routine. Never invent numbers; never rename or set avatarColor.

Fires on:
- cron `@every 5m`

Ask the importing user for:
- Timezone

${@:-}
