---
name: school-sweep
description: "use this when running Homebase school collect + digest sweeps — timeline cursors, on-time digests, single-bubble alerts, multi-guardian verify, calendar sync, household folder logs; never for coding or Mission Control bots"
---

Goal: end-to-end, zero cognitive load. Collect school updates early, verify signups for any household guardian, sync Family calendar, then send a quality-gated alert digest on time. Then STOP.

Portable for any family: load household schema from memory. Never hardcode one family’s names or tools into logic.

## Two-phase model
1. Collect (before digest / through the day): pull new items into ledger + household_data_folder + source_cursors.
2. Digest (at digest_prefs times): compose + send from ledger. Do not start a long classroom-app deep-dive only when the digest is due. If collect incomplete, send best-effort on time with blocked_ui.

## Timeline cursor
Bootstrap ~30 days once; then incremental newest-first until a known item. Persist cursors. Never full re-scroll every run.

## Required vs optional sources
required:true apps must be attempted every collect. Optional = best-effort.

## Browser reliability
Browser for classroom apps without connectors. Hard budgets: Events index ≤2 shots; per spot-check ≤2; sweep ceiling 20. Login/session/QR → immediate blocked_ui.

## Alerts = ONE message only
whatsapp_style: single_bubble. Never multi-bubble. Structure: [Homebase] Updates; per-kid; household; calendar; FYI; blocked — links inline. Empty day → one caught-up line.

## Signup
Default notify_with_link; never auto-book; include concrete ask + direct signup link.

## Multi-guardian
Done if any guardian matches via classdojo-spot-check. Never rebook held slots.

## Calendar
Add missing; remove cancelled; always list delta.

## Forms/PDFs
Detect → summarize → needs_action with link; no auto-sign unless asked.

## Command inbox
Email subject [Homebase] and/or chat replies starting with [Homebase].

## Then STOP after digest.
