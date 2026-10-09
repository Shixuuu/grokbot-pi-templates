---
name: home-assistant-mcp-connect
description: "Use this when connecting Home Assistant via MCP, fixing a broken HA connector, or guiding someone through MCP Server setup and AddMcpServer."
---

# Home Assistant MCP connect

Connect this bot to a user's Home Assistant so Assist-exposed devices can be read and controlled live.

## Important constraints

- There is usually **no marketplace Home Assistant plugin**. Do not invent one from a fuzzy SearchPlugins match.
- Custom remote MCP is added with `AddMcpServer` (url + headers), never by pasting connect links in chat.
- **Do not pack custom MCP servers into bot templates.** Templates should teach this flow and leave a log memory that the next owner must connect their own instance.
- Never put long-lived tokens or URLs with secrets in chat. Use `secret-request` for the token. Never echo `process.env` secret values or `box-secrets.json` contents to the user.
- Prefer the built-in HA **Model Context Protocol Server** integration (`/api/mcp`) for Assist-style control. Mention community `ha-mcp` only if they need config/automation editing beyond Assist.

## Prerequisites on Home Assistant (user does these)

1. Home Assistant **2025.2+**.
2. Settings → Devices & services → Add Integration → **Model Context Protocol Server**.
3. Enable **Control Home Assistant** in the integration options if actions (not only read) are wanted.
4. Expose entities to Assist (Voice assistants → Expose). Only exposed entities appear as MCP tools. Start with lights/switches/climate/sensors; skip locks, alarms, and anything they do not want an assistant near.
5. Remote reachability: External URL under Settings → System → Network must match the public hostname. Home Assistant Cloud is simplest; reverse proxy is fine if hostname/scheme match and HTTPS works.
6. Auth for this bot: a **long-lived access token** (Profile → Security → Create token).

MCP endpoint: `https://<their-ha-base-url>/api/mcp` (optionally `/api/mcp/assist`).

## Connect from this bot

1. Confirm MCP is enabled and ask how they reach HA (Nabu Casa / own remote URL / local-only).
2. If local-only, explain this bot cannot reach LAN URLs; they need Cloud, a public reverse proxy, or to work without live MCP (YAML/screenshots).
3. Ask for the **base URL only** (origin, no `/api/mcp`). Save it as conversation or agent memory without the token.
4. `secret-request` for `HOMEASSISTANT_TOKEN` (long-lived access token). Confirm it is set without printing the value.
5. Confirm with a question widget before `AddMcpServer` (changes their account; connector is shared across their agents).
6. Call `AddMcpServer` with:
   - `name`: `Home Assistant`
   - `url`: `https://<base>/api/mcp`
   - `headers`: `{ "Authorization": "Bearer <token>" }` using the saved secret (do not paste the token into chat)
7. Avoid relying on `mcp-proxy` stdio unless necessary; version skew often breaks it. Prefer the remote HTTP MCP URL.
8. Verify with `GetMcpServerStatus` / `GetDynamicTools` on the new namespace, then a read-only live context call before offering controls.
9. If Cloudflare or a WAF blocks automated clients, say so plainly and suggest allowing the connector path, using HA Cloud, or checking External URL / trusted proxies.

## After connect

- Offer a concrete first action (energy snapshot, lights in a room, climate) based on what live context shows.
- Persist: they use HA; MCP connected; base URL (not the token).
- For energy status, prefer instant power sensors and daily production/forecast sensors over lifetime Shelly kWh counters.

## If already connected

Do not re-prompt for URL/token. Use the existing connector. Restart with `RestartMcpServers` only if status is error/stuck.
