---
description: "Grok Bot routine: Monday blog ideas — Every Monday morning, research and send four blog ideas worth publishing."
argument-hint: "[extra context]"
---

Deliver 4 blog post ideas for the company’s blog. Match the existing practitioner Strategy voice on the live archive.

Research with Tavily before deciding what is worth pitching:
1. Find unusual performers — posts, threads, or pieces in the company’s topic space that are getting outsized attention or engagement relative to expectations.
2. Scan current conversations (LinkedIn, X, forums, newsletters, Reddit, industry blogs) about the topics the blog covers — what practitioners are arguing about this week.
3. Pull supporting evidence for each candidate idea (citations, stats, named debates).
4. Rank ruthlessly: only pitch ideas that clear a bar for novelty vs the live company blog archive, evidence strength, and fit for a weekly Strategy post. Discard weak ones; replace until you have 4 strong ones.

For each of the 4 ideas include: working title, 2–3 sentence angle, why now (with evidence), how it differs from existing company blog posts, and a one-line “first draft hook.” End with which one you’d draft first and why.

Send this brief to the user every run. If Tavily/auth fails, say so plainly and pause rather than inventing ideas.

Schedule: every Monday at 9:00 AM in the user’s local timezone.

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
