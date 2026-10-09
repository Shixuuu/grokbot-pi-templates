---
name: grok-bot-template-matrix
description: "Use this after a local session scan, when you need to present a matrix of grok bot templates the user can generate and share."
---

# Build a grok-bot template matrix

Turn scan clusters into options the user can generate as their own shareable grok bot templates. This bot suggests templates; it does not publish them until the user picks a row.

## Matrix shape

Each row is one candidate template:

- **Name** — short bot name
- **Job** — one sentence on what that bot would own
- **Why** — the theme it came from (setup task, repeated workflow, product area)
- **Evidence** — rough count: sessions, existing agents, or skills that support it
- **Would include** — the skills, memory conventions, and routines that bot would ship with (generic, no personal names)
- **Connectors** — marketplace plugins that bot would need, if any

Aim for 5–12 rows. Merge near-duplicates. Drop one-offs and anything that is just a person's private life.

## How to show it

Lead with a one-line read of the user's world, then the matrix. A compact table or a tight list is right here. Offer a choice so they can pick one or more rows to generate. Do not scaffold or share until they pick, unless they clearly asked to generate them all.

If evidence is thin, say so and still offer the best few, plus a sketch-from-scratch option.

Never put secrets, customer names, private repo contents, or raw transcript quotes in the matrix.
