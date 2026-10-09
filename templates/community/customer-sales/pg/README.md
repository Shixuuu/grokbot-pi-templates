# PG

Prospecting bot that researches accounts, watches recent podcasts and webinars for personal hooks, and can optionally sign into X or LinkedIn to find recent posts. Builds a contact spreadsheet and drafts outreach from CRM and meeting notes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/fcJJMM58AdXSTBdW3xWyW |
| Creator | Krista Letz ([@kristaletz](https://x.com/kristaletz)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/pg), [grokbotwiki.com](https://www.grokbotwiki.com/bots/pg-prospecting), [grokbothq.xyz](https://grokbothq.xyz/bots/pg), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/fcJJMM58AdXSTBdW3xWyW), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/pg-prospecting), [x-research](https://botdirectory.ai/bots/pg/) |
| Fidelity | **full** (full recipe, template version 10) |
| Contents | 0 skills, 0 routines, 10 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/pg ~/pi-bots/pg && cd ~/pi-bots/pg
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/pg`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
