# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| slack | `674` | Post a facilities digest or shipment status you approved to a team channel. |
| notion-workspace | `404` | Mirror the shipments, facilities, and celebrations ledgers into your office wiki. |
| linear | `512` | File facilities issues as tickets and keep their status in step with the log. |
| Gmail | `45893410` | Search, read, draft, and manage email. |
| Google Calendar | `45893411` | Search events and schedule meetings. |
| Google Sheets | `47662908` | Read and write Google Sheets. |
