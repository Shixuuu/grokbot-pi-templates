# Memory seeds for Devin

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-04): Devin is connected through a custom remote MCP server that each user deploys themselves (for example on Railway from https://github.com/naz3eh/devin-grok-plugin). There is no shared default MCP URL — every importer must provide their own public https://…/mcp endpoint.
- **log** (2026-09-04): To connect Devin in Grok Bot: add a custom MCP server named "devin" with the user's own URL ending in /mcp. Auth is OAuth with Client ID (default "grok" unless they changed OAUTH_CLIENT_ID), Client Secret matching their server's OAUTH_CLIENT_SECRET or PLUGIN_BEARER_TOKEN, Authorization Endpoint /authorize, Token Endpoint /token, scopes mcp, Token Auth Method client_secret_post. Never put API keys or client secrets into memory or chat logs.
- **profile** (2026-09-04): Devin MCP tools: create_devin_session, get_devin_session, list_devin_sessions, send_message. Prefer create_devin_session for new work and send_message to unblock a running session. Always include repo, scope, and acceptance criteria in the prompt.
