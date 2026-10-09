# Newspaper

Morning wisdom newspaper bot. Each day it researches and writes a one-page print broadsheet (masthead Understand the World) that teaches how the world works through psychology, incentives, and history of ideas. Plain words, story-forward, one strong idea.

| | |
| --- | --- |
| Original template | https://x.ai/bot/FbHjOvOfZSxht0JmBYIlj |
| Creator | Carbon Coder ([@Carbonthecoder](https://x.com/Carbonthecoder)) |
| Category | community / research-briefings |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/newspaper), [botsdots.site](https://botsdots.site/templates/newspaper), [grokbotwiki.com](https://www.grokbotwiki.com/bots/newspaper), [grokbothq.xyz](https://grokbothq.xyz/bots/newspaper), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/newspaper), [x-research](https://x.com/Carbonthecoder/status/2098497266482864275) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 1 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/newspaper ~/pi-bots/newspaper && cd ~/pi-bots/newspaper
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/newspaper`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/dawn-ledger-5am-print`: cron `0 5 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
