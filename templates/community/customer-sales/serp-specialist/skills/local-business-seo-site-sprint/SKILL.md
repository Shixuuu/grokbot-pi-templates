---
name: local-business-seo-site-sprint
description: "Use this when a local business (Maps, Facebook, URL, or NAP) is dropped in and you need the full SERP/SEO/AEO/GBP pack, aggressive rank plan, conversion site via Grok Build, and a new Netlify preview — same sprint every time."
---

# Local business SEO + conversion site sprint

Run this end-to-end whenever a local business is dropped in (Maps, Facebook, URL, NAP, or name + city). Do not skip phases. Do not invent volumes, ratings, hours, phone, or photos.

Companion skills: Grok Build, Local niche keyword map deliverable.

**Hard rule: the website is always built with Grok Build (`grok` CLI) on the shared computer.** Never generate the site inline. Never use a Cursor cloud agent for the site. Cloud VMs cannot reach Netlify.

## 0. One-batch questions (only if missing)

Ask once, then proceed with stated assumptions:

1. **Primary conversion** — call, form, book, or directions? Default: call if a phone exists, else form + "Call the shop."
2. **Phone and hours** — never invent. Use TBD + call-back form until confirmed.
3. **Service area** — primary city plus towns within ~20 min. Default: city on the listing plus the named corridor.
4. **GBP access** — can the owner claim/edit? If unknown, write claim steps, do not click claim.
5. **Live domain** — new preview vs existing site. Default: **new Netlify preview**. Never deploy to or modify the owner's own live agency site.
6. **Rank-and-rent vs client site** — default **client site** (NAP, GBP, reviews). Only skip GBP if they say rank-and-rent.

## 1. Identity (do this first)

From Maps / Facebook / site / directories, lock:

- Legal/public name, street NAP, city, state, ZIP
- Rating + review count (cite the listing)
- Claimed vs unclaimed GBP
- Current website (or Blogspot/none)
- Phone/hours only if visible on a primary source

Save `/workspace/{slug}/identity.md`. Slug = business-city kebab.

## 2. Tools + auth (shared computer)

All agents share this machine. Prefer **CLI on PATH** over one-off MCP.

| Job | First choice | Fallback if broken |
|---|---|---|
| Volumes | Semrush connector (phrase volumes). Label as Semrush. | `treg call treg.google.keywords.volume` (SE Ranking). Label provider. Cap cost. Never invent. |
| Live SERP / maps | SERP API with city location | Box browser / web search. Mark map pack unverified if blocked. |
| Competitor keywords | Ahrefs or Semrush organic | `site:domain.com [CITY]` + titles/H1s. Document gap. |
| GSC / GBP live | `treg` Google connectors | Owner checklist. Do not invent impressions or review graphs. |
| Git | `gh` | Device `gh auth login --web` + hand desktop. |
| Site code | **Grok Build** `grok -p "…" --always-approve --cwd …` | Do not inline. |
| Preview host | `netlify` CLI on this computer, **new** site, draft deploy | If CLI missing: `npm i -g netlify-cli` then `netlify login`. |

If a connector needs auth, start its connect flow and keep working on research. If OAuth redirect is broken, do **not** loop auth: use the CLI/browser workaround in the table and say so.

Install once if missing:

```bash
export PATH="$HOME/.local/bin:$HOME/.grok/bin:$HOME/.treg/bin:$PATH"
command -v grok || curl -fsSL https://x.ai/cli/install.sh | bash
command -v treg || (curl -fsSL https://treg.to/install.sh | sh)
command -v netlify || npm i -g netlify-cli
grok --version; treg --version; netlify --version; gh auth status
```

Grok sign-in: the owner's X account via `grok login --oauth` (hand desktop). Do not paste keys.

## 3. SERP + keyword map

Follow the local keyword-map recipe (80+ candidates, 25+ manual grades, symptoms required). National KD is **not** local difficulty. City phrases below a tool floor = unverified, not zero.

Grade:
- GREEN: weak map pack, directories, or out-of-market doorway in top 5
- YELLOW: 1–2 real local sites
- RED: exact-match locals + stacked LSAs. If head is RED on LSA + maps + organic, pivot the **money** terms, still ship long-tails and the site.

Files: `discovery.md`, `matrix.csv`, `keyword-map.md`, `competitors.md`.

## 4. Aggressive organic plan (always)

Write `RANK-PLAN.md` + print HTML/PDF. Each strategy is H2 + numbered steps:

**A. GBP** (skip only if rank-and-rent): claim, categories, NAP lock, photos, website field after preview, posts.
**B. Reviews:** if rating + count exist, compute extra 5-stars to average A: `n = (N*A − S) / (5 − A)` where `S = current_avg * N`. Report 2.5 / 3.0 / 3.5 / 4.0 and a **recency** target (30–50 genuine 5-stars in 30 days after claim + replies on last 50 negatives). Never buy, gate, or fake reviews. QR + verbal ask + SMS after paid job.
**C. Site** (this skill's Grok Build).
**D. On-page / AEO:** follow §4D on every money, city, and FAQ URL. Also: one H1, FAQPage + LocalBusiness JSON-LD, speakable NAP, sitemap, GSC.
**E. Citations:** identical NAP. Real Facebook Page if the Place page is unofficial.
**F. 30/60/90 calendar.**
**G. Do-nots.**

If maps is poisoned by a 2.x average, say so: **rank the website first**; all-time 4.0 can take years.

### 4D. Perfect AEO page checklist (every indexed money page)

Adapted from Nectiv's *Perfectly Optimized Page for AEO* (nectivdigital.com/blog/the-perfectly-optimized-page-for-aeo-ai-search). Local rules override generic blog advice (no invented stats, no fake "last updated").

1. **AI accessibility:** allow GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot in robots.txt unless the client forbids; server-render answer copy (static HTML/SSR); no SPA shells for money pages.
2. **Key takeaways in the top third:** 4–6 short sentences under the H1 that answer the page query; each quotable alone (service + city + who + next step).
3. **Hierarchy:** one H1, H2s support it, H3s nested; tables, bullets, numbered lists for costs (labeled estimates), steps, what's included.
4. **Honest freshness:** visible Last updated only when facts change; `dateModified` matches; never stamp today on unchanged copy.
5. **FAQ block:** 4–8 real buyer questions + FAQPage JSON-LD; answers lead with the direct answer.
6. **Fan-out coverage:** cost, timeline, what's included, who it's for, nearby towns actually served, main objection. One URL owns one intent; no city mill.

**AEO QA gate:** for the homepage and every P0 money page, write pass/fail notes in `aeo-qa.md`. Fail = fix before calling the sprint done.

## 5. IA + copy + design.md

Nav default: Home (pillar) · money services · 3–6 city pages · FAQ · Contact. Sticky mobile: primary conversion.

Write `design.md`: conversion over hero. One typeface (Manrope or Geist). No Inter. No stock SUV/handshake hero. No fake testimonials. No star widget that sells a bad rating. Address reviews honestly in FAQ if the listing is ugly.

Full page copy under `content/` for every URL (title, meta, H1, top-third takeaways, body, FAQ, internal links, schema outline, fan-out H2s). Phone/hours TBD until confirmed. Client-facing copy never contains research language (volumes, competitor names, keyword notes). Then the single handoff file from the keyword-map deliverable skill.

## 6. Grok Build the site (mandatory)

Working dir: `/workspace/{slug}/site` (static HTML, crawlable, `netlify.toml`).

```bash
export PATH="$HOME/.local/bin:$HOME/.grok/bin:$PATH"
cd /workspace/{slug}/site
grok -p "$(cat /workspace/{slug}/GROK-SITE-PROMPT.md)" --always-approve --cwd /workspace/{slug}/site
```

Put the entire spec in `GROK-SITE-PROMPT.md`: identity, IA, design.md, conversion, schema, §4D checklist, robots.txt AI-bot rules, no invented NAP/phone/hours/reviews, EXAMPLE inventory labeled. After grok exits, review files against §4D. If it produced nothing, write the static site locally rather than looping.

## 7. Netlify preview (new project)

```bash
cd /workspace/{slug}/site
npx netlify status || npx netlify login   # hand desktop for OAuth
npx netlify sites:create --name "{slug}-preview" --manual
npx netlify deploy --dir .                 # draft only
```

Never `--prod` onto an existing site the owner didn't name. Send the `*.netlify.app` URL.

## 8. Deliver

Chat: verdict (3–6 lines), review math, Netlify URL, AEO QA summary, then attach PDF + zip of `/workspace/{slug}/` (identity, keyword-map, matrix, RANK-PLAN, aeo-qa, design.md, content/, GROK prompt, site source).

## Guardrails
- Never fabricate volumes or review counts.
- Never buy reviews.
- Never invent "last updated" dates or AEO stats.
- Never use a cloud agent for this site.
- Never deploy over the owner's live sites.
- Semrush failing: use Treg. SERP API blocked: continue, mark map pack unverified. GBP quota 0: checklist, not fake stats.
