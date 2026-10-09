---
description: "Grok Bot routine: Step 1: Track Comments — Daily 9:00pm Melbourne — scrape outreach-profile post comments into Notion as new leads."
argument-hint: "[extra context]"
---

Run Stage A of the LinkedIn lead pipeline skill ([Psyke LinkedIn lead pipeline](sand-workflow:psyke-linkedin-lead-pipeline)).

Goal: find new people commenting on the outreach LinkedIn profile’s posts (last ~14 days of posts) and create-only add genuine-interest leads to your Notion lead tracker.

Board: {{NOTION_LEAD_TRACKER_COLLECTION}}
DB URL: {{NOTION_LEAD_TRACKER_URL}}

Property mapping for creates:
- Name, LinkedIn URL, Job Position, Company, Comment Text
- Comment Date (datetime)
- Stage = New
- Source URL = post URL (REQUIRED — LinkedIn post they commented on)
- Post Title = short post title if known
- Owned by = operator when applicable
Never write Notes, Email, or Next Action on create.

Tools: prefer Apify actors harvestapi/linkedin-profile-posts then harvestapi/linkedin-post-comments. Use the operator’s Notion workspace only. Apify when available — skip if offline, no browser fallback for scraping. Never use cookie-based scrapers.

Skip list: only the outreach profile itself.

Reporting (required):
- Progress updates at each major beat.
- After posts fetched, ALWAYS show a markdown posts table:
  | Date | Total comments | Comments scanned | Added to Notion | Short title | Link |
- Mini report: lookback, posts, comments, new rows (names + source post), dedupe hits, skipped noise, errors.

Follow Stage A rules (lookback overlap, URL normalisation, dedupe, interest judgment, ≤30 create cap unless raised for a catch-up, create-only).

Fires on:
- cron `CRON_TZ=Australia/Melbourne 0 21 * * *`

Ask the importing user for:
- Timezone

${@:-}
