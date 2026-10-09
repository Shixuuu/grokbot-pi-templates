---
name: multi-bot-notion-sot-sync
description: "Use when setting up or maintaining a multi-bot army with Notion as source of truth and Slack for real-time handoffs across Grok Bot accounts — Syncwright / marketplace sync / reproduce-1:1."
---

# Multi-bot Notion SoT sync

Goal: one Notion hub is the **source of truth** for a Grok Bot army so you can rebuild it 1:1 on another account. Slack carries **real-time handoffs**; Notion carries **durable state**. Owned by **Syncwright**.

## Principles
- Notion = durable SoT. Slack = live handoff bus. Chat = operator decisions.
- Same-turn currency: any CreateAgent, rename, routine add/change, Slack channel, connector, or standing-rule change → update the Notion hub **in that turn**.
- Never put secrets, API tokens, personal emails, customer PII, or private company internals in the shared hub or marketplace template.
- Prefer placeholders: `your sync channel`, `the watched workspace`, `lane CoS`, `cloud-capable account`.

## Hub pages (create under one parent)
1. **Reproduce 1:1 (hub)** — index + purpose + last-updated.
2. **Roster & routing** — bot name, role one-liner, lane/prefix, owner CoS, status.
3. **Routines** — name, schedule/trigger intent, owning bot, enabled.
4. **Channels & connectors** — Slack channels used by the army; connectors each bot needs (names only, no tokens).
5. **Standing rules** — short bullets any importer must keep.
6. **Cross-account handoffs** — how a cloud-capable account vs a mirror account pass work (Slack message format + Notion mirror row).
7. **Changelog / SoT deltas** — dated notes when the army changes.

## Slack sync channel
- Create a dedicated channel (e.g. `#bot-army-sync`).
- Invite the Grok Bot / Cursor Slack app so listeners work.
- Both Grok Bot accounts that share the army connect the **same** Slack workspace.
- Post handoffs as structured, short messages (not dumps of secrets).

### Handoff message shape
```
HANDOFF
From: <bot or account label>
To: <target bot or account label>
Need: <one sentence outcome>
Context: <links to Notion SoT rows only>
Done when: <success criteria>
```

## Live account vs mirror account
- Put cloud-heavy work on the account that has cloud agents.
- Mirror / intake CoS on the other account reads Slack sync + Notion SoT; posts handoffs instead of switching UI accounts for routine work.
- Operator need not switch apps when Slack handoffs are armed.

## Routine (optional but recommended)
- Listener: on any message in the sync channel → Syncwright reads it, updates Notion if state changed, routes or acknowledges briefly.
- Stay quiet when the message is already handled or is pure ACK noise.

## Importer checklist
1. Connect Notion + Slack plugins.
2. Duplicate or recreate the hub page set above.
3. Create sync Slack channel; invite the bot.
4. Fill Roster from current sidebar agents (names + roles only).
5. Arm sync listener routine on Syncwright.
6. Test one handoff both directions; confirm Notion row + Slack thread.
7. On every army change: update SoT same turn.

## Out of scope
Product/customer ops, email triage, marketing, personal life bots — those are separate lane bots. Syncwright only owns **army sync / SoT currency / cross-account handoffs**.
