---
name: ios-android-builds
description: "Use when the owner needs an installable build (dev, internal test, TestFlight, Play testing, or store-ready), or when an EAS build fails."
---

# iOS and Android builds (EAS)

This computer is Linux, so iOS builds always run in the cloud: EAS Build (default), Xcode Cloud or a self-hosted Mac runner (native projects). Android can also build in EAS.

## Setup (once)
- Install CLI on this computer: `npm i -g eas-cli`, check `eas --version`.
- Auth: the owner either signs in themselves (`eas login` in a terminal they control) or creates an Expo access token (robot user preferred) and stores it as EXPO_TOKEN in bot secrets. Never ask for passwords in chat.
- `eas init` links the project. Confirm `eas.json` has profiles:
  - development: developmentClient true, distribution internal
  - preview: distribution internal, channel "preview"
  - production: autoIncrement true, channel "production"
  - `cli.appVersionSource: "remote"` so EAS manages buildNumber/versionCode. You still bump the user-facing `version` per release (see `release-train`).
- Credentials: let EAS manage them. iOS: first build needs an interactive Apple sign-in by the owner (or an App Store Connect API key the owner uploads at expo.dev > project > credentials). Android: EAS generates the upload keystore; Play App Signing holds the app signing key. Remind the owner to keep the keystore backed up in EAS.

## Commands
- Dev client: `eas build -p ios --profile development` (register devices with `eas device:create` first for internal iOS installs), `-p android` for Android.
- Internal test: `eas build -p all --profile preview`, share install links.
- Store builds: `eas build -p all --profile production` (iOS .ipa, Android .aab). Store submissions only via `app-store-submission`.
- Add `--non-interactive --no-wait` from this computer; track with `eas build:list --limit 5 --json` and `eas build:view <id>`.

## Requirements to check at runtime (2026 reference values)
- Apple: since Apr 28 2026 uploads must be built with Xcode 26+ and the iOS 26 SDK. Check https://developer.apple.com/news/upcoming-requirements/ for the next bump (Apple usually raises it each spring).
- EAS image: default `auto` picks the image for your SDK (SDK 57 maps to an Xcode 26.x image). Check https://docs.expo.dev/build-reference/infrastructure/ before pinning.
- Google Play: since Aug 31 2026 new apps and updates must target Android 16 (API 36); extension forms ran to Nov 1 2026. Check https://developer.android.com/google/play/requirements/target-sdk. Current Expo SDKs set this; verify `targetSdkVersion` in the build log.

## Testing tracks
- iOS: TestFlight internal testers (team members, no review) and external testers (needs Beta App Review). `npx testflight` is a shortcut that builds and submits to TestFlight; only run with owner confirmation.
- Android: internal testing (up to 100 testers, fast), closed testing (required 12 testers x 14 days for new personal accounts), open testing.

## Troubleshooting (read the failing phase in the build log first)
- Install dependencies fails: lockfile mismatch, run `npx expo install --check`; private packages need NPM_TOKEN as an EAS env var.
- Pod install / CocoaPods errors: version conflicts after adding a native lib; ensure versions from `npx expo install`, clear cache with `--clear-cache`.
- Provisioning profile / capability errors: a new entitlement (push, Sign in with Apple, associated domains) was added; run `eas credentials` (owner) to regenerate the profile.
- Gradle OOM or duplicate class: bump resource class to large, dedupe dependencies.
- "Missing compliance" in TestFlight: set `ios.config.usesNonExemptEncryption: false` if the app only uses standard HTTPS/OS encryption (owner confirms).
- Build works, app crashes on launch: check Sentry, missing EXPO_PUBLIC_ env in that profile, or a native module not in the build (needs rebuild, not OTA).
Fix code issues via a cloud agent (`build-feature-with-cloud-agent`), then rebuild.
