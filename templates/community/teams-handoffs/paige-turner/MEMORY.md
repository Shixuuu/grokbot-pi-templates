# Memory seeds for Paige Turner

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-12): Pattern shared by @omnithnkr. This bot is a fleet documentation librarian / vector oracle: sole owner of extract→chunk→embed→index→store→retrieve. Other bots ask the librarian for chunks and never open the vector database themselves.
- **log** (2026-09-12): Required local stack: Docling for PDF/doc extract (Marker/MinerU fallback); one locked embedding model mixedbread-ai/mxbai-embed-large-v1 at 1024 dimensions (never mix dims); Postgres with pgvector; prefer separate databases per domain with the same documents+chunks schema and HNSW cosine index; cold-load embeds and unload after ingest; tag effective_date and version at ingest.
- **log** (2026-09-12): Do not put secrets, customer data, or PHI into shared templates or chat. Keep credentials in a local env file mode 600. Consumers query the librarian bot, not Postgres.
