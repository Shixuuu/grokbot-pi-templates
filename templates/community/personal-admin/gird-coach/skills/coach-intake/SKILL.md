---
name: coach-intake
description: "First-run setup. Quiz the person about goals, how they want to use Gird AI, everyday habits, and how much the Coach may do unattended (style, challenge, quiet hours, notification caps, which writes), then save a Profile and Daily Todos. Use when they say \"set me up\", it is the first conversation, get_profile shows no intakeCompletedAt, or they want to change what the Coach may do on its own."
---

# Coach intake

One conversation that fills the Profile and any Daily Todos they want to keep. Chat stays in Grok. The phone's Setup screen is how they got here.

Hand authoring to `gird`. Hand a dated performance / exam / show / competition to `coach-prepare` after this finishes. Hand everyday check-offs they already have to `get_daily_log`.

## When to use

- "Set me up" / "get me started" / first message after connecting
- `get_profile` returns null or `intakeCompletedAt` is missing
- They want to redo goals, check-in style, everyday habits, or the coaching policy ("stop pinging me after 9", "you can move my day yourself")

## Inputs

- `list_coaches` first, then `get_profile`
- `list_daily_todos` before adding more
- Their words: what they practice, goals, how they want to use Gird AI, time they have, constraints, everyday items (supplements, stretch, walk), and how much the Coach may do on its own (style, challenge, quiet hours, which writes)

Quote only what they said and what the tools return.

## Sequence

Ask one question per turn. Offer two or three options when a choice is real, then ask which.

1. `list_coaches` and `get_profile`. If a Coach they mention is missing, offer `create_coach` (discipline, optional name and color) before you talk as that Coach.
2. What they want (goals). Short phrases. A dated event is a note for `coach-prepare` later — do not build a cycle here.
3. How they want to use Gird AI: follow a plan vs freestyle; `checkInStyle` (`daily` / `weekly` / `on_demand`); whether they want Reminders; their IANA `timeZone` (ask once).
4. Availability and constraints (minutes a day, equipment, injuries they already manage — you are not a clinician).
5. Everyday items they want on Daily ("take supplements", "stretch"). `list_daily_todos` first; `create_daily_todo` for each new one. These are not Reminders and never fire.
6. What to call them (`preferredName`).
7. Coaching policy — how the unattended Coach may behave. Still one question per turn; each has a default, so "skip" is an answer:
   - Style: `stylePreset` `direct` (default) / `analytical` / `supportive`. "Plain and short, numbers first, or warmer?"
   - Challenge: `challengePermission` `never` / `ask_first` / `moderate` (default) / `direct`. "When you drift, should I push back, ask first, or leave it?"
   - Never do: `prohibitedBehaviors`, short tokens (default `guilt`, `humiliation`, `fake_enthusiasm`). Add theirs ("no streak talk", "no exclamation marks").
   - Quiet hours: `quietHoursStart` + `quietHoursEnd` (`HH:mm` in their time zone). "Hours I should never ping you?" Send both or neither.
   - Caps: `notifyMaxPerDay` / `notifyMaxPerWeek` / `notifyCooldownMinutes` (defaults 1 / 5 / 180). Only ask if they want fewer or more than the default.
   - Which writes without asking: `autonomyNotify`, `autonomyReschedule`, `autonomyFallback`, each `off` (default) / `approval` / `auto`. Explain in one line each: a notification for today's piece, moving a cycle day inside a few days, swapping today for an approved shorter program. Only set `auto` when they say so in plain words; "sure, remind me" is `approval`, not `auto`.
8. Confirm a short summary — goals, check-in style, policy in one line ("direct, ask before challenging, quiet 21:00–07:00, I only propose, never act alone"). Then `update_profile` with the fields you collected and `completeIntake: true`.
9. `post_coach_note` one pinned welcome per Coach you created or they already had, in that Coach's `discipline`. Title ≤ 8 words.

Done when `update_profile` returns `intakeCompletedAt` and you have told them to open the app.

## Validate

- Do not set `completeIntake` until they confirm the summary.
- Do not invent Daily Todos they did not ask for.
- Never mark a Daily Todo done. The phone owns check-offs.
- Do not write Sessions.
- A Daily Todo is not a Reminder (`kind: todo`). Use `create_daily_todo` here.
- Policy lives on the Profile through `update_profile`, not in Bot memory. If they change their mind later, it is another `update_profile`, not a note to yourself.
- Never default an autonomy to `auto`. The server treats `off` as a hard no; `approval` means you propose in conversation and wait.
- Approved fallbacks belong to a Development Cycle (`approvedFallbackProgramKeys`), not to the Profile. Note them for `coach-prepare` / `gird`.

## Return

The Profile result, any Daily Todo titles, and "open the app — Setup will continue, and Daily will show your everyday items."

## Approval

Writes (`create_coach`, `create_daily_todo`, `update_profile`, `post_coach_note`) need a confirm of the summary first. Reads do not.
