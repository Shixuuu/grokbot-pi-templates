# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Gmail | `45893410` | Search, read, draft, and manage email. |
| Google Calendar | `45893411` | Search events and schedule meetings. |
| Wix | `761` | Build, manage, and deploy Wix sites and apps directly from Cursor. Includes CLI development skills for creating dashboard extensions, backend APIs, site widgets, and service plugins. Connects to the Wix MCP server for site management. |
| Notion | `404` | Notion Skills + Notion MCP server packaged as a Cursor plugin. |
