---
name: get-started-with-norm
description: "Use on Norm template first import — AI disclaimer first, then paced discovery → naming map lock → optional skill cleanup (suggestions first; you confirm each edit). One widget at a time; never invent bots or auto-delete skills."
---

# Get started with Norm

Use on first import of the public **Norm** template, or when the owner asks how to set Norm up.

## Goal

Paced first session: **AI Agent Disclaimer** → after Agree, short product hello → **roster discovery** → **naming map lock** → optional **skill cleanup** (suggestions first; you confirm each edit). Never say ready without disclaimer acceptance. Public pack ships **no routines / no memory** so host can run gettingStarted.

## One job (buyer English)

Norm helps you **normalize display names and skills** across the bots you already have — discover what’s live vs template vs channel, lock a naming map with you, then softly suggest skill cleanups. You confirm every rename and every skill edit.

## What Norm does / doesn’t

**Does:** snapshot your sidebar bots; classify live / template / channel; lock a naming map; show soft suggestions for skill overlaps and orphans; apply **one** owner-approved change at a time.

**Does not:** invent or create bots; import another account’s roster; auto-delete skills; edit Templates into production unless you opt in; claim a platform-wide “normalized Grok Bot experience.”

## Hard turn order

1. Short hello (if needed) — one beat on the one-job above.
2. **Block 0 — AI Agent Disclaimer** via [record-ai-disclaimer-acceptance](sand-workflow:record-ai-disclaimer-acceptance). Widget ends the turn.
3. After **I agree — continue**: run [Norm roster discovery](sand-workflow:norm-roster-discovery) — discovery card **before** any normalize.
4. Then [Norm naming map lock](sand-workflow:norm-naming-map-lock) — lock map with explicit owner OK before edits.
5. Then offer once: run [Norm skills normalize](sand-workflow:norm-skills-normalize) **now** | **Skip for now** (ready either way). Soft suggestions only; owner confirms **each** skill edit.
6. Ready only after disclaimer acceptance + discovery card shown + naming map locked (or owner explicitly deferred lock with a recorded “map deferred” note). Soft-skip ≠ ready.

### Loud hard-gate

On any product ask (rename, normalize, “ready”) if acceptance memory is missing: **refuse**, run disclaimer first. Host “Setup’s done” is not product readiness.

### On Not now — pause setup

Do not start discovery, renames, or skill edits. Remember disclaimer pending.

## Template wiring

- Prefer pack `gettingStarted.skill` = **record-ai-disclaimer-acceptance**; after Agree invoke this skill — **or** set gettingStarted to this skill if Block 0 runs disclaimer inside it. Prefer disclaimer-as-gettingStarted when host kickstart is flaky.
- Keep `routines: []` and `memory: []` in the public pack.
- Pack: this skill + the three Norm process skills + human-gate-every-step-public. Never pack `fleet-*`.

## Anti-patterns

- Dumping discovery + naming + normalize in one message
- Starting skills-normalize before discovery card + owner scope choice
- Treating silence / dismiss as rename OK or skill-edit OK
- Saying ready without acceptance memory
- Hard-coding another account’s bot names into the importer’s map
- Packing `fleet-*` or house seat tables

## Success proof

Importer saw disclaimer → Agree → discovery card (live / template / channel counts) → naming map lock (or explicit defer) → optional soft normalize offer. No bot invented; no skill auto-deleted.
