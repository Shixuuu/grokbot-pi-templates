---
name: last30days
description: "use this when researching what people actually say about any topic in the last 30 days across Reddit, X, YouTube, TikTok, HN, Polymarket, GitHub, and the web"
---

# last30days

Install and run the skill from `~/.agents/skills/last30days` (GitHub: `mvanhorn/last30days-skill`).

## Install / update
```bash
npx skills add mvanhorn/last30days-skill -g
```
Re-run to pull the latest. Do not install as a Cursor plugin.

## Host
On Grok Bot always export `LAST30DAYS_HOST=grok-bot`. Never silently read browser cookies. For X: use the X connector if present, else offer bearer/xAI key or skip.

## Python
Requires Python 3.12+. Prefer `python3.13` if default is older.

## Config
Never overwrite `~/.config/last30days/.env`. Append missing keys only. `chmod 600`. Never print secrets.

## Run
Read and follow `~/.agents/skills/last30days/SKILL.md` end-to-end (first-run wizard, `--plan` on named entities, engine via `scripts/last30days.py`, synthesize per LAWs). Check GitHub every 30 days for a newer skill version.
