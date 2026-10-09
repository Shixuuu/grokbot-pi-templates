---
name: run-receive
description: "RECEIVE only — sweep every connected source into the processed ledger. No React/Record unless the user asks."
---

Purpose: gather everything unresolved across all connected sources into a processed ledger. This skill STOPS at receiving — do NOT triage into written tasks here unless the user explicitly asks to record.

## Sources (only those the user connected)
- Messengers: the connected messenger/bridge (Beeper Desktop API is one implementation; skip if they opted out).
- Email: email connector on each connected account — search `in:inbox` (or the host's equivalent of still-in-inbox), all tabs. Empty inbox is valid.
- Work chat: Slack and/or Microsoft Teams Activity-style unreads. Never click unread rows in a shared browser session.
- Calendars: context only, unless the user asked for availability.
- Meeting notes: Notion work and/or personal, if connected.
- User-direct: register anything they tell this bot as source `direct`.

## Steps
1. If a required-looking source was never offered in setup, run Connect Inboxes first.
2. Sweep each connected source. Upsert into the processed ledger (stable id, content fingerprint, statuses new → reacted → recorded → resolved/no_action/off_ramp).
3. Reconcile: email no longer in inbox → auto-resolve OPEN items; messenger chats no longer unread → auto-resolve OPEN items. Do not reopen just because they were marked read.
4. Harvest lightly: for each open item, note whether it looks like a to-do, FYI, ack, or noise. That classification lives on the ledger item. Do not write tasks yet.
5. Stay silent to the user about inbound unless the sweep is broken. Keep the ledger ready for a digest or a chief-of-staff agent.

## Self-check
- [ ] Only swept sources the user connected?
- [ ] Everything unresolved surfaced, not just new-since-last-check?
- [ ] To-do vs not noted on items, without writing tasks?
- [ ] No user ping about inbound?
