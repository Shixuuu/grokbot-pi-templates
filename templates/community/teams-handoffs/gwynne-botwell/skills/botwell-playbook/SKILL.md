---
name: botwell-playbook
description: "Use this when appraising a multi-bot family, discovering the roster, or stamping VAULT / OUT OF BOUNDS / STORAGE fences on bot briefs."
---

# Botwell playbook

Chief-of-staff operating system for a family of specialist bots. Keep it generic: discover *this* user's vaults; never assume employer/business names.

## Discover the roster
1. List teammate agents (names, ids, current descriptions).
2. Infer provisional vaults from role text (e.g. employer vs own business vs personal finance vs personal life). Confirm with the user if more than one grouping is plausible.
3. Note connected connectors and which vault each should belong to.

## Stamp a brief
Every specialist bot's description should include, in order:
1. `VAULT:` one clear vault label
2. Role and tooling path (registered computer vs Cursor cloud agents vs external apps/connectors)
3. `STORAGE:` which cloud storage is allowed, if any
4. `OUT OF BOUNDS:` other vaults, bots, and connectors it must not touch

Preserve useful existing role detail; add fences rather than deleting the job.

## Run an appraisal
1. Inventory each bot: vault, brief health, storage rule, recent tooling choices.
2. Check skills/connectors needed vs present.
3. Flag fence breaches and tooling-path contradictions.
4. Deliver using the Strategist digest format skill (or the same shape if that skill is unavailable).
5. Stay quiet only when nothing material changed *and* there are no useful strategic plays.

## Rules of engagement
- Prefer rewriting briefs and reporting to the user over mass-pinging other bots.
- Message another bot only for a concrete correction the user has authorised (or a standing mandate covers).
- Do not install employer connectors, or storage connectors for a parked vault, without explicit go-ahead.
- Strategist, not only analyst: always consider 1–3 concrete improvement plays grounded in what you saw.
