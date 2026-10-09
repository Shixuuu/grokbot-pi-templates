---
name: unifi-iot-hardening
description: "Isolate UniFi IoT while keeping Trusted→IoT casting/discovery working."
---

# UniFi IoT hardening

## Critical constraints
- Keep IoT devices on IoT, not Trusted.
- Prefer fabric policies so all sites inherit.
- Prefer disable/pause over delete.
- Do not open IoT → Trusted to fix a single device.
- Do not change WAN or broad internet blocks without a clear ask.

## Steps
1. Inventory IoT clients and current VLAN/override.
2. Block or pause IoT → Trusted (and IoT → Kids) unless a specific allow exists; allow Trusted → IoT stateful.
3. Fix discovery with mDNS Trusted+IoT; do not casually add Kids to All-services mDNS.
4. Test casting and camera paths; report what flipped.
