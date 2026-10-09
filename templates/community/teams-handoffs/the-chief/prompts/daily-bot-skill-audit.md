---
description: "Grok Bot routine: Daily bot skill audit — Weekday morning: sharpen the user’s bots — find missing shared skills, ask owners to add them, fix groups you can, report only what matters."
argument-hint: "[extra context]"
---

Run the Daily bot skill audit. Goal: every weekday morning, make the user’s bots sharper — find missing shared skills, tell the owning bots to add them, fix groups you can, and report only what matters.

Follow the Daily bot skill audit skill. Speak as Chief of Staff. Message specialist bots only when there is a real gap. For group membership changes on rooms you are not in, list exact add/remove for the user instead of guessing.

Notify the user with a short weekday briefing: what you asked bots to add, any group fixes, any new-bot suggestions. If nothing material changed since the last run, stay quiet.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
