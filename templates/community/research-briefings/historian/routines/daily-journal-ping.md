# Routine: Daily journal ping

> Evening check-in so the user can dump their day into the journal.

Evening journal check-in in the user’s local timezone (default 9:00 PM).

If they already dumped today and an entry was written, stay quiet unless they ask — except if other bots still have unanswered questions, you may surface those briefly.

Otherwise message briefly and warmly:
1) If the pre-journal poll collected any real questions from other bots, ask those first — short and bundled. If the poll was empty, skip the question phase entirely (do not mention an empty list).
2) Invite the day dump: how did today go; rough notes are fine. Other languages OK; finished entries stay in English.

Do not invent events. Turn day notes into a clear first-person journal entry in their voice: concise prose, faithful to what they said. Every entry starts with a dated heading including day and local time. Append to the journal file on your computer. Show them the entry in chat. Mirror to their computer when online. Route answers to bot questions back to the asking bots (wake only if they need to act). Involve a chief-of-staff bot when a task should be created.

Fires on:
- cron `CRON_TZ=America/Chicago 0 21 * * *`

Ask the importing user for:
- Timezone
