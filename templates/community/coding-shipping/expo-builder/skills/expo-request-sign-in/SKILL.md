---
name: expo-request-sign-in
description: "Expo/EAS: just-in-time sign-in for eas-cli (device login in chat), Expo Launch, Expo MCP, GitHub and App Store/Play credentials. Run before an EAS step that needs auth, after a failed auth probe, or on agent-cli exit 7."
---

# Expo: request a sign-in just in time

Implements the sign-in rule in `expo-builder-core`. Always `source /home/box/expo-builder/env.sh` first.
## Rules
1. **Probe before the step, not after it fails:** `agent_cli status --json` → `auth.loggedIn`; `eas whoami` (no `--json`; exit 1 + "Not logged in" = signed out); `gh auth status`; connector status. Agent-cli exit `7` or `error.needsHuman: true` comes here too. Never start a build, tunnel or sim session that will die on auth. Unprobeable steps (Apple, Play) run `--non-interactive` to fail fast.
2. **Ask once, in one message, with the reason,** bundling only the sign-ins this task certainly needs.
3. **Resume automatically** from the blocked step. If a code expires, offer one fresh code, then stop; don't loop.
4. **Never ask for a token, password, 2FA code or key in chat:** device link, secret-request card, AuthenticateMcpServer, request_box_help or a password-manager fill. The device code and match number are fine in **private** chat, never a shared channel.
5. **Memory records which sign-ins exist, never values** (e.g. "Expo: device session as `<user>` since <date>; EXPO_TOKEN: not set; GitHub connector: OK; gh: signed out; Expo MCP: not connected").
6. **Re-prompt only on expiry or revocation** (one message); never re-ask at task start.
7. **Routines never prompt:** if signed out, post one "Expo sign-in expired, I'll ask next time you're here" note and skip.
8. **Sign out on request:** `eas logout`, `gh auth logout`, remove `EXPO_TOKEN`/`GH_TOKEN` secrets, update memory. **Never** `create-launch logout`: it deletes `~/.expo/state.json` and `~/.expo/codesigning/` for every Expo tool on the box.
## Expo device login (the default identity is the owner)
```bash
eas login --device --non-interactive
# prints: Open https://expo.dev/oauth/device?user_code=XXXX-XXXX / Code: XXXX-XXXX / … --resume <id>
```
- Private chat: "To <step> I need to sign in to Expo as you: open <link>, approve code XXXX-XXXX, and send me the number if one appears." Mention the shared box.
- Poll **in the background**, ≥5 s apart: `eas login --device --non-interactive --resume <id> [--match <n>]` (verified: first "Approval pending", then "Ask the user for the number shown in their browser"; finish with `--match <number>`). `Approval pending. Retry after N seconds` → keep polling; number requested → ask the owner; `Logged in as <user>` → resume; `Device login failed (<status>)` → report.
- Code lasts ~10 minutes. The session (`~/.expo/state.json`) also covers `pnpm expo` (SDK 58 tunnel, `expo whoami`) and `create-launch`.
- `expo login` has no device flow; `--device` can't combine with `--sso`. SSO/2FA on the approval page is **[unverified]**; for an SSO-only org use request_box_help with `eas login --sso` in the box browser. Session lifetime is **[unverified]**, so routines probe first.

**Optional hardening:** a Developer-role robot user, token via a **secret-request card** into `EXPO_TOKEN` (beats the stored session; `eas whoami` shows "(authenticated using EXPO_TOKEN)"). `env -u EXPO_TOKEN …` for owner-only steps like Launch store setup. Robot access to EAS Simulator, Launch, Expo MCP is **[unverified]**.
## Apple credentials (box-terminal handover, verified)
Apple sign-in, 2FA, team and certificate choices are the owner's, typed at a real box prompt; never by the bot.
1. A computerUse task opens `xfce4-terminal` maximized and runs, in the app dir, `source /home/box/expo-builder/env.sh && eas credentials:configure-build -p ios -e <profile>` (or `eas credentials -p ios`), stopping at the first Apple prompt.
2. Hand the box to the owner for Apple ID, 2FA, team and device selection. Tell them up front:
   - Bundle-ID registration can fail until they accept a new Apple Developer agreement at developer.apple.com; then rerun.
   - eas-cli caches the Apple session in the box user's home directory on the **shared** box (never print it) and reuses it silently; they can ask you to delete it.
   - "Generate a new Apple Distribution Certificate?" is their call (slots are limited).
3. `eas device:list` needs `--apple-team-id <id>` non-interactively; `eas device:create` takes no flags (interactive; Website option gives a URL for the phone).
## Sign-in table
| Credential | First step that needs it | Missing when | How to ask |
|---|---|---|---|
| Expo/EAS (owner) | `eas init`, `build*`, `simulator:*`, `update*`, `workflow:*`, `env:*`, `fingerprint:compare --build-id`, `account:usage`, `pnpm expo start --tunnel` (SDK 58), `create-launch --json` | `eas whoami` exit 1; `Either log in with eas login or set the EXPO_TOKEN…`, `An Expo user account is required`, `WS_TUNNEL_SIGNED_URL … not logged in`; `create_launch whoami --json` exit 1, empty stdout; agent-cli `LAUNCH_NOT_AUTHENTICATED` | Device login (above) |
| Expo robot token (optional) | Same, once the owner opts in | `The bearer token is invalid` | Secret-request card → `EXPO_TOKEN` |
| GitHub connector | Repo/PR tools | `needsAuth` or 401 | AuthenticateMcpServer |
| GitHub on the box (`git push`, `gh`) | First box push (if chosen) | `gh auth status` exit 1 | Secret-request card → `GH_TOKEN` (fine-grained PAT, Contents + Pull requests, allow-listed repos); else background `gh auth login --web`, then `gh auth setup-git` (broad `repo` scope) |
| EAS GitHub app | `expo-eas-pr-pipeline` triggers | Workflows never trigger **[unverified detection]** | Owner installs it on expo.dev; send the link |
| Expo MCP (`https://mcp.expo.dev/mcp`) | TestFlight/Play crashes, reviews, docs search | `needsAuth` / 401 | Owner adds the connector, then AuthenticateMcpServer |
| Expo Launch | `expo-launch-app` | As Expo row | Same session; never `create-launch login --session` |
| Launch browser steps | After the Launch link | No status API | Owner's own browser; the bot never drives it |
| Apple ASC key / Apple ID | First signed iOS build, `eas submit -p ios`, TestFlight | `--non-interactive` fails on credentials | Box-terminal handover (above), or the owner's own Mac. Brand-new app: offer `expo-launch-app` |
| Google Play service account | First `eas submit -p android` | Missing key | Owner uploads the JSON on expo.dev → Credentials (link); never via chat |
| Store web forms | No-CLI steps | Login page | Password-manager fill, else request_box_help; plain fields via RequestUserForm |
| App runtime secrets, Sentry | First build that needs them | Missing env var | Secret-request card → `eas env:set --visibility secret` (production ask-first). Never `EXPO_PUBLIC_*` |
## Handling
- Store credentials stay in EAS; the bot never holds `.p8` files, keystores or service-account JSON.
- Never print `~/.expo/state.json`, `.env.eas-simulator`, `remoteConfig`, preview-API URLs or `~/.config/gh/hosts.yml`. `webPreviewUrl` carries a session token: private chat only.
- Any session on the shared box is usable by the owner's other agents; say so when asking.
