# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Slack | `674` | Slack MCP server. Search channels, send messages, and perform other Slack actions through MCP-compatible clients. |
| Gmail | `45893410` | Search, read, draft, and manage email. |
