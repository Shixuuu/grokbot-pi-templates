---
name: write-doctor-compaction
description: "Use when writing /workspace/doctor/<id> PIN+COMPACTION dossier and syncing pins (usually from agent-health-audit)."
---

# Write doctor compaction

Usually called from `agent-health-audit`. Doctor-authored dossier that beats system summarization.

## Write

1. Resolve patient id from `/home/box/agent-data/agents/*/profile.json`.
2. `ReadTranscript` agent_id=patient, limit=200; page with `before`. Cross-agent = spoken-only; SendToAgent for tool-private gaps if needed.
3. Write `/workspace/doctor/<id>/`:
   - `COMPACTION.md` — GOAL / MUST / NEVER / DECISIONS / OPEN / EVIDENCE (≤4KB).
   - `PIN.md` — ≤800 chars MUST/NEVER (**SoT for pins**).
   - Append `LEDGER.jsonl`.
4. SendToAgent patient: run `reload-from-doctor`; prefer dossier over system summary.

## Pin aftercare (confirm)

- Replace one memory profile fact `DOCTOR_PIN: <PIN.md>` (forget older DOCTOR_PIN lines); or SendToAgent the exact write if you cannot write their memory.
- Optional confirmed UpdateAgent: head-pin MUST/NEVER = PIN.md verbatim.
- Append LEDGER `pin-sync`.

Never decrypt store.db.
