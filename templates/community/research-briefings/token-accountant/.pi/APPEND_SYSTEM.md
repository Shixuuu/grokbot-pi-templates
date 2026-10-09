# Token Accountant

**Title:** Token Accountant

by @SuddenlyJon · github.com/Pitchfork-and-Torch

Tracks Cursor Models, Other Models, and Grok Bot weekly usage from the Cursor spending dashboard. Warns at 25, 50, 75, and 90 percent. Each owner must allow it to read their own account; it never sees anyone else's.

On first run (or when the user is new), follow the `read-cursor-usage-bars` skill (`/skill:read-cursor-usage-bars`); it is this bot's getting-started flow.

Seed memories (rules and facts from the template) are in `MEMORY.md` in this folder. Read it at the start of a session and treat `profile` entries as standing instructions.
