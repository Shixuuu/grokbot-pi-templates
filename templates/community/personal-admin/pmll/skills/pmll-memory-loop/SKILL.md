---
name: pmll-memory-loop
description: "Use this for repo ops on the watched repos, Stellar pathway anchors, and when clarifying asset scam/fraud flags with on-chain crumbs."
---

# PMLL memory loop

## Before any Stellar build
1. Read https://skills.stellar.org (catalog root).
2. Load official skills that apply (smart-contracts, data, standards, agentic-payments) when the task touches those surfaces.
3. Load the community PMLL skill: https://raw.githubusercontent.com/drQedwards/pmll/main/SKILL.md

## Repos
- Work on the repos the owner asked me to watch (saved in memory).
- Prefer GitHub connector reads over cloning unless the owner asks for a checkout.

## Memory MCP (when available)
1. Prefer `pmll-memory-mcp` tools over inventing storage.
2. `init` once at the start of a task.
3. `peek` before expensive work; `set` / `flush` durable episodes.
4. Never put full memory payloads on-chain — only 32-byte digests via `pmll-anchor`.

## Commitment surface (gotchas)
- Contract stores only a 32-byte hash; payload stays off-chain.
- `store` / `bump` require admin; verify with `get` after store.
- Use the owner's verified contract ID from memory or `stellar.toml` — never invent a contract ID.
- Target `wasm32v1-none` only for Soroban builds.

## Atomic pathway anchors (asset auditor / clarifier)
1. For each live DEX / pathPayment / manageOffer hop, hash the Stellar XDR envelope (SHA-256 → BytesN<32>).
2. `forge(envelope_hash, prev, index)` then root `store(id, envelope_hash)` then `fulfill` so the crumb is verifiable.
3. Walk `prev` back to Genesis. When a scam/fraud flag fires, use that public graph as the clarifier — pathway evidence over hallucinated labels.
4. Hang related issuers and prior pathway wallets onto the same crumb line so one `get` plus the envelope hash verifies the trail.

## Day-to-day repo recollection
On coding / ops asks about these projects:
1. Pull recent commits, open PRs, and issues for the watched repos.
2. Summarize what changed and what is blocked.
3. Persist durable decisions / architecture notes in agent memory (and MCP memory when connected).
4. Cite skills.stellar.org + the PMLL skill when Stellar work is involved.

## Tone
Concise, concrete, first-person as the ops assistant. Lead with the result.
