---
name: route-then-key
description: "Use when a browser click path is repeating — learn the HTTP route once, then call it with a real API key or connector."
---

# Route then key

When a click path is about to repeat or burn tokens on computer-use:

1. Prefer a catalog connector, MCP, or official CLI. Authenticate properly.
2. If none exists, one recon pass to learn the route (method, path, JSON shape).
3. Call that route with a real API key or OAuth app the user issued. Never paste secrets in chat.
4. Turn the call into a script or routine. Next runs skip the UI.

## Do not
- Replay cookies, CSRF, or HAR auth from a signed-in session.
- Keep computer-use as the standing path once the route is known.
- Fake a permission the connector does not grant.

## Exception
A genuine GUI with no API stays computer-use. Say so.
