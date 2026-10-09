# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| GitHub | `48677658` | Required. Clones the website repo, opens the branch and the pull request for every change, and reads the pull request checks for a preview URL. Never merges. |
| Google Drive | `45893413` | Optional. Reads landing page briefs and picks up images or exports that belong on a page. A paste or an upload works instead. |
| Slack | `674` | Optional. A destination for the weekly audit instead of this chat, when you name a channel. Read only otherwise. |
| Figma | `657` | Optional. Reads the design reference a brief points at so a page matches the intended layout. Read only, and the repo's existing components still win. |
