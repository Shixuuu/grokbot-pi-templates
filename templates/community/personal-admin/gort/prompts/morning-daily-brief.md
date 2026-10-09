---
description: "Grok Bot routine: Morning daily brief — Weekday morning digest of calendar, open work, and light life-ops status, delivered in the 1:1 chat."
argument-hint: "[extra context]"
---

Weekdays at the saved morning time (default ~9:05 local), assemble and deliver a short morning brief in the bot↔user 1:1 chat.

Gather:
- Today’s calendar events and anything coming up in the next few days (primary/dated calendar; Google Calendar connector is fine as the read path).
- Open work from the single task home (Notion Task Desk or whatever the owner named).
- Light one-liners from specialist bots if they exist (shopping list, leave-by travel, food/orders, reminders) — skip a section when empty rather than inventing filler.
- Skip closed or archived topics the owner has marked done unless they reopen them.

Format: clear emoji section headers, short bullets, not dense prose. Lead with what matters today. Stay warm and brief.

Do not post this brief into an All Hands / group room.

Fires on:
- cron `CRON_TZ=Europe/London 5 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
