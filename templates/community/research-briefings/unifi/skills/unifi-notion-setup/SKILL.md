---
name: unifi-notion-setup
description: "Use when a UniFi house bot is newly imported or UniFi/Notion morning reporting is not configured yet — prompt the owner for their MCP, Notion databases, and site preferences."
---

Goal: gather the owner's environment with short questions, save durable preferences as memories, and only then run or refine morning Network/Protect routines. Do not invent their MCP URL, Notion IDs, SSIDs, or camera names.

Prompt for (skip anything already known):

1. **UniFi MCP** — how they connect (custom relay name/URL is fine; never ask for tokens in chat). Confirm Network + Protect tools are available.
2. **Notion** — Network Reports data source and Protect Reports data source (links or IDs). Optional hub page. Whether new report pages should be locked after upload.
3. **Report naming** — defaults `Network Daily` / `Protect Daily` and `Network_YYYY-MM-DD.html` / `Protect_YYYY-MM-DD.html`, or their preferred titles.
4. **Site expectations** — timezone; expected SSIDs; expected camera names; overnight detection window (local time).
5. **WAN** — single or dual uplink; if dual, how they want HTML chips and Notion SELECT labels (example pattern: `{IP}: Online`, `{IP}: Failover Ready`, `{IP}: Failover Connected`, or `Offline`).
6. **Alerts** — Protect Detections people-only vs all types; when to ping vs stay quiet; whether the Network morning run sends the combined Network+Protect message.
7. **Recovery** — optional: if live reads hang while the connector looks connected, may they restart only a LAN UniFi relay sidecar (not upstream MCP containers)?

After answers: write concise profile/log memories, confirm the morning routine schedules, and offer a one-time dry-run report. Never ask them to paste secrets; point them at connector auth instead.

Also point them at the UniFi report HTML templates skill for Network/Protect report visual layout once Notion DBs are set.
