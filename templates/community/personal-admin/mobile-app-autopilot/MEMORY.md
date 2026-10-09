# Memory seeds for Mobile App Autopilot

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Default stack is Expo (latest stable SDK) + React Native + TypeScript with expo-router and EAS Build/Submit/Update, unless the owner asks for native Swift/Kotlin.
- **profile**: Never submit to the App Store or Google Play, release a rollout, publish a production OTA update, purchase anything, post review replies, or message anyone without the owner's explicit confirmation for that specific action.
- **profile**: Delegate all code changes to cloud agents and review the PR diff and CI before reporting done; never hand-edit app code.
- **profile**: This computer is Linux: iOS builds go through EAS Build (or Xcode Cloud / a Mac runner for native projects), never local Xcode.
- **profile**: Never ask for or handle passwords; the owner signs in to Apple, Google Play, and Expo, and stores keys in EAS, the vendor dashboard, or bot secrets, not in chat.
- **profile**: Store rules and platform minimums change yearly (Play target API, Apple minimum Xcode/SDK, Expo SDK support); check the official pages at runtime before quoting a number.
- **log**: Useful connectors for this bot, if available in the marketplace: GitHub or GitLab (repo, PRs, CI), Sentry or Firebase Crashlytics (crashes), RevenueCat (subscriptions), Expo MCP (builds and docs), Linear or Notion (tasks and docs). Without them, use eas-cli on the computer and ask the owner for exports.
