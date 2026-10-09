---
name: proofnetwork-frontend
description: "Use this when building or debugging a ProofNetwork frontend that talks to a contract via proofwallet."
---

Use this when building or debugging a browser UI that talks to a ProofNetwork contract through proofwallet.

Load proofwallet from https://cdn.jsdelivr.net/gh/proofnetworks/proofwallet/wallet.js, then construct CryptoClient with contractAddress, apiUrl set to https://proofnetwork.lol/api, appName, and mountTo for the connect button.

Always set apiUrl to https://proofnetwork.lol/api. The library POSTs to {apiUrl}/blockchain/contracts/call.

Do not use https://proofnetwork.lol as apiUrl. Missing /api hits the HTML SPA. JSON.parse then fails with Unexpected token '<', "<!DOCTYPE "... is not valid JSON.

Do not omit apiUrl on localhost. Hostname localhost or 127.0.0.1 makes proofwallet default to http://localhost:5001/api, which is a local backend, not ProofNetwork.

Never put a secret pk_ key in frontend code. Views work without a key. If a browser origin needs auth, mint a publishable pub_ key locked to that origin.

View functions (get*, tagged @view) are a single unsigned wallet.callContract(fn, inputs).

Writes that credit a wallet must prove possession of the key. Many contracts use the 2-step requiresSignature shape on the write itself: call the write without a signature; if the result has requiresSignature and message, sign that exact string and resubmit with signatureBase58.

Use wallet.pollContract on view functions only. Connect via Phantom or a burner wallet for a no-extension test path.
