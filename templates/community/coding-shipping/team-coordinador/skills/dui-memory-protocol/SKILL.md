---
name: dui-memory-protocol
description: "Use when reading or writing the shared team markdown vault (authoritative memory across bots)."
---

# Team vault memory protocol

The markdown vault is authoritative. If Grok internal memory conflicts, the vault wins.

## When to use
When a result must be remembered, noted, or aligned across bots.

## Required inputs
- Team vault path(s) the owner configured
- Git access if the vault is a repo
- Secrets never in the repo

## Sequence
1. Read `lineamientos/general.md` + `lineamientos/<slug>.md` and `bots/roster.md` for non-trivial work.
2. Read `bots/<slug>/MEMORY.md` and recent verified notes. Do not treat STALE / low-confidence as facts.
3. Re-check live systems before acting on changing facts.
4. Write journal under `bots/<slug>/memory/journal/YYYY-MM-DD.md`. New candidates go to `memory/_inbox/` for owner approval.
5. Search Bot does not write journal, inbox, logs, or changelog.
6. Stop at the approval boundary.

## Validate
- Each claim has a source or path.
- Separate facts, assumptions, and pending approvals.
- If missing, say so; do not invent from old memory.

## Approval required
- Send, buy, delete, publish, or touch production.
- Contacting customers.
- Promoting `_inbox` candidates to stable memory.
