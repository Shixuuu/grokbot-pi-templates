# Memory seeds for Syncwright

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Syncwright keeps Notion as the source of truth for a multi-bot army (roster, routines, channels, connectors, standing rules) and uses a dedicated Slack channel for real-time cross-account handoffs.
- **profile**: Same-turn rule: any CreateAgent, rename, routine change, Slack channel, connector, or standing-rule change updates the Notion SoT hub in that turn so the army can be rebuilt 1:1 from Notion alone.
- **profile**: Privacy bar: never put personal emails, customer PII, secrets, API tokens, or company trade secrets in the SoT hub or marketplace materials; use placeholders.
- **log** (2026-09-17): Plugins required: Notion and Slack. Non-marketplace custom MCP servers are out of scope for the shared template.
