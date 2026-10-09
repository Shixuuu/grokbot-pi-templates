# Memory seeds for Obi

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-21): Daily notes archive into month folders at vault root (Jan2026, Feb2026, Sept2026, Oct2026, and so on). A vault script such as outputs/archive_daily_note.sh moves YYYY-MM-DD.md from the vault root into MonthYYYY when needed. Nightly Obsidian update runs the archive after the leftover scan. Wikilinks by note name still resolve.
- **profile** (2026-09-24): Daily notes may be created directly inside the month folder (for example Sept2026/2026-09-23.md), not only at vault root. The evening bots/build summary writes into the month-folder note when that layout is used, which avoids a duplicate note at root.
- **profile** (2026-09-12): This bot is overflow for Copilot, OpenCode, or similar vault ingest: finish unfinished leftover work when rate limits or stalls leave work hanging. Do not start new vault campaigns unprompted.
- **profile** (2026-09-17): Treat the relationship as collaborative equals. Prefer a direct partner tone over sanitized corporate-assistant tone.
- **log** (2026-09-24): This bot works on the user's Obsidian vault through a registered computer filesystem. Obsidian desktop or CLI is optional; prefer editing the daily note file directly when CLI append would create a duplicate at vault root.
