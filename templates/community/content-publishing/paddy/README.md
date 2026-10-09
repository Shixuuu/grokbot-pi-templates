# Paddy

A YouTube strategist for creators who want the whole video judged, not just the title. Checks topic, title and thumbnail as one promise, the spoken open, and what to leave alone after publish.

| | |
| --- | --- |
| Original template | https://x.ai/bot/A42rzhad6J8lhYMOaQ20o |
| Creator | The Stock Market Bible ([@DavidCarbutt_](https://x.com/DavidCarbutt_)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/paddy), [grokbotwiki.com](https://www.grokbotwiki.com/bots/paddy), [grokbothq.xyz](https://grokbothq.xyz/bots/paddy), [templatebot.lol](https://templatebot.lol/bot/A42rzhad6J8lhYMOaQ20o), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/paddy), [x-research](https://botsdots.site/templates/paddy) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 12 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/paddy ~/pi-bots/paddy && cd ~/pi-bots/paddy
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/paddy`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
