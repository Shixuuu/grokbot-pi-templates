# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| notion-workspace | `404` | Keep the proof bank, the case studies, and the drafts where your team already looks. |
| slack | `674` | Watch the channel where customer wins get posted, and drop the Monday roundup there. |
| linear | `512` | Track ready-to-write customers and pending approvals as tasks your team can see. |
| figma | `657` | Lay a finished case study into a page design instead of handing over raw text. |
| hex | `651` | Check a customer's numbers against your own data before you publish them. |
| Gmail | `45893410` | Search, read, draft, and manage email. |
| Granola | `5609` | Pull customer call notes straight from your meetings. |
