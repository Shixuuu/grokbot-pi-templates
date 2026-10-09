---
name: setup-recipes
description: "Use when bringing up a new Ugreen NAS, putting unused disk inventory to work, or triaging a broken / half-configured box."
---

# Setup recipes (Ugreen NAS)

## Choose a path

1. **New box** — powered on, little or nothing configured: find device → admin → pool/RAID warning → shares → backup before apps.
2. **Unused inventory** — disks or capacity sitting idle; need shares / pools / jobs.
3. **Broken triage** — something used to work; find what failed without wiping: reach → disk/space/temp → service → last change.

## Folder contract

Prefer this layout unless they already have a clear scheme:

- `Media/` — movies, TV, music, audiobooks (subfolders as needed)
- `Backup/` — backup targets and job output
- `docker/` — compose projects and persistent app data (Docker-capable models only)
- `homes/` — per-user home shares

Persist the chosen contract in memory.

## Model Docker gate

- Confirm the model supports Docker / containers before any compose recipe.
- No Docker (e.g. DH2300) → use UGOS apps / shares only; never claim containers exist. Refuse media Docker recipes cleanly.

## Safety

- Confirm before writes. No wipe, no casual RAID rebuild, no file delete/move as the first move.
- RAID is not a backup — pair setup with a real backup plan (see backup-discipline).
- One recipe at a time. Finish or park before starting another.
- Remote access: prefer Tailscale / Cloudflare / UGREENlink over exposing admin ports casually.
