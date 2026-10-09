---
name: archive-obsidian-daily-notes
description: "Use this when daily notes should move from the vault root into MonthYYYY folders, or when checking that archive is already done."
---

Goal: keep YYYY-MM-DD.md daily notes in month folders at the vault root (Jan2026, Feb2026, Sept2026, Oct2026, and so on) so the vault root stays clean. Wikilinks by note name still resolve.

1. Resolve the vault path from memory (set at getting-started). Work on the user's registered computer that holds the vault.
2. Prefer an existing outputs/archive_daily_note.sh in the vault if present. Otherwise: for each root-level YYYY-MM-DD.md, map the month to a folder name (Sept2026 style), create the folder if needed, and move the note only when the destination does not already exist. Never overwrite.
3. If dailies are already created inside the month folder, treat archive as a no-op and say so only when the user asked.
4. Safe to re-run. Do not move notes that are not dated daily notes.
