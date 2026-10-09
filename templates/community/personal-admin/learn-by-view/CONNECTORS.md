# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Firecrawl | `789` | Web scraping, crawling, and search for AI agents. Gives Cursor full access to web content through the Firecrawl CLI. |
| Notion | `404` | Search Notion pages and databases, create and update records, and publish content to your workspace. |
