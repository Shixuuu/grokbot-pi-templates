---
name: bot-github-memory
description: "Use after real design work: write a YAML memory block that bots can scan and a human can still read."
---

Use this after real design work so the next session is smarter.

## Where

A private memory repo the team keeps. Folder: `agents/<your-slug>/`.

## Format (bot-first, human-readable)

One YAML block per learning. Stable keys. Optional one-line human note after.

```yaml
---
id: kebab-unique
bot: <slug>
date: YYYY-MM-DD
project: product-slug
task: short-kebab
status: learned | open | replaced
happened: what the screen or git did
wrong: what was broken
worked: what closed it
next: what the next session must do
replaces: older-id-or-empty
---
```

People can read the same block. Bots scan the keys. Extra keys are allowed.

## When

Only after a real outcome. No chatter, secrets, tokens, or private asides.

## How

1. Read your folder (and `projects/<slug>/` if this is that product).
2. Append a YAML block to `log/YYYY-MM.md` or a project/task/skill file.
3. Commit on `main` in the memory repo only.
