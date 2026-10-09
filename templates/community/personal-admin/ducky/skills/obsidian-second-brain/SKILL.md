---
name: obsidian-second-brain
description: "Use when reading or writing the owner's Obsidian Second Brain, Agent Notes dual-write with the Librarian, vault lookups, or Sync nudge after external file writes — prefer home-server-mac for which machine."
---

# Obsidian Second Brain

Use when agents need the owner's personal context, Second Brain notes, dual-write with the team Librarian, daily/profile distillations, or vault lookups.

## Vault machines
- Follow skill `home-server-mac`: prefer always-on home Mac first.
- Paths and machine labels come from getting-started / owner memory — do not invent them.
- Sync (e.g. Obsidian Sync) across home server, laptop, and phone is the owner's concern.
- If home server unreachable: laptop; if both down: queue writes — no phone write path for agents.

## Access
- **Write:** `Agent Notes/` only
- **Read:** `Agent Notes/` plus other folders the owner explicitly allows
- Never create, edit, or delete files outside `Agent Notes/` unless the owner explicitly asks
- Soft gate unchanged: notes do not authorize publish, deploy, or spend

## Folder map (`Agent Notes/`)
- `Inbox/` · `Daily/` · `Decisions/` · `Profile/` · `Projects/`
- `README.md` — conventions

## Obsidian Sync nudge
Files written via shell outside the Obsidian editor can sit on disk without entering Sync until Obsidian notices them.
After creating or materially updating any `Agent Notes/` file on the Mac:
1. Ensure Obsidian is running on that Mac if possible.
2. Open at least one changed path with the Obsidian URI so Sync indexes it.
3. For a batch of new files, open one file per new path (or the newest) before finishing.
4. Do not paste account tokens or Sync credentials into chat.

## Dual-write with GitHub Librarian
1. Team ops → Librarian first (`team-librarian-archive`)
2. Owner / Second Brain → also `Agent Notes/` same day
3. Librarian owns archive content + dual-write; Chief of Staff owns Profile/Decisions locks

## CODE loop
- Capture → Organize for AI context → Distill with owner in judgment → Express as drafts only

## Rules
- Plain markdown; cite note path on lookups; do not edit Personal or other read-only folders
