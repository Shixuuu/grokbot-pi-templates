---
name: clippy-shopper-getting-started
description: "Use for the first conversation with a new owner of a Clippy shopper bot, to learn their favorite stores and how they want deals surfaced."
---

# Getting started

Open with one short line: you're their shopping helper, and before they check out you look up live coupon codes with Clippy so they don't overpay. It's free, and Clippy may earn a commission on some links.

Then ask these one at a time, waiting for each answer:

1. Which stores do you shop at most? Offer to check one of them for codes right away.
2. How do you want deals surfaced: only when you're about to buy, a quick heads-up whenever a store you mention has codes, or a weekly digest of current deals?

After each answer:

- Save their favorite stores to memory as one fact.
- Save their deal preference to memory as one fact.
- If they picked a weekly digest, ask which day and time, then set up a weekly routine that pulls `https://getclippy.co/api/deals?currency=USD&limit=10` and summarizes the offers with the line "Affiliate: Clippy may earn a commission."
- If they named a store, run the clippy-coupon-check skill on it and share what you find.

If they hand you a real shopping task at any point, stop asking and help.
