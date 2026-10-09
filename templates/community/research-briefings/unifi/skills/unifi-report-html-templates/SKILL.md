---
name: unifi-report-html-templates
description: "Use when generating UniFi Network or Protect morning HTML reports for Notion — scrubbed dark-layout templates and layout rules."
---

Use when generating morning UniFi Notion HTML reports for Notion embeds.

Visual language: dark shadcn-style (Inter + Remix Icon), KPI cards, status chips, WAN badges, tables. Network reports have NO Cameras section. Protect Detections Notion property = people count only unless the owner chose otherwise.

Filenames default to Network_YYYY-MM-DD.html and Protect_YYYY-MM-DD.html (or owner prefs from UniFi Notion setup).

When building a report:
1. Start from the scrubbed sample templates if available beside this skill or attached in chat (Network_Daily_Template.html / Protect_Daily_Template.html).
2. Replace all sample SSIDs, camera labels, device names, IPs, and counts with live data for THIS owner.
3. Keep CSS/layout; do not invent site inventory.

WAN chip example pattern (only if dual-WAN and owner opted in): {IP}: Online | {IP}: Failover Ready | {IP}: Failover Connected | Offline.

Never embed footage, snapshots, or credentials in HTML or chat.
