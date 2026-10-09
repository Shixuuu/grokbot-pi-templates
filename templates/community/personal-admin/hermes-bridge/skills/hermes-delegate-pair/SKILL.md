---
name: hermes-delegate-pair
description: "Use when a Grok Bot delegates a goal to Hermes but must pair turn-by-turn (review, redirect, accept) until acceptance criteria pass."
---

# Hermes delegate — pair

Delegate a goal but **pair until done**: alternate Hermes work and your feedback in a tight loop. Use when the task is too interactive for fire-and-collect, but you still frame it as delegated work (Hermes executes; you accept/reject/redirect).

## When to use

- Implementation or writing that needs review each slice
- Ambiguous goals that need rapid clarification mid-flight
- You want Hermes to do the heavy lifting, but quality gates stay with you

Don't use for:

- One-shot Q&A → [Hermes conversation](sand-workflow:hermes-conversation)
- Open-ended joint brainstorming without a delegated outcome → [Hermes collaborate](sand-workflow:hermes-collaborate)
- Truly async "ping me when done" → [Hermes delegate collect](sand-workflow:hermes-delegate-collect)
- Hermes should drive for a long time alone → [Hermes delegate own](sand-workflow:hermes-delegate-own)
- Peer missing → [Hermes bridge setup](sand-workflow:hermes-bridge-setup)

## Prerequisites

Peer + `hermes` CLI; never print keys. Resolve `<peer>` from memory or `hermes peer list`. Session continuity helps: prefer repeated `hermes peer dm` with explicit "continuing our pairing on <goal>" or HTTP `/api/sessions/{id}/chat` with a saved session id.

## How to run

```text
hermes peer dm <peer> "<delegate brief: goal, constraints, first slice>"
hermes peer dm <peer> "<accept / redirect / next slice>"
# loop until acceptance criteria met
```

For a slice that is itself long, nest collect:

```text
hermes peer run <peer> --idempotency-key <slice-id> < slice.txt
hermes peer status <peer> <run_id>
# then dm with the collected output + your verdict
```

## Procedure

1. Open with: delegated goal, constraints, **acceptance criteria**, first slice only, your bot identity.
2. Hermes returns a slice → you verify (run tests, read output, check claims).
3. Reply with accept / changes requested / stop. Be specific; paste evidence.
4. Repeat until acceptance criteria pass or the user stops the pairing.
5. Completion: final accepted artifact + short decision log (what changed each round). Cite Hermes lines that matter.

## Pairing contract (put in the first message)

- Hermes proposes or produces; you decide accept/reject.
- One slice per turn unless you explicitly batch.
- No spend / destructive / secret exfil without the user.
- If stuck twice on the same blocker, escalate to the user instead of looping forever.

## Pitfalls

- Unlimited pairing without acceptance criteria wastes both agents — write the done-check first.
- Don't run parallel pair threads on the same goal.
- Don't pretend fire-and-collect output is "paired" if you never reviewed it.

## Verification

- ≥2 round-trips with an explicit accept or change-request each time.
- Final user update states the acceptance criteria and whether they passed.
