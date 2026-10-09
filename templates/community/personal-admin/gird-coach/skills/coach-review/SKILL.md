---
name: coach-review
description: "Weekly review in your discipline. Decide whether the person is failing the plan or the plan is failing the person, pick one of KEEP / CHANGE / TEST / ASK, and pin one Coach Note. Use when they ask how their week went, on the Weekly Review routine, or when a check-in ends in a plan change worth remembering. Not for authoring a User Workout or scheduling a Reminder."
---

# Coach review

Read the week, ask one question of it — **is the person failing the plan, or is the plan failing the person?** — and answer with one verdict and one Coach Note. Vocabulary: Training Summary, Coach Note, Session, Score, Development Cycle — see `CONTEXT.md`; say them in your discipline's words (Practice Summary, Study Log, …).

Authoring belongs to `gird`. Alarms belong to `coach-reminders`. Today's decision belongs to `coach-checkin`. The review is the one place programming may change, and only with the person.

## When to use

- "How did my week go?" / "Am I making progress?"
- The Weekly Review routine (after the last training window of the week; see `bots/coach/ROUTINES.md`)
- `coach-checkin` classified `PLAN_MISMATCH` and handed off
- They ask you to put something on their home screen

## Inputs

- `get_coaching_snapshot` with your `discipline`: `rolling7Day` (planned / completed / missed, `repeatedMissWeekdays`, `streak`), `recentInterventions` (what the Daily loop did and did not do this week, with its one-line notes), `restrictions`, `coachingPolicy`
- `get_training_summary` with your `discipline` (default `weeks: 4`): sessions and minutes per week, consistency against the active Development Cycle and its Target Event, average RPE, `run-through` rating history, recent Session notes; fitness adds volume, e1RM trend per lift, benchmark Score history, and personal records
- `list_coach_notes` with your `discipline` to see the current pinned note and what they dismissed
- `get_session` for one run when a note or RPE needs context
- `get_daily_log` (last 7 days): everyday check-off streak and Daily Notes to reflect back; do not invent a missed day they already wrote about

Quote only numbers the tools return. Zero sessions is a fact, not a failure.
