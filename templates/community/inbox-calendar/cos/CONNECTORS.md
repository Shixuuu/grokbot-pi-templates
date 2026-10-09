# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Notion | `404` | Notion Skills + Notion MCP server packaged as a Cursor plugin. |
| Gmail | `45893410` | Search, read, draft, and manage email. |
| Google Calendar | `45893411` | Search events and schedule meetings. |
| X | `49086599` | Search posts, read timelines, pull trends, and manage bookmarks. |
| GitHub | `48677658` | Manage repos, issues, pull requests, and Actions. |
