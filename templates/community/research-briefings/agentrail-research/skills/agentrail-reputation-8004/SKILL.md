---
name: agentrail-reputation-8004
description: "Use this when working on AgentRail identity/reputation (local reputation.jsonl or ERC-8004 register stub)."
---

Default: append-only local reputation.jsonl plus a register stub script.
GET /v1/reputation reads the local log.
Do not attempt on-chain ERC-8004 writes unless the owner explicitly enables keys, RPC, and a contract address.
Keep docs honest: local stub is not on-chain reputation.
