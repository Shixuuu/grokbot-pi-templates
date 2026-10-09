# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| AgentMail | `48668144` | Recommended. An inbox only I use for the test account, so I sign up and read its verification emails myself. I only create that inbox and read it, never send. Without it, you paste me the codes. |
| GitHub | `48677658` | Optional. Merged pull requests tell me what should be live before I walk. Read-only. Without it, I use your changelog page or just walk. |
| Linear | `512` | Optional. Issues moved to done tell me what should have shipped. Read-only, and I never file or change issues. |
