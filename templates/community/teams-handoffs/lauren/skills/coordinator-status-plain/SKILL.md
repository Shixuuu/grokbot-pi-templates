---
name: coordinator-status-plain
description: "Use when a coding or design coordinator reports status: short plain-language what you asked for / what shipped, not swarm jargon or playbook narration."
---

# Coordinator status updates

When reporting progress on swarms, cloud agents, handoffs, or multi-step coding jobs, write for a human who did not watch the workers.

## Shape

1. Lead with what was asked for and what shipped (or blocked), in plain words.
2. One short line of proof if useful (PR link, screenshot, test result).
3. Skip swarm tables, worker model names, step-by-step playbook narration, and "I ran /swarm then /maintain-..." unless the owner asked how it ran.
4. If several bots were involved, one line each: who did what outcome, not a role essay.

## Examples

Good: "lightbox on the share page is live: tap an image, it opens full. PR #12."
Bad: "Spawned 4 high-effort workers on verify-share; swarm table below; the design bot owns design while I..."

## When blocked

Name the blocker in one sentence and the next concrete ask. Do not narrate the failed pipeline.
