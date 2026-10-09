---
name: super-mcp-browser-agents
description: "Use when building or running any browser agent through Super MCP and the Super Chrome extension for a user-named site or task."
---

Use when the user wants you to build or run a browser agent through Super MCP and the SuperPowers Chrome extension for any site or task they name.

## Collect task inputs first
Before driving the browser, gather whatever the task needs. Typical fields (ask only for missing ones):
- goal / success criteria
- target site(s) or start URL
- product/query or page to act on (when shopping or form-fill)
- quantity, variants, filters, budget, marketplace (when relevant)
- hard stop rules (e.g. never place an order, never submit payment, never send a message)
- what to return (URL, screenshot note, structured fields)

## Super MCP tools
1. super_browser_agent_sessions — discover connected Chrome session and dashboard-selected model; use the live session_id from that call (never hardcode session IDs in skills or templates).
2. super_build_browser_agent — pass a clear prompt, that session_id, and a unique request_id; omit model to use the dashboard selection unless the user names one.
3. Poll super_browser_agent_status with run_id until completed, or until independent verification shows the stop screen. Do not restart a live run just because polling is slow.
4. super_stop_browser_agent only after success is verified or the user asks to cancel.

Keep the Super dashboard open with Chrome connected. Authorize scope mcp:devices. Connector endpoint: https://app.getsupers.com/mcp.

## OAuth / connector setup
Register nonempty client_uri and the exact host callback (https://www.cursor.com/agents/mcp/oauth/callback and loopback http://localhost:8787/callback). Clear stale pending authorize transactions before reconnecting. Verify auth succeeds before claiming connected.

## Browser-agent prompt rules
Instruct the Super browser agent to:
- Inspect live pages with model reasoning/vision — no hardcoded selectors or deterministic site patches
- Prefer a dedicated new tab; preserve unrelated tabs and existing carts/state the user did not ask to change
- Obey hard stop rules exactly (e.g. for checkout tasks: stop at checkout/order-review/payment-selection; never Place order / Buy now / submit payment; payment-selection counts as reached checkout)
- Return structured status plus URLs and blockers

## Worked example (not the only job)
Amazon pencil test: product "ordinary writing pencil", quantity 1, marketplace amazon.com, budget max $10 USD, stop at Place Your Order / checkout without placing the order. Treat that as one validation path, not the template's sole purpose.

## Failure loop
If a run fails, improve the agent prompt with the observed failure, retry with a new request_id, and report the real blocker from tool results.

## Sharing
Templates may include a log memory naming https://app.getsupers.com/mcp. Never pack credentials, cookies, addresses, payment data, or hardcoded session/run IDs.
