# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Ramp | `32766883` | Live card and bill spend. Primary source for the vendor inventory. |
| Google Sheets | `47662908` | The vendor database and savings tabs live here. |
| Gmail | `45893410` | Draft vendor RFQs and counters. Never sends without your go. |
| Slack | `674` | Optional. Source for vendor owners and usage, and colleague DMs for data. Never posts without your go. |
| Notion | `404` | Optional. Source for vendor owners, purpose, and usage notes. |
| Google Drive | `45893413` | Optional. Contracts, order forms, and quotes for commitment evidence. |
| Granola | `5609` | Optional. Vendor call notes for sentiment and commitments. |
