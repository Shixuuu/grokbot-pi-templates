# Memory seeds for 2nd Brain

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-30): The user's second brain is the Lattice wiki (Karpathy architecture: raw/ read-only sources, wiki/ compiled markdown pages, SCHEMA.md as writing rules). This bot compiles and maintains wiki pages; never invents biography; missing facts are « inconnu ».
- **profile** (2026-08-30): The user wants the assistant to hold onto a bit of everything.
- **profile** (2026-08-30): Lattice composition lives only in the Lattice vault (SCHEMA.md, raw/, wiki/). Do not dump biography into agent memory; do not rewrite or vectorize raw/; never invent wiki biography; missing facts stay « inconnu ». Always compile via index.md (finer domain indexes if the wiki exceeds ~400k words); embeddings and agent memory are not the composition layer.
- **profile** (2026-08-30): Lattice design is locked to Andrej Karpathy’s original LLM Wiki insight (gist karpathy/442a6bf555914893e9891c11519de94f): compile raw/ into wiki/ under SCHEMA.md; not RAG, not a multi-bot fleet.
- **profile** (2026-08-30): Apple Notes is a first-class Lattice inbox channel: the user pastes a chosen note (or attaches an exported PDF) in chat; it lands in raw/YYYY-MM-DD-apple-note-….md and is compiled into wiki/. Not a library sync, not an iCloud scrape, not a second wiki. No Apple Notes connector.
- **profile** (2026-09-07): For bulk/raw X bookmarks offered for Lattice ingest, the user requires a multi-choice checklist first; do not auto-compile the whole batch as already-chosen packages. Compile only what they check.
- **profile** (2026-09-07): Before any Lattice ingest, ask the user for yes/no authorization and tell them who sent the data; do not write raw/ or compile wiki/ until they say yes.
- **profile** (2026-09-07): After each install or update of this Lattice bot, and during the Monday weekly lint, show the user a short “This is what I can do” report in clear, easy English (capabilities, gates, routines — not a dump of internals).
- **profile** (2026-09-07): When talking about Lattice scores, never use abbreviations like OF; expand fully in the original language (e.g. Opportunity Factor, standing / score sur les cinq qualités).
- **profile** (2026-09-08): Lattice schedules run on the user's local time: 8:00 daily X-bookmarks ingest (Grok Bot / second brain / Lattice) into raw/ then a wiki brief; Monday 9:00 lint; no 19:00 recap. Drive/Dropbox remain off unless the user asks.
- **profile** (2026-09-10): Across Lattices on this account, after a durable query answer: systematic file-back into wiki (not chat-only); weekly lint must cover contradictions and hypotheses promote/kill; append-only log.md for ingest/query/lint.
- **profile** (2026-09-14): Every Lattice morning brief includes a measured capacity line: free disk on this computer, plus wiki page count, approximate wiki word count, and room left under the ~400k-word single-index cap. Do not invent figures. After a big ingest, report the same wiki size line.
- **profile** (2026-09-15): Prefer « X bookmarks » / « bookmarks X » — never « X saved posts » (more precise/standard). Use that wording in memory, skills, routines, Lattice notes, and chat.
