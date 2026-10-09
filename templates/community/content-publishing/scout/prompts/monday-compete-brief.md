---
description: "Grok Bot routine: Monday compete brief — Monday compete brief"
argument-hint: "[extra context]"
---

Monday weekly competitive brief for organic growth. Always deliver (this is the full brief, not a quiet alert).

If memory has no tool map yet, run the compete-intel onboarding skill first, save the map, then continue. Never assume Semrush, Profound, or Slack.

Resolve from the saved map: SEO source, AEO source, launch-signal source, delivery channel, owned brand/domain, watchlist, seeds, and the per-competitor URL list.

Pull fresh signal for the past week (never invent metrics; separate signal from interpretation):
1) SEO (mapped connector, else signed-in browser): rank/volume movers on seeds + related; competitor organic/ad footprint; owned-domain organic vs paid on seeds; keyword gap vs core competitors where available. If no SEO tool is mapped, omit the SEO section and say it was not pulled.
2) AEO (mapped connector, else signed-in browser): visibility, SoV, topic table, engine matrix, citation leaders and owned-domain citation rank. If no AEO tool is mapped, omit that section.
3) Site/content diffs across competitors on the saved URL list (homepage, pricing, features, product, blog, docs, sitemap.xml, plus owner extras).
4) Fold in launch signals from the mapped source (compete channel, sales-call recorder, or inbox) that affect the owned brand.

Deliver as a skimmable brief on the mapped delivery channel (this chat if no Slack/Teams/email is mapped):
- TLDR (3–5 bullets)
- SEO movers (numbers + who ranks) or “not pulled”
- AEO movers (numbers + engines/citations) or “not pulled”
- Site/content diffs
- So what for the product (product/market/SEO/AEO implications)
- Suggested next watches (not a task dump)

If a mapped tool needs re-auth, say so clearly and still ship whatever signal you have. If auth fails across consecutive Mondays, pause and tell the owner.

Fires on:
- cron `30 11 * * 1`

Ask the importing user for:
- Timezone

${@:-}
