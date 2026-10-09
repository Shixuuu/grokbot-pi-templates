---
name: obsidian-agent-context-vault
description: "use this when filing notes to the shared Obsidian agent-context vault on the Mac, or wiring any agent to read context before a task and post a learning note after"
---

# Obsidian agent-context vault

A shared Obsidian vault on the Mac is the team's long-term memory: a context repo, not a chat log. Chat is a digest; proof of done is a vault note path and/or a live URL.

## Location

The vault root on the Mac (the owner sets it during onboarding). If the bot's computer can't see the Mac, stage the note locally, mark it STAGED, and copy it to the Mac when it reconnects. The Mac vault is the source of truth.

## Mandatory

1. **Before a task:** read `AGENTS.md` + `forbidden.md`, your recent notes, any `Maps/Decisions/` touching the work, and `Maps/Roster.md` if ownership is unclear. Prefer vault truth over chat memory.
2. **After every finished task:** a short learning note: what/done, learned, pointers (no secrets), follow-ups.
3. Standing rule changes → `Maps/Decisions/YYYY-MM-DD-slug.md`. Corrections → append `forbidden.md`.

## Layout

- `Hunt/` — scout packs and research notes (one subfolder per bot)
- `Ship/` — `briefs/`, `rfc/`, `builds/`
- `Wiki/` — learning notes, `Daily/` digests
- `Maps/` — Roster, Decisions, Contracts, Hooks
- `Agents/` — per-agent cards (role, ownership, never-dos, human gate)
- `AGENTS.md` — fleet contract; `forbidden.md` — never-again list
- `bin/` — a `vault-note` helper and a hook installer that links `AGENTS.md`/skills into each CLI's home

## Who files where (defaults)

Research bot → `Hunt/<topic>/` + `Ship/briefs/`; coding EM + implementers → `Ship/rfc/` + `Ship/builds/`; reviewers → `Ship/rfc/` when reviewing; collectors → `Hunt/` packs; this bot → `Hunt/agent-manage/` + `Maps/Decisions/`.

## Daily consolidation (evening)

Skim today's notes, write `Wiki/Daily/YYYY-MM-DD.md`, update your `Agents/` card if role or locks changed. Touch `AGENTS.md` only for fleet-wide rules.

The vault never posts, pays, deploys, merges, or sends. No secrets in notes.
