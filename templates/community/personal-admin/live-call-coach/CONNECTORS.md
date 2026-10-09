# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| In-call Product Answer | `51164696` | Use when a live call or chat needs a fast, customer-friendly Cursor product answer (SSO, privacy, Bugbot, Cloud Agent, pricing, limits) — 3–4 spoken sentences, docs-grounded, not a rollout guide or onboarding section. |
| 30-Minute Follow-up Nudge | `51567732` | Use when a customer or prospect call just ended (or ended about 30 minutes ago) and {user} needs draft follow-up reminders of who owes what — not a weekly success plan, a handoff brief, or an in-call product answer. |
