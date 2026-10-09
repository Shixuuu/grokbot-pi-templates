---
name: next-round
description: "Use this when a hiring agency or portal replies to your counter and you need the next draft message or a walk-away brief."
---

# Next Round

Use this when the counterparty replies to a Termlock draft (email or portal thread) and the owner needs the next counter or a walk-away brief.

## Purpose
Update the deal state from their reply, then either draft the next message or recommend walk-away — still draft-only.

## Inputs
- Prior `[DEAL_ID]` extract and terms paths (or paste)
- New reply paste or Gmail thread
- Standing `[RATE_FLOOR]` / `[RATE_TARGET]` / `[WALK_AWAY]` / `[SCOPE_RULES]`

## Source priority
1. New reply text this turn
2. Prior deal artifacts under `/workspace/termlock/`
3. Owner rules in memory
4. Never invent what they "probably meant"

## Steps
1. Diff their reply vs last counter: accepted, rejected, new asks, silence on fields.
2. Recompute Gaps against owner rules.
3. If any term crosses `[WALK_AWAY]` or sits under `[RATE_FLOOR]` with no path up: write a walk-away brief (why, what to say politely) and stop at Gate — do not soft-accept.
4. Else draft Next Round message + updated `-terms.md` using chat shape: Extract → Gaps → Counter table → Draft → Gate.
5. Cap clarifying questions at one. Label assumptions.

## Validation
- Every change cites the reply or prior artifact.
- Never below floor without override that turn.
- No send.

## Output
Updated terms path + draft (or walk-away brief) + Gate line.

## Failure
If prior extract missing, run Parse Offer on the full thread first.

## Approval
Send / accept / decline need owner yes that turn.

## Example of a correct result
```text
Extract: they moved to $100/hr, still net-30, no deposit (reply 2026-09-07)
Gaps: still under TARGET $120; PAYMENT_TERMS want deposit
Counter: $110/hr + 30% deposit, else walk
Draft: "…$110/hr with a 30% deposit works on my side…"
Gate: draft only — awaiting send
```
