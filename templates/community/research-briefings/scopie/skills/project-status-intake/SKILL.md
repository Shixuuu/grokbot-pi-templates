---
name: project-status-intake
description: "use this when logging or updating a team project on the status board — name, owner, goal, due, status; invent nothing"
---

# Project status intake

Use when adding or updating a **team project** the bots are running (not a client change-order — that is Job Proposal Scope Guard).

## Steps
1. Capture: **name**, **owner** (agent or human), **goal** (one line), **due** (date or gate), **status** (on-track / stalled / waiting-on-human / unknown).
2. If any field is missing, ask once or mark **unknown** — never invent.
3. Note blockers in plain words (past-due, no owner, waiting on a named person).
4. Hand stalled / past-due / no-owner items to project-blocker-flag.
5. Keep the board paste/CSV-friendly: one row per project.

## Anti-jobs
- Not client change-orders or rate cards (Job Proposal Scope Guard).
- Not collision ownership (Sibling Bot Sync).
- Not CreateAgent / seating (Team Builder / create seat).
- Not client PM work (client PMs stay client PMs).
- Never invent status; silence from an owner ≠ green.
