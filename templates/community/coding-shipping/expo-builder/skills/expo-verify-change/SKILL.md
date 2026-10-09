---
name: expo-verify-change
description: "Expo: verify a code change before claiming it's done: lint, tsc, expo-doctor, dependency checks, frozen pnpm install, iOS/Android export, web screenshot and the JS-only vs native-rebuild verdict. Use before any \"done\" in an Expo project."
---

# Expo: verify a change

`source /home/box/expo-builder/env.sh`, then from the project root:
1. **Baseline:** ensure `expo-env.d.ts` exists (else `tsc` fails on CSS imports); record the base branch's `tsc`/lint results so existing errors aren't blamed on the change.
2. **Checks** (pass/fail comes from exit codes only):
   ```bash
   pnpm expo lint
   pnpm exec tsc --noEmit
   pnpm dlx expo-doctor@latest
   pnpm expo install --check
   pnpm run --if-present test
   pnpm expo export -p ios --output-dir /tmp/export-ios && pnpm expo export -p android --output-dir /tmp/export-android
   ```
   Dependencies changed → also `CI=1 pnpm install --frozen-lockfile` (what EAS runs: catches lockfile drift, missing `allowBuilds`), `pnpm why react-native` (one version), and on an SDK 58 beta the override still equals `bundledNativeModules.json`.
3. **UI:** web preview (`pnpm expo start --web --port <free>`), screenshot changed routes in the box browser, stop the server, and read its log (any `ERROR`, including a bare `Web ERROR null`, means investigate). Device attached to a live dev server → worktree rule in `expo-builder-core`. Changed screens: run the `expo-native-feel` checklist (scope: the change); device-only items go under "not verified" unless a simulator run covers them.
4. **Native impact:** `agent_cli status --assert js-only`; exit `20` = more than JS-only (`dev-client-compatible` or `needs-native-build`): read `agent_cli status --explain` before choosing OTA or a build.
5. **Optional device proof** (simulator budget): `agent_cli smoke --ios --eas --route <r> --json` or `expo-cloud-sim-verify`.
6. **Report** per the evidence contract (reference §7): commands and exit codes, screenshots, what wasn't verified, errors pre-existing on the base branch.
