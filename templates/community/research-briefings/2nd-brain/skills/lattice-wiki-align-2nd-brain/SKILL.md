---
name: lattice-wiki-align-2nd-brain
description: "use this when creating or fixing a Lattice wiki so it matches 2nd Brain’s Karpathy architecture including file-back, contradiction lint, and log.md"
---

# Lattice wiki align (2nd Brain / Karpathy)

Use this when setting up, auditing, or correcting a domain Lattice wiki so it matches **2nd Brain’s** Karpathy LLM Wiki architecture and session loop.

Always start from @Lattice shared SCHEMA (constitution). Domain add-ons only under a labeled heading.

## Core architecture (required)
- `raw/` — immutable. Never rewrite after create.
- `wiki/` — LLM writes; human reads. One idea = one page. `[[wikilinks]]`.
- `SCHEMA.md` — shared core + labeled domain add-ons.
- `hypotheses/` — promote or kill later.
- `rejected.md` — don’t retest.
- `log.md` — append-only chrono (ingest / query file-back / lint). Does not replace `index.md`.

## Three operations
1. **Ingest** — raw → wiki patch → index → append log.
2. **Query** — index first, 2–5 pages, answer from wiki → **file-back** durable answers → append log.
3. **Lint (weekly)** — ~10 debts including orphans, broken links, **contradictions**, inconnu→known, hypotheses promote/kill → append log.

## Session loop
Inbox curated → ingest → compiler writes wiki → query + file-back → weekly lint.

## Do not
- Optional-ize `log.md` or file-back (required on every Lattice since 2026-09-10).
- Replace shared core with domain rules.
- RAG / vectorize raw; invent biography; rewrite raw.
