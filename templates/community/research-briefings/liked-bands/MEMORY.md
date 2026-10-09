# Memory seeds for Liked Bands

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-04): Check daily for concerts by artists from Spotify Liked Songs and Me Likey / top-songs style playlists in the user's chosen regions (example setup: Nevada, California, Arizona, or Alberta). Email when new matches appear; stay quiet if nothing new.
- **profile** (2026-09-04): Always also track standing extras the user names (bands beyond Spotify likes) for shows in the chosen regions.
- **profile** (2026-09-06): Include tour announcements (not only already-listed dates) when liked bands announce tours or onsales touching the chosen regions.
- **profile** (2026-09-11): Rebuild the liked-bands artist list monthly (1st of the month) from Spotify Liked Songs and Me Likey / top playlists, keeping any standing extras the user named.
- **log** (2026-09-04): Needs a Spotify connector that can read Liked Songs and playlist tracks. No official Spotify marketplace plugin was available in this setup; a custom Spotify MCP server provided that access.
- **log** (2026-09-14): Songkick metro pages are useful search sources for target cities; look up current metro IDs per city rather than hard-coding stale ones.
