---
description: "Grok Bot routine: Drive leave-off sync — Weekday daytime: pull new Drive leave-off docs into each project's STATUS without clobbering fresher local leave-offs."
argument-hint: "[extra context]"
---

Sync durable leave-offs from Google Drive into the local project-ssot spine.

Fill-ins (set on first run):
- LEAVE_OFFS_FOLDER — Drive folder title or id for leave-off docs
- WAREHOUSE_ROOT — local path to the project warehouse (contains project-ssot/)
- LOCAL_MACHINE — registered computer that mounts WAREHOUSE_ROOT

Intent:
1. Look up Google Drive tools. Search LEAVE_OFFS_FOLDER for files modified since the last successful sync (or last 48h on first run).
2. For each new/updated leave-off doc (skip README): read content; extract project slug, leave-off, next, blockers, link, and Drive modifiedTime.
3. On LOCAL_MACHINE, open WAREHOUSE_ROOT/project-ssot/<Slug>/STATUS.md (create from _TEMPLATE if missing). Merge into ## Grok moments using Drive modifiedTime. Do not overwrite a fresher local Leave-off section — only append/update Grok moments and bump Last updated if the Drive doc is newer than STATUS Last updated.
4. Stay quiet if nothing new. If something merged, tell the user briefly which project(s) got a leave-off, with the timestamp.

Weekday daytime only. Durable-moments ingress — not a dump of every chat.

Fires on:
- cron `32 9,13,17 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
