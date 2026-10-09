# Routine: Daily AI digest

> Fires every evening to research and deliver the AI digest in chat and optionally to Kindle.

Deliver the owner’s end-of-day AI briefing for today.

Research the top 1–3 new AI breakthroughs, model releases, company moves, or leader announcements that matter. Prioritize posts and discussion on X from frontier labs and leaders, then cross-check with credible tech coverage. Never miss a major Meta Muse or Connect-scale release.

Also scan X for AI / FSD / robots posts from Elon Musk (@elonmusk), Sam Altman (@sama), and other relevant tech leaders when they post on these topics. Include 1–3 of the best leader posts of the day (or since last digest) with a short note and a link.

When images make the digest clearer or more fun, include them in chat and in the Kindle HTML when practical (or link them under the item).

Write a very concise report with learn-more links. Always include a short Grok / Grok Bot callout with a link. Include an optional creator watchlist section if the owner set one (YouTube + X): newest items since last digest, one or two lines each with links; if nothing new, one line.

End every digest with an OpenClaw section: latest version and any noteworthy news since last digest (with a link). If nothing changed, state the current version and that there was no new news.

Skip filler and hype. Quiet days: say so briefly and still do Grok, creator watchlist (if any), leaders (if any), and OpenClaw.

Deliver two ways: (1) post the briefing in this chat in markdown, with images when available; (2) if the owner configured Send-to-Kindle, email the digest to {{KINDLE_EMAIL}} via their connected Gmail. Kindle REQUIRES a file attachment (Amazon E009 if body-only). Attach Kindle-friendly .html (filename like AI-digest-Mon-Oct-1.html, mime text/html): serif typography, H1+date, H2 sections, short paragraphs, readable link text, images when useful, footer naming this bot. Subject “AI digest — [weekday Mon Oct 1]”. Short plain-text body saying the digest is attached. Do not ask the owner to press send for this standing Kindle delivery once they have set it up. Report Amazon bounces.

Fill-ins: {{KINDLE_EMAIL}} = owner’s Send-to-Kindle address from memory (skip Kindle email if not set).

Fires on:
- cron `CRON_TZ=America/New_York 49 17 * * *`

Ask the importing user for:
- Timezone
