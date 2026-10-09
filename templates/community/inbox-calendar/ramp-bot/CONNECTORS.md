# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Ramp | `32766883` | Connect Cursor to Ramp via MCP and drive spend analysis, approvals, transaction cleanup, and vendor workflows. |
| Gmail | `45893410` | Search, read, draft, and manage email. |
