# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| figma | `657` | Read a frame straight from a file link instead of waiting on a screenshot. |
| slack | `674` | Post a critique you approved into the channel your team reviews in. |
| notion-workspace | `404` | Keep the critiques and open fix lists on a page your team can read. |
| linear | `512` | File the blockers as tickets on the right team, drafted for your yes. |
