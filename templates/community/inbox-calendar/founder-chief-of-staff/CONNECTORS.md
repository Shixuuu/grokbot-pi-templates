# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Gmail | `45893410` | Search, read, draft, and manage email. |
| Google Calendar | `45893411` | Search events and schedule meetings. |
| Outlook | `57302029` | Search, read, and send Microsoft Outlook email, and look up contacts. |
| Outlook Calendar | `57302030` | List, create, update, and cancel Microsoft Outlook calendar events. |
| Notion | `404` | Notion Skills + Notion MCP server packaged as a Cursor plugin. |
| Slack | `674` | Slack MCP server. Search channels, send messages, and perform other Slack actions through MCP-compatible clients. |
| Granola | `5609` | Your meetings in your workflow. Granola gives Cursor access to what your team discussed, decided, and committed to. |
| Attio | `62459236` | Search and update CRM records, lists, notes, and tasks. |
