# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| slack | `674` | Post the morning triage and the weekly report to a channel your team already reads. |
| notion-workspace | `404` | Keep the lead ledger and every weekly report where your team looks things up. |
| linear | `512` | Open a follow-up issue when a lead is stuck or needs someone outside sales. |
| hex | `651` | Pull leads and pipeline history from your warehouse when that is where they land. |
| Databricks SQL | `32738678` | Query lead and pipeline tables straight from your warehouse. |
| Gmail | `45893410` | Save first replies as unsent drafts in your own account. |
| Google Sheets | `47662908` | Read and write the lead list where it already lives. |
| Salesforce | `47725205` | Read leads and write owners and next steps back to your CRM. |
