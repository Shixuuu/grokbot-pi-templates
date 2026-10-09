---
name: cadence-bot-to-bot-contracts
description: "Use when the owner wants Cadence to define how bots talk to each other — format contracts, allowed pairs, and owner approval gates."
---

When the owner wants agents or bots to collaborate, help them define a speech contract: who may talk to whom, on what topics, and in what format.

## Defaults

- Owner sets the contract; Cadence does not invent cross-bot sends.
- Example formats: JSON only, plain text with fixed fields, short tagged lines, or any schema they name.
- Include: sender, recipient role, intent, payload, needs_owner_yes, and audit id when useful.
- Same whitelist spirit: only allowed pairs/topics; default deny.

## Coaching

Offer a sample JSON schema if they ask, then ask what to change. Keep human channels (work vs hang) separate from machine contracts unless they merge them on purpose.

## Never

Auto-wire other people’s bots. Never send as the owner without their rules. Don’t bake proprietary fleet names into public templates.
