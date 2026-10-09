---
name: ios-ship-playbook
description: "Use this for any stage of shipping a native iOS app end to end: planning, connecting the owner's Mac, building and testing with Xcode, installing on an iPhone, archiving and uploading to App Store Connect, and getting through App Review and updates."
---

# iOS end-to-end ship playbook

The owner keeps signing, payments, and App Store Connect decisions. I build, test, and write the checklists, and I never claim a step ran unless it actually did. Related skills: ios-bug-pass before every archive, ios-storekit-iap for purchases, and ios-app-store-listing for the store page.

## 0. Plan the product
- Write down a one-sentence product, a screen map (tabs and what's on each), the core flows, what runs on-device vs on a server, the account model (prefer no account), and monetization (free, tips, paid, or subscription).
- If a website or Android twin exists, mirror its information architecture and copy. Keep a shared contract (screens, copy, product IDs, API) and agree on it with the Android bot before building.
- Experience first: ship fewer, polished tools. Don't promise something the app can't guarantee (for example, "accepted by a government portal").

## 1. Connect the Mac
- My Linux computer can't run Xcode, so builds run on the owner's Mac. They turn on local execution and register the Mac in Grok Bot Settings under the Computer tab. I then run Shell on it with its machineId from ListMachines. Each command needs their approval.
- Check with `DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer xcodebuild -version` and `xcrun simctl list devices available`. If `xcode-select -p` shows CommandLineTools, prefix every xcodebuild/xcrun call with that `DEVELOPER_DIR` and don't change their setting.
- If full Xcode is missing, the owner installs it from the Mac App Store, opens it once, and adds an iOS simulator runtime.
- Keep the project in one folder on the Mac as the source of truth, and save its path to memory. If it isn't a git repo, make a timestamped backup before big edits. Hand long build or test runs to a background worker and report results when they're done.

## 2. Project setup
- SwiftUI and Swift Concurrency, iOS 17+ unless told otherwise, one app target plus unit and UI test targets. Keep logic in pure, testable Swift.
- Bundle ID is reverse-DNS on a domain they control. The app icon is a 1024×1024 PNG with no transparency, made from the owner's master logo. Add privacy usage strings for every permission. Set `ITSAppUsesNonExemptEncryption` = NO for HTTPS-only apps. Add `PrivacyInfo.xcprivacy`.
- Networking: `URLSession` async/await, multipart uploads, a custom User-Agent (`<App>-iOS/<ver>`), timeouts, an upload size cap matching the server, and readable errors.
- If Info.plist hardcodes version strings instead of `$(MARKETING_VERSION)`/`$(CURRENT_PROJECT_VERSION)`, every bump has to touch both Info.plist and project.pbxproj.
- Share sheet and Files: declare only the `CFBundleDocumentTypes` the tools accept, handle `onOpenURL`, and let the user pick among matching tools.

## 3. Build and test on the simulator
- `xcodebuild -scheme <Scheme> -destination 'platform=iOS Simulator,name=<iPhone model>' build test`. Use whatever simulators are installed (`simctl list`).
- Unit tests cover pure logic. E2E tests cover the real flows, including live-API calls. Fix root causes, and report pass and fail counts honestly.
- To show the owner, install with `xcrun simctl install booted <app>`, launch, and take screenshots with `xcrun simctl io booted screenshot`.

## 4. Install on a physical iPhone
- A free Personal Team works for testing (builds expire after 7 days, and there are no real IAPs). The paid Apple Developer Program ($99/yr) is required for TestFlight and the App Store. Individual shows the person's legal name as seller. Organization needs a legal entity (for example, an LLC) plus a D-U-N-S number, and shows the company name.
- In Xcode Signing & Capabilities, turn on Automatically manage signing, pick the team, and add the IAP capability if needed.
- On the iPhone: connect by USB the first time and trust the Mac, then turn on Developer Mode (Settings, Privacy & Security, Developer Mode, restart). Enable Wi-Fi debugging afterward if wanted. If the icon won't open, trust the developer under Settings, General, VPN & Device Management.
- Install: build for the device, then `xcrun devicectl list devices` and `xcrun devicectl device install app --device <UDID> <path>.app`. Or run from Xcode.

## 5. App Store Connect setup (owner in the browser, I guide)
- Agreements, tax, and banking: the Paid Applications agreement plus banking and tax must be Active for IAPs. US individuals fill a W-9.
- Create the app record: name, language, bundle ID, SKU.
- Fill the listing, privacy answers, age rating, and review info following ios-app-store-listing. Set up IAPs following ios-storekit-iap.

## 6. Archive and upload
- Run ios-bug-pass first. Bump the build number (always higher than any uploaded build) and the marketing version for releases.
- `xcodebuild -scheme <Scheme> -configuration Release -destination 'generic/platform=iOS' -archivePath build/<Name>-<ver>-b<build>.xcarchive archive`. Verify the version and build in the archived Info.plist. Automatic-signing archives are Development-signed, and distribution signing happens at export.
- Upload through Xcode Organizer (Distribute App, then App Store Connect, then Upload), or `xcodebuild -exportArchive` with an exportOptions.plist (method app-store-connect) plus an App Store Connect API key. Only upload when the owner asks.
- Processing takes from a few minutes to about an hour. Attach the build to the version.
- TestFlight is optional. Internal testers need no review. External testers need a short beta review.

## 7. App Review
- Add for Review, then Submit. First reviews are often 1 to 2 days, and updates are usually faster. Expedited review exists but isn't guaranteed.
- Guideline 2.1 Information Needed is a question. Reply in App Store Connect with notes plus a screen recording from a physical device, then tap Resubmit to App Review, because the reply alone doesn't requeue the app.
- Crashes or bugs: fix, bump the build, upload, resubmit.
- Guideline 4.x/5.x (minimum functionality, design, privacy, payments): change the app or listing. Digital goods and tips use IAP.
- Never invent an outcome. Report only what the owner sees. Once approved, release automatically, manually, or on a date.

## 8. Updates and growth
- For each update: fix, test on the simulator and device, bug pass, bump, archive, upload, new version in App Store Connect, What's New, attach the build, submit. Every update is reviewed.
- After launch: watch Organizer crashes, ask for ratings at a happy moment, add a Smart App Banner on the website, and refine keywords each release.
