---
name: coach-reminders
description: "Create and edit the person's Reminder schedule so the phone can fire local notifications. Use when they want a nudge, a completable todo, a session alarm (open a workout / practice session / study block at a time), or to change/cancel an existing reminder. Not for authoring a User Workout or logging a Session."
---

# Coach reminders

Own the Reminder schedule. A Reminder is a Coach-owned prompt. The phone turns it into a local notification after they open the app. Vocabulary: Reminder, User Workout — see `CONTEXT.md`.

Authoring a template belongs to `gird`. Today / skipped / stuck belongs to `coach-checkin`. A standing message that should sit on the home screen (not fire at a time) is a Coach Note — use `post_coach_note` from `coach-review`, not a Reminder. A Reminder for someone else in their family or team (a Member Reminder) belongs to `coach-circle`.

## When to use

- Motivational message at a time
- A todo they can mark done
- Open a specific User Workout (a Workout, Practice Session, Study Block, …) when the session alarm fires
- Add a notification to a Development Cycle they are already on (session-day message, rest-day nudge, milestone, eve-of-event note)
- Edit time, copy, or cancel an existing Reminder

New cycles should get their notifications in the same `create_development_cycle` call (`gird` skill). This skill handles the rest.

## Inputs

- `kind`: `message` | `todo` | `open_workout`
- `title`, optional `body`, optional `bodies[]` pool (3–7 lines rotated per occurrence; use for motivational copy, `docs/motivation.md` has the house lines)
- `fireAt` (ISO with offset) for one-shots; first fire for weekly; not needed for `cycle`
- `repeat`: `none` (default), `weekly` with `weekdays` (0=Sun..6=Sat) + `hour`, `minute`, or `cycle` with `cycleKey` + `anchor` + `hour`, `minute`
- `anchor` for `cycle`: `training_days`, `rest_days`, `eve_of_training_days`, `cycle_start`, `cycle_midpoint`, `cycle_end`, or `week_day` (with `week` 1-indexed and `day`); optional `weeks` filter
- IANA `timeZone` (ask once; do not invent)
- `workoutKey` when `kind` is `open_workout` — User Workout or catalog System Workout key from your discipline

## Sequence

1. `list_reminders` first. Do not add a duplicate of the same title + time (or same cycle + anchor + time).
2. Resolve `open_workout` keys with `list_user_workouts` or `list_system_workouts` (your discipline). Resolve `cycleKey` with `list_development_cycles`.
3. Create with `create_reminder`, or edit with `update_reminder` (`clientId` from the list). A cycle rule's anchor, weeks, time, and bodies are all editable.
4. Cancel with `cancel_reminder`. Mark a todo done with `update_reminder` and `status: "completed"`. Reopen with `status: "scheduled"`.

Done when the tool returns `{ clientId, kind, title, fireAt, repeat, status }`.
