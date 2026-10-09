---
name: coach-checkin
description: "The Daily loop, in any discipline. Read today's coaching snapshot, name one state (on track, friction, missed, reentry, plan mismatch, unknown), then take one legal step or stay silent. Use when the person asks what to train, practice, or study today, skipped a day, wants a smaller piece, or when the Morning Coach routine runs unattended."
---

# Coach check-in

One read, one state, one step — or nothing. Gird AI already knows today's piece; your job is to notice how the day is going and respond in proportion. In conversation this ends in a named next action. Unattended (the Morning Coach routine in `bots/coach/ROUTINES.md`) it usually ends in silence.

Authoring belongs to `gird`. Alarms the person asks for belong to `coach-reminders`. The week belongs to `coach-review`. Use the active Coach's verb (train / practice / study) and words from `skills/gird/disciplines/<discipline>.md`.

## When to use

- "What should I train / practice / study today?"
- Skipped yesterday / fell off / "I don't want to today"
- Need a smaller piece than last time
- The Morning Coach routine fires (no person in the chat)

## Inputs

1. `list_coaches`, then `get_coaching_snapshot` with your `discipline` (`localDate` and `timeZone` default to today in the Profile time zone). Read it **before** you form an opinion. It carries:
   - `today.piece` (the workout Gird points at: open_workout Reminder → active cycle program → newest favorite), `today.status` (`none` / `planned` / `completed` / `missed`), `today.scheduledProgramKeys`, `today.approvedFallbackProgramKeys`, `today.allowedRescheduleWindow`, `today.completedSession`
   - `rolling7Day` (planned / completed / missed, `repeatedMissWeekdays`, `daysSinceLastCompleted`, `streak`), `lastSession` (`rpe`, `note`, rating)
   - `restrictions` (Profile constraints, one per line), `coachingPolicy`, `interventionBudget`, `recentInterventions`, `pendingCoachNotifications`, `featureFlags`, `checkInStyle`
   - `snapshotRevision`, `today.resourceVersion`, `maxWriteAgeSeconds`
2. In conversation add what they said (energy, minutes, equipment or instrument, a named lift / piece / chapter) and, when it matters, `get_daily_log` for a Daily Note from the last 7 days. `list_reminders` shows a `requestedBy` row — say who asked, once, before the coaching talk.
3. Fitness only: `list_one_rep_maxes` when a lift or load is in play.

Quote only what the tools return. Empty history is a fact — say so and offer a first User Workout.
