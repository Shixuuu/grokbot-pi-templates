# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| github | `4956975` | Official GitHub MCP server for repository management. Create issues, manage pull requests, review code, search repositories, and interact with GitHub's full API directly from Claude Code. |
| Linear | `512` | The product development system for teams and agents. Manage issues, projects, documents, and everything else across your Linear workspace. |
| Notion | `404` | Notion Skills + Notion MCP server packaged as a Cursor plugin. |
