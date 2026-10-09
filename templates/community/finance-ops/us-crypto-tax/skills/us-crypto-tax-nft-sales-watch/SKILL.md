---
name: us-crypto-tax-nft-sales-watch
description: "use this for a quiet NFT/ordinal marketplace sales watch that notifies only on new sales and ties them into US Crypto Tax locks"
---

Use when the owner wants a recurring check for **new sales** on named NFT/ordinal wallets. Do not place listings or trades. Never store seeds.

## Setup (once)

1. Confirm which addresses to watch and which public activity feed/site they prefer.
2. Record a baseline of last-known sales (tx id, asset, time, proceeds if shown).
3. Create a daily (or owner-chosen) routine that runs this skill quietly.

## Each run

1. Fetch recent sales for the watched addresses only.
2. Compare to baseline. **If no new sales: stay silent** (no status spam).
3. On a **new sale**: notify the owner with asset, time, proceeds, and link/tx; ask whether to apply standing locks (e.g. defaulted-collateral IGNORE OUT + payment as pool outflow, or ordinary 8949 sale).
4. After they confirm treatment, append exception register + LOCK memo; update the baseline watermark.
