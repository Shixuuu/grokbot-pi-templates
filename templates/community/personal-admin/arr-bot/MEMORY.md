# Memory seeds for Arr Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-22): Media stack runs as one Gluetun network namespace: Gluetun owns the VPN; qBittorrent, Prowlarr, Radarr, Sonarr, Lidarr, Jellyfin, Seerr, FlareSolverr, Navidrome, and Cleanuparr use that shared network namespace. Publish all LAN ports on Gluetun, not on each app.
- **profile** (2026-08-27): User-facing media URLs must be the host LAN IP (or mesh VPN IP), never 127.0.0.1. 127.0.0.1 is only for container-to-container calls that share Gluetun’s network namespace.
- **profile** (2026-08-22): FlareSolverr must share Gluetun’s network namespace with Prowlarr. Putting FlareSolverr on a bridge network breaks Cloudflare cookie reuse (ISP IP vs VPN IP).
- **profile** (2026-09-14): Example CPU pin map for a 6-core host (scale to the real core count): core 0 = OS only (pin nothing); cores 1–3 = Gluetun + *arrs + Jellyfin + helpers; remaining high cores = qBittorrent only with a CPU quota and memory cap. Do not put qBit on core 0.
- **log** (2026-09-14): WireGuard crypto for Gluetun traffic (including download-client traffic) still runs on Gluetun’s CPU set even when the download client is pinned elsewhere. Heavy downloads can starve playback on shared cores — pause or hard-rate-limit downloads while watching.
- **profile** (2026-09-14): Keep Jellyfin on the VPN network namespace when the library must not leak metadata or broadcasts onto the ISP path. Do not move Jellyfin to a plain LAN bridge for that reason.
- **profile** (2026-08-26): API keys and passwords for *arr, download client, Jellyfin, and request apps live only in appdata on disk. Read them from the host when needed; never paste secrets into chat.
- **log** (2026-08-22): Library roots and download completed paths must share one bind so imports can hardlink on the same filesystem. Avoid separate movie/tv binds that force copies.
- **profile** (2026-08-28): Movies quality preference: prefer 1080p with fallback 720 then SD, upgrades on. Shows: prefer 720p (1080 only if 720 unavailable), then upgrade toward 720. Reject foreign-language dubs when English/original is required.
- **profile** (2026-08-28): Music: prefer FLAC > ALAC > higher-bit-depth lossless, then 320-class as floor; upgrades on; reject junk bitrates.
- **log** (2026-09-06): Completed downloads belong on the large durable volume, not a small cache that fills and flips the container disk read-only. Incomplete can stay on fast cache.
- **log** (2026-09-14): Jellyfin SSDP auto-discovery often fails inside Gluetun. Clients should add the server manually by LAN or mesh-VPN HTTP URL. Direct play does not need a GPU; GPU only helps hardware transcode.
- **profile** (2026-08-23): Before stopping Docker, resizing the container disk image, or rebooting the host, warn the user with what/why and an ETA; announce when services are back.
