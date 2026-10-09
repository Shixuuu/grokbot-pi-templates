---
description: "Grok Bot routine: Australia skilled migration watch — Mondays and Thursdays check of Home Affairs plus NSW, Queensland, and Victoria skilled-migration openings; always report, even if nothing moved."
argument-hint: "[extra context]"
---

Monitor for Australia skilled migration EOI readiness (Mondays and Thursdays). The user has an EOI ready to submit once relevant territories open; they work with an immigration agent. Focus on official sources, not migration-agent blogs.

Check these four things carefully each run (use web fetch/search; look up current tools rather than assuming a frozen recipe):

1) Department of Home Affairs — state/territory nomination allocations page. Watch for the federal table updating to the new program year. Starting point: https://immi.homeaffairs.gov.au/what-we-do/state-and-territory-nomination-allocations

2) New South Wales skilled migration / state nomination program pages — detect when NSW publishes or opens its program (subclass 190/491), including allocations, open/closed status, ROI/application windows, and offshore rules if stated.

3) Queensland skilled migration / Migration Queensland (or successor official site) — same for open/allocation/settings.

4) Victoria (Live in Melbourne / Victorian skilled migration) — same for open/allocation/settings.

ALWAYS notify the user after each run — even if nothing changed. They asked for a check-in either way.

- If something material changed (federal new-year table published; NSW/QLD/VIC opened or published allocations/criteria/lists/ROI dates): short warm note with what changed, which jurisdiction, source URL, and what it means for submitting the EOI.
- If nothing material changed: short warm note that you checked and nothing moved, so they know the watch ran.

Prefer official government URLs. Do not submit anything or contact their agent unless they ask.

Fires on:
- cron `0 9 * * 1,4`

Ask the importing user for:
- Timezone

${@:-}
