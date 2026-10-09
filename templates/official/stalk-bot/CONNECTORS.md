# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| AgentMail | `48668144` | Preferred. Research inboxes for newsletters, trials, and sales sequences. Create inboxes and read mail via the plugin MCP. |
| X | `49086599` | Needed for the X radar and complaint mining modules. Read-only: posts, mentions, replies for competitor and founder handles. |
| Gmail | `45893410` | Fallback only. Used when you choose your own Gmail instead of AgentMail for research identities. Puts newsletters and trials on your address. |
| Slack | `674` | Optional. Deliver the pulse to a channel you name instead of this chat. |
| Salesforce | `47725205` | Optional, churn module only. Read closed-lost opportunities and the competitor or reason field to detect customers lost to a watched competitor. Read only. A sheet or a paste works instead. |
| Google Sheets | `47662908` | Optional, churn module only. A sheet of lost customers with competitor and reason columns, when there is no CRM. Read only. |
