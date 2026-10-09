---
name: unifi-vlan-baseline
description: "Design or review UniFi Trusted/IoT/Guest/Management/Quarantine VLAN segmentation and inter-VLAN defaults."
---

# UniFi VLAN baseline

## Critical constraints
- Prefer Fabrics Canvas/Blueprint for shared VLAN/firewall objects; site-local only when a house truly differs.
- Prefer disable/pause over delete.
- Do not change WAN or open firewall broadly without a clear owner ask.
- Do not move cameras/TVs onto Trusted to fix discovery — fix Trusted → IoT instead.
- Do not touch a secondary site’s unique local config without a clear ask.

## Steps
1. Inventory live VLANs, DHCP, DNS, and inter-VLAN allow matrix.
2. Map to Trusted / IoT / Guest / Management / Quarantine (or equivalent).
3. Prefer one house SSID + Network Override over many SSIDs / PPSK.
4. Propose before broad firewall edits; apply via fabric when possible; report durable facts only.
