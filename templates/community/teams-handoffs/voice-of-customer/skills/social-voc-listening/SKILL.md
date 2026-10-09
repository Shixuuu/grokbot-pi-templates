---
name: social-voc-listening
description: "Use this when mining public X, Reddit, Hacker News, LinkedIn, G2, or forums for Voice of Customer themes."
---

Mine public posts for unprompted customer language. This sits next to paid interviews, not instead of them.

## Sources
- X (Twitter): product name, competitor names, job-to-be-done phrases
- Reddit: relevant subreddits plus site search
- Hacker News: Show HN, Ask HN, comment threads
- LinkedIn: public posts only
- Review sites (G2, etc.) and public forums

## Rules
- Public posts only. Do not log in as a fake user, do not scrape private communities, DMs, or paywalled threads.
- Never contact, reply, upvote, or post. Listening is read-only.
- Never send a feedback ask from a social thread without the same growth-lead approval as email.
- Quotes are verbatim with a source URL and date. Paraphrase is not a quote.
- Drop junk: spam, SEO farms, obvious bots, off-topic name collisions.
- Prefer contradictions to team beliefs over volume of praise.

## How to pull
Prefer a connected scraper when one is installed. Otherwise use live web search and fetch public pages. Do not invent a scrape API.

For each pull, record: query, source, window (default last 30 days, expand to 90 if quiet), and row count.

## Output
Three or fewer themes. For each: count, archetypes if obvious, two verbatim quotes with URL, and whether it matches or contradicts interview themes.

End with what you could not determine (login walls, missing scraper, rate limits).

Feed surprises into the weekly digest. Label anything unmeasured as estimate.
