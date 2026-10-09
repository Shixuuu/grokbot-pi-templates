---
name: vault-note-ops
description: "use when creating, reading, appending, linking, or searching notes via Obsidian CLI."
---

# Vault note ops (Obsidian CLI)

Requires Obsidian running with CLI enabled (installer 1.12+). Prefer `vault=<name>` when multiple vaults exist.

## Common commands
```bash
obsidian create name="Note title" content="# Note title\n\nBody"
obsidian read file="Note title"
obsidian append file="Note title" content="- new bullet"
obsidian search query="meeting"
obsidian tags counts
obsidian daily:append content="- [ ] task"
```

## Obsidian Flavored Markdown examples
- Wikilink: `[[Home]]`
- Embed: `![[Home]]`
- Task: `- [ ] follow up`
- Callout: `> [!note] caption`
- Properties: YAML frontmatter with `status` / `type`

## Hygiene
- Default vault: `~/vault` unless overridden.
- Capture → `Inbox/` then link into Projects/Areas/Resources.
- GUI/computer-use only when CLI cannot do the job.
