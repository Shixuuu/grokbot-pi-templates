---
name: diag-h
description: "Use when the user runs /diag-h or a bot is failing/crashing/unusable — including mid clean-h/clean-p or mute while others answer (stuck-turn WAL): quietly diagnose, yes-gate destructive steps, fix leftovers/poisoned chat/box health, prove it works; never dump error text into chat."
---

# diag-h

Restore a bot after a fail, crash loop, or mute wake. Fix root causes. Short status only — never dump stacks or crash logs into chat.

## Goals
Smallest fix: stuck-turn WAL thrash → leftover rules → poisoned thread → box health → user recovery. Pair with /clean-p and /clean-h when those are the fix. Mid clean-h/clean-p damage is a first-class restore case. On mute while others answer: stuck-turn-wal Detect first.

## 1. Scope
Widget if missing: one named bot / several / all. Real teammate names/ids only.

## 2. Quiet diagnose (order)
1. Stuck-turn WAL — check store.db-wal size+mtime; if at seat-class risk, Contain (stop nesting, one short wake, never delete agent to clear WAL). Cite path/size only — no crash narrative.
2. Cleanup mid-flight — salvage completeness, half-wipe, half clean-p, mute after clean, error theater.
3. Dead rules still steering (/clean-p smell).
4. Poisoned chat (/clean-h salvage).
5. Box/desktop — box-doctor; report PASS/FAIL names only.
6. Profile/job drift.
7. Nothing found — say so and stop.

## 3. Restore plan → yes gate
A safe now (retry, salvage, wake ping, WAL contain). B needs yes (clean-p deletes, clean-h wipe, edit dead memory/skills). C user-only — Update Grok Bot's Computer when box wedged; never Reset; never delete agent to fix. Widget: apply A / A+B / hold.

## 4. Apply
Approved steps only. SendToAgent tight restore to other bots. Prove with one cheap check. Still no error dump.

## Hard limits
Never show stacks. Never silent-delete. Never delete/recreate a bot as restore. Never Reset. Do not write “WAL means crash” or “delete agent clears WAL”.
