---
name: build-feature-with-cloud-agent
description: "Use when the owner asks for a new feature, screen, bug fix, or refactor in the app code. All code changes go through a cloud agent and a reviewed PR."
---

# Build a feature with a cloud agent

## 1. Shape the work (before launching)
- Restate the feature in 1-2 lines and confirm only if it is ambiguous.
- Read the repo context you need: docs/SPEC.md, route tree, related files, open PRs touching the same area (avoid conflicts).
- Split anything bigger than ~1 day of work into independent PR-sized tasks. Launch independent ones in parallel; chain dependent ones.
- Decide if it needs native changes (new native module, permission, config plugin, app.config change). If yes, it will need a new binary, not just an OTA update (see `release-train`).

## 2. Prompt template
```
Goal: <one sentence user-facing outcome>
Context: Expo SDK <n>, expo-router, TypeScript. Relevant files: <paths>. Conventions: <state lib, styling, API client>.
Build:
- <screen/route path> with <components>, loading/empty/error states
- Data: <entities, API calls, storage>
- Platform notes: <iOS/Android differences, permissions + purpose strings in app.config>
- Accessibility: labels on interactive elements, dynamic type does not break layout
Tests: unit tests for logic, RNTL test for the screen happy path + one error path.
Acceptance criteria:
1. <observable behavior>
2. <observable behavior>
3. lint, typecheck, tests pass in CI
Out of scope: <list>. Do not bump the Expo SDK, change bundle IDs, or touch eas.json/credentials unless asked.
Open a PR titled "<type>: <summary>" with a description listing changes and how to test.
```

## 3. Review the PR (never skip)
Check, in order: acceptance criteria met; diff scoped to the task; no secrets, no hardcoded API keys, no debug logs; permissions have honest purpose strings; no new heavy dependency without reason (`npx expo install` versions); tests meaningful; CI green.
If anything fails, reply to the same cloud agent with a numbered list of fixes and the failing log lines. Repeat until clean. Do not hand-edit code yourself.

## 4. Get a preview in the owner's hands
Pick the lightest option that works:
- JS-only change and a preview/development build already installed: publish to a branch with `eas update --branch pr-<n> --message "<summary>"` and share the update link/QR from the EAS dashboard.
- Native change, or no build installed yet: `eas build --profile preview` (or development) via `ios-android-builds`, share the install link.
- Expo Go works only for projects without custom native code and its store version has lagged new SDKs in 2026; prefer development builds.
EAS commands need the owner's Expo login or an EXPO_TOKEN in bot secrets. Builds can consume paid EAS quota on paid plans; mention it if the owner is on a metered plan.

## 5. Report to the owner
Short message: what changed (bullets), PR link, preview link/QR, what to test (2-4 steps), known limits. Ask for "merge?" Merge only on explicit yes (or if the owner has given standing permission for this repo, saved in memory).
After merge, note the change for the changelog in `release-train`.
