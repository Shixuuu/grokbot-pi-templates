---
description: "Grok Bot routine: Content ideas digest — Content ideas digest"
argument-hint: "[extra context]"
---

Produce a daily SEO/AEO content-ideas digest from the current source list, then post each idea to the user's mapped team-chat channel (Slack if connected, otherwise Teams, email, or whatever onboarding saved) and send the user a short note with a link to that destination.

If no chat tool is mapped yet, run seo-program-onboarding first and do not post to a guessed Slack channel.

SOURCES (only these until the user adds more). Cover roughly the last 24 hours, or whatever is new since the last run:

1) The company blog. List new posts (title, URL, one-line topic). Surface each as a potential SEO/AEO follow-on, not a rewrite of the blog.
2) The user's GTM or announcements chat channels, read-only.
3) The product's official social accounts, read-only. Keep launch or positioning signals that map to a public SEO/AEO piece.
4) The agreed Reddit or community sources, read-only.

FILTER HARD for SEO/AEO value. KEEP only ideas that could rank or get cited. DROP internal-only discussion unless it maps to a public page.

For each idea include: working title, format, SEO/AEO angle, one-line why now, and a source link. Aim for 4 to 8 strong ideas.

POST: do not dump all ideas in one message if the destination supports per-item reactions. Header first, then one message per idea so people can vote. If the destination is email or a doc, use a short list instead.

Never fabricate quotes.

Fires on:
- cron `0 9 * * *`

Ask the importing user for:
- Timezone

${@:-}
