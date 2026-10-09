---
name: expo-ship-preview-build
description: "Expo/EAS: produce an installable EAS build (simulator/dev or internal preview) with fingerprint reuse, pinned build images, queue and budget awareness, and build polling. Use for \"build it\", \"make a preview build\", \"get me an APK\"."
---

# Expo: ship a preview build

`source /home/box/expo-builder/env.sh`. Probe auth first (`expo-request-sign-in`). Read `expo-dev-client` via `expo-skills-library` for concepts only; overlay rules O1, O2 and O13 apply. Cost, device and live-edit rules are in `expo-builder-core` (Builds, spending and live edits).

1. **Reuse first:** `eas build:list --fingerprint-hash <h> --status finished --json` (`<h>` from `agent_cli status --explain`). If a build matches, hand over its `artifacts.buildUrl`.
2. **Guards:** simulator/dev profiles (no credentials) are autonomous within budget; signed internal iOS builds (credentials, device registration) are **ask-first**. Respect the 50-pending-builds limit, at most 1 bot build in flight. On the Free plan, warn the queue can pass 90 minutes and builds time out at 45.
3. **Cost gate:** run `eas account:usage --json` and state the per-build cost and included/overage status; over the allowance (or the owner's cap in memory), ask once before continuing.
4. **Show the plan, then build** (signed/device builds need a go-ahead):
   - **Which physical device**, by name; an unregistered phone installs but won't launch ("…integrity couldn't be verified"). A device matching the owner's name may be an old phone.
   - `eas device:list --apple-team-id <id> --json` (names, `createdAt`; team id required non-interactively). Unsure → **register first** with `eas device:create` (interactive, box terminal, **Website** option, open the URL on that phone), then re-read.
   - Platform, profile and the pinned image it resolves to.
   - Credentials state, read-only (`eas credentials`, last `build:view`); **never probe with `eas build`**.
   - The exact `eas build …` command and the cost line. Never queue a second build "to be safe".
5. **Images:** the profile's pinned image (`expo-builder-reference` §4); `development-xcode-27-1` only when the owner asked for an iOS 27.1 check.
6. **Build:** `eas build -p <ios|android> -e <profile> --non-interactive --json --no-wait`, then a **backgrounded** `eas build:view <id> --json` watch (`status`, `queuePosition`, `estimatedWaitTimeLeftSeconds`) with the completion notification. Android preview: an APK profile; suggest `EAS_GRADLE_CACHE=1` (ask; about 50% faster).
7. **Confirm** the image in the "Spin up build environment" log section, and that install used pnpm with `--frozen-lockfile`.
8. **Hand over** `artifacts.buildUrl` with the evidence contract (dev builds: plus the `exp+<slug>` link and QR). On failure, run `expo-triage-eas-failure`.
9. **Store hand-off:** TestFlight or store with no store credentials yet → offer `expo-launch-app`. Submits are always ask-first.
