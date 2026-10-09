---
name: sumogrowth-ai-insights-issue
description: "Use when writing an AI Insights newsletter issue: duplicate the latest published post, swap in new general AI news, tools, tip, and one branded graphic per lead story, and save an unpublished Substack draft."
---

# AI Insights issue

Write one unpublished newsletter draft. Never publish, send, schedule, or delete unless the owner confirmed in that run.

## Duplicate first
Do not write the issue from a blank page. Always start from the latest published post so format, dividers, and footer stay identical.

1. Fetch the latest published post with the local python-substack CLI (or equivalent API).
2. Duplicate it into a new unpublished draft: copy draft body, title, and subtitle. Keep dividers and the podcast/advertise footer.
3. Sponsors (required): After cloning, ensure sponsor blocks match the canonical set in the local sponsor-blocks.md (or the latest owner-approved published post). If the latest published post still has a stale sponsor layout, replace sponsors with the canonical blocks. Do not invent new sponsor copy.

Canonical sponsor order:
- Top (after tagline, before first H1): voice/agent receptionist product
- After story 1: agency growth product
- After story 2: CRM free trial
- After Other news: agency bootcamp
- After Trending tools: AI Academy free join
- After tip: done-for-you growth systems CTA
- Keep the Podcast / advertise / sign-off footer unchanged

4. Only then replace the variable news/tools/tip parts listed below.

## Then update
Research before editing:

- Biggest AI news in general from the last 24 hours (models, funding, products, regulation, big-tech deals, tools, not limited to AI agents). Pick the 5 most important stories for AI agencies, CRM operators, and business automation readers. Verify facts and sources. Do not invent numbers, quotes, or companies.
- Product Hunt top 3 products launching/trending today (research source only). Do not invent rankings or upvote counts.

Replace only:

- Title: story 1 headline
- Subtitle: `PLUS: {story 2 headline}`
- H1 for story 1, then its graphic, then one tight paragraph with source link. Leave the after-story-1 sponsor.
- H1 for story 2, then its graphic, then one tight paragraph with source link. Leave the after-story-2 sponsor.
- The 3 bullets under Other Top AI News Today (bold headline + short summary + source)
- The 3 bullets under Trending AI Tools Today (linked name + one-line description). Link each tool to its real website (the Visit website URL on the Product Hunt page). Never link to producthunt.com. Strip `?ref=producthunt` and any other PH tracking params. Do not mention Product Hunt, upvotes, or rankings in the reader-facing copy.
- Business AI Tip of the Day including the H3 title: write a new automation tip grounded in one of that issue's stories or trending tools, plus a short pro tip

## Style (variable copy only)
- Do not use dashes in body content (no em dash, no en dash). Prefer commas or ellipsis (...) instead.
- Applies to news paragraphs, other-news bullets, tip body, and tool blurbs. Leave sponsor/footer text unchanged except when applying the canonical sponsor refresh.
- Trending tools: website URLs only. Readers must not see that rankings came from Product Hunt.

## Story graphics (required)
Two images, one per lead story:

- Landscape ~1536x1024 editorial graphic
- Small category label at top (e.g. BIG NEWS, FUNDING NEWS)
- Headline in large type
- One simple visual metaphor (logos, puzzle pieces, pedestal, arrow). No real-person likenesses.
- Three circular icon + caption pills along the bottom
- Place the image directly under that story's H1, before the body paragraph
- Pass local style-reference PNGs when generating
- Upload via python-substack local image support

No images for the other-news stories. Do not rewrite or restyle section headings or the podcast/advertise sign-off.

## Ship
Create only the unpublished cloned-and-updated draft. Report title, draft id, and a one-line recap. Stop there.
