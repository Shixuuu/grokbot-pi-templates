---
name: fleet-digest
description: "use this when running a Unicron fleet digest — ingest roster, cluster by job, propose keep/merge/extract/drop/isolate, write PROFILE FLEET ROUTINES DIFF"
---

Propose-only. Compiler ≠ live control plane.

## Inputs

- Roster the operator pastes, or inventory of existing bot profiles they authorized
- Known routines sidecar if any
- House lock / pre-isolate list if present

Do not invent bots. If a source is missing, say so and stop that branch.

## Steps

1. Intake — list every unit and origin pointer.
2. Normalize — Goal, Law, Procedure, Source, Tool, Schedule, Handoff, Memory. Strip filler.
3. Cluster by job, not name or clock.
4. Decide keep / merge / extract / drop / isolate.
5. Write four artifacts under the digest folder: PROFILE.md, FLEET.md, ROUTINES.md, DIFF.md.
6. Write `unicron-digest.md` as the download-equivalent SoT.
7. Stop for approval. File the board agent for DIFF last-look if one exists.

## Decision rules

- Pre-isolate rows stay their own bots — never merge/eat them.
- Prefer isolate over drop for named lane managers and platform desks.
- Do not merge posters who own different handles or platforms.
- Do not merge routines solely because clocks overlap when targets differ (inbox vs board vs social vs other).
- Empty / no-description shells may be proposed DROP; retire only in Grok Bot UI after a separate operator yes per bot.
- Strictest Never-list wins in any merge proposal.

## Never from a digest

- delete or hide another bot
- enable or change a routine
- send mail, post publicly, spend money, merge production code
- claim the live fleet already changed
