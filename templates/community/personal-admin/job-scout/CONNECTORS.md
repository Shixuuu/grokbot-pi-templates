# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Convex | `233` | Official Convex plugin for Cursor - reactive backend development with TypeScript, including rules, skills, MCP integration, and automation hooks |
| Firecrawl | `789` | Web scraping, crawling, and search for AI agents. Gives Cursor full access to web content through the Firecrawl CLI. |
| AgentMail | `48668144` | AI-native email infrastructure for coding agents. Create inboxes, send and receive emails, manage threads, and automate email workflows. |
