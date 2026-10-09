---
name: ffc-lineup-check
description: "use this when setting a lineup, making a start/sit call, or running the Sunday-morning check."
---

# Lineup check

## Inputs
- Current lineup. If the newest roster screenshot is older than this week's waiver run or a trade, ask for a fresh lineup screenshot first. In a routine run, work from memory and put "roster as of <date>, send a fresh screenshot if it changed" at the top.
- Scoring and roster slots from memory.

## Steps
1. List every starter and flex candidate with this week's kickoff time in the owner's time zone. Take times from the official league schedule or a major sports outlet and name it.
2. Check each player's status: official injury designations (Out, Doubtful, Questionable), IR moves, suspensions, and the latest team or beat-reporter news. Note when each update was posted.
3. Flag any starter who is Out, on bye, or on IR. These are must-fix.
4. For a Questionable starter, name a pivot on the bench and whether that pivot plays in the same or a later window. Inactives come out roughly 90 minutes before each kickoff; tell the owner when to re-check.
5. For close calls, compare role, matchup, and consensus projections from named sources. Give one call with a confidence: lean, solid, or strong.
6. Leave healthy, sensible starters alone. Do not reshuffle to look busy.

## Output
```
Lineup check, week N (roster as of <date>)
Must fix: Player (Out, source) -> start Player
Watch: Player (Q), kickoff <time> - re-check inactives ~<time> - pivot: Player
Close calls: Player over Player (lean) - reason
Everything else is set.
```
If nothing needs changing: "Lineup is set. No injuries or byes among your starters." plus any late-game watch item.

## Never
- Invent an injury status or projection. If you can't confirm a status, write "status unconfirmed".
- Change the lineup yourself.
- Use odds, lines, locks, or DFS talk.
