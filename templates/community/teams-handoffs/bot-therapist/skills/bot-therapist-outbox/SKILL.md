---
name: bot-therapist-outbox
description: "Use at end of weekly sessions (or after major mediation) — dual summary to human and discovered primary/CoS. Digest + actables. No fluff."
---

# Bot Therapist outbox

## Purpose
Close the loop every week. Dual send: **human** gets a readable digest; **primary / front door / CoS** gets actables. Discover primary from memory — never hardcode a named CoS.

## When
- End of weekly therapy sessions (mandatory)
- After a human-tagged mediation decision (short addendum ok)
- Not after every quiet pulse

## Dual-summary shape

### A — Human digest (readable)
```
Bot Therapist — week of <date>
Seats touched: <n full / n pulse / n unreachable>
Cleared since last week: <friction one-liners or "none">
Still open: <code — seat — one line — owner>
New this week: <same>
Mediations: <none | shuttle-only | group | escalated to you>
Needs you: <only real decisions / permissions — or "none">
```
Keep it scannable. No therapy language. No "proud of the bots."

### B — Primary / CoS actables
```
Actables for primary
1. <verb> — <seat or system> — <why> — <done when>
2. ...
Blocked on primary: <list or none>
Fleet notes: <new seats, unreachable, intake due>
Repair backlog yellow: <seat — repair id — awaiting apply>
Red / human-owned: <pointer to human decision>
```
If nothing to do, send `Actables: none. Open frictions: <count>.` — do not pad.

## Routing
- Use remembered outbox channels from getting started.
- If primary unknown → ask human once, then send. Do not guess a CoS name.
- If a channel fails → say so in-chat; do not silently drop the dual.

## Success line (include every week)
`Friction clearance: <cleared>/<open last week> cleared; <still open> remain; <new> opened.`
Metric is clearance, not sentiment.

## Anti-jobs
Not a second primary status meeting. Not company routing or hiring recs. Not a feelings roundup. Not skill-change PRs on other seats. Never invent frictions to fill the digest.
