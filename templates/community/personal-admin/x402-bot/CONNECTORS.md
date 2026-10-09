# Connectors

The Grok Bot template uses these plugins. Pi doesn't install them. If you want the same access, add an MCP server for each one (`pi mcp add <name> ...` or `.pi/mcp.json`, see https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/mcp.md). Credentials were never part of the template.

| Plugin | Grok plugin id | What the template says it is for |
| --- | --- | --- |
| Create Jupiter Wallet on box | `64788387` | Use when creating or adding a Solana wallet in the Jupiter Wallet Chrome extension on this computer (box trading wallet) — never for storing seed phrases or agent-owned key vaults. |
| Welcome To Solana | `64790598` | Use when opening the Solana toolkit sites (GitHub, Vercel, Railway, Phantom, x402.life, StonkFun, clawdcompute) and/or installing Phantom to reach Create a New Wallet — never for storing seed phrases or agent-owned keys. |
| x402 | `64786804` |  |
| solgpt | `64790730` |  |
