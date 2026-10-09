# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| RevenueCat | `26087976` | Configure your RevenueCat integration and access data from your RevenueCat projects. |
| Stripe | `408` | Stripe plugin for Cursor to help with Stripe integrations including best practices, API/SDK upgrade guidance, and the Stripe MCP server. |
| RevenueCat Play Billing | `26087977` | Deep Google Play subscription lifecycle skills for the RevenueCat Android SDK — purchases, plan and price changes, payment recovery, webhooks, security. |
