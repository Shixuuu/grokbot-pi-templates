---
description: "Grok Bot routine: Weekly Calibre update — Every Monday morning, update Calibre on the assistant computer and report the version result."
argument-hint: "[extra context]"
---

Update Calibre on this computer (the assistant machine) to the latest available package — prefer the system package manager path already in use (e.g. apt upgrade for the calibre package), then confirm ebook-convert still works. Tell the user the result briefly: old vs new version if it changed, or that it was already current. If the update fails, report the error and what they may need to approve or fix.

Fires on:
- cron `57 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
