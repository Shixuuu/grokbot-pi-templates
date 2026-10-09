---
name: classdojo-spot-check
description: "use this when Homebase must verify one ClassDojo event signup/spot list — decide done vs needs_action once using household guardians, then leave; never for coding bots"
---

Single-event protocol for ClassDojo (or similar school signup UIs). Goal: one decision, then leave.

Load guardians/kids from household memory. Never hardcode one family’s names.

## Modes
- verify-only / notify_with_link (default): read spots, decide, EXIT. Never click Sign up.
- book: only when owner explicitly asked this turn.

## Allowed pages
Events index → this event → Spots only. Forbidden: Home, Stories, Chats, QR popups.

## Immediate blocked_ui
Login wall, session expired, app QR, blank after one wait + one reload → EXIT blocked_ui.

## State machine
1. OPEN event spots once (max 2 screenshots for whole skill).
2. READ_SPOTS — every booked row: time + parent name.
3. DECIDE — if any guardian matches → done; else needs_action with slot options + signup link for the family (do not book in verify-only).
4. EXIT — never reopen.

## Output
status: done|needs_action|blocked_ui
kid / event / date / who / when / next / screenshots_used
