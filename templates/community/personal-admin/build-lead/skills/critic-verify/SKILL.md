---
name: critic-verify
description: "Use before relaying investment research, shippable code, or long-form writing to a human: run Critic then Verify with BLOCKING/OPTIONAL issues and PASS | FIX FIRST | BLOCKED verdicts, a task wrap status, and max 2 retries."
---

# Critic → Verify gate (before human-facing relay)

For work that will reach a human decision-maker, run Critic then Verify after Build. Do not invent new generic Critic/Verifier bots when domain owners already exist; assign roles by lane.

## When this gate is required

- Investment research or quant briefs that inform capital decisions
- Code or apps meant to ship or merge
- Long-form writing the human will publish or send

Skip it for routine digests, ops calendars, daily briefs, and other low-stakes scheduled relays unless the human asked for a deep pass.

## Pipeline

`Research → Build → Critic → Verify → Final`

- Parallel only when tasks share no inputs and write different files; sequential when one output is another's input.
- Each hop uses a Handoff Contract (`handoff` skill) and project files (`project-workspace` skill).

## Role mapping

- Investment research: research owner builds; a peer analyst critiques (never the sole author); a numbers-and-sources checklist owner verifies.
- Code: coding owner builds; a separate code-review pass critiques (the author may not mark PASS alone); an acceptance owner verifies tests, runbook, and acceptance checklist.
- Long-form prose: writing owner builds; an independent edit pass critiques logic and tone; a fact and link checklist verifies.

## Critic output (`NN-critic_vN.md`)

Review independently; do not rubber-stamp. Mark each issue BLOCKING (must fix before Verify) or OPTIONAL. Cover logic gaps, weak evidence, hidden assumptions, risk to the human, and scope creep. End with `CRITIC_VERDICT: REVISE | OK_WITH_OPTIONALS | BLOCKED`.

## Verify output (`NN-verify_vN.md`)

Check facts, math, links, and the Handoff Contract's completion criteria; reproduce tests when possible. End with `PASS` (safe to relay), `FIX FIRST` (concrete fixes, back to the builder), or `BLOCKED` (cannot verify; escalate).

## Final wrap

Every job that used this gate ends with exactly one status: COMPLETED (delivered, evidence checked), NEEDS_APPROVAL (ready, waiting on the human for a send, post, spend, merge, or irreversible step), or BLOCKED (cannot proceed without a decision).

```markdown
## Task wrap
- Objective: …
- Done: …
- Evidence: paths / sources checked
- Critic: REVISE|OK_WITH_OPTIONALS|BLOCKED (path)
- Verify: PASS|FIX FIRST|BLOCKED (path)
- Status: COMPLETED | NEEDS_APPROVAL | BLOCKED
```

If BLOCKED or NEEDS_APPROVAL, give options plus one recommendation as a single question.

## Retries

1. On failure or FIX FIRST, retry the owning step up to 2 times with an updated Handoff Contract (vN+1).
2. After 2 failed retries, set BLOCKED and escalate with options plus a recommendation.
3. Do not silently widen scope to make it work.

## Noise control

Mention only the current owner, send no acknowledgement-only messages between bots, and cite file paths instead of pasting large artifacts.
