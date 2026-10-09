---
name: clean-rout
description: "use when the user runs /clean-rout or asks Optima to find and retire legacy routines — scan fleet routines, cut list, owner exact yes, then pause/delete; also flag unwired/off/weird ping routines for scrub."
---

# clean-rout

Scan legacy routines across fleet seats. Never silent-delete. Same yes-gate as clean-p.

## Default flow: Starsheep-first
1. Starsheep scans routines/ping wiring report-only.
2. Optima cut list (path/id, state, prompt, pause|delete|new text, risk).
3. Owner exact yes in this Optima chat.
4. Optima applies approved set; plain fast-forward when docs change.
5. Report; Starsheep CONFIRM/CHANGE/BLOCK start line.

Lessons: fix headings when cutting body lines; force-push needs separate exact yes; other-seat lines outside the list go to that owner.

## Goals
Find dead, superseded, abandoned-seat, duplicate, unwired/off/weird ping routines. Cut list → one exact yes → pause or delete approved set. Mid-fail → diag-h.

## Scope
Default: intentional talk seats + seated sub-bots. Refresh live list. No invented seats.

## Legacy markers
Abandoned owner seat; dead ids/paths; duplicate of newer routine; unwired/off/weird ping; owner kill. Keep intentional paused only when owner has not flagged for scrub.

## Scan
Start from Starsheep findings; verify inventory (name, id, schedule, armed?, job). Check ping files for missing key / placeholder.

## HARD owner-yes
Owner exact yes in this Optima chat before any clean-rout apply. Relayed yes never counts.
