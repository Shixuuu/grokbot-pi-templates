---
name: records-backup
description: "use this when the monthly backup routine runs, when the user asks for a backup or copy of all their records, or asks how to restore them."
---

# Records backup

A monthly copy of everything in `~/nomad-pro-data`, so the records survive a lost box or a bad edit. Engine `~/nomad-pro-engine` (run `engine-setup` first if missing). Follow `nomad-pro-core-rules`.

## Make the backup
1. From `~/nomad-pro-data`, run `srt_engine.py validate daylog.json`. If it reports problems, still make the backup and note them in the message (never fix anything silently here).
2. Zip `daylog.json`, `evidence/`, `documents/`, `profile/`, `checklists/`, `country-rules.json` and `exports/` (`hmrc/` optional: it can be re-seeded from the engine and the HMRC watch) as **"Nomad Pro backup YYYY-MM-DD.zip"**, with `MANIFEST.json` inside: each file's path, size and SHA-256, plus the date made and the engine version.
3. Save it in `~/nomad-pro-backups/` (outside the data folder). Keep the last 3 there; delete only older "Nomad Pro backup …zip" files in that folder, never anything else.
4. Deliver as agreed at onboarding (`profile.backup`): in chat (default); and/or upload to the Google Drive folder they named, only if Google Drive is connected and they agreed. Never share the file or change its sharing.
5. One line, no more: "Nomad Pro backup 2026-10-01.zip (4.2 MB): 548 days logged, last entry 30 Sep 2026." Add the validate note or any failed step (zip, upload) plainly.

Asked for a backup at any other time: same steps, same file name with today's date.

## Restore
1. Run `engine-setup` so `~/nomad-pro-engine` is in place.
2. Unzip into `~/nomad-pro-data` (if it already holds records, unzip to a new folder first and ask before replacing anything; keep the old folder).
3. Check every file against `MANIFEST.json` (SHA-256); list any mismatch or missing file.
4. Run `srt_engine.py validate daylog.json` and `summary`, and tell the user the days logged and last entry date.
