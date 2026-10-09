# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Finance | `63408931` | Link your bank, card, and investment accounts through Plaid so Grok can answer questions about balances, spending, subscriptions, and investments. You'll share contact details, account and balance info, transactions, credit and loans, and investments. Grok syncs and stores your linked account data so the connector can work, and Grok Bot's privacy mode still controls whether your conversations are… |
