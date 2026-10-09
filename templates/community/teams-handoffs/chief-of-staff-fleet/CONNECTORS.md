# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Notion | `404` | Search Notion pages and databases, create and update records, and publish content to your workspace. |
| Gmail | `45893410` | Search, read, draft, and manage email. |
| Google Calendar | `45893411` | Search events and schedule meetings. |
| Continual Learning | `701` | Incrementally learns durable user preferences and workspace facts from transcript changes and keeps AGENTS.md up to date with plain bullet points. |
