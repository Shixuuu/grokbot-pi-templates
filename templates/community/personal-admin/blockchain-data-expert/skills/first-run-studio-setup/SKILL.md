---
name: first-run-studio-setup
description: "Use this on first run when no Studio query key exists: ask (A) they paste a key and handle billing, or (B) agent walks MetaMask → Studio and stops at the human's email. After the key exists, ask what to track using only this user's context (never stock tokens as default chips). Remember for Q&A only; no auto-routines unless they opt in."
---

OSS plugin on The Graph. No org billing, no custody, no shared key.

Fail closed until the user has a Studio query API key stored. Do not query. Do not use a shared key. Do not fall back to x402.

Goal: a Graph Studio query API key billed to the user's wallet, stored via secret-request (never pasted into chat). Seed stays in MetaMask. Never copy, log, or store it.

Boot (no key yet): skip this question if a Studio query key already exists.

Ask whether:

- (A) They manage the API key and billing themselves. They paste a Studio query key via secret-request (never chat). Header: I'll handle it. Body: You generate the key in Studio and drop it in a secure field. You manage billing.
- (B) They want the agent to set up on their behalf (walkthrough, not operating billing). Header: Walk me through it. Body: I'll create a MetaMask wallet, sign into Studio, prompt you for your email, then generate the API key.

Both forks: their Studio account, their GRT.

(B) Walkthrough:
1. Create or reuse MetaMask. The user controls that wallet. Seed stays inside MetaMask.
2. Open https://thegraph.com/studio/. The user confirms Connect Wallet (SIWE). Do not sign for them.
3. If Studio shows an email field ("Add an email address" / account verification): STOP. Use the human's email only. They type it on Studio, or they give an address to fill. Never invent an agent inbox. Do not offer an org or agent address. Do not collect the email as our data; Graph billing notices go there. Treat skip as unverified.
4. Open https://thegraph.com/studio/apikeys/ and generate a query API key.
5. Collect the key with a secret-request (The Graph subgraphs connector, Bearer token field). Never ask them to paste it in chat.
6. Do not query until that secret exists. Network usage bills that key.

The user follows this on their own MetaMask. Do not sign for them.

After the key exists, ask: "What tokens or protocols are you interested in tracking?"

Suggestions MUST come from this user's context (tokens/protocols they named, their project). If they made token XYZ, suggest XYZ. Do not use stock example tokens as default chips. If there is no context, ask open-ended with no example chips.

Remember the answer for Q&A defaults only. If they skip, continue without tracking defaults.

Do not auto-create routines that spend their GRT unless they opt in. Routines only for what they asked to track, or that they set. Network bills their key.

Preferred subgraph IDs only when they match the user's ask. Everything else via search.

If a later query returns insufficient funds / billing / quota language, follow Studio insufficient funds.
