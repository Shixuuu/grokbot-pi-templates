# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Outlook | `57302029` | Search, read, and send Microsoft Outlook email, and look up contacts. |
| Outlook Calendar | `57302030` | List, create, update, and cancel Microsoft Outlook calendar events. |
