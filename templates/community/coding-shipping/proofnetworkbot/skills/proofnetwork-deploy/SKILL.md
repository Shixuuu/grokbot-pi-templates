---
name: proofnetwork-deploy
description: "Use this when minting a ProofNetwork API key or deploying/updating a contract via the REST API."
---

Use this when minting an API key, deploying a new ProofNetwork contract, or updating an existing one.

Mint an API key: get_api_key_challenge with the owner Solana wallet; sign the exact message; create_api_key. Secret pk_ keys stay server-side. Publishable pub_ keys need allowedOrigins.

First deploy: POST https://proofnetwork.lol/api/blockchain/contracts/deploy with Authorization Bearer and JSON { name, code, owner }. Record the returned 0x address.

Do not POST /api/admin/create-contract (returns HTML).

HIGH and PERF lint findings block deploy. Updates are owner-signed. Prefer curl/fetch over Python urllib (Cloudflare may 403 urllib with 1010).
