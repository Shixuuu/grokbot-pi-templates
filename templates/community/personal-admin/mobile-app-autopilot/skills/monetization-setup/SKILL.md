---
name: monetization-setup
description: "Use when adding a paywall, subscriptions, one-time purchases, or changing prices in the app."
---

# Monetization setup

Default: RevenueCat (one SDK for both stores, server-side receipt validation, entitlements, paywall UI). Alternatives: StoreKit 2 + Play Billing directly (native apps or no third party wanted), or `expo-iap`-style libraries. Never invent revenue or conversion numbers; if asked, point to public benchmark reports with links and say they vary widely.

## Prerequisites the owner must do (they sign in, not you)
- Apple: sign the Paid Apps Agreement, add tax and banking in App Store Connect > Business. Consider the App Store Small Business Program (check current terms).
- Google: set up a payments profile in Play Console; an app with the BILLING permission must have been uploaded to a track before products can be created.
- RevenueCat: create a project, add the iOS app (App Store Connect API key / in-app purchase key) and Android app (service account JSON) in its dashboard. Keys go into RevenueCat, not chat.

## Products
1. Decide the model with the owner: subscription (monthly + annual is a common start), one-time unlock, or consumables. One entitlement (e.g. `pro`) covering everything paid keeps it simple.
2. Product IDs identical across stores where possible, e.g. `app_pro_monthly`, `app_pro_annual`.
3. App Store Connect: create a subscription group, add products, prices, localized names, review screenshot. Play Console: create subscriptions with base plans (and offers for free trials/intro prices).
4. In RevenueCat: import products, attach to entitlement, create an Offering (default) with packages.
Pricing guidance: look up 3-5 competitor prices on both stores (cite), pick tiers per region with the stores' price templates, offer annual at a visible discount vs monthly. The owner decides final prices.

## Code (cloud agent prompt essentials)
- `npx expo install react-native-purchases react-native-purchases-ui`; requires a development build (Expo Go only mocks purchases).
- Configure once at app start with platform-specific public SDK keys from EXPO_PUBLIC_ env vars; set the user ID after login (`Purchases.logIn`).
- Gate features on `customerInfo.entitlements.active.pro`, listen for updates.
- Paywall: RevenueCat Paywalls (`RevenueCatUI.presentPaywallIfNeeded`) or a custom screen. Must show price, billing period, trial terms, Restore Purchases button, links to Terms of Use (EULA) and Privacy Policy (Apple 3.1.2).
- Android: confirm the RevenueCat SDK version uses Play Billing Library 8+ (required for new apps and updates since Aug 31 2026).
- Tests for gating logic with a mocked SDK.

## Sandbox testing
- iOS: Sandbox Apple Account (App Store Connect > Users and Access > Sandbox), test on a TestFlight or development build; renewals are accelerated.
- Android: add license testers in Play Console; install from an internal testing track.
- Test: purchase, cancel, restore on reinstall, upgrade monthly to annual, expired state, offline launch. Check events in the RevenueCat dashboard.

## Before release
Products in "Ready to Submit" (Apple: first subscription must be submitted with an app version). Update App Privacy / Data safety for purchase history. Hand off to `app-store-submission`.
