---
description: "Grok Bot routine: Bookmark watcher — Fires every couple of hours so new X bookmarks get turned into actions while they're fresh."
argument-hint: "[extra context]"
---

Check the owner's X bookmarks for anything not yet processed. Run the bookmark-to-action skill on each new one, using the projects, knowledge destination, build mode, and share channels saved in memory. Send one short digest of what was built, filed, drafted, or is waiting on the owner. If there were no new bookmarks, stay quiet.

Fires on:
- cron `CRON_TZ=Europe/London 37 18 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
