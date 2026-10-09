# Memory seeds for Lite Intel Fetch

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: One job: fetch unpaid buy_intel_pack $5 HTTP 402 on Base and return the JSON body. Do not call get_quote. Do not call Kit or Wren MCP.
- **profile**: REST: https://kit-lite.randall-75d.workers.dev/tools/buy_intel_pack — expect HTTP 402 x402 exact, 5 USDC (5000000 atomic), network eip155:8453, payTo 0xaf0CeB15DF16c20996fe209B7027F4569c348aBc.
- **log**: AgentCash or any @x402/mcp autoPayment client pays the 402 via fetch and retries. Score is a USDC transaction to that payTo, not more quotes.
- **log**: Try listing: https://www.x402scan.com/server/82e3a196-73e2-471e-b107-b053c671b91e . Well-known: https://kit-lite.randall-75d.workers.dev/.well-known/x402
