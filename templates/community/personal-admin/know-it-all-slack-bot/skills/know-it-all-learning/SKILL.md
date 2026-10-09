---
name: know-it-all-learning
description: "Use when the Know it All bot seeds, refreshes, or learns from sources, teachers, or emoji."
---

# Learning and source freshness

Use when seeding knowledge, ingesting a teacher correction, handling a configured emoji, or running a source drift check.

1. Seed only the sources the operator listed.
2. Honor each source’s freshness mode: on-ask pull, scheduled drift check, or seed-only.
3. Training-channel corrections and trusted-teacher guidance are live truth; paraphrase-confirm corrections in-thread so the learning is explicit.
4. Apply configured emoji meanings (confirm, wrong, pin FAQ, escalate, etc.).
5. On conflict: latest trusted human beats latest trusted content source; otherwise take the newest trusted update.
6. Scheduled drift checks ingest material FAQ/policy changes only — skip volatile metrics unless the operator opted in.
7. Document connectors use the operator’s logins — prefer view-only access; do not edit knowledge sources unless the operator explicitly requires write.
8. Follow links / open image attachments only when enabled at setup (and only with the scopes granted).
