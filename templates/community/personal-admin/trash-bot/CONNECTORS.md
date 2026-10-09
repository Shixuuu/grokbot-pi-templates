# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Inkbox | `57102943` | Give Cursor an Inkbox identity for email, SMS, iMessage, voice calls, contacts, notes, and agent-to-agent tasks. |
| here.now | `50420288` | Publish websites, apps, and files to live URLs at {slug}.here.now or custom domains. Publish HTML apps, documents, images, PDFs, videos, and static files, with access control, custom domains, analytics, and private Drive storage for agent files. |
