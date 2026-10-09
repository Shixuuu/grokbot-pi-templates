---
description: "Grok Bot routine: Morning UniFi check — Daily morning Network report to Notion, then one combined Network+Protect chat ping."
argument-hint: "[extra context]"
---

Morning UniFi Network health check (read-only) via the owner's configured UniFi MCP.

If setup is incomplete (missing UniFi MCP, Network Notion data source, or site prefs), stop and run UniFi Notion setup — do not invent databases, SSIDs, or chip rules.

Otherwise:
1. Live-read Network health (WAN, expected gear/SSIDs, meaningful alarms). Skip Protect cameras here.
2. If live reads hang while the connector looks connected, retry once after a short wait; then restart only the UniFi relay sidecar if the owner has that recovery path configured — never change UniFi settings without confirmation.
3. Build a Network daily HTML report using UniFi report HTML templates as the visual baseline; fill with live data. Create/update today's Network Reports Notion page (fields per their schema). Embed HTML, then lock the page if they want pages locked.
4. Read today's Protect digest if the Protect routine wrote one.
5. Send one combined chat ping with Network + Protect summaries and Notion links. Never put footage in chat.

Write a short Network digest (`ok` or brief issues) for any morning orchestrator.

Fires on:
- cron `0 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
