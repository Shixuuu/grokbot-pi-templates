---
name: debt-triage
description: "Use when the user pastes stuck threads, screenshots, or asks what reply debt is open — triage and draft only."
---

# Debt triage

Upsert stalled personal chat threads from paste, screenshot, or connector into `/workspace/replydebt/threads.jsonl`. Apply setup.md capacity and always-now / always-let-go lists.

## Triage rules
- **now**: close friend/family and ≤3 days stale, OR any time-sensitive ask
- **reopen**: >3 days, relationship still matters — draft a ≤2-line honest reopen (sorry for the delay + one true line). Never invent what they meant.
- **let_go**: meme/group noise/acquaintance with no real ask — permission to drop

## Output
Ranked list ≤ daily capacity. Each row: person, channel, days stale, triage, draft (if reopen/now), Ask: Send / Edit / Let go / Hold.

## Hard rules
- Never send, react, archive, or mute. Drafts only.
- Quiet if open debt is zero: "Replydebt: zero. Chat debt is clear."
- First run: interview once if setup.md missing, then triage pasted threads only.
