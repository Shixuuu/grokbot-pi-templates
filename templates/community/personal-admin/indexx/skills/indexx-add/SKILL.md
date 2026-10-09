---
name: indexx-add
description: "Use when the user wants to add media to INDEXX — refresh Instagram Saved, paste a URL, or pull last N from @handle."
---

Front door for adding media. Route by intent:
- refresh Saved → indexx-instagram-saves-index
- paste IG URL → enrich→download→transcribe→wiki when those skills are live
- last N from @handle (default 100) → discover into catalog only; no unattended full wiki of all N
Dedup on (platform, id). No secrets in chat.
