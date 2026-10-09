# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| slack | `674` | Read new event and sponsorship asks out of the channel where people already ask. |
| notion-workspace | `404` | Keep the event queue and the weekly review where your team looks things up. |
| linear | `512` | Track what you owe an organizer after a yes as issues with owners and due dates. |
| figma | `657` | Pull the logo pack, booth artwork, or slides an organizer is waiting on. |
| hex | `651` | Chart event spend against your cap and your yes rate over a quarter. |
| Gmail | `45893410` | Search, read, draft, and manage email. |
| Google Calendar | `45893411` | Search events and schedule meetings. |
| Google Drive | `45893413` | Read the tracker sheet and organizer files your team already keeps in Drive. |
| Google Sheets | `47662908` | Read and write Google Sheets. |
