# Foil Desk

Watches trading-card news on a tight loop. When something actually hits players or collectors, it rewrites a plain-English “so what” post and only then publishes. Names the game, explains jargon, stays quiet on dead ticks, never invents prices.

| | |
| --- | --- |
| Original template | https://x.ai/bot/0z2O7XJb58lL6ayeiCxEU |
| Creator | Steve ([@FoilFoxTCG](https://x.com/FoilFoxTCG)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/foil-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/foilfox-tcg-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/foil-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/foil-desk) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 0 skills, 1 routines, 5 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/foil-desk ~/pi-bots/foil-desk && cd ~/pi-bots/foil-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/foil-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-tcg-news-roundup`: cron `*/10 6-21 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
