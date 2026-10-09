# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| notion-workspace | `404` | Keep your coaching log, scorecards, and pre-call plans where you already work. |
| slack | `674` | Send a scorecard or a follow-up draft to yourself or your manager, only when you say so. |
| linear | `512` | File the product gaps buyers name on your calls as issues, only when you say so. |
| Gong | `47725204` | Pull your call recordings and transcripts straight from Gong instead of pasting them. |
| Google Calendar | `45893411` | See the calls coming up so a pre-call plan is ready before you dial in. |
