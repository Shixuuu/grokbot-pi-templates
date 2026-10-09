---
name: control4-director-ops
description: "Use when connecting to Control4 Director (REST/Socket.IO), Apple Music search/play, multi-room, network-audio announcements, or approved writes."
---

# Control4 Director ops

## Safety
- Ask the user before every **write** (lights, fans, rooms, audio, shades, reconnects, driver toggles, station starts).
- Inventory and status **reads** are OK without asking.
- Never paste passwords, JWTs, NVR credentials, full `stationid` DRM blobs, or bearer tokens into chat or skill docs. Reference env var names and file paths only.

## Network model
- Director HTTPS is on the home LAN (typical `:443`). The Grok Bot Linux computer usually **cannot** reach it.
- Run Director API calls from a **registered computer on the same LAN** (or VPN) as the controller. Prefer Shell with that machine’s `machineId`.
- TLS on local Director is often self-signed — use verify-off (`curl -k` / Python `ssl` unverified) for local REST only.

## Auth (no silent refresh)
1. Cloud account login with Control4 email/password (env: `CONTROL4_USER`, `CONTROL4_PASSWORD`; host hint `CONTROL4_HOST`).
2. List controllers; pick the home Core / controller `commonName`.
3. Exchange account bearer for a **Director JWT**. Persist `{ token, validSeconds }` mirrors on the LAN computer and optionally the box.
4. `validSeconds` is typically **86400** (24h). There is **no refresh token** — re-mint on 401.
5. Call Director with `Authorization: Bearer <director_jwt>`.

Libraries: `pyControl4` is fine. Keep secrets in mode-`600` env files.

## Core REST shapes
- Commands: `POST /api/v1/items/{id}/commands` with `{"async": false, "command": "NAME", "tParams": {...}}`.
- Lights: `SET_LEVEL`; rooms: `ROOM_OFF`; volume: `SET_VOLUME_LEVEL`; skip: `SKIP_FWD`.
- Cameras: `GET_PROPERTIES` → DIGEST snapshot; never echo NVR password.
- Docs workspace: keep a local `control4/docs/` folder for inventory notes without secrets.

## Apple Music / Digital Media
Real play = CAD DigMedia (project-specific id) + Radio/OK_playing when Radio; false positive = CAD Apple Music proxy only.
Socket.IO EIO4 + jwt + datatoui + `rest` GetTabList→Browse→Play/PlayStation + NAVID/SEQ. Bare HTTPS PlayStation is a no-op.
Resolve Apple Music proxy and room item ids from Director inventory for this home.
Search Browse filters → Play NOW or PlayStation (song/artist radio). Multi-room: `POST /api/v1/media_sessions/{id}/rooms` body=room id.

Keep LAN helper scripts on the registered computer (Socket.IO replay/search), not secrets in chat.

### Network-audio announcements
Restore policy after announce: before SELECT announce input, snapshot room CAD/POWER/volume/source. After clip ends: restore prior source/session if it was playing; if POWER was 0 / CAD 0, ROOM_OFF the room. Never leave the announce input selected as a side effect.
Typical pattern: TTS → LAN-reachable MP3 URL → player play command → `SELECT_AUDIO_DEVICE` + volume on room.

## Shades
Ask before moves. Prefer Control4 shade / HTTP Send drivers when installed. Gateway CGI fallbacks (e.g. Tro.y `troy.cgi` list + UP/DOWN/STOP by integration id) are optional after inventory.

## Operating loop
Token → resolve ids → confirm writes → LAN computer → docs without secrets.
