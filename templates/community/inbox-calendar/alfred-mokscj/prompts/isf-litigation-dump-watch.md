---
description: "Grok Bot routine: Drive dump folder watch — Watch designated Drive upload folders for new archives under size limits and pull them for reorganization."
argument-hint: "[extra context]"
---

On a weekend evening cadence, list children of designated Drive upload folders. For new zip files under the download size limit, download, extract, dedupe, and merge into a local organized pack. Flag oversized files as blocked pending split. Stay silent when nothing changed; ping the user when new files were pulled or something is stuck.

Fires on:
- cron `CRON_TZ=America/Chicago */15 17-23 * * 6,0`

Ask the importing user for:
- Timezone

${@:-}
