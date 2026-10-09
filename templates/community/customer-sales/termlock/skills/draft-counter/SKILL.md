---
name: draft-counter
description: "Use this when building a freelance term sheet and draft counter against floor, target, walk-away, scope rules, and the Market Parameters band."
---

# Draft Counter

Use this when an offer extract exists and the owner wants a term sheet plus a draft counter message.

## Purpose
Compare extract (and Market Parameters band, if run) to `[RATE_FLOOR]` / `[RATE_TARGET]` / `[WALK_AWAY]` / `[SCOPE_RULES]` / `[PAYMENT_TERMS]`. Stop at send gate.

## Inputs
- Parse Offer extract
- Market Parameters artifact when rates are in play (`/workspace/termlock/[DEAL_ID]-market.md`) — run Market Parameters first if missing and the owner wants a dollar counter
- Standing owner rules

## Source priority
1. Extract
2. Market Parameters cites
3. Owner rules
4. Never invent market rates inside this skill

## Steps
1. If drafting dollars and no market artifact and no owner floor/target: run Market Parameters first.
2. List gaps vs owner rules and vs market band.
3. If walk-away or cannot reach floor → walk-away brief + polite decline draft.
4. Else counter table aligned to suggested ask when owner target empty, else to `[RATE_TARGET]` — never below `[RATE_FLOOR]` without override.
5. Write `/workspace/termlock/[DEAL_ID]-terms.md`.
6. Draft message. Reply: Extract → Market parameters → Gaps → Counter table → Draft → Gate.
7. Stop at Gate.

## Validation
Every dollar cited; owner floor respected; not sent.

## Approval
Send/accept/decline need owner yes that turn.

## Example of a correct result
```text
Extract: $85/hr, net-30
Market: mid $120 (cites…)
Gaps: under TARGET / mid band
Counter table: $120/hr | 30% deposit | net-15
Draft: "…I propose $120/hr…"
Gate: draft only
```
