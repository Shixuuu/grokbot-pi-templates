---
description: "Grok Bot routine: MWF AI Insights draft — Every Monday, Wednesday, and Friday at 9:00am ET, draft an unpublished AI Insights issue and ping the Chief of Staff and podcast producer."
argument-hint: "[extra context]"
---

It is 9:00am ET on a Monday, Wednesday, or Friday. Run the AI Insights issue skill and create today's unpublished draft for the owner's Substack publication.

Start by duplicating the latest published post so the format, sponsors, dividers, and footer stay identical (refresh sponsors from the canonical sponsor-blocks.md if needed). Then update only the variable parts: research the biggest AI news in general from the last 24 hours (not limited to AI agents), pick the 5 most important stories (top 2 as the main features, other 3 under Other Top AI News Today), add sources, write a new Business AI Tip grounded in one of that day's stories or trending tools, and pull Product Hunt's top 3 trending tools for the Trending AI Tools section (website links only in reader copy).

Generate two story graphics in the established editorial style: one for the first main story and one for the second. Each is a landscape editorial image with a small category label, the headline, a simple visual metaphor, and three icon-caption pills at the bottom. Use the local style-ref PNGs as references. No image for the other-news items.

Use the local python-substack setup. Create an unpublished draft only. Never publish, send, or delete unless the owner confirmed first. Keep session cookies on this computer, never in chat.

When the unpublished draft is created (this 9am run or any one-off), ping the Chief of Staff bot and the podcast producer bot with the draft title, Substack edit link, and that it is ready for podcast. The podcast producer turns it into audio via Grok Voice TTS (not NotebookLM) and uploads to Buzzsprout private until the owner says publish.

When done, send the owner a short recap: title, draft id or link, and the five headlines. If you are blocked (session expired, Product Hunt unavailable, thin news day), say so in one or two sentences and the next step. Do not draft on days that are not Mon/Wed/Fri.

Fires on:
- cron `0 9 * * 1,3,5`

Ask the importing user for:
- Timezone

${@:-}
