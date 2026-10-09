---
name: expo-skills-library
description: "Expo: fetch the official expo/skills library on demand (shallow clone, daily update, pinned fallback), pick the matching upstream skill, read it and apply Expo Builder's correction overlay. Use before Expo/EAS work an upstream skill covers."
---

# Expo skills library (on demand, with a correction overlay)

Upstream `expo/skills` (26 skills: routing, UI, Router, EAS Build/Update/Workflows/Hosting/Observe/Simulator, upgrades…) isn't installed globally; the bot fetches it into a box cache and reads what it needs. Upstream files are **never edited**: the overlay says what to do differently, and each rule checks upstream still says the outdated thing.
## 1. Fetch or update (at most daily, or when the weekly routine runs)
```bash
source /home/box/expo-builder/env.sh
D="$HOME/.cache/expo-builder/expo-skills"; URL=https://github.com/expo/skills
PIN=d4f484024fec15196bfd3c272e953e3f983972cf  # known-good fallback (2026-10-05)
S="$D/.expo-builder-fetched"; now=$(date +%s)
if [ ! -f "$D/skills.sh.json" ]; then
  rm -rf "$D"
  git clone -q --depth 1 "$URL" "$D" || { git init -q "$D" && git -C "$D" remote add origin "$URL" &&
    git -C "$D" fetch -q --depth 1 origin "$PIN" && git -C "$D" checkout -q FETCH_HEAD; }
  echo "$now" > "$S"
elif [ "${EXPO_SKILLS_FORCE:-0}" = 1 ] || [ $((now - $(cat "$S" 2>/dev/null || echo 0))) -gt 86400 ]; then
  git -C "$D" fetch -q --depth 1 origin HEAD && git -C "$D" reset -q --hard FETCH_HEAD; echo "$now" > "$S"
fi
# Layout changed or the fetch broke it? Fall back to the pin.
ls "$D"/plugins/*/skills/*/SKILL.md >/dev/null 2>&1 ||
  { git -C "$D" fetch -q --depth 1 origin "$PIN" && git -C "$D" reset -q --hard FETCH_HEAD; }
git -C "$D" log -1 --format='expo/skills %h %cs %s'
```
The weekly routine runs it with `EXPO_SKILLS_FORCE=1` and reports a changed commit. New commits are used as-is with the overlay; fall back to the pin only if a skill is missing or broken.
## 2. Pick the skill
Live index (name and description, straight from upstream):
```bash
for f in "$D"/plugins/*/skills/*/SKILL.md; do printf '%s\t%s\n' "$(basename "$(dirname "$f")")" \
  "$(awk '/^description:/{sub(/^description: *["'"'"'>|-]*/,"");print;exit}' "$f" | cut -c1-180)"; done
```
`skills.sh.json` groups them as Framework, Services (paid EAS), Experimental. Quick map (at the pin):
**Always first** `expo-overview` (router, shared rules). New app layout `expo-project-structure`. UI `expo-router`, `expo-native-ui`, `expo-ui`, `expo-design-system`, `expo-animation`. Data `expo-data-fetching`; recipes `expo-examples`. Builds `expo-dev-client`, `eas-app-stores` (store builds/submits). OTA `eas-update`, `eas-update-insights`. CI `eas-workflows`; web deploy `eas-hosting`; telemetry `eas-observe`. Cloud sim `eas-simulator`; upgrades `expo-upgrade`. On demand: `expo-module`, `expo-dom`, `expo-web-to-native`, `expo-brownfield`, `expo-app-clip`, `expo-migrate-module` (experimental). **Skip** `expo-skill-feedback` (telemetry/feedback, O11).
## 3. Load it
Read `"$D"/plugins/<plugin>/skills/<name>/SKILL.md` fully, then only the `references/*.md` needed. `scripts/` run with env.sh `node`. Never run `plugins/*/hooks` (telemetry) or install the plugin's MCP config. `expo-builder-core`, the overlay and the bot's skills (reference for guards/budgets/pnpm, `expo-request-sign-in` for auth) beat upstream.
## 4. Correction overlay ("when upstream says X, do Y")
Check which rules are live in the fetched commit (no hits = no-op, upstream fixed it):
```bash
cd "$D/plugins" && chk(){ id=$1; pat=$2; shift 2; h=$(grep -rnE -e "$pat" "$@" 2>/dev/null | head -3)
  if [ -n "$h" ]; then printf 'ACTIVE %s\n%s\n' "$id" "$h"; else echo "no-op  $id"; fi; }
chk O1 '^eas update$' expo/skills/expo-dev-client/SKILL.md
chk O2 '(^| )--submit( |$)' .
chk O3 'npm (i|install) (-g|--global) eas-cli|npx (--yes |-y )?eas-cli' .
chk O4 'eas login|set `?EXPO_TOKEN' .
chk O5 '(^|[ `(])npx [a-z@]|npm (i|install)( |$)' .
chk O6 'env:create|EAS Secrets' .
chk O7 'type: run|GITHUB_OUTPUT' .
chk O8 'EXPO_UNSTABLE_TUNNEL_V2' .
chk O9 'expo-tailwind-setup' expo/skills/expo-overview
chk O10 '10,000 monthly active users|no crash reporting|six (CLI|`eas observe)' expo/skills/eas-observe
chk O11 'submit-expo-feedback|Submitting Feedback' .
chk O12 'without asking again' expo/skills/eas-simulator/SKILL.md
chk O13 '">= 16\.0\.1"' .
chk O14 '`\.preview` suffix' expo/skills/expo-upgrade
chk O15 '@expo/vector-icons' expo/skills/expo-upgrade
chk O16 'xcrun simctl|npm i -g' expo/skills/expo-web-to-native/references/verify-on-device.md
chk O17 'skills under `\.claude/`' expo/skills/expo-project-structure
chk O18 'launch\.expo\.dev' .
chk O19 'unstable-native-tabs' expo/skills
chk O20 'from "expo-router/react-navigation"' expo/skills
chk O21 'InteractionManager|TouchableOpacity|KeyboardAvoidingView' expo/skills/expo-web-to-native expo/skills/expo-native-ui expo/skills/expo-router
```
| # | When upstream says | Do instead |
|---|---|---|
| O1 | `eas update` under expo-dev-client's "Check EAS CLI version" | Only `eas --version`; `eas update` **publishes an OTA update**. |
| O2 | `eas build … --submit` | The flag is `--auto-submit` (`-s`), and any submit is ask-first. |
| O3 | `npm install -g eas-cli`, `npx (--yes) eas-cli@latest` | The pinned env.sh `eas` wrapper. |
| O4 | `eas login`, or "headless agents … set EXPO_TOKEN" | `expo-request-sign-in` (device login; robot token only via a secret-request card). Never ask for a token in chat. |
| O5 | `npx expo X`, `npx <tool>`, `npm install X` | `pnpm expo X`, `pnpm dlx <tool>@<pin>`, `pnpm expo install X` / `pnpm add X`. Keep `npx agent-device@latest` inside `eas simulator:exec` (EAS host). Other-lockfile repos keep their manager. |
| O6 | `eas env:create … --value <secret>`, "EAS Secrets" | `eas env:set --name <N> --environment <env> --visibility secret`, value from a secret-request env var, never a literal. EAS Secrets are now `secret`-visibility env vars. Production env changes are ask-first. |
| O7 | eas-app-stores `references/workflows.md` `type: run` with `$GITHUB_OUTPUT` | Invalid. Custom job with `steps` and `set-output`, always `environment` on `update` jobs, `eas workflow:validate <file> --non-interactive`. Prefer `eas-workflows` (schema-first). |
| O8 | `EXPO_UNSTABLE_TUNNEL_V2=1 npx expo start --tunnel` | SDK ≤57 only. SDK 58+: `pnpm expo start --tunnel --port <free>` (account-signed, needs Expo sign-in). Never `--tunnel ngrok`. |
| O9 | Route to `expo-tailwind-setup` | Gone; read the versioned Tailwind/NativeWind guide on docs.expo.dev. |
| O10 | eas-observe: "10,000 monthly active users", "no crash reporting", error APIs "undocumented", "six CLI commands" | Events-based pricing (expo.dev/pricing); native crash/error reporting since `expo-observe` 57.0.21; CLI also has `observe:errors`, `observe:event`. Trust `eas observe --help`. |
| O11 | "Submitting Feedback" footers, `submit-expo-feedback`, expo-skill-feedback eval flow | Send nothing; draft feedback for the owner to approve. |
| O12 | eas-simulator: start sessions "without asking again" | Only within the owner's simulator budget (reference §6); beyond it, ask. Always stop sessions. |
| O13 | eas.json `"cli": {"version": ">= 16.0.1"}` | Omit it, or use the current major. |
| O14 | Betas "use `.preview` suffix" | Early betas only; later ones are plain `X.0.y` on `next` (`pnpm view expo dist-tags`). |
| O15 | `@expo/vector-icons` → `expo-symbols` only | Also `@react-native-vector-icons/*` (Expo's recommended replacement). |
| O16 | verify-on-device: `xcrun simctl`, global `npm i -g agent-browser`/`argent` | Box browser for web, `expo-cloud-sim-verify` for iOS/Android. No global installs. |
| O17 | "project skills under `.claude/`" | No agent-specific folders in owner repos without their OK. |
| O18 | `launch.expo.dev` | It's now `launch.dev` (see `expo-launch-app`). |
| O19 | `NativeTabs` from `expo-router/unstable-native-tabs` | SDK 58+: `expo-router/native-tabs` (old path `@deprecated` in expo-router 58); keep it only on SDK ≤57. |
| O20 | `ThemeProvider` / `DarkTheme` / `DefaultTheme` from `expo-router/react-navigation` | SDK 58+: from the `expo-router` root; the forked React Navigation surface shrank in 58. |
| O21 | Web-port `KeyboardAvoidingView`; any `Touchable*`, `InteractionManager`, `Modal animated` or `StatusBar` props from memory | `react-native-keyboard-controller` (as expo-native-ui/expo-animation prescribe) and `Pressable`. RN 0.88 removes the `Touchable` root export, `InteractionManager`, `Modal animated` and several `StatusBar` props. |

For any non-default eas-cli flag, check `eas <cmd> --help` first (eas-cli changes weekly).
## 5. Project-local install (optional, owner OK required)
If the owner wants the skills in a repo, propose `pnpm dlx skills@latest add expo/skills --skill '<name>'` (or `'*'`) on a branch as a draft PR. Never run `skills update`, `agent_cli skills:sync` or `agents:setup` in an owner repo unless asked. Package-shipped skills (e.g. `expo-sqlite` on SDK 58): `agent_cli skills:list` / `skills:show`.
