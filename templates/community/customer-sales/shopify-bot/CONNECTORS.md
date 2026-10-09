# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Shopify | `3970` | Shopify developer tools for Cursor — search Shopify docs, generate and validate GraphQL, Liquid, and UI extension code. Skill scripts send usage telemetry (queries, code, model/client identifiers) to shopify.dev by default; set OPT_OUT_INSTRUMENTATION=true, or create an empty file at ~/.config/shopify-ai-toolkit/opt-out, to disable. |
