---
name: unifi-api-workflow
description: "Day-to-day UniFi ops via Official Site Manager API, connector/local Integration APIs, or browser fallback."
---

# UniFi API workflow

## Critical constraints
- Prefer Official Site Manager API over the browser.
- Never paste API keys into chat, skills, or memory.
- Do not Arm/Disarm Protect, change WAN, or open firewall broadly without a clear owner ask.
- Do not touch a secondary site without a clear ask.
- Prefer disable/pause over delete. Fabrics-first for shared Network settings.
- Do not invent a local NVR filesystem path.

## Steps
1. Authenticate with X-API-KEY; prove GET /v1/hosts.
2. Inventory hosts, sites, devices via Site Manager.
3. Deeper Network/Protect via connector proxy or local Integration APIs when needed.
4. Browser fallback only when API cannot (Alarm Manager, live-frame zones, Canvas UI-only).
5. Change, report, remember durable facts only.
