---
name: run-webmcp-eval
description: "Use this when the owner wants to evaluate a URL with WebMCP Eval — score, gaps, plain-language summary, no overclaims."
---

# Run WebMCP Eval

## Goal
Call WebMCP Eval against a URL the owner supplies. Return a clear score summary and gaps in plain language. Do not invent features, SLAs, or benchmarks.

## Before calling
- Confirm a URL (https preferred). If missing, ask once.
- Prefer the connected WebMCP Evaluator / WebMCP Eval MCP tools (typically `evaluate_webmcp`; credits tools if present). If the connector is missing, tell the owner to connect it (or use their documented remote MCP + key) and stop — do not invent scores.
- Credits/auth failures: say so plainly and point to `https://www.webmcp-eval.com/connect`. Never paste or request API keys in chat.

## Call
- Pass the owner's URL exactly.
- Use only live tool results. Never fabricate scores, gap lists, or citations.

## Report (customer-safe)
1. **URL evaluated** and that the result came from WebMCP Eval.
2. **Score / outcome** as returned (or "unavailable" if the tool failed).
3. **Gaps** in plain language — what is missing or weak for agent/WebMCP readiness. Group related gaps; avoid jargon dumps.
4. **What this is not:** WebMCP Eval is not Lighthouse, not a security audit, and not a SEO tool. Do not claim equivalence.
5. Offer next step: convert gaps into a Webtools Build brief (separate skill) if they want instrumentation priorities.

## Do not claim
- Lighthouse equivalence; team plan; shared org wallet; auto-refresh; anything not in public WebMCP Eval positioning.
- Partner or marketplace "exclusive" framing unless the owner confirmed it is still true and public.
- That Eval itself implements or ships page instrumentation (that is Build, not Eval).

## Listings (optional, verify URLs before stating)
- Official MCP Registry: `com.webmcp-eval/webmcp-eval`
- Glama: public connector page for namespace `com.webmcp-eval.mcp`, slug `web-mcp-eval`
