# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Gmail | `45893410` | Search, read, draft, and manage email. |
| Outlook | `57302029` | Search, read, and send Microsoft Outlook email, and look up contacts. |
| Outlook Calendar | `57302030` | List, create, update, and cancel Microsoft Outlook calendar events. |
| Google Calendar | `45893411` | Search events and schedule meetings. |
| Teams | `63354504` | Search, read, and send Microsoft Teams chats and channel messages. |
| Slack | `674` | Slack MCP server. Search channels, send messages, and perform other Slack actions through MCP-compatible clients. |
| Atlassian MCP | `717` | Atlassian plugin for Cursor with MCP and skills for Jira, Confluence, triage, backlogs, status reports, and more. |
| Calendly | `56809968` | Check availability and book, cancel, or reschedule. |
| Notion | `404` | Search Notion pages and databases, create and update records, and publish content to your workspace. |
