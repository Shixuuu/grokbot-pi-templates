---
name: arr-stack-install
description: "use this when installing or tuning a Gluetun-backed *arr/download/Jellyfin media stack on the user’s computer"
---

# Arr stack install and tune

Use this when setting up or optimizing a Gluetun-backed *arr media stack on the user’s computer (Unraid, Docker Compose, or similar). Do **not** change an already-working stack unless they ask.

## Goal

Ship a working stack: Gluetun, download client (qBittorrent), Prowlarr + FlareSolverr, Radarr + Sonarr (+ Lidarr optional), Jellyfin (+ request app optional), optional cleanup/music apps.

All download/index/media apps share Gluetun’s network namespace. Ports publish on Gluetun only.

## 1) Inventory the machine first

Collect before writing compose/templates: CPU core count (HT/SMT), RAM, storage layout (cache/SSD vs large array), container-disk free space, VPN config availability, LAN subnet + host IP, remote mesh-VPN needs.

Never invent paths or credentials. Ask once for VPN config location and media root path.

## 2) Network design (non-negotiable)

1. Create Gluetun first; wait until healthy; verify egress IP is the VPN.
2. Put every media app on Gluetun’s network namespace.
3. Publish ports on Gluetun only (common defaults: download UI 8080, Radarr 7878, Sonarr 8989, Prowlarr 9696, Jellyfin 8096, requests 5055, FlareSolverr 8191, Lidarr 8686).
4. Container-to-container URLs use http://127.0.0.1:port.
5. User-facing URLs use http://LAN-or-mesh-IP:port — never tell humans to open 127.0.0.1.
6. Allow Gluetun LAN access to the home subnet.
7. Keep FlareSolverr on the same network namespace as Prowlarr.

## 3) CPU pin map (scale to this machine)

Example for 6 physical cores (adapt proportionally):
- Core 0: host/OS only — pin nothing
- Middle cores: Gluetun + *arrs + Jellyfin + helpers
- Highest cores: download client only, with a CPU quota and memory cap

Never pin the download client to core 0. WireGuard crypto still runs on Gluetun’s CPU set — heavy downloads can starve playback; document pause or rate-limit while watching.

## 4) Storage and hardlinks

One media bind shared by download client and *arr. Roots under that bind so imports hardlink. Incomplete may use fast cache; completed must land on the durable large volume. Keep container-disk headroom.

## 5) App wiring

Prowlarr→FlareSolverr at 127.0.0.1:8191. *arr download client→127.0.0.1 download UI port. Request app→*arr/Jellyfin via 127.0.0.1. Jellyfin libraries point at the same folders *arr writes. Prefer hardlinks.

## 6) Quality defaults

Movies prefer 1080p (fallback 720→SD). Shows prefer 720p. Reject foreign-language dubs when English/original is required. Music: lossless first; 320-class floor; upgrades on.

## 7) Jellyfin realities

SSDP often fails under Gluetun — manual server add. Direct play needs no GPU. If the client VPN drops LAN, use a mesh-VPN URL.

## 8) Optimize pass

Verify VPN egress IP, LAN UIs, pins, completed path on large volume, tiny test grab→hardlink→Jellyfin. If playback stutters under download load, pause/cap downloads — do not yank Jellyfin off VPN when library privacy is required.

## 9) Hard lessons

Bridge FlareSolverr + VPN Prowlarr breaks Cloudflare solving. Cache full of completed torrents takes the container disk read-only. Split mounts kill hardlinks. Pinning the download client away from Jellyfin does not move WireGuard crypto. Never paste API keys into chat.

## 10) Safety

Never change a live production stack unless asked. Never expose the stack to the public internet without an auth plan.
