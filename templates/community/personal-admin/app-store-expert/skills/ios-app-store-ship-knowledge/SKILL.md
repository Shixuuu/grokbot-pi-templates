---
name: ios-app-store-ship-knowledge
description: "Use this when shipping or preparing any iOS app for App Store Connect, TestFlight, or App Review; standing knowledge, not a one-off checklist."
---

# iOS App Store ship knowledge

Use this as the standing knowledge base for any new iOS app, empty repo through App Review. It is a repository, not a one-off checklist. Adapt per app. Never treat Expo Go as a production binary.

Source pattern: indie ship lists plus App Store Connect realities: upload is not submission; keys are not interchangeable; uniqueness (4.3(a)) is a first-class gate when one account ships several 1.0s.

## 1. Technical setup
- Agent-driven project (Cursor / similar), GitHub repo, Expo (or native) project.
- Install deps with one package manager that EAS will actually run. Dual bun/npm lockfiles and `name>dep` overrides cause PREPARE_PROJECT `EINVALIDTAGNAME`.
- OTA (EAS Update) for JS-only fixes after a store binary exists. Native/SDK/capability changes still need a new IPA.
- Observability: Sentry (or equivalent) + product analytics.
- Attribution (Appsflyer / SKAN) only if paid UA is real. Do not add ATT/ad SDKs just in case.
- Reviewer-access notes live with the version, not only in a Git repo.

## 2. Navigation and foundation
- Native nav / Liquid Glass only if the OS version you ship actually uses it.
- Localization: `CFBundleLocalizations` must be in the shipped Info.plist, not just source strings.
- SafeArea, padding, iPad and Pro layouts. Apple reviews on iPad even when you think the app is iPhone-only.

## 3. App Store Connect first
- Create the bundle ID, then the ASC app record, then pin `ascAppId` in eas.json. Do not duplicate apps because the display name differs.
- Draft the ASC app before the first production EAS job.
- Dedicated App Store Connect API key (.p8) for EAS Submit. That is not the In-App Purchase key.
- EAS Submit uploads to TestFlight. That is not App Review. Attach the build, attach required IAP, fill export compliance and review access, then submit the version.

## 4. Storage
- Use a server DB only if the product is social, synced, or multi-device. Otherwise local.
- If a backend exists: URL + keys in the vault, RLS on, delete-user path for App Store account deletion (5.1.1(v)).
- Auth order that survives review: paywall can show first, but Sign in with Apple (if any third-party login exists), Restore Purchases, and a working reviewer account must exist.

## 5. Onboarding
- Launch screen, then ATT before initializing any ad/attribution SDK (if ATT is used at all).
- Notifications permission after value, not on first paint.
- Rating prompt after a success moment, not at launch.
- Paywall (RevenueCat / Superwall) with Restore Purchases.
- Sign up framed as save progress. Password fields: `textContentType`, no silent autocomplete traps, do not navigate away mid-password.
- Analytics identify after consent.

## 6. Purchases (RevenueCat + ASC)
- Create products in App Store Connect first. Reuse Product IDs.
- RevenueCat: app, entitlement, import/link products, offerings, packages (monthly / yearly / lifetime).
- IAP .p8 is for StoreKit/RevenueCat. ASC API .p8 is for submit. App-specific shared secret is StoreKit 1 only. Never swap them.
- Bind subscriptions to the same app version submission. Do not ship a standalone IAP draft.
- Product page must include a functional Terms of Use (EULA) link (Apple Standard EULA is enough) plus privacy URL. Guideline 3.1.2. Missing EULA on the listing is a metadata-only reject; do not rebuild for it.
- In-app: title, length, price, privacy + EULA links (3.1.2(c)). Subscription buttons must actually purchase on iPad (2.1(b)).
- Restore Purchases. Do not submit an unfinished binary just to get IAP in review if completeness will fail 2.1.

## 7. Listing
- Unique name, subtitle, keywords, screenshots, description, promo, privacy URL, support URL, review notes, localizations.
- Screenshots must be real product UI. A shared template (same fonts, floated-iPhone plates, lifestyle stock) across several 1.0s from one account is 4.3(a) Design Spam. Mixing factory plates back in after unique shots reintroduces the fingerprint.
- Description: SEO + benefits, plus subscription legal block with tappable https EULA and privacy URLs.
- Age rating, App Privacy nutrition labels, Content Rights. Social-media age-rating questions when they apply.
- One wedge at a time when several new apps share an account. Do not Update Review four 1.0s the same week if 4.3(a) already fired.

## 8. Extra assets
- App icon (1024 RGB, no alpha).
- Privacy / age rating / accessibility sub-pages.
- Widgets only if they ship in the binary.

## 9. Build and test
- Query the latest store build number before incrementing. Duplicate-build reject: increment build, not marketing version.
- Pin Xcode / iOS SDK to current Apple minimum via EAS image. ITMS-90725 is not an ASC API failure.
- One production iOS EAS job at a time. Disable auto-build on merge if it would spend another credit.
- Never reuse a rejected binary after code changes. Metadata-only fixes do not need a new IPA unless Apple says so.
- Test: sign in/out, purchase + restore, iPhone and iPad, notifications, reviewer demo account.
- States to name correctly: build completed, binary uploaded, TestFlight available, ready for review, submitted, in review, rejected, approved, released. Approved is not Released.

## 10. Review replies
- Read the letter. Fix the thing it named. Do not argue framework choice. Do not Reply on an app that is already Waiting for Review.
- 3.1.2 product-page EULA: paste links, then Update Review on the same binary.
- 4.3(a): uniqueness of binary + listing + concept. Screenshot-only resubmit of the same IPA usually fails. Park extra apps until one wedge is Approved.
- Never click Update Review / Submit / Remove from Review / Release without an explicit owner GO when a hold is in force.
