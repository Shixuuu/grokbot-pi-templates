---
name: expo-triage-eas-failure
description: "Expo/EAS: diagnose a failed EAS build, workflow run or submission (error codes, build-log phases, pnpm install failures, SDK 58 failure classes) and propose or open a fix. Use when an EAS job failed or a routine finds one."
---

# Expo: triage an EAS failure

`source /home/box/expo-builder/env.sh`. Read-only except the optional fix branch.

1. `eas build:view <id> --json`: key on `error.errorCode` (e.g. `EAS_BUILD_UNKNOWN_GRADLE_ERROR`, `…_FASTLANE_ERROR`, `EAS_BUILD_TIMEOUT_ERROR`, `EAS_BUILD_HOOKS_ERROR`, `…_CREDENTIALS_DIST_CERT_MISMATCH`, `SERVER_ERROR`) and `error.docsUrl`.
2. Download `logFiles` (gzipped JSON lines), run `agent_cli inspect:build-log --file <log> --platform <p> --json`; its phases only match `npx expo …`, so find `pnpm install` / `pnpm expo prebuild/export` lines yourself.
3. **Classify:**
   - `[stderr]` lines are often noise; Metro "Unable to resolve" is a JS error; "None of these files exist" = a gitignored or uncommitted file; "Gradle build daemon disappeared" = out of memory, suggest a `large` resource class (ask); credentials phases are report-only; `RUN_EXPO_DOCTOR` → `pnpm dlx expo-doctor@latest` locally; `SERVER_ERROR` → one retry (ask).
   - **pnpm install phase:** `ERR_PNPM_IGNORED_BUILDS` → add the package to `allowBuilds` in `pnpm-workspace.yaml` after checking its script; frozen-lockfile / `ERR_PNPM_OUTDATED_LOCKFILE` → `pnpm install` locally with the pinned pnpm, commit the lockfile; wrong pnpm version → align `packageManager` and eas.json `pnpm`; duplicate `react-native` → check the override (`pnpm why react-native`); native module failing under the isolated linker → keep pnpm's default isolated linker (never switch linkers), check `pnpm why --depth=10 <pkg>` for duplicates, pin with `overrides`, else report or replace the library.
   - **SDK 58:** R8 now runs on release builds (release-only `ClassNotFoundException`/`NoSuchMethodError` → keep rules or an `expo-build-properties` opt-out, ask); scene life-cycle errors in custom AppDelegate code; Strict TS API errors in `tsc`; an SDK 58 build on `latest` gets Xcode 26.6.
   - **"bare workflow / runtime version policies not supported" or "bundleIdentifier in app.json is ignored because an ios directory was detected", with no committed `ios/`/`android/`:** a prebuild ran before the build config resolved, so EAS saw a generated native dir and went bare (Expo Launch does this: configure → prebuild → `build:internal`). Show both evidence lines, note the CNG config (`runtimeVersion` policy, bundle id) is ignored, and treat it as a tooling-order bug worth reporting upstream. Launch workaround: a static `runtimeVersion` (`expo-launch-app`).
   - **Install-time "integrity couldn't be verified" (iOS ad hoc, build succeeded, won't launch):** the device isn't in the provisioning profile. Download `artifacts.buildUrl`, `unzip` it, read the embedded profile's `ProvisionedDevices`:
     ```bash
     openssl smime -inform der -verify -noverify -in Payload/*.app/embedded.mobileprovision
     ```
     UDID missing → register it (`eas device:create`, Website option) and rebuild; don't re-sign the IPA.
4. Link the dashboard **Compare** view vs the last green build.
5. Workflows: `eas workflow:view <id> --json`, `eas workflow:logs <id> --all-steps --json`; submissions: `eas submit:view <id> --json`.
6. Reproduce locally (`CI=1 pnpm install --frozen-lockfile`, `pnpm expo prebuild --no-install` in a scratch copy, `pnpm expo export`), then a fix branch and draft PR (PR policy) or a report: root cause, evidence, suggested fix.
