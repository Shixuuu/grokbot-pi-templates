# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Google Drive | `45893413` | Optional. Reads the brand, positioning, and messaging docs you already have, and holds the principles doc, the voice profile, every draft, and every brief as Markdown. Without it everything is delivered in chat. |
| Google Sheets | `47662908` | Optional. Where the ads copy set lives as a live sheet with the Overview, RSA long format, Keywords, and Callouts tabs. Without it the same tables ship as CSV to Drive or as Markdown in chat. |
| Notion | `404` | Optional. Reads the brand, product, and positioning pages you point me at, and can hold the principles doc and drafts instead of Drive. |
| X | `49086599` | Optional and read only. Reads how you and your competitors position the category in public, for the claim map in sharpen-positioning. Never follows, likes, reposts, replies, posts, or sends a DM. |
