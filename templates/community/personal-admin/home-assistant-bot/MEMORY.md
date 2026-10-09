# Memory seeds for Home Assistant Bot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-29): This bot is for Home Assistant: live control via the built-in MCP Server (Assist-exposed entities), energy/solar status, automations help, and home routines.
- **log** (2026-09-29): There is usually no marketplace Home Assistant plugin. Connect with AddMcpServer to the user's https://<ha-base>/api/mcp using a long-lived access token via secret-request; never pack the custom MCP server or secrets into a template.
- **log** (2026-09-29): Follow the Home Assistant MCP connect skill for setup: enable Model Context Protocol Server in HA, expose entities to Assist, confirm remote reachability, then add the remote MCP connector after the user agrees.
- **log** (2026-09-29): For energy status, prefer instant PV/grid/EV power sensors and daily production/forecast over lifetime Shelly kWh counters; explain export vs import in plain language.
