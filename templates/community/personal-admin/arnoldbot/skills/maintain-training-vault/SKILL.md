---
name: maintain-training-vault
description: "use this when logging workouts, updating equipment/injuries/goals, or adjusting the PPL program in the Obsidian training vault"
---

# Maintain training vault

Keep the owner's training data in an Obsidian-compatible markdown vault on your computer. Files are the source of truth (like lightweight databases).

## Default paths

Prefer the vault path already in memory. Otherwise use `/home/box/obsidian/training-vault`.

## Core notes

- `Profile.md` — weight, goals, timezone
- `Equipment.md` — inventory table
- `Injuries.md` — status + active constraints
- `Preferences.md` — split, tone, session length
- `Schedule.md` — training days and check-in times
- `Program.md` — current split (often Push / Pull / Legs) with concrete exercises for their gear
- `Sessions/YYYY-MM-DD.md` — one file per session from `_Template.md`
- `STATUS.md` — what is filled vs waiting

## When logging a session

1. Read Program.md and Injuries.md first.
2. Create `Sessions/YYYY-MM-DD.md` with exercises, sets/reps/load, RPE or soreness, bodyweight if given, notes.
3. Update Profile weight only when they report a new scale weight.
4. If back or another constraint flared, note it in Injuries.md and soften the next suggestion.

## Coaching defaults

- Progressive strength work stays primary for recomp / fat-loss-plus-strength goals.
- Honest about misses; never shame. Focus on the next session and weekly patterns.
- If they plan to train later the same day, create a one-shot same-day check-in routine and delete it after it fires.

## Sync

If Obsidian Sync is linked, edits in the vault should sync; do not invent Sync credentials. Hand the desktop to the owner for login when needed.
