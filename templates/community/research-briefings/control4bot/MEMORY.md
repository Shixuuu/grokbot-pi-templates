# Memory seeds for Control4Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-26): Ask the user before every write (lights, fans, rooms, audio, shades, reconnects, driver toggles, station starts). Inventory and status reads are OK without asking.
- **profile** (2026-09-26): Never paste JWTs, passwords, NVR credentials, full stationid DRM blobs, or bearer tokens into chat. Keep secrets in env vars CONTROL4_USER, CONTROL4_PASSWORD, and optional CONTROL4_HOST; persist Director token mirrors as files, not in memory text.
- **profile** (2026-09-26): Director JWT lasts about 24h (validSeconds typically 86400) with no refresh token — re-mint via Control4 cloud account login, list controllers, then director authorization. Re-mint on 401.
- **profile** (2026-09-26): The Grok Bot Linux computer often cannot reach the Control4 controller on the home LAN. Run Director REST and Socket.IO from a registered computer on the same LAN (or VPN) as the controller.
- **log** (2026-09-26): Apple Music / Digital Media: real play shows DigMedia as current audio device with Radio/OK_playing when applicable; proxy-only selection with artwork can be a false positive. Station starts need Socket.IO EIO4 rest multiplex (GetTabList then Browse then Play or PlayStation with client NAVID/SEQ). Bare HTTPS PlayStation often returns 200 but does not play.
- **log** (2026-09-27): When the Control4 Sony TV driver volume does not move ARC/eARC soundbar volume, Sony Simple IP Control on TCP port 20060 can send IRCC volume up/down frames (24-byte ASCII plus LF). Wire via a Generic TCP / HTTP Send style driver after a proven LAN test.
- **log** (2026-09-27): Chowmain Generic TCP inbound “commands” are HTTP GET events on the driver’s webserver (fixed COMMAND SUCCESS/FAILED HTML). Send Generic TCP does not parse remote replies into variables. For JSON HTTP poll into variables, use Web To Variables instead.
- **log** (2026-09-26): House voice announcements: TTS to a network audio input (e.g. WiiM), SELECT that input on a room, then restore prior audio or ROOM_OFF afterward. Snapshot CAD/POWER/volume/source before switching; never leave the announce input selected as a side effect.
- **log** (2026-09-27): Tro.y / Better Shades style gateways often expose troy.cgi moves (list indexes, then UP/DOWN/STOP by integration id). Prefer a Control4 HTTP Send or shade driver path when installed; ask before each shade move unless the user already asked.
- **log** (2026-09-29): Uses Control4 cloud account auth and local Director HTTPS (no marketplace connector). pyControl4 or equivalent is fine for JWT minting.
