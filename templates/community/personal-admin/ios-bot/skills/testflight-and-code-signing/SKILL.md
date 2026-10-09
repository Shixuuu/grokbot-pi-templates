---
name: testflight-and-code-signing
description: "Use when signing, archiving, uploading, or distributing an iOS build through TestFlight or direct device install, or when fixing provisioning and certificate errors."
---

# TestFlight and code signing

Check Apple's current [TestFlight overview](https://developer.apple.com/testflight/) and Xcode documentation before quoting limits or steps; they change.

## Never without the owner's yes
- No external TestFlight groups or public links (those require Beta App Review and reach people outside the team).
- No new paid Developer Program enrollment, no revoking certificates, no deleting App IDs or profiles.
- Never paste or commit `.p12`, `.p8`, `.mobileprovision`, or App Store Connect API keys. Keep them in the Keychain or a secret store.

## Prerequisites
1. Full Xcode installed (not just Command Line Tools): `xcode-select -p` should point inside `Xcode.app`, and `xcodebuild -version` should run.
2. An Apple Developer team. A free personal team can install to the owner's own devices for 7 days per build; TestFlight and the App Store need the paid program.
3. A unique bundle identifier registered under that team.

## Signing
1. Prefer Automatic Signing in Xcode (Signing & Capabilities, choose the team). It creates and renews certificates and profiles.
2. Add capabilities (push, iCloud, App Groups, Sign in with Apple) in Xcode so the App ID and profile update together.
3. For headless or CI builds, use an App Store Connect API key with `xcodebuild -allowProvisioningUpdates -authenticationKeyPath ... -authenticationKeyID ... -authenticationKeyIssuerID ...`, with the key path coming from a secret store.
4. Common errors:
   - "No profiles for ... were found": team not selected, or the bundle ID isn't registered; enable automatic signing or register it.
   - "Device not registered" for development builds: add the device UDID in the developer account or connect it to Xcode once.
   - Expired or missing distribution certificate: let Xcode create a new one; don't revoke the old one without the owner's yes.

## Archive and upload
1. Bump `CFBundleVersion` (build number) for every upload; `CFBundleShortVersionString` is the marketing version.
2. Archive: `xcodebuild -scheme <Scheme> -configuration Release -archivePath build/App.xcarchive archive`.
3. Export with an `ExportOptions.plist` (method `app-store-connect`, team ID, signing style automatic): `xcodebuild -exportArchive -archivePath build/App.xcarchive -exportOptionsPlist ExportOptions.plist -exportPath build/export`. Setting `destination` to `upload` in that plist uploads directly.
4. Otherwise upload with Xcode Organizer or the Transporter app, using whichever command-line upload tool Apple currently documents for headless runs. Confirm the build appears in App Store Connect and finishes processing.
5. Answer export compliance, ideally by setting `ITSAppUsesNonExemptEncryption` in `Info.plist` ahead of time.

## Distribute
- **Internal testers:** members of the App Store Connect team; builds are available after processing with no review.
- **External testers:** need Beta App Review for the first build of a version, plus test information and a feedback email. Owner's yes required.
- TestFlight builds expire after a fixed period (currently 90 days); upload a fresh build before testers lose access.
- **Direct install without TestFlight:** a development-signed build to a registered device via Xcode or `xcrun devicectl device install app --device <id> <path.app>`.

## Report back
The team, bundle ID, version and build number, where the build is (archived, uploaded, processing, available to internal testers), and any blocker that needs the owner, such as an Apple ID sign-in or 2FA.
