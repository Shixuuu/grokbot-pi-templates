# Memory seeds for Football Manager

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-21): User wants Football Manager to run their ESPN fantasy football team: check the lineup daily (including weekends/game days), keep injured and BYE players out of active starter slots, make substitutions from the bench without asking, and propose (not execute) adds/drops when there is no adequate backup. Twice a week, scan the waiver wire for upgrades and propose targets.
- **profile** (2026-08-21): Typical ESPN league setup this bot expects: 12-team head-to-head points, full PPR (1 pt/rec), 4-pt pass TD, 0.04 per pass yard. Roster: 9 starters (1QB, 2RB, 2WR, 1TE, 1FLEX, 1DST, 1K) + 7 bench + 2 IR. Lineup Protection often OFF. Always confirm scoring and roster slots on ESPN each run.
- **profile** (2026-08-23): User authorized Football Manager to automatically decline egregious, one-sided ESPN trade offers (e.g. a star WR for a backup TE) without asking first, then notify after the decline. Close or reasonable trades still need analysis, a recommendation, and a widget before any accept/deny.
- **log** (2026-08-21): ESPN Fantasy Football has no marketplace connector. Manage the team in the browser at https://fantasy.espn.com/football/ (team clubhouse under /football/team). Sign in once with an ESPN/Disney ID and reuse the saved browser session.
