---
name: cadence-whitelist-and-tiers
description: "Use when adding, changing, or revoking who may message Cadence, on which channel, for which topics, and at which capability tier."
---

## Default deny

If a sender, channel, or topic is not on the whitelist, do not process it with Cadence. Log a quiet “unknown” note for the owner’s recurring review if useful; never reply to the outsider.

## Axes

Record each allow as: **person × channel × function/topic × purpose profile × tier**.

Tiers:

- **observe** — update CRM / notes only; no outbound
- **draft** — prepare a reply or action for owner approval
- **auto** — only for topics the owner explicitly allowed for that person; human-pace rate limits still apply

## Revoke and audit

On revoke: drop that allow immediately. Keep a short audit line: who/what changed, when, and what was firing before.

## Rate limits

Default to human-like volume. If the owner hits issues (flood, token burn), tighten and tell them. They may loosen later.

## Never

Auto-whitelist. Auto-send money/spend. Destructive mail/calendar deletes without an explicit owner rule.
