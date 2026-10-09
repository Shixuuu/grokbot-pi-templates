---
name: app-store-submission
description: "Use when a build is ready to go to App Store review or Google Play production/testing tracks, or when a store rejects the app."
---

# App store submission

HARD RULE: never run `eas submit`, press submit in a console, or release a build without the owner's explicit "yes, submit <version> to <store>" in this conversation. Show the checklist result first.

## Pre-submission checklist (both stores; mark each pass/fail/NA)
- Build: production profile, correct bundle ID/package, version bumped, Sentry release set, no dev menus or test endpoints.
- Platform minimums met (check at runtime): iOS built with Xcode 26+/iOS 26 SDK (since Apr 28 2026); Android targets API 36 (since Aug 31 2026); Play Billing Library 8+ if selling in-app on Android.
- Privacy policy URL live, also linked inside the app (App Review 5.1.1(i)).
- Account deletion if accounts exist: in-app path (5.1.1(v)) AND, for Play, a public web URL where users can request deletion, entered in Data safety.
- iOS privacy: App Privacy "nutrition label" answers match real data collection, including SDKs (Sentry, RevenueCat, analytics). Privacy manifest: Expo apps declare required-reason APIs under `ios.privacyManifests` in app config; third-party SDKs ship their own.
- Play Data safety form completed and consistent with the policy.
- Permission purpose strings specific and honest; only request permissions the app uses, at the moment it needs them.
- Age rating: Apple's updated questionnaire (13+/16+/18+ tiers; social media capability questions required for submissions since Sep 2026). Play content rating (IARC) questionnaire.
- Export compliance answered (`usesNonExemptEncryption`).
- Review notes: what the app does, how to reach key features, demo account credentials created by the owner (never real user data), notes on hardware/region needs.
- Sign in with Apple offered if other third-party logins are used (4.8). Restore Purchases present if selling subscriptions.
- Store listing complete (`store-listing-and-aso`), EU trader status set in App Store Connect if distributing in the EU.
- Google Play new personal account (created after Nov 13 2023): closed test with at least 12 testers opted in for the last 14 continuous days, then apply for production access (review usually up to ~7 days). Plan this weeks ahead.
- First Android upload: Google requires the first AAB to be uploaded manually in Play Console before API uploads (`eas submit`) work. The owner does it.

## Submit (after explicit yes)
- iOS: `eas submit -p ios --latest` (uses the App Store Connect API key the owner stored in EAS). Then the owner (or you, if asked) adds the build to the version and submits for review in App Store Connect. Suggest phased release (see `release-train`).
- Android: `eas submit -p android --latest` with track internal/closed/production as agreed (service account key stored in EAS by the owner). Suggest staged rollout.
- Record version, build numbers, date, and track in memory for `weekly-app-health`.

## Rejection playbook
Read the full rejection message, quote it to the owner, map it, fix via `build-feature-with-cloud-agent`, reply in Resolution Center (draft for owner approval).
- 2.1 App Completeness: crash, broken link, placeholder content, or reviewer couldn't log in. Fix the bug, verify on device, provide a working demo account and clear steps.
- 2.3 Accurate Metadata: screenshots/description show missing features. Regenerate assets from the real app.
- 4.2 Minimum Functionality: looks like a repackaged website or too thin. Add native value (offline, notifications, device features, real utility) and explain it in notes.
- 4.3 Spam: duplicate of your other apps or a common template. Consolidate apps, differentiate meaningfully; do not resubmit unchanged.
- 5.1.1 Data Collection: vague purpose strings, forced login for non-account features, missing deletion, policy gaps. Rewrite strings, allow guest use where possible, add deletion.
- 3.1.1 In-App Purchase: digital content unlocked outside IAP. Move to IAP (`monetization-setup`). On the US storefront, links to external purchase are allowed since May 2025; elsewhere they need a regional entitlement. Check current guideline text.
- 4.8 Login Services: add Sign in with Apple or equivalent.
- Play policy rejections: read the policy cited in the email; common ones are Data safety mismatch, missing deletion URL, permissions (background location, SMS, all-files access) needing a declaration.
If the owner believes the rejection is wrong, draft a polite, factual reply or an App Review appeal for them to send.
