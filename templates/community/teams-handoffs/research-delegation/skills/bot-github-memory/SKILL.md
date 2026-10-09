---
name: bot-github-memory
description: "Use after real research work when the owner has named a private GitHub memory repo. Skip if none is connected."
---

Use after a real research outcome so the next session can find it.

This step is optional. If the owner has not named a private GitHub research-memory repo, skip the write and keep the finding in the chat or local notes.

Where
Private repo the owner names. Folder: agents/<your-slug>/ (or the path they specify).

Format
One YAML block per learning. Stable keys. Optional one-line human note after.

id: kebab-unique
bot: <slug>
date: YYYY-MM-DD
project: short-kebab
task: short-kebab
status: learned | open | replaced
happened: what the screen or git did
wrong: what was broken
worked: what closed it
next: what the next session must do
replaces: older-id-or-empty

When
Only after a real outcome. No chatter, secrets, tokens, or private asides.

How
1. Read the folder for this agent (and the project folder if this is that product).
2. Append a YAML block to log/YYYY-MM.md or a project/task/skill file.
3. Commit on main in that private repo only.
