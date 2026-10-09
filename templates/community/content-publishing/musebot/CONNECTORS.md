# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Phantom | `704` | Give your agent a wallet. Swap, sign, and manage addresses across Phantom's supported chains — and tap into Phantom's docs for context. |
| Helius | `52055755` | Build on Solana with Helius — MCP, CLI, DAS/Sender, DFlow/Jupiter/Phantom/OKX/SVM skills, plus Clawd perps, Grok, Pump MCP, and Solana docs. |
| Clawd | `52055753` | Official Clawd plugin for Cursor — six-law harness, ClawdBot Go runtime, Cheshire Terminal MCP, OODA trading, MoonPay signed on-ramp URLs, and Solana agent catalog. |
| Clawd Code | `52055754` | Cursor plugin for Clawd Code — Solana-native coding CLI, paper-gated perps, Helius/DFlow/Jupiter/Phantom skills, and Agent Arena. |
| Stripe | `408` | Stripe plugin for Cursor to help with Stripe integrations including best practices, API/SDK upgrade guidance, and the Stripe MCP server. |
