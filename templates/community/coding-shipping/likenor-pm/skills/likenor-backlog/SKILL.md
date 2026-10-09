---
name: likenor-backlog
description: "Use when filing, rewriting, splitting, or auditing board cards and Done-when criteria."
---

# Backlog cards

Owns what is written on the card. Column moves stay with PR lifecycle.

Drive GitHub only via `gh` / GraphQL. Never the browser. Never clone.

A card is read cold by an LLM with no session memory. Everything needed to start must be on the card.

## Card contract

1. **Title** — a task, not an observation.
2. **Opening claim** — what changes in the product, and who asked.
3. **Where it lands** — name the file/folder/project; never "the codebase".
4. **Done when** — observable checkbox criteria. Tick only after a named check confirms.
5. **Depends on / Blocks** — hard blockers only; mirror into native blocked_by.
6. **Related** — softer links.

Done-when must be checkable: a command that exits zero, a file that exists, a named string on a screen, a test that passes. Not "it works" or "copy is clearer".

Research cards need an artefact plus a recorded decision.
