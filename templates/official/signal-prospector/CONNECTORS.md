# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Salesforce | `47725205` | Leads, contacts, campaign responses, activities, and ownership. Connect the one CRM you use. |
| HubSpot | `49339689` | CRM alternative to Salesforce; form fills and email engagement count as signals. |
| Attio | `62459236` | CRM alternative to Salesforce; lists and notes carry the signals. |
| Mixpanel | `11976` | Product signups, activation, and usage spikes by company domain. |
| X | `49086599` | Public posts from the account and its leaders, for a dated hook the signal scan can cite. |
| Hunter | `62459238` | Finds and verifies business emails for ranked contacts who are not in the CRM yet. |
| Clay | `49110469` | Enrichment for titles, seniority, and company facts when you already run Clay. |
| Gmail | `45893410` | Saves first-touch drafts and learns the owner's voice. Use Outlook instead on Microsoft 365. |
| Slack | `674` | Deliver the signal digest as a DM. |
