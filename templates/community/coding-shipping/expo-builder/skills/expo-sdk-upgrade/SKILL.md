---
name: expo-sdk-upgrade
description: "Expo: upgrade a project's SDK (e.g. 57 → 58) on a branch with a draft PR: pnpm react-native override and its removal at stable, EAS image switch, breaking-change checklist. Use for \"upgrade to SDK N\" or when the weekly check finds a newer SDK."
---

# Expo: SDK upgrade

Read upstream `expo-upgrade` via `expo-skills-library` (overlays O5, O14 and O15 apply). Always work on a branch and end with a draft PR. Upgrading an existing project needs the owner's OK. `source /home/box/expo-builder/env.sh`.
## 57 → 58
1. Run `expo-bot-preflight`, and record the fingerprint plus the `tsc`/lint baseline.
2. **pnpm first:** `packageManager` and eas.json `pnpm` = the target image's pnpm (11.27.0 on `sdk-58`); move package.json `pnpm.*` settings into `pnpm-workspace.yaml`; delete an `.npmrc` with `legacy-peer-deps`; while 58 is beta, `overrides.react-native` = the RC the target expo expects (`pnpm view expo@next dependencies` / template pin).
3. `pnpm expo install expo@next --fix` while 58 is beta (`expo@^58` once stable). Then run `pnpm install`, `pnpm why react-native` (one version, equal to `bundledNativeModules.json`) and `pnpm peers check`.
4. **Breaking changes:** Strict TS API (refs become instance types; `react-native-legacy-deep-imports` opt-out only as a stopgap, gone after RN 0.88); RN removals (`InteractionManager`, `Touchable`, `Modal animated`, several `StatusBar` props); libraries (`expo-router/react-navigation` imports and custom navigators, `expo-sqlite` drops libSQL, `@expo/ui` `<Host>` alignment and stack spacing, `AppMetrics` → `Observe`); tooling (NODE_ENV handling, Node ≥22.13); native (a committed `ios/` must migrate to the SceneDelegate life cycle; CNG projects check with `pnpm expo prebuild --clean --no-install`, never commit the output); R8 on for Android release.
5. Switch eas.json images to the SDK 58 values (`expo-builder-reference` §4).
6. `expo-verify-change`; expect one fingerprint miss (balanced preset), then one `development-simulator` build plus `expo-cloud-sim-verify` (budget).
7. Draft PR with the checklist; say plainly if the target is a beta, and that OTA can't cross the runtime change (every channel needs new builds).
## When SDK 58 goes stable (`pnpm view expo dist-tags` → `latest` ≥ 58)
Follow-up PR per project: remove the `react-native` override; `pnpm expo install expo@^58 --fix` (RN → stable 0.88.x); `pnpm install`, `pnpm why react-native` (one version); `expo-verify-change` (doctor, export, frozen install).

Also switch the scaffold to the stable template; the `default@sdk-58` tag works either way.
