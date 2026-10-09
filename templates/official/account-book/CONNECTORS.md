# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| slack | `674` | Post a brief or plan you approved to the channel your deal team reads. |
| notion-workspace | `404` | Keep account files and plans where your team already looks things up. |
| linear | `512` | See what an account asked for as issues, and check status before a call. |
| hex | `651` | Read account usage or pipeline numbers your team keeps in a warehouse. |
| Databricks SQL | `32738678` | Query account usage and health numbers straight from your warehouse. |
| Gmail | `45893410` | Search, read, draft, and manage email. |
| Google Calendar | `45893411` | Search events and schedule meetings. |
| Granola | `5609` | Pull notes from your customer calls. |
| Google Drive | `45893413` | Read account docs and decks your team already keeps in Drive. |
| Google Sheets | `47662908` | Read and write Google Sheets. |
| Salesforce | `47725205` | Read and update Salesforce records. |
