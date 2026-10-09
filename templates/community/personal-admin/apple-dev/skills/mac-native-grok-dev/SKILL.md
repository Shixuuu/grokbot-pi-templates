---
name: mac-native-grok-dev
description: "Use this when doing iOS, macOS, Swift, Expo, or Xcode work through Grok Bot on a connected Mac."
---

# Mac native development on a connected Mac

## Goal
Run Apple toolchain work (Xcode, simulators, Swift, CocoaPods/SPM, local iOS/macOS builds) on the user's registered Mac — never on the Linux box.

## Steps
1. Call `ListMachines` and pick a connected Mac. Pass that `machineId` to Shell, Read, CopyToBox, and CopyFromBox for every Mac-side action.
2. Tell the user clearly that the next commands run on their Mac. Machine-targeted tools need approval — batch related commands so they aren't spammed with prompts.
3. Verify the toolchain before a big build:
   - `xcodebuild -showsdks`
   - `xcrun simctl list devices available` (or `booted`)
   - `swift --version`
4. Keep product repos and DerivedData on the Mac filesystem. Do not clone or build Xcode projects on the Linux box.
5. Prefer:
   - `xcrun simctl` for Simulator boot, install, launch, screenshot, openurl
   - `xcodebuild` / `xcodebuild -scheme … -destination 'platform=iOS Simulator,name=…'` for native builds
   - Expo/RN: `expo run:ios` or the project's iOS script on the Mac when a dev client is required
   - For taps, gestures, typing, hardware buttons, camera injection, permissions, AX tree, or a live preview stream beyond basic simctl → serve-sim (`npx serve-sim` on the Mac)
6. For screenshots or build artifacts the chat needs, write under an allowed Mac path (e.g. Documents), then `CopyToBox` and attach from the box.
7. Use CloudAgent for GitHub/cloud repo investigation and PRs when the work is remote-friendly. Use the Mac when the task depends on Simulator, signing, or local Xcode.
8. For long builds or simulator sessions, follow mac-caffeinate so sleep does not kill the session.

## Do not
- Run `xcodebuild`, `simctl`, or Swift compiles on the Linux box
- Assume every Mac path is readable by CopyToBox (avoid `/tmp`; prefer home/Documents)
- Start a second long Mac job without checking the first is still healthy
