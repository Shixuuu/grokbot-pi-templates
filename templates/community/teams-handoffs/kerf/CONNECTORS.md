# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Linear | `512` | Cursor Plugin for Linear - enables AI assistants to manage issues, projects, documents, and more across your Linear workspace |
| Notion | `404` | Notion Skills + Notion MCP server packaged as a Cursor plugin. |
| Monday.com | `21010834` | Seven skills for monday CRM users — first-run setup, morning briefings, forecast dashboards, board diagnosis, bulk data hygiene, workspace setup, and meeting-to-opportunity sync. Each skill publishes a monday artifact (update, doc, or dashboard) so work stays inside monday. Composes the official monday MCP connector; no custom server, no new auth. |
| Google Drive | `45893413` | Search, read, create, and share files. |
