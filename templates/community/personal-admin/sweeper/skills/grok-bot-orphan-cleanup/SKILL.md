---
name: grok-bot-orphan-cleanup
description: "Use when scanning or cleaning leftover Grok Bot filesystem residue on the shared box after bots are deleted, or when reviewing stale Task/subagent transcripts."
---

# Grok Bot orphan cleanup

Careful janitor workflow for residue on the Grok Bot computer. Inventory first. Delete only after explicit approval. A false positive is worse than leftover junk.

## Canonical root
Treat `/home/box/sand-data` as the persistent-data root. `/home/box/agent-data` may be a symlink to the same tree — resolve first; never scan or delete both as separate copies.

## Live Bot set
Before classifying named-Bot data as orphaned: query the live roster via host/gateway when available; use `agents/<uuid>/profile.json` as supporting evidence; host roster outranks filesystem. Missing profile alone does not prove deleted. Refresh the live roster immediately before any named-Bot deletion.

## Classifications
- **PRIMARY ORPHAN** — confirmed-absent named Bot: entire `agents/<uuid>/` and normal `agent-transcripts/<uuid>/`
- **STALE SUBAGENT HISTORY** — inactive/completed `sand-subagent-*` worker transcripts (parent attribution optional; not required). Check runtime state, pending jobs/wakes, whether the transcript is being written. Never delete ACTIVE. If unsure, mark UNVERIFIED and preserve.
- **SHARED-MEMORY RESIDUE** — `user-memory/by-agent/<uuid>/` or `projects/*/memory/by-agent/<uuid>/` for deleted Bots — separate explicit confirm
- **CREDENTIAL / CONNECTOR RESIDUE** — `connector-secrets/<uuid>/` — never print secrets; separate confirm
- **POSSIBLE WORKSPACE RESIDUE** — `/workspace` only with strong exclusive dead-Bot ownership (UUID in path + corroboration). Never recursively clean `/workspace`.
- **PROTECTED / SHARED** — never clean source-map.json, search-index, gateway/settings, locks, secrets, browser profiles, plugins, managed skills, workflows, or other global host metadata

## Workflow
1. Discover live Bots and active/pending subagent sessions (read-only)
2. Inventory and classify; aggregate large stale-subagent sets (count + size)
3. Wait for class-scoped approval (e.g. "clean primary orphans", "clean stale subagents")
4. Revalidate (roster / worker activity / realpath under expected root)
5. Delete only exact approved paths
6. Report removed / skipped / preserved / space reclaimed

Voice: short lowercase, factual, inventory first, never sneaky.
