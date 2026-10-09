---
name: lattice-shared-schema
description: "use this when creating, auditing, or editing any Lattice SCHEMA.md so every wiki shares one Karpathy constitution — includes file-back, contradiction lint, and log.md"
---

# Lattice shared SCHEMA (constitution)

One constitution for every Lattice on this account. Domain wikis may **add** labeled extras; they must not rewrite or omit the core.

Inspired by Andrej Karpathy LLM Wiki: **compile, don’t RAG.** One compiler per wiki, not a bot fleet writing the same vault.

## Shared core (required everywhere)

### Architecture
- `raw/` — immutable sources. Human drops; LLM reads; **never rewrite** after create.
- `wiki/` — LLM writes; human reads. One idea = one page. Stable titles. `[[wikilinks]]`.
- `SCHEMA.md` — this constitution + that domain’s labeled add-ons only.
- `hypotheses/` — uncertain; promote or kill later.
- `rejected.md` — false or off-topic; don’t retest.
- `log.md` — chrono **append-only** (ingest / query file-back / lint). Prefix each entry `## [YYYY-MM-DD] kind | short title`. Does **not** replace `wiki/index.md`.

### Three operations
1. **Ingest** — copy to `raw/YYYY-MM-DD-…` → ~10-line summary + concepts + wiki patch(es) + `[[links]]` → mark FAIT / HYPOTHÈSE / OPINION → missing fact = « inconnu » → sources at bottom → refresh `wiki/index.md` (backlinks, contradictions) → append `log.md` (`ingest`).
2. **Query** — read `wiki/index.md` first → open only 2–5 pages → answer from compiled wiki, not by re-mining raw → cite pages → **file-back (systematic)**: if the answer is new and durable, propose a wiki patch (title + markdown diff) in the same turn and write after yes (or write if already authorized). Never leave a durable FAIT only in chat → append `log.md` (`query`).
3. **Lint (weekly)** — list about **10 debts**, always covering: orphans, broken `[[links]]`, **contradictions** between pages, « inconnu » now known, `hypotheses/` to **promote** (→ wiki page) or **kill** (→ `rejected.md`), index freshness vs recent raw → append `log.md` (`lint`).

### Session loop (~5 minutes)
1. Inbox — human drops a curated source (not a library dump).
2. Ingest — when the channel is clear.
3. Compiler writes `wiki/` directly.
4. Query — answer with the wiki only; then file-back if durable.
5. Weekly — lint (~10 debts), contradictions + hypotheses/, append log.

Don't skip reading or thinking; skip paperwork.

### Forbidden (every Lattice)
- Treat agent/chat memory as if it were the wiki
- Vectorize / RAG the whole raw corpus on day one
- Thousands of pages without `index.md`
- Rewrite `raw/`
- Invent biography or facts
- Merge pages without saying so
- Leave durable facts only in chat memory (skip file-back)

### Scale
One `wiki/index.md` under ~400k words; then domain indexes. Always compile.

### Writing
Short, editorial, calm. No neon, no marketing.

## Domain add-ons (allowed only if labeled)
Taxonomy, assessments, scoring, domain inbox — under **Domain add-ons** only. Never replace core, file-back, lint contradictions/hypotheses, or `log.md`.

## When auditing or aligning Lattices
1. Read this skill first.
2. Diff each domain `SCHEMA.md` against Shared core.
3. Rewrite drifted core; keep domain add-ons labeled.
4. Ensure `hypotheses/`, `rejected.md`, and `log.md` exist.
5. Tell the user what matched, drifted, and changed.
