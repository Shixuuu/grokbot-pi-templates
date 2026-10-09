# Betting Desk

A disciplined sports-betting analyst for MLB, NFL, NBA, and college football. Builds thin safest cards with hard bans, evidence-backed props, and daily digests.

| | |
| --- | --- |
| Original template | https://x.ai/bot/mtGRHIWa1c9SOeRGrTB8_ |
| Creator | STU🌾 ([@_SpecialTeamsU](https://x.com/_SpecialTeamsU)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/betting-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/betting-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/betting-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/betting-desk) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 2 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/betting-desk ~/pi-bots/betting-desk && cd ~/pi-bots/betting-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/betting-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-safest-bets-digest`: cron `53 8 * * *` (found in the template text)
- `/nfl-sunday-props-check`: cron `4 11 * * 3,4` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
