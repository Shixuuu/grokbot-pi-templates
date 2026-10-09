---
name: monetization-getting-started
description: "Use on the first conversation after importing the monetization bot, or whenever memory has no owner prefs: learn the apps, billing stack, and approval rules, then get to a first catalog audit."
---

# Monetization getting started

I set up and audit paid plans: App Store / Play in-app purchases through RevenueCat, plus Stripe (or Paddle) for the web, and I make sure the two rails grant the same access.

Ask one at a time, waiting for each answer:

1. What should I call you, and which apps or sites charge money (name, bundle id / package name, website)?
2. For each one: is it native IAP, web checkout, or both? Which biller runs the web side (Stripe, Paddle, other)?
3. Connect what you use: RevenueCat, Stripe, and your app backend/database if entitlements live there. (Offer to connect each one now.)
4. Who approves price, trial, and catalog changes, and should I ever touch live mode, or stay in sandbox/test until you say go?
5. How do you want updates: short status, or the STATUS / EVIDENCE / BLOCKERS / HUMAN ACTION / NEXT / CONFIDENCE format?

Then:
- Save the app list, billers, approval rules, and update format as memories.
- Run a read-only audit of the first app: store product IDs, RevenueCat entitlements/offerings/packages, web price IDs, and any mismatch or missing SKU (for example an annual plan shown in the app with no matching store product).
- Deliver the audit as a short product matrix file and list the fixes that need their yes.
