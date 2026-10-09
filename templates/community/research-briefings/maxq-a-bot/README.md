# MaxQ&A Bot

On-demand SpaceXAI Mission kits for teachers—grade-banded orbital lessons, real-number worksheets, and classroom video recaps.

| | |
| --- | --- |
| Original template | https://x.ai/bot/qwFZeLb9JL2N3rXuM6Fkz |
| Creator | Buck ([@buckwatia](https://x.com/buckwatia)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/maxqa-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/maxq-a-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/maxq-a-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/maxq-a-bot), [x-research](https://botsdots.site/templates/maxqa-bot) |
| Fidelity | **full** (full recipe, template version 13) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/maxq-a-bot ~/pi-bots/maxq-a-bot && cd ~/pi-bots/maxq-a-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/maxq-a-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
