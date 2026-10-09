---
description: "Grok Bot routine: SEO answer visibility check — Fires once a week to check whether AI answer engines cite the owner's pages for their key buyer questions and turn gaps into work."
argument-hint: "[extra context]"
---

1. Load the answer engine question map for each site. If none exists, build one with Answer engine question map and stop after saving it.
2. Check the owner's answer pages for each high-priority question: live, indexable, canonical correct, and the direct answer in the first paragraph. Record the URL, date, and finding.
3. Ask a fixed sample of the buyer questions on the AI assistants and answer surfaces you can reach without signing up, accepting terms, or paying. Record the answer, the cited links, and whether the owner's site appears. A login wall means that surface is skipped and named, not counted as zero.
4. Turn each gap into one board card: a refresh for an existing page, a new answer page only where no page answers the question, research where proof is missing, or an owner action for technical fixes. Include the question, evidence, target URL, and how to tell it is fixed.
5. Save a dated report: scope, counts with denominators per surface, gaps found, and cards filed. Label it a sample, not a measurement.

Never publish, change a live page, or contact anyone from this routine. Tell the owner only when a real gap or a new citation turned up.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 11 * * 4`

Ask the importing user for:
- Timezone

${@:-}
