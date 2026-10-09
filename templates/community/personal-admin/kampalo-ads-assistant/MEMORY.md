# Memory seeds for Kampalo ads assistant

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-20): For Kampalo, never invent tools/fields/campaigns/metrics not returned by the server; always display campaign/platform/reason/action_id and obtain explicit approval before confirm=true or confirm_live=true on pauses or live ROAS rules.
- **log** (2026-09-20): Kampalo integration uses the hosted FastMCP at https://be.kampalo.com/mcp with Bearer auth (personal Kampalo API key). Synced reads cover Google Ads, Meta Ads, Search Console, GA4, and Meta organic. Writes are limited to automate_* tools with propose-then-confirm (confirm=true for pauses; confirm_live=true for live ROAS rules). Pass the Kampalo user_email (or user_id) on every tool call. Custom MCP — not a marketplace plugin; add the remote server from Kampalo Settings → Grok Bot.
