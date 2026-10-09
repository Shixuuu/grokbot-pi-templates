---
name: ios-app-store-listing
description: "Use this when preparing or improving an App Store listing: name, subtitle, keywords, description, screenshots, privacy answers, review notes, and post-launch growth."
---

# App Store listing and ASO

## Text (draft it, the owner pastes it)
- **Name:** 30 characters, brand plus a key term.
- **Subtitle:** 30 characters, the main benefit. Don't repeat words from the name.
- **Keywords:** 100 characters, comma-separated with no spaces. Use singular forms, and don't repeat words already in the name or subtitle. Skip the category name and "app".
- **Promotional text:** 170 characters. It can be changed any time without review.
- **Description:** lead with what the app does in one line, then features as short lines. Include privacy and "no account" claims only if they're true. Never claim acceptance by a third party you can't guarantee.
- **What's New:** 2 to 4 plain lines per update.
- **URLs:** support URL and privacy policy URL, both live. Marketing URL is optional. Copyright is "<year> <seller name>".

## Screenshots
- Use the exact pixel sizes for each required slot. Check the current required display sizes in App Store Connect, because one large-iPhone size can cover the smaller ones. A universal app also needs iPad 13″ screenshots. Resize precisely with `sips -z <h> <w>`, since off-by-one sizes are rejected.
- Capture on the simulator with a clean status bar: `xcrun simctl status_bar booted override --time 9:41 --batteryState charged --batteryLevel 100 --cellularBars 4 --wifiBars 3`, then `xcrun simctl io booted screenshot <file>.png`.
- Use 4 to 6 shots. The first two sell the app: show the core action, and optionally add a short caption above each. App previews (video) are optional.

## Privacy and compliance
- App Privacy ("nutrition label") answers must match reality, including data from SDKs. If nothing is collected, choose "Data Not Collected".
- Add a privacy manifest, `PrivacyInfo.xcprivacy`, that declares required-reason APIs the app uses (for example, UserDefaults and file timestamps). Third-party SDKs bring their own.
- Export compliance: set `ITSAppUsesNonExemptEncryption` = NO in Info.plist when the app only uses HTTPS.
- Set the age rating questionnaire, primary category, and optional secondary category.
- Distributing in the EU requires declaring trader status under the Digital Services Act. Traders show their contact details publicly.

## Review information
- Contact name, phone, and email. Provide a demo account, or write "No sign-in required."
- Notes should say how to reach each main feature, which features run on-device and which on a server, and what IAPs do.
- If review asks for more information (Guideline 2.1), reply with the notes and a screen recording from a physical device covering cold launch through each main feature. Then tap Resubmit to App Review.

## After launch
- Use phased release (7 days) for updates when risk is real. Watch Xcode Organizer for crashes and energy reports.
- Ask for ratings at a happy moment with `@Environment(\.requestReview)`. Never ask right at launch or after an error.
- Add a Smart App Banner (`<meta name="apple-itunes-app" content="app-id=<id>">`) and a "Download on the App Store" badge on the website once the app is live.
- Revisit keywords each update, using App Store Connect analytics for impressions and conversion.
