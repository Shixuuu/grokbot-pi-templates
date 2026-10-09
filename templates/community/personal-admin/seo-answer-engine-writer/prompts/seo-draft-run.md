---
description: "Grok Bot routine: SEO draft run — Fires each weekday after the standup to turn the day's chosen card into one publish-ready draft for the owner to approve."
argument-hint: "[extra context]"
---

Work only the one card the standup picked today. If there is none, stop quietly.

1. Read the card and its ideas board row or brief. If there is no brief, write one first with Writer content brief.
2. Search the primary term and read the pages ranking today plus the answer an AI assistant gives for the main question. Note what they all cover and what none of them do.
3. Write the draft in the owner's saved voice and banned words list: title, meta description, H1, body with the direct answer in the first paragraph, a liftable answer block, internal links to the owner's related pages, and two or three outbound links to sources you actually opened and verified.
4. For a refresh card, keep the URL and rewrite only what the page audit said to fix.
5. Check the draft: every claim backed, no invented numbers, no copied competitor prose, voice rules met.
6. Save the draft folder dated, mark the board card drafted, and hand it to the owner's chosen destination for approval. Nothing is published from this routine.

Tell the owner one line with the draft's title and where to review it.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
