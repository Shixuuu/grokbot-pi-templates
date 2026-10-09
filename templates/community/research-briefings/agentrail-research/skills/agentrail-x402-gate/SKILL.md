---
name: agentrail-x402-gate
description: "Use this when explaining or debugging the AgentRail x402-style payment gate (402 accepts, mock headers, human vs agent pricing)."
---

Unpaid POST /v1/research returns HTTP 402 with an accepts[]-style challenge.
Pricing targets (env-configurable): human ~$1.00 USDC · agent ~$0.001 USDC on Base.
Mock headers when MOCK_MODE=true: X-PAYMENT: mock-ok, or mock:human / mock:agent.
Mock mode does not move funds. Never imply mainnet settlement until verifier + PAYMENT_RECIPIENT + policy are real.
Prefer Sepolia-first before any mainnet payment claim.
