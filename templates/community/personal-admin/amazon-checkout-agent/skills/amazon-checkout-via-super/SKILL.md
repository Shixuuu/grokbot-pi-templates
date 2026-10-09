---
name: amazon-checkout-via-super
description: "Use when the user asks to find, add, or check out an Amazon product through Super MCP without placing the order."
---

Use when the user wants to find an Amazon product, verify variant/quantity/budget, add it to cart, and reach checkout through Super MCP and the SuperPowers Chrome extension — without placing the order.

## Setup
Connect Super MCP at https://app.getsupers.com/mcp (authorize scope mcp:devices) and sign the Super Chrome extension into the same account with the dashboard open.

## Collect inputs first
Before any cart change, gather missing fields only:
- product query or product URL
- marketplace (for example amazon.com)
- variant (size, color, pack, etc.)
- quantity
- max price / budget
- hard stop: never place the order or submit payment
- what to return (URLs, item price, order total, blockers)

## Super MCP tools
1. Call super_browser_agent_sessions and use the live session_id it returns. Never hardcode session IDs.
2. Call super_build_browser_agent with a clear prompt, that session_id, and a unique request_id. Omit model unless the user names one.
3. Poll super_browser_agent_status with run_id until completed or independent verification shows the stop screen. Do not restart a live run just because polling is slow.
4. Call super_stop_browser_agent only after success is verified or the user asks to cancel.

## Browser-agent prompt rules
Instruct the Super browser agent to:
- Use model-driven live page reasoning and vision — no hardcoded selectors or deterministic site patches
- Prefer a dedicated new tab; preserve unrelated tabs and existing cart items the user did not ask to change
- Find the requested product, verify variant/quantity/budget, add it to cart, then reach checkout / order review / payment selection
- STOP there: never Place order, never Buy now, never submit payment. Payment-selection counts as reached checkout
- Return structured status plus URLs, item price, order total, and blockers

## Failure loop
If a run fails, improve the agent prompt with the observed failure, retry with a new request_id, and report the real blocker from tool results.

## Worked example (validation path, not the only job)
Amazon pencil test: product query "ordinary writing pencil", quantity 1, marketplace amazon.com, budget max $10 USD. Stop at Place Your Order / checkout without placing the order.
Verified result shape (example): reached Place Your Order with Bostitch Premium #2 Pencils 10-Pack, qty 1, item $2.75, order total $2.99.
Never store session IDs, run IDs, addresses, or payment details in skills or templates.
