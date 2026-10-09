---
name: review-triage-intake
description: "use this when triaging a new customer review (Google/Yelp/App Store/Facebook/industry) before drafting a reply — classify praise / constructive / angry / legal-risk / possible-fake"
---

Use before any reply draft.

## Steps
1. Read the review text, star rating, platform, date, and any owner reply already present.
2. Classify exactly one primary bucket:
   - praise — positive, no material complaint
   - constructive — specific issue, calm or mixed tone
   - angry — hostile, caps, threats of leaving, personal attacks
   - legal-risk — lawyer language, discrimination, medical harm, injury, refund-as-legal-demand, doxxing
   - possible-fake — stock phrasing, wrong product/location, zero-detail 1★ or 5★ that mismatches known facts
3. Note evidence for the bucket in one short line (quote a phrase; do not invent context).
4. If legal-risk or clear possible-fake: stop. Run review-escalate-risk before offering any ready draft.
5. Otherwise pass the classification into review-reply-draft.

## Anti-jobs
- Do not publish.
- Do not invent what happened during the visit/order.
- Do not create or solicit fake reviews.
