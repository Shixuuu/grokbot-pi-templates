# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Remotion | `49339676` | Optional. Remotion's own skills for animations, captions, and rendering, used for the graphics in each edit. |
| Google Drive | `45893413` | Optional. Pull raw footage from Drive and share preview links of finished cuts. |
