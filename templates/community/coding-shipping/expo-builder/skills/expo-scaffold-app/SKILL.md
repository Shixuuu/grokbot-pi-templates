---
name: expo-scaffold-app
description: "Expo: create a new Expo app (SDK 58 default, SDK 57 fallback) with pnpm, the SDK 58 beta react-native override, pinned EAS images and a green lint/tsc baseline. Use for \"new app\" / \"start a project\" requests."
---

# Expo: scaffold a new app

No sign-in until step 6. `source /home/box/expo-builder/env.sh`. File formats: `expo-builder-reference` §3–§4.

1. **Create** (SDK 58):
   ```bash
   pnpm dlx create-expo-app@latest <name> --template default@sdk-58 --yes --no-install && cd <name>
   ```
   `--template default@sdk-57` (expo ≥57.0.9) if the owner asks, a library lacks RN 0.88 support, or a beta blocker appears. Tell the owner if SDK 58 is still a beta (`latest` < 58).
2. **pnpm files before the first install:** `"packageManager": "pnpm@11.27.0"`; `pnpm-workspace.yaml` with `overrides.react-native` = the template's `dependencies["react-native"]` only while it's an RC/beta (comment "remove at SDK 58 stable"), plus `allowBuilds: { unrs-resolver: true }`.
   ```bash
   node -e 'const f="package.json",p=require("./"+f);p.packageManager="pnpm@11.27.0";require("fs").writeFileSync(f,JSON.stringify(p,null,2)+"\n")'
   ```
3. **Install and check:**
   ```bash
   pnpm install
   node -p 'require("./node_modules/expo/bundledNativeModules.json")["react-native"]'  # must equal the override
   pnpm why react-native  # exactly one version
   pnpm peers check  # known SDK 58 beta noise: worklets range on expo-modules-core, @react-native/metro-config 0.87.1
   ```
   Report other unmet peers; never silence them with `peerDependencyRules`.
4. **Structure and config:**
   - Read `expo-project-structure` via `expo-skills-library` (new projects only).
   - Set `ios.bundleIdentifier` and `android.package`; keep a static `app.json` (dev and prod side by side: `APP_VARIANT` in `app.config.ts` spreading `...config`). Managed workflow: no committed `ios/`/`android/`.
   - `ios.infoPlist.ITSAppUsesNonExemptEncryption: false` (reference §3; ask if custom non-exempt encryption).
   - Keep the generated `AGENTS.md` (its `npx expo …` runs as `pnpm expo …`). Prefer `expo-symbols` or `@react-native-vector-icons/*` over `@expo/vector-icons`.
5. **eas.json and a green baseline:**
   - eas.json from reference §4 (SDK 57: `sdk-57` images), with **both** dev profiles (`development` for devices, `development-simulator`) up front.
   - Create `expo-env.d.ts` with `/// <reference types="expo/types" />`.
   - Fix SDK 58 template issues: Strict TS `ref` error in `src/components/app-tabs.web.tsx`; `react-hooks/set-state-in-effect` lint in `src/hooks/use-color-scheme.web.ts`.
   - `pnpm expo lint` once (adds eslint and eslint-config-expo), then `CI=1 pnpm install --frozen-lockfile` (the EAS install step; fails if `allowBuilds` misses a package).
   - Add `.env*` (except `.env.example`) and `.env.eas-simulator` to `.gitignore`. Commit `pnpm-lock.yaml` and `pnpm-workspace.yaml`.
6. **EAS link (ask first):** `eas init --non-interactive`, the first EAS step: run `expo-request-sign-in` first, both asks in one message. Then `eas update:configure` (don't hand-write `updates.url` or `runtimeVersion`; before an Expo Launch build switch its policy to a static string, see `expo-launch-app`).
7. **Finish:** `expo-verify-change`, commit, report with the evidence contract. Repo creation or pushing follows the PR policy.
