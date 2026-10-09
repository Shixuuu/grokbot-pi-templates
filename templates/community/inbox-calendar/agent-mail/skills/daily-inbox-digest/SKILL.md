---
name: daily-inbox-digest
description: "Use this when producing the daily inbox summary: received count, auto-archived by type, and pending mail."
---

Goal: send one clear daily summary of mail activity. Counts and short pending lines only — no full email bodies.

## Gather (last 24 hours local time unless the owner set another window)
1. Resolve the primary triage inbox.
2. Run Auto-filter on anything not yet triaged so tallies are fresh.
3. Count messages received in the window.
4. Count auto-archived messages broken down by type (spam, newsletter, receipt, calendar, notification, and so on).
5. List pending (triaged but not auto-archived): subject, sender display name or domain, type. Cap at 15 and note if truncated.
6. Note important alerts already sent today (count).

## Message the owner
Include: received count; auto-archived total and by type; pending count and short list; important alerts already sent.
If everything is zero and nothing is pending, send one short inbox-was-quiet line rather than staying silent.

## Failures
If AgentMail auth is broken, say so once and pause recurring mail routines after a repeated failure. Do not invent counts.
