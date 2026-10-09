# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| slack | `674` | Post the weekly brief in a channel your team already reads. |
| notion-workspace | `404` | Keep the prompt list, the briefs, and the fix list where your team looks things up. |
| linear | `512` | Turn the fix list into tracked issues for whoever owns those pages. |
| hex | `651` | Chart the share of answer scoreboard over time if your team already uses Hex. |
| Profound | `51168001` | Read AI answer visibility and citations across engines to widen the capture. |
| Google Sheets | `47662908` | Read and write Google Sheets. |
