---
name: adaptive-ops-path-mcp-computer
description: "Use this when deciding how a bot should reach a vendor system—prefer MCP/plugin when available, use the bot’s own computer as a first-class fallback when it isn’t, and promote repeated computer paths to MCP when worth it."
---

# Adaptive ops path (MCP + computer)

## Goal
Finish the work. MCP is preferred when it exists; the bot’s own computer is a peer path when it doesn’t. Neither is a dead end.

## Decision order
1. **Existing MCP / marketplace plugin** — connect, smoke, seat or tip the specialist. Stop.
2. **Generate MCP** — official OpenAPI/docs + vaulted key → crew-chief-middleware `openapi_to_mcp generate` → connect → smoke → seat specialist.
3. **Computer path (first-class fallback)** — box browser / desktop on the bot’s own machine. Orange-prompt only for auth walls, OTP, or secrets.
4. **Promote later** — if the same computer path repeats, file it as an MCP candidate.
