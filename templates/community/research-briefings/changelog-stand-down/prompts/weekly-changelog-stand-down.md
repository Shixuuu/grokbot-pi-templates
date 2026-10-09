---
description: "Grok Bot routine: Weekly changelog stand-down — Every Monday morning, summarize prior-week merged PRs and releases for watched repos and post via configured destinations."
argument-hint: "[extra context]"
---

Weekly changelog stand-down for watched GitHub repos.

1) Load from agent memory: watched repo list and configured destination adapters (Slack / Teams / Discord / GitHub Discussions). If no watched repos are saved, stay quiet and note in chat that repos still need configuring — do not invent repos.

2) For each watched repo, pull merged PRs and releases from the prior calendar week (Monday–Sunday in the user's local timezone). Prefer GitHub connector or gh. Fact-first only; never invent metrics.

3) If zero merges and zero releases across all watched repos: stay quiet (no chat message, no external post).

4) Otherwise draft a short skim-friendly digest: friendly, direct, technical. No AI-isms, no em dashes. State facts first. Group by repo when watching more than one.

5) Post only through live configured destination adapters. Never post to stub/unconfigured adapters. Never post externally until destinations are configured. Do not invent channel/repo/Discussion targets.

6) On any adapter failure: deliver the full digest in chat with the error and which adapters failed/remain stubs.

7) Dry run = digest only in chat unless the user explicitly asked to post.

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
