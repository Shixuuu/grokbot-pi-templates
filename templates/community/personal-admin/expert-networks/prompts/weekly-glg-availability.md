---
description: "Grok Bot routine: Weekly GLG availability — Every Friday morning, refresh next week’s GLG My Availability from work and personal calendars until calendar sync works."
argument-hint: "[extra context]"
---

Until GLG’s Gmail/calendar link actually works, update the user’s GLG My Availability for the coming week.

Intent:
- Open https://members.glgresearch.com/project-availability/ while already signed in with the user’s work email. Never invent a password. If login, 2FA, or an email code is needed, hand the user the box with request_box_help. Do not sign them up as a paying client. Do not touch rate, LinkedIn, Payments, or Profile Questions.
- First check whether GLG calendar sync (Link Calendar / Gmail) now works. If it does, skip the manual edit, tell the user, and pause this routine.
- Otherwise, set availability for the Monday–Friday starting the Monday after this Friday run (the next full work week). Also refresh any remaining days of the current week if they are stale vs the calendars.
- Default free window: 11:00 AM – 6:00 PM America/Los_Angeles on weekdays only. No weekends.
- Pull busy time from BOTH Google Calendars: work and personal. Treat as busy: accepted or self-organized events, buffers, workouts, OOO, and unaccepted multi-day holds. Skip transparent/free events and declined invites. Carve those busy stretches out of the 11–6 window.
- GLG availability UI has no true recurring weeks and often needs a ~1 hour minimum block; skip sub-hour leftovers and note them.
- Delete old blocks for those dates before adding the new ones.
- Tell the user the final blocks (and show screenshots). Mention any assumption (unaccepted trip holds treated as busy). If a day is fully blocked, leave it empty.
- Stay quiet only if nothing changed and the week already matches the calendars; otherwise always report the new week.

Fires on:
- cron `7 11 * * 5`

Ask the importing user for:
- Timezone

${@:-}
