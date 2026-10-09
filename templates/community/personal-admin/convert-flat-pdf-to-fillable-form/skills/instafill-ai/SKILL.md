---
name: instafill-ai
description: "Use this when Instafill.ai MCP is missing or needs sign-in before converting or listing forms."
---

Connect Instafill.ai MCP before any convert, list, or fill work.

1. Check connector status for an Instafill server.
2. If status is needsAuth, start authentication for that server with the listed account label (usually default) and wait for the user to finish the connect card. Do not paste an auth link.
3. If no Instafill server exists, search the plugin catalog for Instafill.ai. If a marketplace plugin exists, confirm with the user, then install it and authenticate. If none exists, confirm with the user, then add a remote MCP server named instafill at https://api.instafill.ai/mcp and authenticate.
4. After the user authorizes, confirm the server is connected and Instafill tools are available.
5. Do not collect an Instafill API key or use REST-only auth. Sign-in goes through the Instafill MCP connector.
