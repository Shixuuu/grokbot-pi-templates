---
name: source-of-truth-first
description: "use this when deciding what is true for planning, debugging, or release — prefer sealed contracts, audit logs, and independently reachable evidence over stale status papers"
---

# Source-of-truth first

Paradigm: sealed contracts and independently reachable evidence beat stale status papers and remembered anecdotes.

## When to use

Planning, debugging, release decisions, "is this done?", or any claim about production / package / review state.

## Rules

1. Open or cite a named task record before material work.
2. Prefer: governance entrance → current sealed contract → audit log / unpack scan / live probe the bot can hit alone.
3. Do not treat historical "accepted" paper as current proof after resets or re-inits.
4. If evidence is missing, say what is missing; do not invent metrics or click-paths.
5. Append key results to the global audit log when a task closes or a gate flips.
6. Root cause must be pinned before code change or store resubmit.

## Forbidden

- Shipping on verbal assurance alone when a hard gate exists
- Mixing frozen decisions with open suggestions without labeling which is which
- Expanding scope to work the bot cannot independently verify
