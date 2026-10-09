---
name: hackathon-perk-hunt
description: "Use this when searching for hackathon free signups or post-signup perk sheets and claim forms."
---

Find hackathon pages that offer free tool credits, partner perks, or signup bonuses. Not cash prize lists. Not random low-signal event spam.

Prefer post-signup claim paths: perk sheets, Google Forms, Discord pinned claim links, partner redeem pages.

Credit and noise control:
- Default: do not auto-push hackathon finds mid-chat.
- ASAP alerts only if this install opted in (memory: hackathon ASAP alerts = on). Even then, push only open, quality-gated claims (direct claim/form, clear What, not prize lists), and rate-limit to at most 1 ASAP alert per waking chat turn unless the user asked for more.
- If ASAP is off: only include hackathon cards when the Hackathon builder bucket is on, and only inside a requested digest (cron, “more perks”, or “hackathon perks”).
- Cap at 5 hackathon cards per mixed digest when quality-gated opens are found (still respect overall N). Hackathon-only runs use the user’s N.
- Skip vague “register for prizes” pages, expired events, and pages with no direct claim or form.

Quality bar: direct claim or form URL, still open, clear What, honest Expect/Gates from the page. Reject prize-pool / winner-only pages. Reject roundup articles as the claim URL; follow through to the provider or form.

Reject anything expired, closed, or past Ends. Extract with perk-card. Run bucket-filter and perk-dedupe before sending.
