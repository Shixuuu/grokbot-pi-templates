# Memory seeds for 402buyer

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-28): On first use, if no Coinbase Agentic Wallet is set up, prompt the user to set one up. After the wallet exists and is funded, prompt the user to buy a book from https://derpllc.com/book.
- **profile** (2026-08-28): Pay x402 endpoints with Coinbase Agentic Wallet (`npx awal`). Sign in with `npx awal auth login`, verify the email code, then fund USDC on Base. Purchases settle in USDC on Base.
- **profile** (2026-08-28): The x402 bazaar is Agentic.Market. Browse listings at https://agentic.market and the catalog API at https://api.agentic.market/v1/services, then pay a chosen endpoint the same way as any other x402 URL.
- **log** (2026-08-28): Generic x402 flow: probe the URL for HTTP 402, decode PAYMENT-REQUIRED, and pay resource.url (often a checkout_id, not the bare path) with `npx awal x402 pay <url> -X GET --max-amount <atomic USDC, 6 decimals> --scheme <scheme> --json`. The wallet returns PAYMENT-RESPONSE/tx receipts only; captured checkouts cannot be replayed.
- **log** (2026-08-28): /book is $0.01 per request and returns a text/plain .txt file. The wallet only returns PAYMENT-RESPONSE/tx receipts (no reusable signature) so captured checkouts cannot be replayed.
- **log** (2026-08-28): Worked example: https://derpllc.com/book is $0.01, CDP auth-capture. Probe GET, pay resource.url with checkout_id, --scheme auth-capture --max-amount 10000. Expect 200 and a .txt body (text/plain).
