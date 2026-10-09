---
name: safari-27-mcp-optimization
description: "Use this when optimizing, discovering, smoke-testing, or verifying ecommerce storefronts for Apple Safari 27 safaridriver MCP (agent-legible DOM, pre-DNS bake-in, Pack A/B, llms.txt, sterile-session proof)."
---

# Safari 27 MCP optimization and discovery

## When to use
- Prove or re-run Safari 27 `safaridriver --mcp` smoke on preview/local (or owner-cleared browse-only production).
- Bake agent-forward discovery (`llms.txt`, `/.well-known`) and semantic DOM before DNS cutover.
- Rank defects for humans and agents. Triage harness bugs vs real storefront gaps.
- Never for Production DNS flips, live charges, merge, or brand/hero redesign without the owner.

## Hard locks
- Browse-only unless sandbox payment is explicitly authorized.
- Clean WebDriver session — no operator cookies, passwords, or AutoFill.
- Prefer accessible DOM text (`get_page_content`) over pretty screenshots.
- Label claims [VERIFIED], [INFERRED], or [UNKNOWN].
- Fail loud when a run stalls; never quietly mark research done without an evidence artifact.

## Pack definitions
| Pack | Host | Path | Stop |
|------|------|------|------|
| A | B2B or staging/preview twin | home → category/PLP → PDP → cart → observe auth/gate | no payment |
| B | Intended B2C cutover apex | same; allow one intentional shop redirect | hard stop before pay |

Pass = accessible text readable without guessing. If screenshot and content disagree, content wins.

## Limb health
1. Safari ≥ 27 (or Technology Preview with MCP).
2. Developer → Allow remote automation and external agents ON (`create_tab` requires it).
3. Start `safaridriver --mcp`; list tools (~17). Record version and tool list.
4. Fail loud if `create_tab` fails.

## Discovery bake-in (pre-DNS) — D1–D5
1. Public `llms.txt` listing shop purpose, key routes, agent constraints.
2. `/.well-known/` stubs for mcp/agent/llms (or documented equivalents) — 200, no soft-404.
3. Stable route map: home → PLP → PDP → cart → checkout entry or Apply/Sign-in.
4. Apex is a real storefront (or intentional 301 to shop), not an empty parked lander.
5. robots/sitemap point at indexable shop URLs with real titles.

## Semantic / agent-legible DOM — H1–H8
Landmarks; named CTAs; PDP contract (title, price or spoken gate, variant, primary CTA); cart totals in text; spoken auth/license/age/region gates; labeled trust/COA anchors; readable errors/empty/OOS; durable accessible names or test ids on critical controls.

## Architecture for sterile MCP — X1–X5
SSR or progressive enhance for critical facts; intentional redirects to shoppable URLs; anonymous browse or explicit gate copy; no cookie reliance; content-over-screenshot truth.

## Smoke execution
1. One host at a time. Screenshot + get_page_content each step.
2. Unwrap MCP JSON envelopes / double-encoded evaluate_javascript results before parsing links.
3. Navigate via real hrefs from content; do not invent PDP URLs.
4. Stop on first BLOCKER; note softs.
5. Ranked defects: BLOCKER / MAJOR / POLISH with URL, step, repro, artifact id.

## Verification gates — V1–V5
Remote automation + create_tab; Pack A green including real PDP; Pack B on the intended B2C host; zero BLOCKER (MAJORs fixed or owner-accepted); live price/trust URLs still 200 on cutover build.

## Security handoff (defensive)
Flag soft-404/parked apex, open redirects, XSS in title/price/trust labels, gate bypass in sterile session, cart/checkout entry abuse, discovery-stub spoof/redirect. Do not write exploit PoCs — report surface + expected harden. Code/store/money/login/customer-data changes need security review; docs-only markdown may follow the owner's lighter path.

## Reference links (SSOT)
- https://developer.apple.com/documentation/safari-developer-tools/connecting-an-ai-agent-to-safari
- https://webkit.org/blog/18136/introducing-the-safari-mcp-server-for-web-developers/
- https://webkit.org/blog/18325/webkit-features-for-safari-27-0/
- https://developer.apple.com/safari/technology-preview/
- https://bugs.webkit.org/
- https://modelcontextprotocol.io/
- https://llmstxt.org/
- https://www.w3.org/WAI/ARIA/apg/
- https://www.w3.org/WAI/standards-guidelines/wcag/
- https://macworks.dev/articles/safari-27-mcp/index.md (sterile session vs everyday Safari)

## Voices to follow
Jen Simmons, Saron Yitbarek, Jon Davis (WebKit/Safari advocacy; Bluesky/Mastodon per WebKit). WebKit blog and Apple Developer docs for product truth.

## Pitfalls
Treating screenshots as pass when markdown is empty; skipping the remote-automation toggle; running Pack B on a non-cutover/parked host; redesigning brand without the owner; silent stalls; inventing completion without evidence.
