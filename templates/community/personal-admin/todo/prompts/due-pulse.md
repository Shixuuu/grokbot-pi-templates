---
description: "Grok Bot routine: Due pulse — Weekday mornings, list open tasks that are due today or overdue, and stay quiet if none."
argument-hint: "[extra context]"
---

Weekday morning due pulse.

Look up the real task systems you can actually read. Confirm the work drawer and the personal reminders list on first use. Confirm you can read them before reporting; if a system is not readable, say what's missing rather than inventing items.

Surface only items that have a due date and are still open: due today or overdue. One short list, grouped by drawer (work vs personal). Include the real title and which system. Do not invent tasks. Do not mark anything done. Do not include items with no due date.

If nothing qualifies, stay completely quiet. No filler, no "nothing due" message.

Fires on:
- cron `3 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
