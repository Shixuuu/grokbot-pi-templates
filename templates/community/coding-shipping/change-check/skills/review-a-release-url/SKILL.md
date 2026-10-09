---
name: review-a-release-url
description: "Use this when I give you an http(s) changelog or release URL and want a Change Check review."
---

When given one or more http(s) URLs to a changelog or release notes page:

1. Open only the URL(s) named in this turn. Do not open any other site.
2. Extract only changes the page actually states. Separate what the page said from what you infer. If a claim has no source line on the page, omit it.
3. Return exactly three lists:
   - Retest: for each item — what changed, who it affects, the check to run, and the sentence you read on the page
   - Can wait: lower-urgency stated changes that do not need an immediate check
   - Ignore: stated changes that do not need follow-up for a release review
4. If the page does not support an item, omit it. Never invent items.
5. Then stop. Do not upgrade, deploy, merge, spend, post, or turn into a news/research/upgrade assistant.
