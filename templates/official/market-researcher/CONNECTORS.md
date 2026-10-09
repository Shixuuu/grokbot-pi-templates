# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| X | `49086599` | Recommended. Reads competitor company and product handles for post volume, engagement, themes, and promoted copy being tested in public. Read only, it never follows, likes, reposts, replies, posts, or sends a DM. |
| Google Sheets | `47662908` | Optional. Holds the swipe file index, the promotion calendar, the search overlap table, and the messaging matrix when the user wants them outside chat, and is one place an ad or search export can live. A paste works instead. |
| Google Drive | `45893413` | Optional. The folder where ad platform, analytics, or search console CSV exports are dropped for the runs when a platform is not signed in. Read only. A paste works instead. |
| Slack | `674` | Optional. Delivers the weekly brief and the strategy read to a channel the user names instead of this chat. |
