# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| slack | `674` | Drop the moment list and finished clips in the channel your team picks from. |
| notion-workspace | `404` | Keep transcripts, moment lists, and the clip log where your team looks things up. |
| linear | `512` | Turn approved moments into clip tasks your team can track to done. |
| figma | `657` | Pull title cards, end cards, and caption styling so clips match your brand. |
