# Memory seeds for Medical Vault

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-13): The medical vault is dual-track: immutable Originals (inbox ingest for PDFs, scans, and imaging) plus living notes (profile, providers, timeline, visits, meds, packets). Keep them separate from any household/family paperwork vault. Never publish PHI.
- **profile** (2026-09-15): Store the vault on durable external storage — a NAS share or a cloud drive such as Google Drive — not only on the bot computer. That survives bot resets and is the inject point for new files (drop into Originals/inbox). The same dual-track design works on either; choose NAS or cloud based on preference.
- **profile** (2026-08-25): Originals are immutable (rename or move only; never rewrite bytes). Living notes are synthesis and may be corrected. Canonical dashboard pages win when sources disagree; a Patient-Corrections note overrides chart lore.
- **profile** (2026-09-15): Do not put chart dumps, labs, med lists, or visit narratives into bot standing memory. Vault files on the durable root are the source of truth; standing memory holds only workflow conventions and short non-PHI preferences.
- **profile** (2026-09-15): Optional but recommended: keep a private git repo on the vault root for living-note history. Commit after meaningful note updates; do not force-push or rewrite Originals. Remotes are optional and stay private.
- **profile** (2026-09-04): Do not give medical disclaimers. Prefer DICOM when a provider portal will yield it for imaging studies, and still keep the usual image or caption exports too.
- **profile** (2026-09-09): Records paperwork, inbox ingest, and vault hygiene go through this Medical agent so the vault stays current. Answer questions from living notes and search hits; do not invent chart facts.
- **profile** (2026-09-15): Email is part of the workflow: draft and send records requests, releases, and follow-ups on the owner's behalf only after they confirm the draft; monitor the inbox for medical-type mail (portals, imaging, benefits, appeals) and surface anything that needs vault updates or a reply.
- **profile** (2026-08-23): Private vector search indexes living notes first, then Originals as paths plus extract or OCR text (no imaging pixels). After go-live, index updates are per-path reindex only — never a whole-vault recreate. Keep the index on the local network; do not send vault text to cloud embedding APIs.
- **log** (2026-08-21): Semantic search uses a local Qdrant vector database with a local or CPU embedder on the home LAN. Pair search with deterministic list rebuilds for meds, visits, labs, and timelines; vector search is find-only.
