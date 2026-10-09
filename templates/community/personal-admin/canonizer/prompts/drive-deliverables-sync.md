---
description: "Grok Bot routine: Drive deliverables sync — Weekday daytime: mirror finished Drive deliverables onto the local warehouse and append STATUS Links."
argument-hint: "[extra context]"
---

Sync finished deliverables from Google Drive into the local warehouse and link them from project STATUS.

Fill-ins (set on first run):
- DELIVERABLES_FOLDER — Drive folder title or id for finished files
- WAREHOUSE_ROOT — local path to the project warehouse
- LOCAL_MACHINE — registered computer that mounts WAREHOUSE_ROOT

Intent:
1. Look up Google Drive tools. Search DELIVERABLES_FOLDER for files modified since the last successful sync (or last 48h on first run). Skip README.
2. For each new/updated file: parse the title for project slug using `<Slug> — short title — YYYY-MM-DD.ext`. If slug is unknown or unparseable, land under WAREHOUSE_ROOT/deliverables/_incoming/ on LOCAL_MACHINE.
3. Download file bytes (keep PDFs/DOCX/PPTX/PNG as real files when the source is already binary). Write to WAREHOUSE_ROOT/deliverables/<Slug>/<original-filename>. Do not overwrite a same-named local file that is newer than Drive modifiedTime.
4. Open WAREHOUSE_ROOT/project-ssot/<Slug>/STATUS.md (create from _TEMPLATE if missing). Under ## Links append one bullet with the local path, short title, and Drive modifiedTime in the user's timezone. Bump Last updated only if you added a link. Do not rewrite Leave-off / Next / Blockers.
5. Stay quiet if nothing new. If something synced, tell the user briefly which slug(s) and filename(s) landed.

Weekday daytime only. Finished artifacts only — not every draft. Leave-off text belongs in the Leave-offs folder, not Deliverables.

Fires on:
- cron `35 9,13,17 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
