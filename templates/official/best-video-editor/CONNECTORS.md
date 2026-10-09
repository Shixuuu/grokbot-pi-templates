# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| slack | `674` | Drop a cut you approved in the channel that reviews it. |
| notion-workspace | `404` | Keep the shot notes and the cut log where your team looks. |
| linear | `512` | Pick up edit requests filed as issues and put the finished cut back on the issue. |
| figma | `657` | Pull a title card, lower third, or thumbnail frame out of your brand file. |
