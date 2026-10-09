---
name: connect-spotify
description: "use this when connecting Spotify for this DJ bot — Developer app, OAuth, and the local Spotify MCP server"
---

Use this when connecting Spotify for this DJ bot. Spotify Premium is required for playback.

There is no marketplace Spotify DJ connector. Use a local Spotify MCP server (stdio) with the user's own Developer app.

Never ask them to paste client secrets or tokens into chat. Prefer secret-request / secure env fields. Never put secrets in memory, skills, or routines.

Prerequisites: Spotify Premium, modern Node.js, ability to add a custom MCP server.

1. Create a Spotify Developer app at https://developer.spotify.com/dashboard/ (same account they listen with). Add redirect URI http://127.0.0.1:8888/callback or http://127.0.0.1:3000/callback — not localhost.
2. Clone https://github.com/marcelmarais/spotify-mcp-server, npm ci, npm run build, copy spotify-config.example.json to spotify-config.json, put Client ID/Secret/redirect URI there (mode 600).
3. Run npm run auth; user approves in the browser; tokens land in spotify-config.json.
4. Register MCP: command node, args absolute path to build/index.js. Confirm getNowPlaying / searchSpotify / createPlaylist work.
5. Smoke test with an open Spotify device.

On auth failure re-run npm run auth. Official Web API only — no scrapers.

After Spotify works, run Learn listener taste.
