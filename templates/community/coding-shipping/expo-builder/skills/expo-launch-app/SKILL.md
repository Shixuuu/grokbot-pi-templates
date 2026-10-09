---
name: expo-launch-app
description: "Expo: first App Store/TestFlight, Play, web or Meta VR release via Expo Launch (create-launch CLI): ask first, upload a clean staged copy, hand over the link, follow up via EAS. Use for \"launch it\" / \"get it on TestFlight\" with no store setup yet."
---

# Expo: launch with Expo Launch

Expo Launch (launch.dev) uploads a project and returns a link; the owner finishes store setup (Apple/Google sign-in, signing, track, submit, domain) in their **own browser**. Only the `create-launch` CLI (no MCP, API key or status API). `source /home/box/expo-builder/env.sh` (provides pinned `create_launch`).

1. **Fit check:**
   - Expo, RN or Flutter project targeting the App Store, Play, the web or Meta VR, with a static `app.json`.
   - No working **store-release** pipeline yet (`eas submit` / TestFlight / Play track); an EAS project id, dev-client config or preview builds don't count. If a real submit pipeline exists, use that.
   - Goal is a **store / TestFlight release**: Launch has no build-profile option and makes **release** builds without the dev client (dev builds: reference §4b).
   - Tell the owner first: Launch builds on EAS (counts against the plan; free within the EAS free tier, per launch.dev/llms-full.txt v2.3.0) and store steps happen in their browser.
   - **runtimeVersion policy (verified failure):** a `runtimeVersion` *policy* (e.g. `{"policy":"appVersion"}` from `eas update:configure`) makes the Launch build **fail**: Launch prebuilds on its worker, EAS sees a generated `ios/`, treats the project as bare and errors "runtime version policies are not supported". Warn first and offer a **static** `runtimeVersion` (e.g. `"1.0.0"`), bumped by hand whenever the fingerprint changes (`expo-ota-preview-update`).
   - **Bundle ID:** Launch may propose a slug-derived id on its page; have the owner confirm it matches.
2. **Ask first,** in one message: "Launch `<app>` to `<targets>`? This uploads a clean copy of the repo's tracked files to Expo Launch under your Expo account and gives you a link to finish store setup."
3. **Auth:** `create_launch whoami --json`; non-zero → `expo-request-sign-in` (device login; Launch reads the same session). If a robot `EXPO_TOKEN` is set, ask whether to launch as the owner (`env -u EXPO_TOKEN …`); store accounts should be theirs. Robot support is **[unverified]**.
4. **Stage:** Launch ignores `.gitignore`/`.easignore` and uploads the whole folder minus a fixed denylist (`.git`, `node_modules`, `.expo`, native build dirs), so never run it in a working tree.
   ```bash
   S=/tmp/launch-$(date +%s); mkdir -p "$S" && git -C <repo> archive HEAD | tar -x -C "$S"
   ```
   **Refuse** if the stage has `.env*` (other than `.env.example`) or `.env.eas-simulator`; `*.p8`, `*.p12`, `*.jks`, `*.keystore`, `*.mobileprovision`; or a service-account JSON. Also refuse if `pnpm-lock.yaml` or `pnpm-workspace.yaml` exists but isn't committed. Size must be under 500 MB. Monorepos: stage the workspace root and pass `--project apps/<app>`.
5. **Launch:** in the stage, `create_launch --json` (non-interactive, no confirmation; `--yes` interactively). Parse stdout only: `{ id, url, framework }`. Delete the stage after. Not `agent_cli deploy --native` (unpinned `create-launch@latest`).
6. **Hand over** the link in private chat (App Store: Apple sign-in, certificates, profiles, bundle id, build, submit, TestFlight invite; Play: account, app, signing, track; Web: domain). Link lifetime is undocumented (llms-full.txt v2.3.0): don't promise one; if expired, rerun `create_launch --json`. The bot never drives that page.
7. **Follow up** (Launch follow-up routine in `expo-builder-routines`): once the owner is done, poll `eas build:list --limit 5 --json`, and `eas submit:status -p ios --json` once a submission exists; run `expo-triage-eas-failure` on errors and report the result. Launch's "Configure project" step rewrites `app.json` on its worker (e.g. `ios.bundleIdentifier` → `com.<owner>.<slug>`) and prebuilds there; **nothing is written back locally**. Reconcile the bundle id / project id it set into the repo by PR (read back via `eas build:view --json` or the project page).
8. **Later releases:** EAS store builds if Launch left credentials in EAS (ask the owner), else rerun Launch; OTA via `expo-ota-preview-update`.

**Never:** `create-launch logout` (wipes the shared Expo session), `create-launch login --session`, or a GitHub-URL launch of a private repo.
