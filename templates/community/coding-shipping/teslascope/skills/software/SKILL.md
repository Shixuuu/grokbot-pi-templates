---
name: software
description: "Use this when the user asks about a Tesla software update by version number (for example \"/software 2026.32.7\") or asks about the latest update, using Teslascope's software data."
---

# Software update lookup

Return information about one Tesla software update from the Teslascope connector. The input is a version number such as `2026.32.7`, or "latest". If no version was given, use "latest".

1. Clean up the input: trim spaces and a leading "v". If it looks like an FSD version (such as `14.1`) rather than a full software version, use the Full Self-Driving version lookup instead.
2. Look up the version with Teslascope's read tools:
   - The software version details.
   - Its release notes.
   - Its update history (how widely and how fast it is rolling out).
   If the version isn't found, list recent versions and suggest the closest matches.
3. Summarize:
   - Version number and release date.
   - Rollout: how many vehicles have it and how quickly it's spreading, if reported.
   - What's new: the headline features and fixes from the release notes, in plain language. Keep the note titles, and shorten long descriptions.
   - Any FSD version bundled with it, if reported.
4. If the user's own vehicles are available, mention which version each is on and whether this update is newer.
5. Use only what the tools returned; don't guess at features or rollout numbers.
