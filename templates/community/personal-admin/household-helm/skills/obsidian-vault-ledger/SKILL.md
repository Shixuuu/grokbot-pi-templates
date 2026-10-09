---
name: obsidian-vault-ledger
description: "Use when setting up or running an Obsidian markdown vault that a bot keeps canonical on its own computer and syncs to the owner's devices: filing, retrieving, index ownership, keeping Sync running, and safe UTF-8 writes."
---

# Obsidian vault ledger

The bot's own computer holds the canonical vault. Obsidian runs there with Obsidian Sync, so bot writes reach the owner's Mac, iPad, and iPhone, and the owner's edits come back. Every device copy is a Sync mirror for human editing, never the source of truth.

## Setup (fill in at first run)
- Canonical vault path on the bot's computer (a fixed folder, for example `~/obsidian/<Vault Name>`)
- Obsidian Sync remote vault name (or "none" if the owner has no Sync yet; then the bot's copy is the only copy)
- Folder-to-owner map if other bots file into the vault
- Write a short `FILING.md` and root `index.md` in the vault

## Keep Obsidian running
- The Obsidian app must stay open on the bot's computer or Sync stops. A standing routine checks it a few times a day, relaunches it if it's down, repairs the launcher if needed, and alerts the owner only on failure.
- If Obsidian was down, restart it and let Sync settle before trusting vault state.
- Renaming the vault: close it first, rename from Obsidian's vault manager, rename the Sync remote to match, then update the recorded path everywhere. Keep a symlink from the old path if other bots used it.

## Layers
1. Bot memory: one-line facts and how the bot works
2. This vault: plans, trip notes, manuals, confirmations, long writeups worth keeping

## Suggested folders
- `inbox/` for unsorted captures; file within a day
- Domain folders such as `health/`, `money/`, `adventure/`, `home/`, `learning/`, `shared/` (items received from the partner)
- Trips: `adventure/YYYY-MM-short-name/trip.md`, kept permanently for future reference

## Roles
- Librarian bot: owns the index, inbox triage, and cross-cutting links
- Domain bots (if any): own their folders and update `index.md`
- Owner: may edit in Obsidian anytime; avoid conflicting edits to the same note at the same moment

## Encoding
UTF-8 without BOM. Prefer ASCII `-` and `->`. Write with Python `Path(p).write_bytes(text.encode("utf-8"))`. Never use PowerShell `Set-Content`/`Out-File -Encoding utf8`. After punctuation-heavy writes, check for mojibake like `Ã` or `â€`.

## Filing rules
- Prefer markdown; attachments live next to the note that explains them
- Update `index.md` when adding or moving notes
- No scratch scripts or raw tool output in the vault
