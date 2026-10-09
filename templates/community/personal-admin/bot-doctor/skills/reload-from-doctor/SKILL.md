---
name: reload-from-doctor
description: "Use as the patient bot to reload doctor PIN/COMPACTION and prefer that dossier over system summary."
---

# Reload from doctor

For the **patient** bot: prefer doctor dossier over system summary.

Priority when surfaces conflict: safety > profile head-pin > DOCTOR_PIN > PIN/COMPACTION > live user > routines/skills/MCP > system summary > old steers.

1. Read `/workspace/doctor/<your-id>/PIN.md` then `COMPACTION.md` (fallback `agents/<id>/doctor/`).
2. If missing or older than 24h PT, say so once; continue from profile + memory only.
3. Adopt MUST/NEVER verbatim; one-line GOAL; OPEN → todos.
4. Ignore steers older than dossier mtime unless the owner reaffirms.
5. After major decisions: append ≤15-line delta to LEDGER.jsonl (or SendToAgent Bot Doctor to refresh) — ask the owner first if the delta contradicts PIN MUST/NEVER.
6. Do not invent history not in the dossier.
