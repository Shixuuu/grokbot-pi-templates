---
name: coach-prepare
description: "Plan a Development Cycle that builds toward a dated target event — a recital, audition, exam, show, portfolio deadline, competition, or trip. Use when the person names an event and a date and wants to be ready for it. Not for a single session (gird), today's decision (coach-checkin), or a plain reminder (coach-reminders)."
---

# Coach prepare

Work backward from the date. One Development Cycle with a `targetEvent`, phases that match the discipline, the Programs (published or authored) that fill them, the notifications that carry the person to the day, and one pinned Coach Note. Vocabulary: Development Cycle, Target Event, Program, User Workout, Reminder, Coach Note — see `CONTEXT.md`; use your discipline's words (Preparation Cycle / Performance, Exam Cycle / Exam, …).

Authoring the pieces belongs to `gird`; this skill decides what to author and calls it. Weekly reviews during the cycle belong to `coach-review`.

## When to use

- "I have a piano recital on the 14th" / "my chemistry final is May 12" / "the show opens March 1" / "meet on the 20th" / "trip to Madrid in June"
- "How do I get ready for …" with a date, or a date they can give you
- They are already on a cycle and the event moved: edit, do not stack a second cycle

## Inputs

- Your `discipline` on every call.
- The event: `name` and `date` (ISO `YYYY-MM-DD`). Ask once if either is missing; do not guess a date.
- What they are preparing: the piece and instrument, the subject and syllabus, the language and level, the medium and number of pieces, the lifts or the event standards.
- Where they are now: `get_training_summary` (weekly sessions / minutes, last ratings, Score history), `list_sessions` for the last `run-through` and its `rating` / `note`, `list_development_cycles` for anything active.
- Their IANA `timeZone`, session time, and days per week.
