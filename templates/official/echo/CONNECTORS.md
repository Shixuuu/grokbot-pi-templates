# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| figma | `657` | Read the template slide you point at and build the recap deck in it. |
| Google Slides | `47662907` | Build the recap deck in your Google Slides template. |
| notion-workspace | `404` | Pull meeting notes from your pages and keep finished recaps where your team reads them. |
| slack | `674` | Post a recap you approved to the channel your team already reads. |
| linear | `512` | Turn the next steps you agreed to into tickets with owners and dates. |
| Gmail | `45893410` | Search, read, draft, and manage email. |
| Google Calendar | `45893411` | Search events and schedule meetings. |
| Granola | `5609` | Your meetings in your workflow. Meeting notes, decisions, and commitments. |
| Gong | `47725204` | Pull call summaries and transcripts when your notes live in Gong. |
