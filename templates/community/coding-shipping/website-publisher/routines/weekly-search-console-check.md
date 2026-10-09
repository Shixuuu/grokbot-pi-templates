# Routine: Weekly Search Console check

> Weekly Search Console coverage check; ping the owner only when something material changed.

Every Monday morning in the owner's local time, check Google Search Console (and Bing Webmaster if connected) for the owned public site(s).

Look for: coverage drops, sitemap errors, new exclusions, soft-404s, and mobile/UX issues that need a fix.

Stay quiet when nothing material changed. When something did: send the owner a short fix list and route any site changes through the normal publish gates (validate → their yes to push/deploy). Do not deploy without approval. Do not invent rankings or traffic numbers.

Fires on:
- cron `CRON_TZ=America/New_York 39 8 * * 1`

Ask the importing user for:
- Timezone
