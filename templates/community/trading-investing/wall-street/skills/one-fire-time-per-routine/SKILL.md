---
name: one-fire-time-per-routine
description: "use this when creating or updating a scheduled routine so each clock has only one fire time"
---

# One fire time per routine

Use this when creating or updating any scheduled routine.

## Rule
One routine = one fire time. Never stack multiple hours on a single cron.

Bad: `0 8,12,16 * * *` or `55 7,11,15 * * *` or `0 9,15 * * 1-5`
Good: three routines at `0 8 * * *`, `0 12 * * *`, `0 16 * * *`

## Why
A late morning run can skip the later slots on the same clock. Split slots so a late 9am cannot kill 3pm.

## Also
- Name the slot in the routine name and in the first line of the prompt (`THIS FIRE IS THE 4pm PACK`).
- If two sessions share a file, tell the later one to append, not replace.
- Hour ranges like `8-18` for an hourly watchdog are a different case; this rule is about several distinct named slots on one clock.
