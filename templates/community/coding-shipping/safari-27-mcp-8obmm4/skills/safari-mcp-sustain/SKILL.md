---
name: safari-mcp-sustain
description: "Use this when running ongoing Safari 27 MCP health — weekly sterile smokes, post-ship rechecks, version drift, and keeping agent-forward discovery green after cutover."
---

# Safari MCP sustain and ops

## When to use
After initial Safari MCP smoke and bake-in are green — keep the storefront agent-legible as the team ships changes.

## Cadence
1. Weekly (or on owner schedule): sterile Pack A on preview/staging twin; Pack B browse-only on the approved B2C apex if cleared.
2. After any change to nav, PDP, cart, gates, `llms.txt`, or `/.well-known`: targeted re-smoke of affected steps.
3. After Safari or safaridriver updates: re-prove create_tab + tool list; note version drift.

## Sustain checklist
- Remote automation still ON on execution Macs
- Evidence folder or ticket updated with date, Safari version, pass/fail table
- New MAJOR/BLOCKER filed with repro; do not silently reopen closed bake-ins
- Discovery files still 200 and not soft-404
- PDP contract still holds for at least one real product path
- Harness unwrap still handles MCP JSON envelopes (false Softs are harness bugs — say so)

## Hand off
When defects need code: smallest verified reversible change; label [VERIFIED]/[INFERRED]/[UNKNOWN]. Route security review for code touching store, money, login, or customer data. Docs-only copy/checklist updates can follow the owner's lighter review path.

## Never
- Quiet idle after a failed smoke
- Claiming production readiness without V-gates
- Using operator cookies to fake a pass
- Expanding into brand redesign without the owner
