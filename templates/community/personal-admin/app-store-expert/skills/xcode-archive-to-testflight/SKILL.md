---
name: xcode-archive-to-testflight
description: "Use when the owner asks to archive and upload an iOS build from a registered Mac with Xcode, without EAS Build or EAS Submit."
---

# Xcode archive to TestFlight (no EAS)

Use this when the user wants a local Xcode archive on one of their registered Macs, then an upload to App Store Connect / TestFlight. Do not use EAS Build or EAS Submit.

## Hard rules
- Upload to TestFlight is not App Review. Never attach a build to a version or click Submit / Update Review unless the user explicitly authorized that exact app and version.
- Never spend an EAS credit as a fallback.
- Never commit, post, or paste .p8 files, keystores, or JWT client secrets. Vault references and masked Key IDs only.
- Apple credentials are not interchangeable: App Store Connect API key, Sign in with Apple key, and app-specific shared secret are different.
- Prefer the Mac the user named. List machines first and use that machine for shell and file reads. Do not clone repos onto the Mac unless they asked or the tree is already there.
- First run: inspect, do not archive. Confirm scheme, bundle id, marketing version, next build number, signing team, and that `ios/` exists (Expo apps need a prebuild already on disk).
- If signing, 2FA, or a password dialog is required, stop and hand them the machine. Never type their Apple password.

## Official upload path
1. `xcodebuild archive` for generic iOS.
2. `xcodebuild -exportArchive` with an App Store export options plist (`-allowProvisioningUpdates` only if needed).
3. Upload the IPA with `xcrun altool --upload-package` or `xcrun iTMSTransporter -m upload -assetFile` using the existing App Store Connect API key (not the SIWA .p8).
4. Wait until App Store Connect shows Processing, then Ready to Submit / Testing. That is TestFlight available, not submitted for review.

## Preflight (must pass)
- `xcodebuild -version` meets the store's current SDK minimum.
- Workspace/scheme exists. For Expo, `ios/` must already be generated; do not silently `expo prebuild --clean` unless asked.
- Build number is unused in ASC.
- Export method is app-store, not ad-hoc or development.
- One archive at a time.

## Report back
Distinguish: archive completed, IPA exported, binary uploaded, TestFlight processing, internal testing available, ready for review, submitted. Never say submitted because it uploaded.
