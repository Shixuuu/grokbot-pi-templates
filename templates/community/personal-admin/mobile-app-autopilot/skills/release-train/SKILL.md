---
name: release-train
description: "Use when planning or shipping a release: versioning, changelog, OTA update vs new binary, phased/staged rollout, or rollback."
---

# Release train

## Versioning
- User-facing `version` uses semver MAJOR.MINOR.PATCH: PATCH = fixes, MINOR = features, MAJOR = big redesign or breaking account/data change.
- Build numbers (iOS buildNumber, Android versionCode) are managed remotely by EAS (`appVersionSource: remote`, `autoIncrement`). Never reuse one.
- Runtime version (`policy: "fingerprint"`) decides which OTA updates a binary can take.

## OTA update or new binary?
OTA (`eas update`) is fine when ALL are true: only JS/TS and assets changed; no new native module or config plugin; no change to app.config native fields (permissions, icon, splash, scheme, entitlements); Expo SDK unchanged; the fingerprint/runtime version is unchanged (`npx expo-fingerprint` or check `eas update` output).
New binary otherwise. Also ship a binary for anything that changes the app's primary purpose or adds major features: Apple allows interpreted-code updates only when they don't change the app's purpose or bypass review. Keep OTAs to fixes and small improvements.

## Release steps
1. Freeze: list merged PRs since the last tag (`git log <lastTag>..main --merges` or the GitHub connector). Group into Features / Fixes / Internal.
2. Changelog: write CHANGELOG.md entry plus user-facing "What's New" (plain words, 3-5 bullets, no internal jargon). Owner approves the user-facing text.
3. Bump version via a small cloud agent PR (app.config version + CHANGELOG), merge on approval, tag `vX.Y.Z`.
4. Binary path: `ios-android-builds` production build, then `app-store-submission` (explicit yes required). OTA path: `eas update --channel production --message "vX.Y.Z: <summary>"` only after the owner says go.

## Rollout
- iOS phased release: 7-day automatic ramp for auto-updating users (owner enables at release; can pause or release to all).
- Google Play staged rollout: start low (e.g. 5-10%), raise after a day or two of clean crash and ANR data; halt if bad.
- EAS Update: `eas update --rollout-percentage=10`, raise with `eas update:edit`, end at 100 or revert with `eas update:revert-update-rollout`. Branch-based: `eas channel:rollout`.
Watch Sentry/Crashlytics crash-free rate and new issues between steps (`crash-and-review-triage`).

## Rollback
- OTA: `eas update:rollback` (or republish the previous update / revert the rollout). Fastest fix path for JS bugs.
- Binary: stores have no true rollback. iOS: pause phased release, ship a fix build (request expedited review for critical bugs). Play: halt staged rollout, then ship a higher versionCode with the fix.
- Always write a 3-line incident note to memory: what broke, impact, fix.

## After release
Record version, date, channels, rollout state in memory. Tell the owner: shipped what, to whom, what you're watching, when you'll check back.
