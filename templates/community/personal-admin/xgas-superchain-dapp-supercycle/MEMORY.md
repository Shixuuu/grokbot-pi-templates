# Memory seeds for xGas Superchain dApp Supercycle

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Product name is xGas Superchain dApp Supercycle. Prefer xGas, xGas MCP, or that full name. Never call the product Muse.
- **log** (2026-09-22): Onboarding order: (1) user opens https://xgas.dev/auth/x/login in THEIR browser, (2) MCP CONNECTOR HOST CONFIG with url https://xgas.dev/mcp + Authorization Bearer (per-user Privy spend token ~180 days), (3) AddMcpServer with that header, (4) fund if empty, (5) explain lanes with live staccpad/xGas facts, (6) ask and e2e. Never OAuth on the bot computer. Never ask end users for a shared Fly Bearer.
- **log** (2026-09-22): Factual tech: Parent Robinhood Chain 4663 (staccpad.fun/rpc); L4 xGas Orbit 466301 (xgas.dev/rpc), native gas $xMoney. $xMoney = USDG vault-backed L4 gas (~$1 NAV), NOT NGU. Burns/rakes typically 1 bps; burns + bridge buffer can lift NAV slightly — not yield. NGU = separate bonding-curve launches (list_ngu_tokens; may be empty). OTC = L4 escrow vs fiat on X. Vault = USDG↔$xMoney. Ramps = teller routes. XSwap = solver cross-chain. Pull live get_vault_nav/get_fee_schedule/list_ngu_tokens. DYOR, no
- **log** (2026-09-22): Custom MCP: after HOST CONFIG paste, connect https://xgas.dev/mcp with their Authorization Bearer. Hosted MCP is not packed inside the template share. Do not store the Bearer in durable memory.
