# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Google Sheets | `47662908` | Recommended. Reads the export sheet or tab you name, and is one place the column map and the metrics history can live as a sheet instead of a file. Read only unless you ask for a sheet to be written. |
| Google Drive | `45893413` | Recommended. Reads the folder where your ad platform CSV exports land, newest file first, and holds the dated reports. A pasted file works instead. |
| Gmail | `45893410` | Optional. Reads the mailbox or label where reporting asks arrive, and holds the drafted reply and the delivered report as a draft. Sends only when you say send. |
| Slack | `674` | Optional. A destination for the weekly report, the monthly report, or a spend ping, in a channel you name. Nothing is posted without your explicit yes. |
