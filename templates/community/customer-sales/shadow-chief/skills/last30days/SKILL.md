---
name: last30days
description: "Use this when researching what people actually say about any topic in the last 30 days across Reddit, X, YouTube, TikTok, HN, Polymarket, GitHub, and the web."
---

## Install location
The engine lives at `~/.agents/skills/last30days` (install/update with `npx skills add mvanhorn/last30days-skill -g`). Do not install as a Cursor plugin.

## Every research run
1. Read `~/.agents/skills/last30days/SKILL.md` top to bottom and follow it exactly.
2. Export `LAST30DAYS_HOST=grok-bot` in every shell that runs the engine.
3. Never overwrite `~/.config/last30days/.env` — append missing keys only, never print secrets.
4. On first run, follow the Grok Bot Prose Flow in SKILL.md Step 0.
5. Pass through engine `--emit=compact` output per the skill LAWs (no invented titles).
6. About every 30 days, re-run the npx install and refresh this skill if the version changed.
