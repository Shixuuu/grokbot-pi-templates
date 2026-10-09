# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Salesforce | `47725205` | Account, contract, contacts, and history the deck is built from. Connect the one CRM you use. |
| HubSpot | `49339689` | CRM alternative to Salesforce. |
| Attio | `62459236` | CRM alternative to Salesforce. |
| Gong | `47725204` | What the customer said they wanted, in their words, for the goals and outcomes slides. |
| Mixpanel | `11976` | Adoption and usage trends for the account's domain. |
| Google Drive | `45893413` | Upload the finished deck next to the account's other files. |
| OneDrive | `57302028` | Upload destination for Microsoft 365 users. |
