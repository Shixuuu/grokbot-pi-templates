---
name: expo-eas-pr-pipeline
description: "Expo/EAS: set up an EAS Workflows PR preview pipeline (fingerprint → reuse or repack a build → PR-branch EAS Update → GitHub comment), validated with eas workflow:validate. Use for \"set up CI\" or onboarding an Expo repo."
---

# Expo: EAS PR preview pipeline

`source /home/box/expo-builder/env.sh`. Read upstream `eas-workflows` via `expo-skills-library` and fetch the workflow schema first. Do **not** reuse the eas-app-stores workflow examples (overlay O7).

1. **CNG required:** `agent_cli status --json` → `project.native == "cng"`. The `fingerprint` job doesn't work with committed native dirs; without CNG, fall back to build plus update.
2. **Workflow** `.eas/workflows/pr-preview.yml`:
   - **Trigger:** `pull_request`. Optionally `pull_request_labeled: [bot:verify]`, or `pull_request_comment` with `if: startsWith(github.event.comment.body, '/preview')`.
   - **Jobs, in order:** `fingerprint` (same `environment` as the build); `get-build` (`fingerprint_hash: ${{ needs.fingerprint.outputs.ios_fingerprint_hash }}`, `wait_for_in_progress: true`); `repack` if found (never for production), else `build`; `update` with explicit `environment` and branch `pr-${{ github.event.pull_request.number }}`; `github-comment`; optionally `branch-delete` on close.
   - **Credit saver:** skip the build when there's no fingerprint match.
3. **Validate** until it prints "Workflow configuration YAML is valid." (≤16 KiB): `eas workflow:validate .eas/workflows/pr-preview.yml --non-interactive`
4. **Needs the EAS GitHub app** (owner installs it on expo.dev; `expo-request-sign-in`). Runs cost workflow minutes (Free: 60/month); allow-listed repos only, skip docs-only PRs.
5. Deliver as a draft PR with the expected cost per PR.
