# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Gong | `47725204` | Call transcripts, the evidence behind every criterion. Granola works too. |
| Granola | `5609` | Transcript source for meetings your recorder did not capture. |
| Salesforce | `47725205` | Opportunities, stage history, and the qualification fields the audit fills. Connect the one CRM you use. |
| HubSpot | `49339689` | CRM alternative to Salesforce. |
| Attio | `62459236` | CRM alternative to Salesforce. |
| Slack | `674` | Deliver the weekly audit as a DM. |
| Gmail | `45893410` | Checks whether we did what we promised on the last call. |
| Notion | `404` | Keep audits and the framework definitions where your team already looks. |
| Google Sheets | `47662908` | Export the scorecards when your team tracks them in a sheet. |
