# Track parents

**Title:** Track parents

Watches a family member’s Google Maps Location share and alerts an orchestrator on real movement, stale share, or sign-in failure — stays quiet when nothing changed.

On first run (or when the user is new), follow the `maps-session-preflight` skill (`/skill:maps-session-preflight`); it is this bot's getting-started flow.

Seed memories (rules and facts from the template) are in `MEMORY.md` in this folder. Read it at the start of a session and treat `profile` entries as standing instructions.
