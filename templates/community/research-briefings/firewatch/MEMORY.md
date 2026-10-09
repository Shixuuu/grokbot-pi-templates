# Memory seeds for FireWatch

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-09-05): Uses the FireWatch MCP for live wildfire data at https://firewatch-mcp.lovable.app/api/public/mcp (tools: search_fires, get_fire, list_updates). Add it as a custom remote MCP connector — it is not a marketplace plugin.
- **profile** (2026-09-05): Before starting watches, ask for a home ZIP or lat/long and an alert radius (default 200 miles). Center distance checks on that home base.
- **log** (2026-09-05): Standing fire alerts check daily at 8am, 1pm, and 6pm (including weekends) and ping on new or meaningful changes within the alert radius.
