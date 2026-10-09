# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Slack | `674` | Slack MCP server. Search channels, send messages, and perform other Slack actions through MCP-compatible clients. |
| Notion | `404` | Notion Skills + Notion MCP server packaged as a Cursor plugin. |
| Linear | `512` | Cursor Plugin for Linear - enables AI assistants to manage issues, projects, documents, and more across your Linear workspace |
| Hex | `651` | AI analytics and data collaboration - connect Cursor to your Hex workspace with MCP |
