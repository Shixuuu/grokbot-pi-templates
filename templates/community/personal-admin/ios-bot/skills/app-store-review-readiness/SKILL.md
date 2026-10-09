---
name: app-store-review-readiness
description: "Use before submitting an iOS or macOS app (or an update) to App Store review, or when diagnosing an App Review rejection."
---

# App Store review readiness

Apple's rules change. Before relying on any item below, check the live [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) and quote the current section number in your findings.

## Never without the owner's yes
- Never press Submit for Review, release a build, change pricing, or accept agreements. Prepare the checklist and the metadata, then hand it to the account owner.

## Pre-submission checklist
1. **Completeness (2.1).** No placeholder text, broken links, crashes, or dead buttons. Test on a real device and on the smallest and largest supported screens.
2. **Reviewer access.** If the app needs a login, supply a working demo account and any steps in App Review Information notes. If features depend on hardware or a server, say how to reach them.
3. **Accurate metadata (2.3).** Screenshots show the real app on the right device sizes; the description, keywords, and age rating match what the app does.
4. **Privacy (5.1).**
   - A privacy policy URL that loads.
   - App Privacy details (the nutrition label) in App Store Connect that match what the app and every SDK actually collect.
   - A privacy manifest (`PrivacyInfo.xcprivacy`) declaring required-reason APIs, and third-party SDKs carrying their own manifests and signatures.
   - Purpose strings (`NSCameraUsageDescription`, `NSMicrophoneUsageDescription`, `NSSpeechRecognitionUsageDescription`, location, photos, and so on) for every permission requested, written in plain words.
   - Ask for permissions in context, not all at launch.
5. **Account deletion (5.1.1(v)).** If users can create an account in the app, they must be able to start deleting it in the app.
6. **Sign in with Apple (4.8).** Check the current rule if the app offers third-party or social login.
7. **Payments (3.1).** Digital goods and subscriptions use In-App Purchase unless a current exception applies. Subscriptions show price, period, and terms before purchase, include Restore Purchases, and link the terms of use and privacy policy.
8. **Minimum functionality (4.2) and spam (4.3).** The app must do more than wrap a website, and must not duplicate an existing app of the same developer.
9. **User-generated content (1.2).** Needs reporting, blocking, and a way to filter objectionable material.
10. **AI and generated content.** Check the current guidelines on generated content, content moderation, and disclosure of sharing data with third-party AI.
11. **Export compliance.** Set `ITSAppUsesNonExemptEncryption` in `Info.plist` correctly so each build doesn't stall on the encryption question.
12. **Build hygiene.** Built with the currently required Xcode and SDK version (check Apple's upcoming-requirements page), no private APIs, no debug menus or test endpoints reachable in release.

## Handling a rejection
1. Read the full message in Resolution Center and note the guideline numbers cited.
2. Open those exact sections on the live guidelines page.
3. Decide whether to fix the build, fix metadata only, or reply with a clarification. Draft the reply for the owner; don't send it yourself.
4. If the rejection seems mistaken, the owner can appeal through the App Review Board.

## Report back
A pass, fix, or unknown line for each checklist item, with the guideline section and the evidence (file, screen, or setting) for each.
