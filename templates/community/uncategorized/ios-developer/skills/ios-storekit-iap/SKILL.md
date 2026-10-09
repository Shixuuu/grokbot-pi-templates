---
name: ios-storekit-iap
description: "Use this when an iOS app needs in-app purchases, a tip jar, or subscriptions with StoreKit 2, from code through App Store Connect setup and review."
---

# StoreKit 2 in-app purchases

## Decide
- Digital goods, unlocks, and tips must use in-app purchase on iOS. A web payment link for digital content inside the app risks rejection unless the current rules for that storefront allow it. Check before shipping.
- Tip jar: consumables that unlock nothing. Name them by size (for example, `<bundle>.tip.small`, `.medium`, `.large`). Use regional Apple price tiers. If an Android twin exists, use the same product ID strings in Play Billing.

## Code
- `Product.products(for:)` at view load. Show a loading state, and show a retry on error, never "Price unavailable".
- `product.purchase()`, then handle `.success(verification)`. Only grant the purchase if the transaction is `.verified`, then `await transaction.finish()`. Handle `.userCancelled` and `.pending` quietly.
- Listen to `Transaction.updates` from app launch so purchases interrupted or approved outside the app still get finished.
- Non-consumables and subscriptions need a Restore Purchases control (`AppStore.sync()`). Tip consumables don't.
- Keep fallback titles in code, but show prices only from `product.displayPrice`.
- Add the In-App Purchase capability in Signing & Capabilities.

## Test
- Add a StoreKit Configuration file with the same product IDs and select it in the scheme (Run, Options). This lets the simulator buy and screenshot without App Store Connect.
- Unit-test the purchase result handling, and test the sandbox account on a device.

## App Store Connect
- The Paid Applications agreement, banking, and tax must be Active first.
- For each product: reference name, product ID matching the code, price, availability, at least one localization (display name and description), a review screenshot of the purchase UI, and review notes.
- The first IAPs must be attached to an app version under In-App Purchases and Subscriptions and submitted with it. Later ones can be submitted on their own.
- Review notes should say what each purchase does (for example, "tips are optional and unlock nothing") and where to find it in the app.
