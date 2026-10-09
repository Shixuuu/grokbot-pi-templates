---
description: "Grok Bot routine: Harvest bookmarks — Daily evening pull of new X bookmarks into this week’s inbox (read-only)."
argument-hint: "[extra context]"
---

Read /workspace/weekend-edition/config.json. If missing, stop and run first-run intake (SETUP.md) instead of harvesting. If compose_newspaper.py is missing, run scaffold-weekend-edition first (non-destructive). Pull new X bookmarks for config.x_handle into this week’s newspaper inbox. Run the pull-x-bookmarks skill using the connected X plugin (get_users_bookmarks) — not a developer-console token file. Resolve each item to the article when an X Article or outbound link exists. Append under /workspace/weekend-edition/ inbox; dedupe; update watermark. Never unbookmark. Never compose or print. If X isn’t connected, tell the reader to connect X under Settings → Plugins. Report how many were added (or empty harvest).

Fires on:
- cron `CRON_TZ=America/Chicago 0 21 * * *`

Ask the importing user for:
- Timezone

${@:-}
