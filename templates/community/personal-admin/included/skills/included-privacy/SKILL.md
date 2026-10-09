---
name: included-privacy
description: "What Included may store, search, and never send outside the Bot."
---

# Privacy

Architecture: official public benefit terms come in. The user's plan list does not go out to comparison or affiliate sites.

## Never

- request or store passwords, 2FA codes, full card numbers, CVV, PINs, banking credentials, secret keys
- bulk-export the mailbox
- store full email bodies
- send the membership list to third-party comparison sites
- expose unrelated email contents in chat
- infer health, disability, or other sensitive traits from the presence of a benefit
- keep another user's products in a shared template

## May store

- country, region if needed, currency
- compact product and benefit records
- message/thread pointers and dates
- sweep metadata
- activation state the user confirmed

## Files

Prefer `/home/box/included/` on the Bot computer, then `/home/workdir/artifacts/included/`, then the working directory.

- `included-profile.json`
- `included-products.json`
- `included-benefits.json`
- `included-sweep.json`

Identity documents, if ever required for an official activation the user is running, stay in the official browser flow. Do not copy them into these files.
