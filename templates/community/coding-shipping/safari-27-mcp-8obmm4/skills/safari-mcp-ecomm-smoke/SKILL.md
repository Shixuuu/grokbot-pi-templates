---
name: safari-mcp-ecomm-smoke
description: "Use when proving or running Apple Safari 27 safaridriver MCP smoke packs against ecommerce preview/local hosts — health check, home→PDP→cart, agent-legibility notes."
---

# Safari MCP ecomm smoke

## When
Apple Safari 27+ with `safaridriver --mcp` on a local Mac. Preview or local storefronts only unless explicitly cleared for production smoke (read-only browse).

## Prove health
1. Confirm Safari ≥27 on the Mac.
2. Start MCP: `safaridriver --mcp` (local only; own window; no cookies/passwords).
3. List tools; expect browse actions (screenshot, read page, run JS, click, type).
4. Record host, Safari version, tool list, pass/fail to the evidence drop path the orchestrator named.

## Smoke pack v0 (ecommerce)
Run on one scoped host at a time. Stop on first hard blocker; note soft failures.
1. Open homepage — screenshot + read landmarks/nav.
2. Search or open a known PDP — confirm title, price, variant controls, primary CTA readable without guessing.
3. Add to cart (or open cart) — confirm line item + totals visible in DOM text, not only canvas.
4. Note checkout entry only; do not submit payment unless the orchestrator explicitly authorized a sandbox order.
5. Capture ranked defects: blocker / major / polish — each with selector or visible copy and screenshot id.

## Agent-legible checklist
- Semantic landmarks and real buttons/links (not click-only divs).
- Price and variant state in accessible text.
- Errors and empty states readable by read-page.
- Trust/COA links as normal anchors with clear labels.
- Avoid redesign; report gaps for the product owner.

## Hard stops
- No production deploys, DNS, ESP, or live charges.
- No use of the operator's normal browser cookies/passwords.
- Prefer evidence over opinions.
