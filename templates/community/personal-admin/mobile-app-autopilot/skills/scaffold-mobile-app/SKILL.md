---
name: scaffold-mobile-app
description: "Use when starting a new mobile app codebase (or re-platforming one) from a spec, before feature work begins."
---

# Scaffold a mobile app

## 1. Choose the stack
Default: Expo (latest stable SDK) + React Native + TypeScript + expo-router, EAS Build/Submit/Update, development builds (not Expo Go) for real testing.
Check the current SDK at runtime: fetch https://expo.dev/changelog and https://docs.expo.dev/versions/latest/. Reference point (Oct 2026): SDK 57 stable (React Native 0.86, React 19.2, released June 30 2026; use expo@57.0.17+ for Hermes fixes), SDK 58 in beta since Sep 15 2026. Never scaffold on a beta unless the owner asks.
Go native (SwiftUI + Kotlin/Compose, two repos or a monorepo) only if the owner needs it: heavy platform APIs, watch/widgets-first, existing native team. Explain the cost: two codebases, iOS builds need Xcode Cloud or a Mac runner since this computer is Linux.

## 2. Pick the repo
- New app: launch the cloud agent with new_repo (private Cursor Origin repo), or the owner's empty GitHub repo if they prefer.
- Existing repo: confirm owner, name, default branch.

## 3. Cloud agent prompt (fill the <> parts, keep it precise)
```
Scaffold a production-ready Expo app in this repo.
- Use `npx create-expo-app@latest` (TypeScript, expo-router). Remove demo screens.
- App name "<Name>", slug "<slug>", scheme "<scheme>".
- app.config.ts: ios.bundleIdentifier "<com.company.app>", android.package "<com.company.app>", ios.supportsTablet <false unless iPad is in scope>, version "1.0.0", runtimeVersion { policy: "fingerprint" }, updates url placeholder via EAS.
- Routes for these MVP screens: <list from SPEC>. Typed routes on.
- Env: expo public vars via EXPO_PUBLIC_*, secrets only via EAS environment variables; add .env.example; never commit secrets.
- Quality: ESLint (expo config) + Prettier, `tsc --noEmit`, Jest + @testing-library/react-native with one smoke test per screen. npm scripts: lint, typecheck, test.
- eas.json: cli.appVersionSource "remote"; profiles development (developmentClient, internal distribution), preview (internal, channel "preview"), production (autoIncrement true, channel "production").
- Install expo-dev-client, expo-updates, @sentry/react-native with its Expo config plugin (DSN from env).
- CI: GitHub Actions (or the host's CI) running lint, typecheck, test on PRs.
- Docs: README with setup, scripts, env vars, build commands. Keep docs/SPEC.md.
- Do not run eas build or eas submit. Do not add paid services.
Acceptance: `npm run lint && npm run typecheck && npm test` pass; `npx expo-doctor` clean; app boots to the first screen.
```

## 4. Verify before reporting
- Read the PR diff: identifiers correct, no secrets, no leftover template screens, tests real (not empty).
- Check CI status on the PR. If red, reply to the agent with the failing log excerpt and ask for a fix.
- Optional local check on this computer: clone, `npm ci`, `npx expo-doctor`, `npm test`.
- Run `npx expo install --check` for version mismatches.

## 5. Hand off
Tell the owner: repo link, PR link, what's in it, what's next. Next is usually: the owner runs `eas init` linking to their Expo account (or adds an EXPO_TOKEN to bot secrets), then `ios-android-builds` for a first development build, then `build-feature-with-cloud-agent` for each MVP screen.
