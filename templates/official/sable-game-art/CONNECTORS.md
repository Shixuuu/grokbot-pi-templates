# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| figma | `657` | Read your mood board and mockups, and keep the style guide where your artists already work. |
| notion-workspace | `404` | Keep the style guide, the spec, and the shot list where your team looks things up. |
| slack | `674` | Post the weekly art review to the channel your team already reads. |
| linear | `512` | Turn the shot list into issues so the art backlog sits with the rest of the work. |
