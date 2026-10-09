# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| ClickUp | `5069` | Connect Cursor to your ClickUp workspace — manage tasks, track time, and collaborate without switching context. |
| Notion | `404` | Notion Skills + Notion MCP server packaged as a Cursor plugin. |
| Google Drive | `45893413` | Search, read, create, and share files. |
| Dropbox | `53761261` | The Dropbox plugin for Cursor connects your Dropbox files directly to Cursor, so you can search, reference, and organize files, save generated content, and create sharing links - all without switching tools. It respects your existing Dropbox permissions, and Cursor only works with files you already have access to. |
| Gmail | `45893410` | Search, read, draft, and manage email. |
| Slack | `674` | Slack MCP server. Search channels, send messages, and perform other Slack actions through MCP-compatible clients. |
| Google Calendar | `45893411` | Search events and schedule meetings. |
