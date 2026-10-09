---
name: arr-stack-health
description: "use this when diagnosing *arr/Gluetun/Jellyfin outages, freezes, or CPU pegs"
---

# Arr stack health check

Use when playback is frozen, an *arr is down, VPN looks wrong, or CPU is pegged.

1. Check container status for Gluetun + media apps.
2. Verify Gluetun healthy and egress IP is VPN.
3. Compare CPU pins to the agreed map; note WireGuard softirq on Gluetun’s cores.
4. Check free space on container disk, cache, and media volume.
5. For Jellyfin freezes: separate host load / VPN crypto / client VPN blocking LAN / real transcoder failure.
6. Prefer pause or rate-limit downloads over moving Jellyfin off VPN.
7. After fixes, confirm LAN UI and a health endpoint.
