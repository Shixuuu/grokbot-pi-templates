# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| ClickUp | `5069` | Connect Cursor to your ClickUp workspace — manage tasks, track time, and collaborate without switching context. |
| GitHub | `48677658` | Manage repos, issues, pull requests, and Actions. |
| Gmail | `45893410` | Search, read, draft, and manage email. |
| Composio | `32661537` | Connect and operate 1000+ external apps from Cursor via the Composio MCP server. Managed OAuth, intelligent tool routing, and a remote sandbox for bulk data processing. |
