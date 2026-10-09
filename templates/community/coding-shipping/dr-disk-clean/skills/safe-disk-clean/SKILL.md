---
name: safe-disk-clean
description: "Use when running safe disk cleanup on a shared multi-agent Linux computer: confirmation-first A/B/C/D, discover HOME/WORKSPACE/TMP at runtime, exclude agent-data/reference, sequential shells, one identical retry on review flake."
---

# Safe disk clean

Confirmation-first disk cleanup for a shared multi-agent Linux computer. Overrides any “auto-clean temp / package caches without approval” guidance elsewhere.

## Absolute rules

1. Survey never deletes. Flow: diagnose → limited scan → classify → approval → re-check → delete → audit.
2. Never scan all of `/`. Discover narrow roots at runtime; do not hardcode a specific machine’s tree.
3. Failures: count, prune, continue — do not abort the whole job after one miss.
4. Approvals are directory summaries, not huge file lists.
5. Do not trust atime alone. Activity T = max(mtime, ctime).

## Discover roots (every run)

Resolve once, then use only these variables:

- `HOME` — login home (`$HOME`)
- `WORKSPACE` — shared scratch/work root (first existing among env `WORKSPACE` if set, `$HOME/workspace`, and other account-documented scratch roots; do not invent)
- `TMP` — `$TMPDIR` if set, else the system temp dir
- `AGENT_DATA` — `$HOME/agent-data` when present
- `REFERENCE` — `$HOME/reference` when present

If a root is missing, skip it and note under **D**.

## Review-resilient Shell

**Sequential only** (one Shell at a time). Prefer `ls -ld` over `stat`.

### Canonical survey sequence

1. `du -xhd1 "$WORKSPACE"` (if set)
2. `du -xhd1 "$TMP"`
3. `du -xhd1 --exclude=agent-data --exclude=reference "$HOME"`  
   Never bare `du -xhd1 "$HOME"` when `agent-data` / `reference` live under it — Auto-review may reject unprotected home scans. Prefer the exclude form.
4. `df -h /`
5. Shortlist ≤6 candidates: `ls -ld` one path per call; optional `du -sh` one path per call
6. If `AGENT_DATA/agents` exists: `ls -1 "$AGENT_DATA/agents"`

### Classifying / binding errors

1. Do not parallelize alternatives.
2. Retry the **identical** command once.
3. Success → continue. Failure → mark missing / prune.
4. Never invent sizes or dates.

### Forbidden Shell shapes

Multi-line scripts, many paths in one command, bare `stat`, deep walks into `venv` / `node_modules` / browser profile *contents*, Python per-file `os.stat`, parallel Shell storms.

## Default roots / bans

**Survey:** discovered `WORKSPACE`, `TMP`, `HOME` (with excludes), trash-like dirs, package/user caches, clearly orphaned empty browser profiles.

**Never candidate without an explicitly named approval:** `agent-data`, `reference`, `/proc` `/sys` `/dev` `/run`, OS system trees, live repos / manuscripts / `TEAM.md` trees. Never wipe all of temp.

## Time box

Aim for a short survey (about half a minute) when commands pass. Cap shortlist ~6.

## Classification A / B / C / D

- **A safe** (still needs approval): trash dirs, unreferenced deleted-agent remnants, tiny orphan browser profiles, reclaimable caches, old unused temp regular files (not live desktop/session sockets).
- **B judgment:** work trees, venvs, large browser profiles, tool state dirs.
- **C idle ≥ ~30 days** (info only): T = max(mtime,ctime) on work areas; note atime unreliable.
- **D uninspected:** review failures after retry, permission, timeout, missing roots.

## Delete after approval

Re-check each approved path; prefer move-to-dated-trash under `WORKSPACE` when unsure; log results; prove with `df -h /`.

## Related

Fast disk survey, Shared computer maintenance, Cheap routines.
