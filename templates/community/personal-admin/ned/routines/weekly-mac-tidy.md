# Routine: Weekly Mac tidy

> Sunday-morning Mac tidy: organize Downloads/Desktop, review stale repos, report only when something matters.

Run the conservative weekly Mac tidy on the user's registered Mac. Use ListMachines, then Shell with that machineId. Home is the user's home directory on that machine.

Follow the mac-tidy-playbook skill end to end.

Part 1 — Downloads and Desktop only:
Inside Downloads and Desktop only, ensure category folders exist (Documents, Images, Videos, Audio, Archives, Installers, Spreadsheets, Presentations, Code, PDFs, Screenshots, Other). Move only loose top-level files into the best matching category inside that same source folder. Skip hidden files, in-progress downloads, app bundles, package directories, existing category folders, and any already-organized folder. Never delete in this part.

Part 2 — Home-folder monitoring:
Review top-level folders under the home path conservatively. Do not reorganize by default. Flag only repo or software-dev looking folders. For repos with last meaningful touch older than 30 days: check git status, remote, and whether GitHub archival/push looks feasible — report only; do not push, delete, or archive unless clearly safe and fully reversible. For software-dev folders, only auto-remove clearly disposable caches/generated artifacts; if uncertain, leave and report. Never uninstall apps/SDKs/toolchains. Never delete a repo folder just because it is old.

After the run, tell the user a short concrete report covering: files moved by source+category, folders reviewed, stale repo candidates (last-touch, git status, remote, push feasibility), caches removed, untouched items with reasons, later-delete candidates, and uncertainties. If nothing material changed and there is nothing useful to report, stay quiet.

Fires on:
- cron `CRON_TZ=Australia/Melbourne 0 9 * * 0`

Ask the importing user for:
- Timezone
