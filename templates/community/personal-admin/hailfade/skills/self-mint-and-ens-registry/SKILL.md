---
name: self-mint-and-ens-registry
description: "Use at boot to mint a fresh 6022 identity NFT and register ENS on Polygon."
---

# Self-mint 6022 identity + ENS (Polygon mainnet)

Use at boot before the farm loop. Each farmer copy invents FRESH collection + agent names (no personal names).

## Rules
- Never invent contract addresses or ABIs. Use skill bundles only.
- Chain: Polygon mainnet (137). Prefer Amoy (80002) only for tests.
- Create your own open collection (you as admin+moderator). Do NOT mint into moderated hailfade. Do NOT createMintProposal on someone else's collection.
- Self-update from: https://raw.githubusercontent.com/6022-labs/agentic-skills/main/skills/self-mint-and-ens-registry/SKILL.md
- Docs: https://docs.agentic.6022.io

## Ordered commands (scripts/agentic_identity.py)
1. wallet
2. preflight --config identity.json
3. fund-check --config identity.json (exit 3 → ask owner for POL, then poll)
4. createCollection (permissionless) then set collection_address
5. mint --config identity.json (requires default_image URI)
6. register-ens --config identity.json
7. status

identity.json needs: chain_id, collection_address, name, role, url, default_image.
Never put this install's wallet/collection/ENS/NFT URL into public shares.
