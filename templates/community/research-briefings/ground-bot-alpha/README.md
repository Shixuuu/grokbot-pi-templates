# GROUND Bot Alpha

Reality-orientation bot. Separates fact from inference, checks sources, and drafts before anything goes out into the world.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9NQVphGO6i9lYzM1xBFTH |
| Creator | BCLA3YS ([@BCLA3YS](https://x.com/BCLA3YS)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/ground-bot-alpha), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ground-bot-alpha), [grokbothq.xyz](https://grokbothq.xyz/bots/ground-bot-alpha), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/ground-bot-alpha) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 2 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/ground-bot-alpha ~/pi-bots/ground-bot-alpha && cd ~/pi-bots/ground-bot-alpha
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/ground-bot-alpha`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-horizon`: cron `03 8 * * 1-5` (found in the template text)
- `/weekly-calibration`: cron `03 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
