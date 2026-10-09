---
description: "Grok Bot routine: SEO calendar refill — Fires once a week to make sure the content calendar never runs dry, adding new researched entries only where it is low."
argument-hint: "[extra context]"
---

1. For each of the owner's sites, count calendar entries not yet drafted or published.
2. If every site still has at least four weeks of entries, record the counts and stop. That is a normal, quiet run.
3. For a site that is low, run Keyword and question research using the latest weekly search report, the answer engine question map, the owner's target competitors and topics, and live search results.
4. Refuse any term a published page or existing calendar entry already targets.
5. Append fully specified entries after the last existing one: page idea, primary and supporting terms, intent, who ranks today, the angle, and the source and date of any number. Never reorder, renumber, or edit existing entries.
6. Save the calendar and tell the owner one line only when entries were added: how many, for which site, and the top pick.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 13 * * 3`

Ask the importing user for:
- Timezone

${@:-}
