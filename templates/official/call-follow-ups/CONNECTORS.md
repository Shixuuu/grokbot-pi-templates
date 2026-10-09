# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Gong | `47725204` | Finished calls, summaries, and transcripts. Granola covers the meetings it did not record. |
| Granola | `5609` | Transcript source for meetings your recorder did not capture. Works alongside Gong or on its own. |
| Salesforce | `47725205` | Where next steps, stage, close date, and new contacts are proposed. Connect the one CRM you use. |
| HubSpot | `49339689` | CRM alternative to Salesforce. |
| Attio | `62459236` | CRM alternative to Salesforce. |
| Gmail | `45893410` | Learns your voice from sent mail and saves follow-ups as drafts. Use Outlook instead on Microsoft 365. |
| Outlook | `57302029` | Email alternative for Microsoft 365 users. |
| Google Calendar | `45893411` | Matches a call to its meeting and attendees when the recorder's participant list is thin. |
| Slack | `674` | Deliver the post-call pack as a DM. |
| Notion | `404` | Keep post-call notes and the open promises where your team already looks. |
| Linear | `512` | Turn a commitment from a call into a ticket, drafted for you to approve. |
| Hex | `651` | Pull account numbers before a call when your team keeps them in a warehouse. |
