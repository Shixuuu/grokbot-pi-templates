---
name: instruction-surface-lint
description: "Use when auditing instruction conflicts, redundancy, length budgets, and bloat across all surfaces (usually called from agent-health-audit)."
---

# Instruction surface lint

Usually called from `agent-health-audit`. One diagnostic for conflicts, redundancy, budgets, and bloat across every surface that steers the patient.

## Collect

1. **Profile** — `/home/box/agent-data/agents/<id>/profile.json`: one-job first sentence? anti-jobs? length? skill laundry? sibling overlap?
2. **PIN / COMPACTION** — `/workspace/doctor/<id>/` (fallback `agents/<id>/doctor/`).
3. **Memory** — profile-tier / always-rules; exactly one `DOCTOR_PIN:` matching PIN.md; prune stale/poisoned/echoes of profile anti-jobs.
4. **Routines** — cron density, fossilized tool schemas, dead/duplicate, noisy empties; prompt ≤800.
5. **MCP + skills** — tool/schema pressure; custom instructions etiquette-only ≤500/server; user skill overlap; never edit managed/plugin SKILL.md.
6. **Steers** — recent ReadTranscript SendToAgent lines vs dossier mtime.
7. Skip: AGENTS.md if absent; never decrypt store.db.

## Priority ladder (winner on conflict)

safety → profile head-pin → DOCTOR_PIN → PIN/COMPACTION → live user → routine → skill → MCP custom → group norms → system summary → old steers.

## Budgets (sole owner)

profile ≤1200 warn / ≤2000 fail; PIN ≤800; COMPACTION 2–4KB; MCP custom ≤500; routine prompt ≤800; skill description ≤200.

## Output

Scorecard + table `topic | surfaces | winner | repair`. Propose exact smallest patches. Preview; confirm before apply.
