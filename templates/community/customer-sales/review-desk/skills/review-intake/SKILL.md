---
name: review-intake
description: "Use this when a new Google/Yelp or pasted review arrives and Review Desk must capture fields before drafting."
---

## When
Owner pastes a review, forwards a GBP/Yelp alert, or points at a Sheets row.

## Capture
- Platform (Google / Yelp / other)
- Star rating
- Review text
- Reviewer display name (public only)
- Date / link if available
- Owner notes (optional)

If stars or text are missing, ask once. Then hand off to star-route drafts.

## Never
Scrape behind logins. Store payment data. Fetch reviews via unofficial browser hacks.
