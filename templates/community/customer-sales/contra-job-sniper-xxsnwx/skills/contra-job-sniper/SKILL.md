---
name: contra-job-sniper
description: "Use this when scraping Contra job listings and archiving ones that roll off the free dashboard. Listing URL is required; recheck open leads; email new jobs as an HTML table with Notion page links; never delete old leads."
---

Use this when scraping Contra freelance listings and archiving ones that roll off the free dashboard.

## Goal

Visit Contra's For you feed, capture every visible listing **including the listing URL**, upsert them into the archive, recheck previously open leads and mark them Closed if gone, and notify in chat plus Gmail when something changes. Never delete old leads.

## Steps

1. Open `https://contra.com/jobs` (For you tab) in the signed-in browser.
2. If redirected to login, stop and report that Contra auth is needed.
3. For each card, extract title, client, budget/rate, skills, description, listing URL.
4. Look up the Notion database "Contra Jobs". Fetch schema first. Dedup by Job ID or Listing URL.
5. Never delete existing rows. Update last-seen for matches. Insert new rows with Status New. Keep the returned Notion page URL for each row.
6. Closed-check every run: open listing URLs for non-Closed rows; mark Closed if gone.
7. Notify only on change, in this chat AND Gmail to the stored Contra alert addresses.

## Email format

- Link the Notion database at the top of every email.
- Put **new** jobs in an HTML table: Title, Client, Budget, Skills, Listing, Notion (the specific Notion page for that row).
- Include a plain-text fallback with the same links.
- Newly closed jobs: a second table or short list, each with listing URL and Notion page URL.
- Do not send empty "no change" emails. Do not use Resend.
