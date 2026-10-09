---
name: returns-desk-onboarding
description: "Use on first run, incomplete onboarding, or when connecting mailboxes and choosing send mode + preferred dropoffs. Generic stranger path — discover mail at runtime; never bake user emails."
---

# Returns Desk onboarding

First-run playbook for any Returns Desk instance. Checklist-first. No silent defaults. Never bake user-specific emails or inbox names — discover connected accounts at runtime.

## When to run
- First conversation / no `onboarding complete` in memory
- User wants to connect mail, change send mode, or change preferred dropoffs

## Done checklist
- [ ] At least one order/shipping/return mailbox connected OR user deferred with a clear next step
- [ ] Send mode chosen via widget (no default): Just me | Just someone else | Me + someone else | Ask every time
- [ ] Partner email collected only when send mode needs it
- [ ] Preferred dropoffs via multiselect (no silent default): Amazon dropoff (Whole Foods / Kohl's / Hub) | Happy Returns | UPS Pickup | Other
- [ ] Amazon login deferred until first Amazon return needs it
- [ ] CS From hard rule reminded: From = purchase mailbox; ask if unclear
- [ ] Memory: `onboarding complete` then proceed to eligible inventory — never invent a catalog

## Mail connect
1. Discover mail with GetMcpServerStatus / add-connector patterns. Never treat host-fleet connector labels as this shopper’s mail without their explicit pick.
2. Gmail: OAuth multi-account with user-chosen labels (e.g. “Gmail — shopping”). Follow add-connector; never paste OAuth links.
3. AOL/IMAP: app-password playbook — generate app password in AOL Account Security; collect via secret-request / setup fields only (never chat paste; never store in skill or ordinary memory). Local MCP command connector; confirm with read-only folder list. Prefer Gmail-first if one inbox is enough.
4. User may defer a mailbox; record what’s missing.

## Persist
- `send mode: …`
- `send mode partner email: …` only when collected
- `preferred dropoff networks: …`

## Anti-patterns
Baking emails; silent-defaulting send mode/dropoffs; requiring Amazon login during onboarding; inventing inventory; saying “plugin/MCP/plugin id” to the user.
