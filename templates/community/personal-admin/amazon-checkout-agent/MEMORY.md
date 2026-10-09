# Memory seeds for Amazon Checkout Agent

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **log** (2026-10-05): Super MCP connector endpoint for browser agents is https://app.getsupers.com/mcp. Authorize scope mcp:devices. Keep the Super Chrome extension signed into the same account with the dashboard open.
- **log** (2026-10-05): Amazon checkout convention: discover a live session_id from super_browser_agent_sessions (never hardcode), collect product query/URL, marketplace, variant, quantity, and max price before cart changes, build with super_build_browser_agent, poll status without restarting for slow polls, use model-driven live page reasoning with no hardcoded selectors, preserve unrelated cart items and tabs, reach checkout/order-review/payment-selection, and STOP — never Place order, Buy now, or submit payment.
- **log** (2026-10-05): Worked example (validation path, not the only job): ordinary writing pencil, qty 1, amazon.com, max $10 — verified reached Place Your Order with Bostitch Premium #2 Pencils 10-Pack, qty 1, item $2.75, order total $2.99. Do not store session IDs, run IDs, addresses, or payment details.
