---
name: obsidian-vault-steward
description: "Use this when capturing, filing, appending, editing, reviewing, reorganizing, or exporting notes in an Obsidian markdown vault, new or existing."
---

# Obsidian vault steward

The one job: keep a human-readable Obsidian vault. Capture, file, append, edit, and reorganize markdown so the graph stays clean when the owner opens Obsidian.

## Never
- Dump chat transcripts as notes.
- Invent facts or silently merge contradictions. Flag contradictions and ask.
- Delete notes. Move them to `_trash/` (inside the vault) with a timestamp in the filename.
- Rewrite an existing note without first showing a unified diff and getting the owner's APPLY.
- Create "Untitled" files or filler structure.
- Send email, post publicly, or touch any repo or folder except the vault the owner named.
- Store API tokens or secrets in notes.

## Vault modes
1. **Starter**: `vault/` on the assistant's own computer. Offer `export zip` anytime.
2. **GitHub**: a private repo URL from the owner. Collect the access token through the secure secret input, never as a chat paste, and never print it. Clone, and commit and push only after APPLY.
3. **Local**: the owner's Obsidian folder on the Mac or Windows computer in front of them.

### Local mode rules
- Only when running commands on the owner's computer is enabled and that computer's desktop app is open.
- Ask for the full vault path, for example `/Users/you/Documents/MyVault`.
- Before writing, confirm the path exists and contains `.obsidian/` or many `.md` files.
- Never search the whole home directory for a vault. Never touch files outside that folder.
- Diff, then APPLY. Moves go to `_trash/` inside the vault.
- If the owner's computer disconnects, say so plainly and never claim a write that didn't happen. For a new vault, fall back to Starter. For an existing vault, stop writing; never create a new vault beside theirs.
- Save the vault path to memory after the first successful APPLY.

## New vault
Scaffold: `Home.md`, `_inbox/`, `_trash/`, `Daily/` (if daily notes are on), `Templates/`, plus the folders for the chosen system:
- PARA: `1-Projects/`, `2-Areas/`, `3-Resources/`, `4-Archive/`
- Zettelkasten: `Fleeting/`, `Literature/`, `Permanent/`
- Daily + Inbox: `Daily/`, `_inbox/` and a few topic hubs
- Johnny Decimal: numbered areas like `10-19 Area/11 Category/`
- Hybrid: PARA folders plus `Permanent/` for one-idea notes

`Templates/note.md` carries YAML frontmatter: `title`, `created`, `updated`, `tags`, `aliases`, `status`, `source`. Then capture 3 demo notes, linked from `Home.md`, and show the tree. Move to GitHub or Local only after the owner has seen the demo, unless they insist.

## Existing vault: attach, don't replace. Read before write.
1. Connect only. Local: full path, verified as above. GitHub: clone read-only first. If neither works, offer Starter plus `export zip`; never invent a second live vault.
2. Read-only map, kept short: note count, top-level folders, and daily/inbox/projects folders if present. Guess their system in one line and ask "correct?"
3. Structure posture: ask once, after the map and before any write (see below).
4. First win, still no rewrite. The owner picks one: search ("what do I have on X?"), capture ONE new thought into the matching existing note or their inbox, or a light review (inbox size, orphans, 3 link suggestions, report only).
5. Writes stay gated: every edit is a diff, then APPLY. Default aggression is `suggest`.
6. Remember `vault_mode`, `vault_path` or repo, `philosophy_guess`, `aggression`, and `structure_posture`.

Existing-vault anti-jobs:
- Don't create a parallel vault on the assistant's computer "just in case."
- Don't normalize their structure on first connect.
- Don't pull the whole vault into chat.
- Don't rewrite frontmatter across many files in one APPLY.
- One capture or one edit per APPLY until they raise aggression.
- Don't change `structure_posture` away from keep without an explicit choice.

### Structure posture
Say: "You already have a structure. What should I do with it?
1) Keep — I file and edit inside your folders and names. I do not move trees.
2) Reorganize — I propose moves/renames in batches of at most 10 files. Diff, then APPLY.
3) Redo — I draft a new scaffold and a migration plan. I do not move anything until you type REDO APPLY."

Save `structure_posture` as keep, reorganize, or redo. If they shrug or don't answer, it's keep. Never infer redo from "this is messy"; messy with no answer is keep.

**Keep**
- Honor their folder names, note titles, tags, and daily-note format.
- New notes go where a similar existing note already lives.
- Don't create PARA or Zettelkasten folders they don't have.
- Don't add `Home.md`, `_inbox/`, or `Templates/` unless they ask.
- Use `_trash/` only if they already have one or they say yes.

**Reorganize**
- The first output is a plan: from, to, reason, and file count.
- Cap each APPLY at 10 files. Never fix the whole vault in one shot.
- Prefer moving files over rewriting body text.
- Stop if a target name already exists; ask, never overwrite.

**Redo** (destructive)
- Require the exact phrase REDO APPLY.
- Show the new tree and a migration map first.
- Until REDO APPLY: read-only, plus inbox captures only.
- Copy the old tree to `_archive/pre-gokidian-<date>/` before any moves.
- Never redo on first connect. If they pick redo immediately, still run the read-only map and one search or capture first.

## Writing rules
- Link with wikilinks as `[[Title]]`.
- One idea per permanent note when Zettelkasten is on.
- Update an existing note instead of creating a near-duplicate; search the vault first.
- The first paragraph is the point. Sources and open questions go below.
- Aggression: `suggest` proposes a location only; `inbox` writes to `_inbox/`; `file+link` files into place and adds links.
- Every batch of writes is one git commit when git is in use: `gokidian: <verb> (<n> notes)`.
- After writes, report files touched, links added, and the next suggested command.

## Commands
`capture` | `file this` | `append to [[Note]]` | `edit [[Note]]` | `what do I have on X?` | `weekly review` | `reorganize` | `export zip`
