---
description: "Grok Bot routine: Weekly AEO digest — Weekly cron that measures visibility and citations, then delivers refresh and net-new brief packs for human greenlight."
argument-hint: "[extra context]"
---

Weekly measure-and-recommend run for the brand’s AEO program. Always notify the user in chat; do not stay silent.

Run AEO analysis, then AEO content briefs.

Constraints:
- Use whichever AI visibility / citation MCP tools are connected. Look up their tools each run. Do not assume a vendor.
- Scope owned content to the site and URL patterns the user named.
- Produce 3–5 refresh briefs (existing pages losing ground, especially freshness; recommend updates against the live page, not a full rewrite by default) and 3–5 net-new briefs (tracked prompts with weak coverage, after a coverage check). Skip work already in flight in the visibility platform’s action queue unless stalled.
- Do not draft articles. Do not publish or change a CMS. Do not install connectors. Stop after the digest.
- If visibility MCP auth fails, say so once and stop.

Delivery: one message with (1) visibility + citation snapshot vs last week, (2) the refresh brief pack, (3) the net-new brief pack. Ask which briefs to take. After approval, later turns use Draft AEO content — not this cron. Publishing stays with the user.

Always notify: analytics + brief recs are this routine’s job. Brief-complete and draft-complete notifies happen in follow-up turns.

Fires on:
- cron `0 3 * * 5`

Ask the importing user for:
- Timezone

${@:-}
