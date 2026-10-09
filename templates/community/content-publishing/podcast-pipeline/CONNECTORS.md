# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| X | `49086599` | Search posts, read timelines, pull trends, and manage bookmarks. |
| Link | `47709840` | Complete purchases with one-time-use payment credentials from a Link wallet, using spend requests the user has approved. |
| AgentMail | `48668144` | AI-native email infrastructure for coding agents. Create inboxes, send and receive emails, manage threads, and automate email workflows. |
