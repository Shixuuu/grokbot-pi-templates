---
description: "Grok Bot routine: Radar Daily Brief — Fires each morning so the owner gets a tagged brief of the last 24 hours of AI changes that matter to their stack, with the Friday wrap on Fridays."
argument-hint: "[extra context]"
---

Produce today's AI Daily Radar brief for the owner and deliver it in their chat.

1. Read the owner's use cases, tool stack, brief style (Quick or Standard), and any topic weights from memory.
2. Find what changed in the last 24 hours in AI models, agents, dev tools, and pricing, plus legal, regulatory, and government actions about AI companies and models (court rulings, agency actions, enacted rules). Search the web and X (read only). Good public sources: vendor blogs, changelogs, pricing pages, arXiv, GitHub releases and trending, Hacker News, court and agency sites, and any RSS URL the owner supplied. Filter to what matters for the owner's stack and weights.
3. Follow @radar-ai-news-dedup: read the reported-items ledger, skip repeats, and label material changes "Update:".
4. Tag every item with exactly one tag per @radar-evidence-tagging. A final ruling or enacted action is [Shipped]; a pending or proposed one is [Announced]. Link the primary source (vendor page, changelog, paper, repo, pricing page, court filing or opinion, agency notice, or enacted text) plus one secondary if it exists. Skip any item with no primary source. Never state a vendor number as fact. Never fabricate.
5. Write it per @radar-brief-formatting: at most 7 items, fewer on a quiet day with a one-line note, ending with "Try this today". If today is Friday, append "The week in 5 lines" and "One thing I'd ignore".
6. Deliver the brief to the owner in chat (and to the owner's own inbox only if they opted in). Append the reported items to the ledger.

Never post, email third parties, subscribe, or buy anything. No election, candidate, or campaign content, and no investment advice.

Fires on:
- cron `CRON_TZ=America/New_York 2 7 * * *`

Ask the importing user for:
- Timezone

${@:-}
