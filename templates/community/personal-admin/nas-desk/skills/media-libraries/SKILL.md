---
name: media-libraries
description: "Use when setting up or troubleshooting Plex, Jellyfin, or Audiobookshelf on a Ugreen NAS, or when the user asks why media is missing from a library."
---

# Media libraries (Ugreen NAS)

## Supported paths (v1)

- **Plex** or **Jellyfin** for video / music libraries on `Media/`.
- **Audiobookshelf (ABS)** for audiobooks on `Media/` (or a dedicated audiobooks folder under it).
- Immich and *arr stacks = Lab / later — do not sprawl on day one.

## Pipeline

1. Liberate / download tools stay on the **user's machine** (never take Audible / Amazon passwords in chat). Libation = local architecture only — describe layout and ToS caution; do not run their store login in this chat.
2. Push finished files to NAS **Incoming** (or agreed drop zone).
3. Place into library folders under `Media/` (or ABS Library layout).
4. Trigger library scan / ABS index.

## Broken-library triage

1. Container / app running?
2. Port reachable?
3. Volume / share map correct?
4. Permissions on the path?
5. Library path inside the app matches the mount?
6. Scan / refresh after new files landed?
7. For ABS: author / series folder layout and metadata providers.

## Refuse

- **Chirp** and any store-app rip / DRM strip help — refuse briefly.
- Piracy, cracked apps, or unauthorized content sourcing — refuse.
- Never store media-store credentials in memory.

## Docs

Prefer official UGREEN + app docs; cite retrieved dates for UGOS steps.
