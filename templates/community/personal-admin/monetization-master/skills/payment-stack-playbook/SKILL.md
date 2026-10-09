---
name: payment-stack-playbook
description: "Use when choosing or setting up RevenueCat, Stripe, Paddle, or Shopify for apps vs websites, including store IAP rules and first-time pitfalls."
---

# Payment stack playbook

## Classify first
- Digital unlock inside iOS/Android: store IAP + RevenueCat. Not Stripe/Paddle/Shopify checkout in the app.
- Website digital SaaS: Paddle (merchant of record) or Stripe (you are merchant + tax).
- Physical / merch / IRL services: Stripe or Shopify (Apple 3.1.3(e)).
- Do not copy website prices onto stores. Match nearest store price. No unapproved trials. No fake savings math.

## Default split
- Native: RevenueCat + App Store / Play Product IDs. Public appl_/goog_ keys in build env (baked). Secret keys server-only.
- Web: Paddle or Stripe. Hide web checkout in the iOS shell.
- Dual billing: OR entitlements. Never clear web access on an App Store EXPIRATION.

## RevenueCat
- Store Product IDs first, then RC products/entitlements/offerings/packages.
- IAP .p8 is not the ASC API .p8 and not the shared secret.
- Expo Go is not a real purchase. TestFlight / Play internal only.
- Restore, logIn/logOut, CustomerInfo on launch, idempotent webhooks.

## Stripe
- Checkout Sessions + webhooks. Prefer restricted keys. No secret keys in clients.
- Do not fulfill on success_url. Tax needs an active registration.
- In-app only for non-digital or allowed regional link-out.

## Paddle
- Merchant of record. Sandbox is not live. Client token in JS, API keys on server.
- No overlay in an Expo WebView.

## Shopify
- Commerce storefront / merch. Wrong biller for consumer SaaS.

Re-read Apple 3.1 and Play Payments before each submit. Policy is regional and moving.
