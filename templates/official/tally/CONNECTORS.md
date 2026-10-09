# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| slack | `674` | Watch your channels for reporting asks and post the reports you approve. |
| notion-workspace | `404` | Keep every weekly and monthly report where your team looks things up. |
| linear | `512` | Turn something a report says to fix into an issue in your backlog. |
| hex | `651` | Read spend and conversion data that already lands in your warehouse. |
| Databricks SQL | `32738678` | Query spend and conversion tables straight from your warehouse. |
| Gmail | `45893410` | Pick up the scheduled export emails the ad platforms send. |
| Google Sheets | `47662908` | Read exports you keep in a sheet. |
