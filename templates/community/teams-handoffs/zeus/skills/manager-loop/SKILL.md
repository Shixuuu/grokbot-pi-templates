---
name: manager-loop
description: "Use for multi-phase bets: HQ coordinates, one implementer runs a single phase, human only for go/no-go."
---

# Manager Loop (one HQ)

Stolen from the coordinator+implementer pattern. Adapted to **one HQ chat** — never a bot farm.

## Roles

| Role | Who | Job |
|---|---|---|
| **Coordinator** | This HQ bot | Interview until the goal is sharp; phase checklist; pick harness; kick implementer; score evidence; advance or kill phase |
| **Implementer** | One Cursor cloud agent / coding session | Execute **one phase** only; report completion + proof |
| **Human** | The user | Go/no-go on money, prod, device merge, permanent vendor links |

The implementer is not a second HQ.

## When to use
Multi-hour or multi-PR bets. Skip for single leftover CODE, copy tweaks, one merge.

## Setup
1. Goal interview — outcome, non-goals, success evidence.
2. Phases — each with done-when, proof, harness, budget.
3. One implementer at a time on a given bet unless the user wants parallel bets.

## Run loop
Brief one phase → implementer works → verify evidence → advance, rebrief, or kill. Prefer proof links over essay briefs. Do not dual-dispatch two floors on the same phase.

## Hard locks
One HQ chat. Staging merge only when authorized. Never promote-prod without the human. Cap tokens/time per phase.
