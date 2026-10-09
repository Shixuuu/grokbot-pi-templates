---
name: computer-use-defaults
description: "Use when choosing how to automate a browser or desktop — browser uses Jev Ultrafast first; jev-use for native/bounded desktop."
---

# Computer-use / browser defaults

## Order of preference
1. **Interactive browser (URL + goal)** → **Jev Ultrafast** (`jev-ultrafast-run` / jev-browser-use). TypeSafe Jev picks operation + target over CDP. This is the primary browser path.
2. **Native desktop / bounded candidate loops** → **jev-use** (Cua Driver MCP + TypeSafe Jev selects among app-owned action IDs).
3. **Slow GUI computer-use** — last resort.
4. **Firecrawl** — research search/scrape only; not computer-use.

## Jev Ultrafast (browser)
- Prefer short one-shot goals on a concrete URL.
- Avoid long multi-page sidebar crawls (often end as blocked).
- Set BU_CDP_URL to the host Chrome remote-debugging port.
- TYPESAFE_API_KEY + text model env for TYPE_TEXT — never put keys in chat.

## jev-use (desktop / bounded)
1. Observe through one persistent Cua Driver session.
2. Build a bounded candidate table of complete Driver actions.
3. Ask Jev only for a candidate ID.
4. Validate, execute at most one action, verify independently.
