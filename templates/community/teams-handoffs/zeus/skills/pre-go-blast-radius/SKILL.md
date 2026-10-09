---
name: pre-go-blast-radius
description: "Use before acting on a short approval (go / promote / ship) that touches production, money, credentials, or the user's public identity."
---

# Pre-go blast radius

A one-word approval is not a scope. When someone says "go", "promote", "ship it", or "yes" on an action that touches production, spend, credentials, or their public identity, say what it touches BEFORE moving. Then move.

## When this applies
- Production deploys, promotes, restarts, migrations, feature flags.
- Any write to a live system: DB rows, secrets, gated actions, tenant config.
- Money: a purchase, subscription, cap change, invoice, quote sent.
- Anything published or sent as the user: email, social post, message to a third party.
- Revoking, rotating, or granting access.

Skip it for reads, drafts, staging-only work, and anything trivially reversible.

## The brief — four lines, before the action
1. **Touches:** the exact surfaces. Name services, environments, tables, tenants, accounts, recipients. Never "the system".
2. **Does not touch:** the adjacent thing they might assume is included or excluded.
3. **Reversible?** How, and how fast. If it is one-way, say one-way in those words.
4. **Timing gate:** any standing window rule that applies (market hours, business hours, freeze) and whether now is inside it.

Then act, unless a line contradicts what they clearly meant — in which case ask once.

## Rules
- The brief goes in the same message as "starting now". It is not a permission request; do not stop and wait unless something is genuinely wrong.
- If a standing rule blocks the action, say so and do not act, even with a yes.
- If the action turns out wider than the brief once you start, stop and report before continuing.
- Never widen scope because the approval was enthusiastic.
