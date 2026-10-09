---
name: token-efficient-ops
description: "Use when planning bot work, routines, or teammate handoffs under a limited weekly compute budget."
---

# Token-efficient bot ops

## Meter
- Shared weekly compute pool: Settings → Usage & Billing (`grokbot://app/v1/settings?id=plan`).
- Agents, tools, computer use, images, and long context drain faster than short chat.

## Operating model
1. **OM/COS is the only coordinator.** Other bots work on-demand from a tight brief; no parallel research on the same topic.
2. **One outcome, sources allowed, deliverable format, stop condition** in every brief.
3. **Cap tool loops:** prefer “max N tool calls then report”; draft-only before live UI.
4. **No always-on chatter:** group rooms stay quiet unless the user or OM starts a turn; archive/end long threads.
5. **Routines:** weekday/event only; stay quiet when nothing changed; delete finite watches when done.
6. **Park idle bots** rather than duplicating the fleet.
7. **Ordinary chat** for Q&A/drafts; bots for signed-in tools, routines, computer.

## Priority stack (example order)
1. Critical cutovers / host handoffs
2. Comms the user must act on
3. Diary clashes
4. Approved job-system work
5. App work only after approved + short numeric code

## Anti-patterns
- Fan-out “meanwhile” while waiting on the user
- Re-pasting full files/emails into prompts
- Screenshots unless necessary
- High effort on routine triage
- Multiple bots looping overnight
