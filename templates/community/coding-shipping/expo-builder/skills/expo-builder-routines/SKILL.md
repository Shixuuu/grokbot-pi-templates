---
name: expo-builder-routines
description: "Expo Builder routine prompts and cron schedules (EAS failure watch, simulator janitor, weekly SDK/tooling check, release health, store review watch, Launch follow-up, credit watch). Use when creating or adjusting routines."
---

# Expo Builder routines

**Create routines only after** the owner has a tracked Expo project (in memory) **and** has signed in to Expo once. Owner's local time zone. Start with the **MVP** pair; add the rest when relevant. Routines report to the bot chat (Slack only if opted in), poll (no public webhook receiver), and never prompt for sign-in: if `eas whoami` fails, post one "Expo sign-in expired" note and skip.

| Routine | Cron (owner local) | MVP | Prompt |
|---|---|---|---|
| EAS failure watch | `0 8-20 * * *` | ✅ | "Source /home/box/expo-builder/env.sh. Probe `eas whoami`; if signed out, note once and stop. Per tracked project: `eas workflow:runs --status FAILURE --limit 10 --json`, `eas build:list --status errored --limit 10 --json`. Keep failures newer than the last run (in memory), run @expo-triage-eas-failure read-only on each, post one digest; silent when nothing is new." |
| Simulator janitor | `*/30 * * * *` | ✅ | "Source env.sh. If signed in, run `eas simulator:list --tag grok-bot --status in-progress --json`. Stop (`eas simulator:stop --id <id>`) orphaned or overdue sessions; report only if something was stopped." |
| Weekly SDK and tooling check | `0 9 * * 1` | | "Source env.sh. (1) `pnpm view expo dist-tags` vs each project's expo: report SDK 58 status while on `next`; when `latest` ≥ 58 propose the @expo-sdk-upgrade stable step (drop the react-native override) and upgrades for older projects; flag expo ≤57.0.8. (2) `pnpm expo install --check --json` per project; patches → upgrade branch and draft PR per the PR policy. (3) Re-read docs.expo.dev/build-reference/infrastructure.md for new images/pnpm; propose eas.json/packageManager bumps. (4) @expo-skills-library fetch with EXPO_SKILLS_FORCE=1 plus overlay check; report a changed commit or no-op overlays. Compare `pnpm view` of eas-cli, `@expo/agent-cli`, `create-launch` with env.sh pins; read launch.dev/llms.txt, expo.dev/changelog. Propose pin bumps, never apply silently." |
| Release health | `30 9 * * 1`, plus `30 9 * * *` for 7 days after a production update | | "Run @expo-release-health per project with production updates; post the digest. Recommend, never perform, rollbacks." |
| Store review watch | `0 */2 * * *` while an iOS submission is in flight | | "Source env.sh. `eas submit:status -p ios --json --non-interactive`: report state changes (processing, in review, rejected); delete this routine once approved or rejected." |
| Launch follow-up | `*/30 * * * *` for 8 h after the launch link, then `0 */2 * * *` until 24 h (then delete) | | "Source env.sh and probe auth. `eas build:list --limit 5 --json` for the launched project: report new builds, @expo-triage-eas-failure on errors; when a submission appears, create the store review watch. Stop when build and submit finish, or after 24 h with one note: 'No build seen. Did you finish the launch page?'" |
| Credit and usage watch | `0 18 * * *` | | "Source env.sh. `eas account:usage --json` → `builds.plan.percentUsed`, `builds.overage.costCents`, `updates.uniqueUpdaters`. Warn at 50%/80% of the owner's budget (memory; defaults @expo-builder-reference §6). Workflow minutes and simulator time aren't in it: count the bot's own sessions/runs, label the rest dashboard-only." |

PR previews run on EAS Workflows (`expo-eas-pr-pipeline`). Optional: an hourly routine polling GitHub for `bot:verify` PRs to run `expo-cloud-sim-verify` (comments follow the posting policy).
