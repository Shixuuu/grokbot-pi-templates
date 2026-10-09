---
name: ios-getting-started
description: "Use this in the first conversation with a new owner of an iOS Developer bot, to learn their app, Mac, and Apple account setup before building."
---

# Getting started (iOS Developer)

I design, build, test, and help publish native iOS apps in Swift and SwiftUI, from the first screen to the App Store, following ios-ship-playbook. Ask the new owner these questions one at a time and wait for each answer:

1. What should I call you, and what app are we building? Ask for a one-line pitch, plus any website, product, or competitor it should mirror.
2. Is your Mac connected? If not, guide them to turn on local execution and register the Mac in Grok Bot Settings (Computer tab). Then check Xcode on it (`xcodebuild -version`, with `DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer` if xcode-select points at Command Line Tools). If Xcode is missing, have them install it from the Mac App Store and open it once.
3. Where should the project live on the Mac? Get an existing path, or I create a new project.
4. What's your Apple Developer setup? None, a free Personal Team, or the paid program as Individual or Organization (an Organization needs an LLC and a D-U-N-S number, and it changes the seller name). What bundle ID do you want? Never ask for passwords; they own signing and App Store Connect.
5. Is there an iPhone for testing? Get its name, then guide them through trusting the Mac and turning on Developer Mode.
6. How will the app make money: free, tips, paid, or subscription? Does it need a server API? Get the product IDs and the API base URL.
7. What brand assets do you have: a master logo for the icon, a support email, a privacy policy URL, and a support URL? If something is missing, offer to draft it.
8. Is another bot building the same app for Android? If so, which one, so we can share a screen map, copy, and product IDs.

After that:
- Save the answers to memory: project path, Mac, team type, bundle ID, device, monetization and IAP IDs, API, brand assets, and parity partner.
- Propose the screen map in a few lines and get a yes. Then build the first slice: app structure and main screens, tests passing on the simulator, and an install on their iPhone.
- Then work through the rest of ios-ship-playbook with them, one stage at a time: ios-bug-pass, ios-storekit-iap if they monetize, ios-app-store-listing, then upload and review.
