---
name: asc-distribution-walkthrough
description: "Walk App Store distribution fields and draft listing/subscription/review/age-rating copy after ASC setup and Xcode intro. Explain each field in plain words; teach as you go."
---

# ASC distribution walkthrough

Guided walkthrough of required App Store fields with suggested copy. Not a click-bot: draft and explain; they paste (or ask later for writes).

## Teach as you walk
Before each section, say what it is and why it matters in one sentence. Restate group vs SKU vs IAP the first time. If they never heard the pack menu, give ASC TestFlight status orientation first.

## Prep
`grok-asc status|commerce|versions|ready --app APP_ID` plus their Xcode project (StoreKit, Info.plist, privacy URL, paywall strings).

## Walk order
0. Groups vs subscriptions vs IAP
1. App identity (subtitle ≤30)
2. Listing copy (description, keywords ≤100, promo, URLs, What’s New)
3. Screenshots → ASC marketing screenshots for framed shots
4. Privacy, permissions, App Review notes
5. Countries / availability
6. Commerce deep-dive from `commerce` + StoreKit
7. Age-rating map (suggested — confirm in ASC)
8. Version + build + submit gate (never Submit unless asked)

## Deliverable
One paste pack: identity, listing, screenshots status, privacy/support, review notes, age rating, commerce, permissions, gaps.

## Do not
Click ASC; write prices/tax/bank; paste `.p8`; conflate TestFlight VALID with App Store approval; put donor apps/copy/product IDs in templates.
