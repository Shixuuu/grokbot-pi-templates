---
name: us-crypto-tax-lending-lifecycle
description: "use this for US Crypto Tax pool-style lending: loan-history refresh, default IGNORE IN, later sale IGNORE OUT with payment as pool outflow"
---

Use when the owner uses a **crypto lending platform** (NFT-collateral or similar) under pool-style accounting they confirmed in getting-started. Do not place loans or trades. Never ask for seeds or passwords.

## Standing pool rules (confirm once, then apply)

- Vault or payment-wallet **deposits/withdrawals** = pool liquidity events.
- **Individual loans** ignored / not reported as separate taxable legs (unless the owner switches treatment).
- **Defaults** where the asset appears in their wallet = **IGNORE IN**.
- **Sales of defaulted assets** = **IGNORE OUT**; the crypto **payment received** = pool outflow (PLOUT).

## Operational loop

1. **Refresh primary loan-history export** into the working lending folder. Hash-match against the prior archive; keep superseded copies dated; delete the Downloads original after a successful archive copy.
2. On **vault default / unlock**: book **IGNORE IN** for the returned asset; LOCK memo + exception-register (and specialist sidecar if multi-row). Distinguish platform repay/reload from off-system default.
3. **Watch for later marketplace sale** of that asset (sales-watch routine or manual check).
4. On sale: book **IGNORE OUT** + payment IN as **PLOUT**; append register + LOCK; do not invent USD — use time-of-txn evidence they provide or a venue quote they accept.
5. Quiet if nothing new; never wipe the exception register.
