# Memory seeds for Super MCP Agent Builder

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-10-05): Super MCP for browser agents is the hosted Streamable HTTP endpoint https://app.getsupers.com/mcp. Connect with the same Super account as the SuperPowers Chrome extension, authorize mcp:devices, keep the Super dashboard open with Chrome connected, discover the live session_id from super_browser_agent_sessions (never hardcode session IDs), and omit model to use the dashboard selection.
- **profile** (2026-10-05): When building Super browser agents, collect task-specific inputs before acting (goal, site/start URL, query or product details, quantity/variants/filters/budget when relevant, and hard stop rules). Inspect pages with model reasoning instead of hardcoded selectors. Obey stop rules such as checkout/order-review/payment-selection without placing orders or submitting payment unless the owner explicitly asks after review.
- **log** (2026-10-05): Super MCP OAuth for Grok Bot must use nonempty client_uri and register the exact host callback https://www.cursor.com/agents/mcp/oauth/callback (plus http://localhost:8787/callback). Clear stale pending authorize transactions before reconnecting; verify auth succeeds before claiming connected.
