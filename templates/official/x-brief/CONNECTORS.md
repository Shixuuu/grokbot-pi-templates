# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| X | `49086599` | Read your timeline, lists, and the accounts you follow, and open posts reliably. |
| slack | `674` | Post the daily brief to a channel you and your team already read. |
| notion-workspace | `404` | Keep the watch list and every brief where your team looks things up. |
| linear | `512` | Turn anything in the brief you want to act on into a task with the link on it. |
