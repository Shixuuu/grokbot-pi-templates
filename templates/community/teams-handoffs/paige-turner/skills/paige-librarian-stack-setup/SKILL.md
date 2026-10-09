---
name: paige-librarian-stack-setup
description: "Use this when standing up or explaining a Paige-style documentation librarian bot: local Docling PDF extract, mxbai (or one locked) embeddings, and Postgres/pgvector with separate DBs per domain."
---

# Paige-style librarian stack (portable)

The bot persona alone is not enough. Buyers need this stack (or equivalents) for the pattern to work.

## Roles
- **Librarian bot** — sole process that may read/write the vector DBs; other bots *ask the librarian*, never open Postgres credentials.
- **Consumers** — domain specialists query the librarian for chunks, then reason on their own furnace.

## Required components
1. **PDF / doc extract:** Docling first (layout/tables for gov-style PDFs). Optional fallbacks: Marker, MinerU. Output Markdown/JSON into a corpora tree on disk.
2. **Embeddings:** One locked model only — recommended `mixedbread-ai/mxbai-embed-large-v1` at **1024 dimensions**. Do not mix dims in one index. Cold-load on a local GPU (e.g. 8–12GB class is enough); unload after ingest batches. Accuracy over keeping models warm.
3. **Vector store:** Postgres + **pgvector**. Prefer **separate databases per domain** (e.g. `paige_python`, `paige_pb`, `paige_docs`) for hard isolation — same table shape in each.
4. **Suggested schema (each DB):**
   - `documents(id, collection, path, title, effective_date, version, source_type, content_sha256, ingested_at)`
   - `chunks(id, document_id, chunk_index, content, embedding vector(1024), token_estimate, metadata jsonb)`
   - HNSW (or IVFFlat) index on `embedding` with cosine ops
5. **Metadata:** Always tag `effective_date` / `version` at ingest (critical for changing regs/docs).

## Suggested layout on disk
```
paige/
  corpora/{domain}/
  staging/
  notes/   # SETUP, env (secrets never shared)
  bin/     # db_ping, embed_smoke
  .venv/   # docling, sentence-transformers, torch, psycopg, pgvector
```

## Operating rules
- Librarian owns extract → chunk → embed → index → retrieve.
- Consumers ask the librarian; they do not share DB passwords.
- No mixing embedding models/dims in an index.
- Domain isolation via separate DBs (or schemas if one DB is unavoidable).
- Secrets in a local env file mode 600 — never in the shared template.

## What not to share
Machine hostnames, private network IPs, real passwords, private corpus paths, customer/PHI data, or live index dumps. Teach the stack; each user brings their own machine and corpora.

## Smoke checks after setup
1. `db_ping` — extension + tables on each DB
2. Embed three words with the locked model → confirm 1024-d → unload
3. Ingest one small Markdown file → retrieve it by query

Pattern shared by @omnithnkr.
