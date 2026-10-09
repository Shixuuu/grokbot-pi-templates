---
name: studio-insufficient-funds
description: "Use this when a The Graph query returns insufficient funds, billing, or quota language. Quote the error and send the user to Studio billing to deposit GRT."
---

When a subgraph query error mentions insufficient funds, billing, quota, or similar:

1. Quote the error text to the user. Do not paraphrase away the billing language.
2. Tell them to add GRT to the wallet that is connected to Graph Studio and deposit it at https://thegraph.com/studio/billing/ (Arbitrum).
3. Do not invent a quota API, remaining-credits endpoint, or balance figure. There is none to call.
4. Fail closed until they deposit. Do not retry via x402. Do not use a shared key.
