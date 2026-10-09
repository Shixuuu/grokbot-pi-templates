---
name: unifi-api-onboard
description: "First-time Site Manager API key setup and first authenticated hosts call. Use on first install or when setting up the Official UniFi API."
---

# UniFi API onboard

## Critical constraints
- Goal: one working authenticated read against Site Manager.
- Never ask the owner to paste the API key into chat — secure secret capture only; never write the key into memory or skills.
- Do not Arm/Disarm Protect, change WAN, or touch a secondary site during onboard.
- Do not invent a local NVR filesystem path.

## Steps
1. Explain Site Manager API home base api.ui.com/v1 with X-API-KEY; v1 GA is read-only.
2. Owner creates a key at unifi.ui.com → Settings → API Keys; store via secure secret request only.
3. Prove GET /v1/hosts then sites then devices.
4. Record durable facts only (host/site names and ids) — never the key.
