---
name: kitchen-affiliate-revenue-loop
description: "Use when growing a US Associates kitchen decision-guide site: research→draft→verify→deploy waves with honesty gates."
---

# Kitchen affiliate revenue loop

## Goal
Ship decision pages that help strangers buy via the user’s US Amazon Associates tag on amazon.com. Never invent specs, prices, review counts, rankings, or traffic.

## Hard gates
- US Amazon only; Associates tag on every buy link; disclosure on commercial pages.
- No email/outreach/ads until user types `TRAFFIC IS REAL`.
- No fake rankings or “best of” lists without live sourced data.
- Cloudflare Pages Direct Upload of `docs/` when GitHub Pages is blocked.

## Crew (reuse; don’t spawn bots without user yes)
1. **Operator** — queue, gates, commit, zip deploy, IndexNow, GSC, user updates.
2. **Research** — live ASIN briefs only; one canonical brief per batch.
3. **Coder** — HTML/SEO/sitemap; no solo production deploy.
4. **Verifier** — PASS/FAIL on real files; no invent scores; no publish.

## Wave (batch = 3 guides)
1. Research brief (ASIN, title, price, stars+count, pitfalls).
2. Draft listings + homepage cards + sitemap.
3. Verify; fix FAILs.
4. Commit; Direct Upload; IndexNow; refresh sitemap in GSC.
5. Log ASINs + deploy id.

## Distribution
Pin owned guides on Pinterest (not raw Amazon). Measure outbound clicks / GSC — never invent numbers.

## Stop
Bot-wall ASINs, unrepaired FAIL, or missing login for deploy hosts. Never claim live until URL 200.
