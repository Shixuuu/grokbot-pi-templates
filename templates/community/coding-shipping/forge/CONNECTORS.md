# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| flow-next | `57694173` | Zero-dependency, spec-driven agentic SDLC: durable specs, context-fit plans, re-anchored workers, adversarial cross-model review, and receipts. (Ralph autonomous mode is available on other hosts; intentionally not registered on Cursor.) |
