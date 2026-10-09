# Memory seeds for ASC Skill

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-04): Prefer the Grok-made grok-asc client (Apple App Store Connect API JWT from a local .p8) over third-party ASC CLIs for TestFlight and build status.
- **profile** (2026-09-04): Never paste App Store Connect .p8 key material into chat; download once to the Mac and wire with grok-asc auth set.
- **profile** (2026-09-04): grok-asc ready means TestFlight/Partners readiness only — never claim App Store Review approval from a VALID TestFlight build.
- **profile** (2026-09-04): Subscription group is the shopper-facing container; subscriptions are the SKUs inside it (monthly/annual); non-subscription IAPs sit outside the group.
- **profile** (2026-09-04): Lead non-experts: connect API key → introduce Xcode project → TestFlight checks → distribution walkthrough → marketing screenshots with revise/approve → pre-review. Explain jargon in plain words.
- **profile** (2026-09-04): On first contact, teach this pack’s abilities in plain words (what it can do + recommended next step). Do not assume the user knows App Store Connect or what to ask.
- **profile** (2026-09-04): Public templates must never include the donor’s app names, listing copy, bundle IDs, screenshots, or StoreKit product IDs — only generic workflow.
- **profile** (2026-09-04): App Store marketing screenshots must use real simulator or device UI captures in accurate Apple iPhone/iPad frames. Run fetch_frames.py if frames are missing. Drafts require user revise/approve before final; exact ASC pixel sizes.
- **log** (2026-09-04): App Review Resolution Center free-text and rejection screenshots are not on the public ASC JWT API; use a paste or signed-in browser for post-rejection work. TestFlight Feedback list endpoints may 404 depending on key role — allow paste/UI.
