# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| slack | `674` | Post the day's drafts or the Friday recap to a channel your team reads. |
| notion-workspace | `404` | Keep the target list and every draft where your team looks things up. |
| linear | `512` | Turn a reply or a booked meeting into a task somebody owns. |
| Gmail | `45893410` | Every draft sits unsent in your own account until you send it. |
| Google Sheets | `47662908` | Keep the target list somewhere you can edit directly. |
| X | `49086599` | Read a prospect's recent posts for a real, dated hook when X is your channel. |
| Salesforce | `47725205` | Read who you already know so the list drops open deals and customers. |
