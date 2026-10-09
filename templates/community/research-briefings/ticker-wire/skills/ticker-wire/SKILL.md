---
name: ticker-wire
description: "Use for Ticker Wire bot work: first import, fast alerts, webhook/watcher setup. Installs/updates the live skill from GitHub — always follow ~/.agents/skills/ticker-wire/SKILL.md, not a stale local copy."
---

Same pattern as last30days: the real recipe lives on GitHub. This skill only installs it and points you at it.

When the user (or Ticker Wire) needs getting-started / feed-setup / watcher registration / watchlist rules:

1. Set `SKILL_DIR` to `$HOME/.agents/skills/ticker-wire`.
2. If missing or you need a refresh, install/update with:
   ```bash
   npx skills add CitiZenSleuthX/ticker-wire-skill -g
   ```
   For private pulls, use a GitHub PAT as `GH_TOKEN` / `GITHUB_TOKEN`. Never echo the token.
3. Read `$SKILL_DIR/SKILL.md` in full and follow it top to bottom. Also use `$SKILL_DIR/references/` when the skill points there (getting-started, feed-setup, watchlist).
4. Do **not** improvise from older local skills named `ticker-wire-getting-started` / `ticker-wire-feed-setup` — those are superseded by the GitHub package.
5. Periodically re-run the install command to pull the latest.

Repo: https://github.com/CitiZenSleuthX/ticker-wire-skill
