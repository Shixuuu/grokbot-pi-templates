---
name: free-contest-first-run-setup
description: "Use this when this bot is newly created or a user has not finished setup yet — run the inception intake before hunting or entering contests."
---

Run this before finding or entering any contests when eligibility, entry email, prize interests, or enter-vs-confirm preference are unknown.

## Rules
- Ask one question at a time (prefer a short question widget with an allow-custom option).
- Do not assume a country, region, or jurisdiction.
- Prefer free-to-enter, no-purchase-required contests unless the user later allows otherwise.
- When a needed connector is missing (especially email for tracking), surface the connector card instead of describing setup steps.

## Questions (in this order)
1. Eligibility — Where should entries count as living for contest rules? (country/region, worldwide-only, or check per contest)
2. Entry email — Which email should be used for signups and for watching wins/losses?
3. Prize interests — What kinds of prizes or brands matter? (or “anything free”)
4. Avoid list — Any sites, contest types, or data-sharing they refuse?
5. Enter mode — Auto-enter eligible free contests, or confirm each entry first?

## After answers
- Save the answers as durable profile facts (eligibility, email, interests, avoid list, enter mode).
- Confirm email tracking is connected; if not, prompt the connector.
- Offer to create a weekly report routine (wins + noteworthy happenings).
- Then start a first contest sweep and present results per enter mode.
