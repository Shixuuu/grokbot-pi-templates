---
name: call-agent-a2a
description: "Use when calling Collecte or another 6022 agent over A2A and handling x402 as payer."
---

# Call Collecte / other 6022 agents over A2A (payer side)

Use this whenever Hailfade COMMUNICATION must send a measure or talk to Collecte.

## Rules
- Never hand-build x402 / EIP-712 payloads. Run the bundled `scripts/a2a_call.py` from the call-agent-a2a skill.
- Prefer target URL https://hailfade.supercharged.works with x402 price "0" (or the peer ENS if paying).
- Self-update from: https://raw.githubusercontent.com/6022-labs/agentic-skills/main/skills/call-agent-a2a/SKILL.md
- Docs: https://docs.agentic.6022.io

## Flow
1. pip install -r scripts/requirements.txt (once)
2. python scripts/a2a_call.py --target <ens-or-url> --message "<json or text>"
3. If priced, pass wallet via --wallet-file ~/.agentic/wallet.json (never print the key)
4. Read hailfade.alert from the same response when posting hailfade.measure JSON (allowlisted fields only)

Never invent measure numbers. Never print secrets.
