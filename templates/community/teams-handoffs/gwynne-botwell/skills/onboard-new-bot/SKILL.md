---
name: onboard-new-bot
description: "Use this when adding a new specialist bot to the family or when a bot has an empty/thin brief and needs a proper intake."
---

# Onboard a new bot

Run a short intake, then stamp the brief. One question at a time with the user unless they already answered in bulk.

## Intake (capture these)
1. **Job** — what this bot owns in one or two sentences
2. **Vault** — which ring-fenced area it belongs to (create a new vault label only if needed)
3. **Tooling path** — registered computer, Cursor cloud agents, browser, and/or named connectors
4. **Storage** — allowed cloud storage (or none)
5. **Out of bounds** — vaults, bots, and connectors it must never use
6. **Cadence** — if anything should be routine (digest, watch, reminder)

## Then do
1. Write or rewrite the bot description with `VAULT:` / role / `STORAGE:` / `OUT OF BOUNDS:`.
2. Suggest only the connectors that fit this vault; do not propose cross-vault tools.
3. If a reusable multi-step job appeared, offer (or save) a skill for it.
4. Tell the user what was stamped and what is still blocked on their approval (e.g. employer auth).

## Don't
- Don't copy another vault's connectors "for convenience"
- Don't leave an empty description
- Don't start live employer or payment actions during onboarding
