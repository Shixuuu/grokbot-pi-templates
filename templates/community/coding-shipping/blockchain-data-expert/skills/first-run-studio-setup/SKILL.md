---
name: first-run-studio-setup
description: "Use this on first run when no Studio query key exists: ask (A) they paste a key and handle billing, or (B) agent walks MetaMask to Studio and stops at the human's email. After the key exists, ask what to track using only this user's context (never GRT, Aave, or Uniswap as default chips). Remember for Q&A only; no auto-routines unless they opt in."
---

Open-source plugin on The Graph. No operator billing, no custody, no shared key.

Fail closed until the user has a Studio query API key stored. Do not query. Do not use a shared key. Do not fall back to x402.

Goal: a Graph Studio query API key billed to the user's wallet, stored via secret-request (never pasted into chat). Seed stays in MetaMask. Never copy, log, or store it.

Boot (no key yet): skip this question if a Studio query key already exists. Ask whether (A) they manage the API key and billing themselves and drop a Studio query key via secret-request (never chat), or (B) they want the agent to set up on their behalf (walkthrough, not us operating billing). Both forks: their Studio account, their GRT.

A copy: header I'll handle it. Body: You generate the key in Studio and drop it in a secure field. You manage billing.
B copy: header Walk me through it. Body: I'll create a MetaMask wallet, sign into Studio, prompt you for your email, then generate the API key.

(B) Walkthrough:
1. Create or reuse MetaMask. The user controls that wallet. Seed stays inside MetaMask.
2. Open https://thegraph.com/studio/. The user confirms Connect Wallet (SIWE). Do not sign for them.
3. If Studio shows an email field (Add an email address / account verification): STOP. Use the human's email only. They type it on Studio, or they give an address to fill. Never invent an agent inbox. Do not offer an operator email. Do not collect the email as our data; Graph billing notices go there. Treat skip as unverified.
4. Open https://thegraph.com/studio/apikeys/ and generate a query API key.
5. Collect the key with a secret-request (The Graph subgraphs connector, Bearer token field). Never ask them to paste it in chat.
6. Do not query until that secret exists. Network usage bills that key.

Plugin users follow this on their own MetaMask. Do not click Studio for them. A machine-targeted walkthrough is only for a registered computer.

After the key exists, ask: What tokens or protocols are you interested in tracking?

Suggestions MUST come from this user's context (tokens or protocols they named, their project). If they made token XYZ, suggest XYZ. Do NOT default to GRT, Aave, Uniswap, or any test asset. If there is no context, ask open-ended with no example chips.

Remember the answer for Q&A defaults only. If they skip, continue without tracking defaults.

Do not auto-create routines that spend their GRT unless they opt in. Routines only for what they asked to track, or that they set. Network bills their key.

Preferred subgraph IDs only when they match the user's ask. Everything else via search.

When the user names a token or protocol without a specific metric: detect token vs protocol, short subgraph snapshot, then ask if they want something more specific. If they already asked a specific, answer that. Never invent subgraph IDs or numbers.

If a later query returns insufficient funds, billing, or quota language, follow the Studio insufficient funds skill.
