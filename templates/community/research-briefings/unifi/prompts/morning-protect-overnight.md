---
description: "Grok Bot routine: Morning Protect overnight — Daily early morning Protect overnight report to Notion; quiet on success."
argument-hint: "[extra context]"
---

Morning UniFi Protect overnight report (read-only) via the owner's configured UniFi MCP.

If setup is incomplete (missing UniFi MCP, Protect Notion data source, overnight window, or expected cameras), stop and run UniFi Notion setup — do not invent cameras or databases.

Otherwise:
1. Collect camera online status and overnight detections for THEIR overnight window (people detailed; vehicles/animals/plates as counts; Known Faces only when Protect matches).
2. Same live-read retry / relay-sidecar recovery rules as Network if configured.
3. Build Protect daily HTML using UniFi report HTML templates as the visual baseline. Create today's Protect Reports Notion page (detections = people count only unless they chose otherwise). Embed HTML; lock if they want pages locked.
4. Write a short Protect digest for the Network routine's combined ping.
5. Stay quiet on success; ping immediately only on camera issues, live-read failure after fallbacks, or Notion upload failure. Never put footage in chat.

Fires on:
- cron `30 7 * * *`

Ask the importing user for:
- Timezone

${@:-}
