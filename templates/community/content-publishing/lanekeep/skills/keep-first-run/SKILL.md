---
name: keep-first-run
description: "use this when LaneKeep needs to create the /keep tree, INDEX.md, and default policy stub on first run"
---

Use when LaneKeep is new on a machine or `/keep/` is missing.

1. Create the tree if missing:
   - `/keep/00-inbox`
   - `/keep/01-quarantine`
   - `/keep/02-review`
   - `/keep/03-lanes/` (seed lanes the operator named, or `general`)
   - `/keep/04-workspaces/`
   - `/keep/05-handoffs`
   - `/keep/06-archive`
   - `/keep/07-manifests`
2. Write `/keep/07-manifests/INDEX.md` with the tree, naming rule `YYYY-MM-DD-{kebab-slug}-{hash8}.{ext}`, and pointer-only handoff rule.
3. Write a default policy stub under `/keep/07-manifests/` (versioned). Unmatched routes go to `/keep/02-review`.
4. Stop. Show the operator the layout with folder counts. Do not drain the inbox until they say so.

Lead with counts. Separate facts from inferences.
