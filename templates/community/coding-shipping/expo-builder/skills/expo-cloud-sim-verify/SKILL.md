---
name: expo-cloud-sim-verify
description: "Expo/EAS: show or test an app on a remote iOS/Android EAS Simulator (fingerprint dev-build reuse, live tunnel or static build, agent-device screenshots and recordings, mandatory cleanup). Use for \"show me on iOS\", PR evidence or bug repro."
---

# Expo: verify on an EAS cloud simulator

Wraps upstream `eas-simulator` (read it first via `expo-skills-library`; syntax changes fast). Overlays O4, O8, O12 apply. `source /home/box/expo-builder/env.sh`.

1. **Auth and access:** `expo-request-sign-in` if needed, then `eas simulator:availability --json`; no access → web screenshots, and say so. Limited-access preview; bot-use pricing **[unverified]**.
2. **Budget:** autonomous within the owner's budget (reference §6; default ≤6/day, 30 min max, 10 min idle); beyond it, ask.
3. **Reuse a dev build** by fingerprint (`agent_cli status --explain`, `eas build:list --fingerprint-hash <h> --status finished --json`); none → `development-simulator` via `expo-ship-preview-build` (budget).
4. **Pick a mode:**
   - **Static** (no live edits): start the sim with the build.
   - **Live:** run Metro in the background; live-edit and log rules are in `expo-builder-core` (Builds, spending and live edits).
     SDK 58+: `pnpm expo start --tunnel --port <free>` (account-signed, needs Expo sign-in); SDK ≤57: `EXPO_UNSTABLE_TUNNEL_V2=1 pnpm expo start --tunnel --port <free>`. Read the real URL, port and `exp+<slug>` dev-client link from the output (non-interactive runs roll over to the next free port); re-read after restarts. Never `--tunnel ngrok`. The URL is public but unguessable while it runs; keep sessions short.
   - **No-tunnel OTA [inferred, untested]:** `eas update --channel <pr-ch> --environment development`, then `--open-url "exp+<slug>://expo-development-client/?url=<encoded https://u.expo.dev/<projectId>?channel-name=<pr-ch>>"` (derive `exp+<slug>` per reference §4a).
5. **Start:** `eas simulator:start --build-id <id> [--open-url "<exp+<slug> link from the dev-server log>"] --name "<task>" --tag grok-bot --max-duration-minutes 30 --max-idle-time-minutes 10 --non-interactive`. Drive it via `eas simulator:exec` (`npx agent-device@latest snapshot|press|screenshot|record …`, on the EAS host); check `--help` for flags.
6. **On a crash,** read the session crash logs (Observe misses native crashes on the iOS Simulator). Never print preview-API URLs or `.env.eas-simulator`.
7. **agent-device quirks** (retry before reporting a bug): rows behind a floating tab bar can't be tapped (scroll into view); the keyboard can stay up after search (dismiss it); screenshots right after a tap can be stale (wait ~1–2 s); a first tap after another control may not navigate (retry once).
8. **Always clean up, even on failure:** `eas simulator:stop`, reset the dotenv, kill Metro (the janitor routine catches leftovers).
9. **Evidence:** replay URL(s), before/after screenshots, a recording for motion. Can't reproduce → report and stop.
