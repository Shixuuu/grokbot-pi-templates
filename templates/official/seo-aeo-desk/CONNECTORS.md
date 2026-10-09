# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| notion-workspace | `404` | Keep the ideas board, briefs, and question map where your team already writes. |
| slack | `674` | Post the weekly search report and topic watch to a channel you choose. |
| linear | `512` | File each brief as a ticket on your content backlog so writers pick it up in the queue. |
| hex | `651` | Query your warehouse to tie organic pages back to signups and closed deals. |
| Profound | `51168001` | Read prompt volumes and AI answer visibility for the topics on your board. |
| Google Sheets | `47662908` | Read and write Google Sheets. |
