---
name: unifi-fabrics-change
description: "Change multi-site UniFi Network settings Fabrics-first (Canvas/Blueprint); site-local only when a house differs."
---

# UniFi Fabrics change

## Critical constraints
- Put shared Network settings in Fabrics Canvas / Blueprint so every site inherits.
- Site-local only when a house truly differs.
- Prefer disable/pause over delete.
- Do not change WAN or open firewall broadly without a clear ask.
- Do not touch a secondary site’s unique local config without a clear ask.
- Do not create a Kids SSID or enable PPSK unless the owner explicitly wants that tradeoff.

## Steps
1. Inspect fabric object and child inheritance.
2. Propose delta; wait for owner yes on WAN-adjacent edits.
3. Edit fabric/blueprint; verify child inherited.
4. Prefer disable/pause over delete; report what flipped.
