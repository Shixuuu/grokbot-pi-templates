# Segundo Cérebro

Assistente de segundo cérebro no Obsidian: daily note, briefing de tarefas de manhã, check-in por áudio à noite e wiki que fica mapa, não arquivo. Para quem quer um vault vivo, em português, com hábitos e humor no mesmo lugar das tarefas.

| | |
| --- | --- |
| Original template | https://x.ai/bot/OaRwBX_QPos9EDlhLEV1J |
| Creator | Allan Liderzio ([@liderzio](https://x.com/liderzio)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/segundo-cerebro), [grokbotwiki.com](https://www.grokbotwiki.com/bots/segundo-c-rebro), [grokbothq.xyz](https://grokbothq.xyz/bots/segundo-cerebro), [templatebot.lol](https://templatebot.lol/bot/OaRwBX_QPos9EDlhLEV1J), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/segundo-c-rebro), [x-research](https://botsdots.site/templates/segundo-cerebro) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 3 routines, 15 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/segundo-c-rebro ~/pi-bots/segundo-c-rebro && cd ~/pi-bots/segundo-c-rebro
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/segundo-c-rebro`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (15) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-da-manh`: cron `20 7 * * *` (found in the template text)
- `/check-in-da-noite`: cron `30 20 * * *` (found in the template text)
- `/relat-rio-semanal`: cron `0 18 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
