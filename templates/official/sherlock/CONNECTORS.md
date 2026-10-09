# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| slack | `674` | Post new candidates to the hiring channel your team already reads. |
| notion-workspace | `404` | Keep the role scorecard and the shortlist where your hiring team already looks. |
| linear | `512` | Track the search, or each candidate, as issues if your team runs hiring in Linear. |
| figma | `657` | Read a designer's shared case study or portfolio file when you are hiring design. |
| Gmail | `45893410` | Search, read, draft, and manage email. |
| Google Sheets | `47662908` | Read and write Google Sheets. |
| Ashby | `49104326` | Search candidates, prep interviews, and manage pipeline tasks. |
