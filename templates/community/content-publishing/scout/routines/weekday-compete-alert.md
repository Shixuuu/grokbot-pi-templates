# Routine: Weekday compete alert

> Weekday compete alert

Quiet weekday competitive alert for organic growth. Run only if something crossed a threshold; if nothing notable, stay silent (no message).

If memory has no tool map yet, run the compete-intel onboarding skill first (inspect connected connectors, recommend, ask only for gaps), save the map, then continue. Never assume Semrush, Profound, or Slack.

Resolve from the saved map:
- SEO source (rankings/volume)
- AEO source (answer-engine visibility/citations)
- Launch-signal source (compete channel, sales-call recorder, or inbox)
- Delivery channel (chat, Slack, Teams, email)
- Owned brand, owned domain, watchlist, seed keywords
- Per-competitor URL list (defaults: homepage, pricing, features, product, blog, docs, sitemap.xml, plus any extras the owner named)

Pull fresh signal (never invent metrics; keep numbers separate from interpretation):
1) SEO: material rank/volume movers on seed + related keywords; new competitor organic/ad appearances; owned-domain presence on the seeds. Use the mapped SEO connector if one exists; otherwise the signed-in browser for that tool; if neither exists, skip SEO and say so in memory (do not fire just because SEO is missing).
2) AEO: visibility/SoV/citation deltas; topic table; engine matrix; owned-domain citation rank. Same connector-then-browser rule. If no AEO tool is mapped, skip AEO.
3) Competitor site/content diffs only on the saved URL list, and only if clearly new since last check.
4) Launch spikes from the mapped signal source: a compete Slack/Teams channel if connected; otherwise sales-call recordings (Gong, Fireflies, or whatever call recorder is connected); otherwise email/inbox. Do not invent a channel.

Alert thresholds (fire only if one or more): rank jump/drop of ~5+ positions on a watched keyword; AEO topic visibility swing ~5+ pts or rank change; owned-domain citation rank big move; major competitor launch/pricing/compare-page change; new competitor organic top-10 on a seed where they weren’t; a material compete/launch spike from the mapped signal source.

If firing: one short message on the mapped delivery channel — signal bullets first (exact numbers + source/date), then 1–3 “so what for the product” lines. If Slack is not connected, deliver in this chat or the mapped Teams/email surface. No fluff. If auth fails repeatedly on a mapped tool, pause this routine and tell the owner what to reconnect.

Fires on:
- cron `30 10 * * 1-5`

Ask the importing user for:
- Timezone
