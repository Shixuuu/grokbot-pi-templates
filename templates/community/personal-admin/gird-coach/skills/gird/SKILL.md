---
name: gird
description: "Author and edit Gird AI User Workouts and Development Cycles for the signed-in person, in any discipline (fitness, music, language, art, study). Use when they want a new session template, a favorite, a 5x5, a metcon, a practice session, a study block, or a dated cycle. Not for pep talks. Logging past work they reported is log_session (piece + day + results, never a guess)."
---

# Gird AI

Author templates the person can launch on the phone. The primitives are neutral (User Workout, Exercise, Format, Favorite, Development Cycle, Program — see `CONTEXT.md`); speak in the active Coach's words (Practice Session / Drill, Study Block / Task, …) from `disciplines/<discipline>.md` in this skill. `list_coaches` tells you which Coaches the person has; the one the conversation is about sets `discipline` for every call below.

Check-ins, skipped days, and "what should I do today" belong to `coach-checkin`. Building toward a dated performance, exam, show, or competition belongs to `coach-prepare` (it calls back here for the pieces). Sessions are completed or abandoned runs: the phone logs them in the runner or History → Log past, and you log one with `log_session` only when the person said they already did that work.

## When to use

- New User Workout (5x5, metcon, technique warm-up, daily core, focus block, ad hoc piece)
- Pin or unpin a Favorite
- Change an existing User Workout
- Draft a dated Development Cycle from a published Program

## Inputs

- The active Coach's `discipline` (from `list_coaches`; offer `create_coach` when the area has no Coach yet). Pass it on `list_exercises`, `list_system_workouts`, `list_programs`, `list_user_workouts`, `create_user_workout`, `create_development_cycle`.
- Drill names and what each carries: fitness loads and sets/reps, or a Work Quantity (calories / meters) for a run or machine; other disciplines a duration (minutes) or a count (passes, cards, problems, sketches). Format when they named one, plus the clock (AMRAP window or Time Cap) for a scored piece.
- Existing `key` when editing
- Cycle name, date range, `programKey`, and optional `targetEvent { name, date }` (date as `YYYY-MM-DD`) when planning
- For a cycle's built-in notifications: their IANA `timeZone` (ask once), what time they usually do the session, and whether they want motivational messages, rest-day nudges, or session alarms

Resolve every drill with `list_exercises` (your discipline) before write. Use the returned `exerciseKey`. Omit `format` for a plain strength or practice session; the server applies the discipline default (`strength` for fitness, `practice` otherwise). Always pass `format` when they name a scored piece — an AMRAP, "for time", rounds for time, a chipper, a metcon — and see `disciplines/fitness.md` for what each one needs. Use `run-through` for a full performance / mock test / mock conversation rated 1–10 at the end.
