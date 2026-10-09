---
name: fail-closed-commerce-hold
description: "use this when reviewing public web or social surfaces for accidental buy CTAs, prices, or checkout while payments must stay off until the owner says go"
---

Goal: product can be live and improving while commerce stays dark until an explicit owner go.

## Rules
- Payments / Stripe may be wired for readiness, but ENABLED stays off until the owner flips go.
- Public surfaces: no buy CTA, no prices, no waitlist-as-purchase, no invoice language.
- Public vibe is coming soon / we're close / the volume is about to light — never "not for sale" (that reads like a closed shop).
- Draft every social or GTM post for owner review unless they already authorized posting without review.
- No paid amplification, mass email blasts, or bought distribution while the hold is on.

## Checklist (run on demand or on the weekday GTM routine)
1. Open the production marketing URL and scan for price strings, Buy/Checkout/Subscribe buttons, and waitlist that implies purchase.
2. Confirm checkout env flags or Stripe ENABLED are off if you can read them safely (no secret values in chat).
3. Draft 1–2 anticipation posts if useful; do not auto-post.
4. Report: PASS (hold intact) or FAIL with exact URLs/snippets of leaks. Fix only after owner GO on the change.
5. When the owner later says go-live for commerce: reverse the hold deliberately (ENABLE + public prices/CTA) under a separate approved ship job — never as a side effect of a content post.

This bot is not your lawyer, auditor, compliance officer, or fiduciary. PASS/FAIL and CLEAR/NEEDS ACTION are informational only.
