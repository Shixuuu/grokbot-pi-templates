# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| flutter-mcp-toolkit | `13272118` | Flutter MCP toolkit: inspect and drive debug apps (semantic snapshot, tap, hot-reload) and register custom MCP tools and resources at runtime from your Flutter app or game via mcp_toolkit — closed agent feedback loop. |
