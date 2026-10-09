# FireWatch

Alerts you to wildfires near home using live FireWatch data. Checks a few times a day and only pings when something new or meaningful changes within your radius.

| | |
| --- | --- |
| Original template | https://x.ai/bot/oWw62I6pd414i8xIO3azs |
| Creator | Robauto Team ([@RobautoAI](https://x.com/RobautoAI)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/firewatch), [grokbotwiki.com](https://www.grokbotwiki.com/bots/firewatch), [grokbothq.xyz](https://grokbothq.xyz/bots/firewatch), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/firewatch), [x-research](https://botsdots.site/templates/firewatch) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/firewatch ~/pi-bots/firewatch && cd ~/pi-bots/firewatch
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/firewatch`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/fire-watch-200mi`: cron `0 8,13,18 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
