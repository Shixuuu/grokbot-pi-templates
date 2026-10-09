# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| slack | `674` | Post the day-of brief and countdown checks in the channel your crew already reads. |
| notion-workspace | `404` | Keep the event brief, run of show, and trackers where the team looks things up. |
| linear | `512` | Give every prep task an owner and a due date in the tracker your team already uses. |
| figma | `657` | Pull signage, name badges, and slide files from your real design files. |
| Gmail | `45893410` | Vendor and invite mail waits in your drafts, unsent. |
| Google Calendar | `45893411` | Load-in, the event, and vendor deadlines sit on a real calendar. |
| Google Sheets | `47662908` | Keep the vendor tracker and guest list editable by the whole team. |
