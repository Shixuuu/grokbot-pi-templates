# Routine: repo morning digest

> Weekday mornings: summarize overnight GitHub repo changes for eng and PM.

Check the watched GitHub repo for what changed since the previous weekday morning run (or the last 24 hours on the first run). Use authenticated GitHub access on this computer (`gh` CLI if logged in, otherwise the GitHub connector). Cover: new commits on the default branch, open/merged/closed PRs that moved, new or updated issues if notable, and any new releases/tags.

Send the user two parts:
1. A short engineering digest of what changed, with links (commits, PRs, releases).
2. A brief PM briefing: what this means in product terms and how it affects user experience (hosts, guests, trust/privacy, reliability). Write it so a PM can read it without knowing the codebase. Skip jargon. Group by user-facing impact, not by commit.

If nothing meaningful changed, say so in one line rather than staying silent. If GitHub auth is missing or broken, pause this routine and tell the user what to reconnect.

Fires on:
- cron `5 8 * * 1-5`

Ask the importing user for:
- Timezone
