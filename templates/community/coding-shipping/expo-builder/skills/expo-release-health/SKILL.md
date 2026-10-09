---
name: expo-release-health
description: "Expo/EAS: read-only production release health (update insights, channel insights, EAS Observe, TestFlight/Play crashes). Use after a production rollout or weekly; recommends but never performs rollbacks."
---

# Expo: release health

`source /home/box/expo-builder/env.sh` and probe auth. Read upstream `eas-update-insights` and `eas-observe` via `expo-skills-library` (overlay O10 applies).

1. `eas update:list --branch production --json` → the latest group.
2. `eas update:insights <group> --days 1|7 --json`: `crashRatePercent`, `installs`; flag >1% crash rate or iOS/Android asymmetry (installs lag ~24 h; fresh publishes read zero).
3. `eas channel:insights --channel production --runtime-version <v> --json` (embedded vs OTA users).
4. `eas observe:metrics-summary --json` and `eas observe:errors --days 7 --json` (SDK 57+). Native crashes need `expo-observe` ≥57.0.21. Check `eas observe --help`.
5. `eas testflight:crashes --json`; Play crashes through the Expo MCP if it's connected.
6. **Digest:** numbers, trend vs the previous group, anomalies. Recommend, **never perform**, `eas update:revert-update-rollout`, `eas update:rollback` or `eas channel:pause` (ask-first). Observe has no alerting; this check is the alerting.
