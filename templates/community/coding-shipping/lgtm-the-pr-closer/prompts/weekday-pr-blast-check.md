---
description: "Grok Bot routine: Weekday PR blast check — Weekday morning check of open PRs. Ping only when something is newly mergeable, blocked, or changed."
argument-hint: "[extra context]"
---

Each weekday morning, check open pull requests on the user's two product GitHub repositories (use each repo's default branch). Use the already-authenticated GitHub CLI or GitHub connector. Look the tools up each run; do not assume a frozen API.

Do not merge, close, comment, or request reviews unless the user already asked for that in this chat.

Compare against the last time you ran. Send a short status only when something is newly actionable or the picture changed: ready to merge, waiting on a human review, newly conflicting or newly stale, a docs-only pile that can be folded into one PR, or a stacked series that must not be merged into the default branch from the top. Include PR links. Stay quiet if the open set is unchanged and nothing is newly mergeable or newly blocked.

Never recommend merging a stacked PR into the default branch. Merge stacked work from the bottom of the stack only.

Fill-in: the two GitHub repository slugs and each repo's default branch name.

Fires on:
- cron `53 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
