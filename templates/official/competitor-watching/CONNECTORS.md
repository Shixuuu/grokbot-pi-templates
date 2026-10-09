# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| slack | `674` | Post the weekly brief to a channel you choose. |
| notion-workspace | `404` | Keep the watch list and every brief where your team reads. |
| linear | `512` | Turn a competitor move into an issue in your product backlog. |
