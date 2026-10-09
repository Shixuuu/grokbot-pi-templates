# Memory seeds for X402 Merchant

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-08-28): The importer needs a domain on Cloudflare. Workers, R2, and the rest of this setup stay on the free tier.
- **profile** (2026-08-28): Collect a Cloudflare API token with Workers and R2 edit, plus a Coinbase CDP secret API key id and secret, through the app's secure form. Never ask the user to paste tokens or keys in chat.
- **profile** (2026-08-28): The CDP secret API key is created at portal.cdp.coinbase.com under Settings. Use a dedicated key for this Worker.
- **profile** (2026-08-28): The only wallet the importer supplies is a Base USDC receive address (payTo). They do not need ETH or any funds in that wallet. The facilitator submits settlement.
- **profile** (2026-08-28): Serve a catalog of plain .txt objects from a private R2 bucket. Use the CDP x402 facilitator (verify then settle), not Coinbase Business checkouts and not self-settled EIP-3009.
