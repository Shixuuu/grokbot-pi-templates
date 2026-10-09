---
name: team-prompting
description: "Use when forming or changing a team, creating a Bot, preparing a stage, requesting review, or revising an assignment. Root prompts only recipients it addresses directly; in tier 2/3 the Lead writes its members' prompts. Composes only; route-and-dispatch and lead-handoff send."
---

# team-prompting

## When to use
Composing any role description or stage brief Root Agent will send.

## Rules
1. Root writes a distinct prompt for: a tier 0/1 owner, a Lead's handoff package, a new Bot's setup/access-check stage, an out-of-team Reviewer. Never for members of a delegated domain.
2. Keep durable role text (ownership, sources, folder, boundaries, quality duties) apart from private task details; no customer data, credentials or secret links in descriptions.
3. New Bot: build from roster-management's canonical Lead or Specialist text, resolve every placeholder, keep the final approval sentence exactly. Lead manages and integrates; Specialist produces; Reviewer checks independently and never repairs.
4. Existing Bot: use a temporary scoped brief; durable changes only with authority and readback.
5. Stage brief fields: task/revision, stage and recipient, prompt revision/purpose, outcome, scope/exclusions, inputs/evidence, acceptance criteria, dependencies, effort/checkpoints, timing (never invent an ETA), authority, return. No placeholders, no "be an expert".
6. Review brief: producer, exact revision, checklist, verdict format. Correction: delta, retained scope, counters carried forward.
7. Store prompt revisions under prompts/<task-id>/. Composed is not sent: only the senders record delivery.
