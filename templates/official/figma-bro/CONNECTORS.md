# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| figma | `657` | Read your file directly: the layer tree, the components, the variables, the prototype, and the exact values. |
| notion-workspace | `404` | Park specs and audits where your team already looks things up. |
| linear | `512` | Turn handoff open questions and audit fixes into issues you approve first. |
| slack | `674` | Drop a spec or a handoff note into the channel your engineers already read. |
