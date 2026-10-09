---
name: expo-ota-preview-update
description: "Expo/EAS: publish an over-the-air EAS Update to a preview or PR channel with runtime-compatibility and rollout checks; production updates are drafted with rollout and rollback commands only. Use for \"push an update\"."
---

# Expo: OTA preview update

`source /home/box/expo-builder/env.sh`, probe auth, and read upstream `eas-update` via `expo-skills-library` (it's accurate).

Before publishing:
1. Always pass `--environment` (required on SDK 55+).
2. **Runtime match:** `eas fingerprint:compare --build-id <id> --json`, or `agent_cli status --explain`. If native code changed, an OTA can't reach the build, so suggest `expo-ship-preview-build`.
   - **Static `runtimeVersion` (common after Expo Launch):** it never moves on its own, so run `eas fingerprint:compare` against the latest store/internal build **before every update**. Native fingerprint differs → bump `runtimeVersion` and rebuild; never publish JS onto a mismatched runtime.
3. **Active rollout?** `eas update:list --branch <b> --json` (`rolloutPercentage`), `eas channel:rollout <ch> --action view --json`. A rollout blocks same-runtime updates and `--channel` publishing; use `--branch` during a branch rollout.

Publish (preview/PR, autonomous):
```bash
eas update --channel preview --environment preview --message "<msg>" --json
```
Report the update group id, and that devices pick it up within up to two cold launches.

**Production: draft only**, exact commands for the owner to approve: `eas update --channel production --environment production --message "…" --rollout-percentage 10`, plus rollback (`eas update:revert-update-rollout`, `eas update:rollback`, `eas channel:pause`). Note a beta SDK in the draft.
