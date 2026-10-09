# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| slack | `674` | Drop a pulled still or clip in the channel where your team gives feedback. |
| notion-workspace | `404` | Keep the size sheet and the cleaned-up docs screenshots where your team looks things up. |
| figma | `657` | Read the real logo file, hex codes, and font for anything that gets an overlay. |
| linear | `512` | Pick up asset requests filed as issues and feed them into the weekly pull queue. |
