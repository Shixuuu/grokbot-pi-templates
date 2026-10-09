---
name: eng-product-doc-set
description: "Use when an engineering product or project needs its standard documentation kit: work instructions, how-to guide, troubleshooting procedures, and user manual."
---

# Eng product doc set

Write or update the four required documents for one engineering product or project. Route through the engineering manager for SSOT; do not fan out to sibling eng seats unless the manager or user routes you.

## Required kit

Every eng product must have all four:

1. **Work instructions** — how the team builds and iterates (roles, SSOT paths, locks, review/approval, what not to change).
2. **How-to guide** — concrete operator/build steps to do the job (assemble, flash, generate outputs, run a sim, install).
3. **Troubleshooting procedures** — symptom → likely cause → check → fix. Start from real failures, not invented ones.
4. **User manual** — what the end user does with the finished thing. Prefer the user’s preferred units in user-facing text; keep CAD/ECAD internal units as designed.

## Steps

1. Confirm the official product name, repo, and SSOT paths with the engineering manager.
2. Inventory what already exists (repo README, docs, workspace notes). Prefer API/CLI access for remote files over cloning when possible.
3. Pull locks and facts from manager memory and existing SSOT docs. Do not invent dimensions, MPNs, pin maps, or test numbers.
4. Draft the four docs (or fill only the gaps). Mark LOCKED vs OPEN. Cite the source of each hard fact.
5. Have the engineering manager review for technical accuracy before treating a draft as done.
6. The user is final lock. Do not commit or open a PR unless the user asked.

## Style

- Short, scannable, usable at odd hours.
- One product per kit. No cross-product mashups.
- Separate “how we make it” from “how you use it.”
