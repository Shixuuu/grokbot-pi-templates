---
name: safari-mcp-pre-dns-bake-in
description: "Use this when drafting or verifying a pre–day-one DNS agent-forward bake-in for ecommerce (llms.txt, /.well-known, semantic DOM, sterile Safari MCP gates) before cutover."
---

# Safari MCP pre-DNS bake-in

## When to use
Before a storefront DNS cutover or first public index, when the owner wants day-one caches to be MCP-ready and agent-legible — never a day of empty lander / soft-404.

## Why
Safari MCP and many AI crawlers read accessible DOM and public discovery files. If apex is a parked shell or client-only paint, the first cache poisons humans and agents alike.

## Checklist
### Discovery (D)
- D1: `llms.txt` at apex with purpose, routes, agent constraints
- D2: `/.well-known` mcp/agent/llms stubs (or documented equivalents), HTTP 200
- D3: Stable route map in nav and docs
- D4: Apex is shoppable (or intentional 301 to shop)
- D5: robots/sitemap → real product/category URLs

### Semantic DOM (H)
- H1–H8 from the safari-27-mcp-optimization skill (landmarks, CTAs, PDP contract, cart, gates, trust links, errors, stable names)

### Architecture (X)
- X1–X5: SSR/progressive enhance; intentional redirects; anonymous or spoken gate; no cookie reliance; content over screenshot

### Verification (V)
- V1–V5: limb health; Pack A green with PDP; Pack B on intended B2C host; ranked defects cleared; live trust/price URLs 200

## Outputs
A bake-in matrix (pass/fail/owner) plus ranked defects from a sterile Safari MCP smoke. Do not flip DNS yourself.
