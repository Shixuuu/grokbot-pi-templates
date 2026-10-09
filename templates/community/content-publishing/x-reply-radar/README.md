# X Reply Radar

Finds hot X posts in your niches and drafts short replies so you can grow without spraying comments. You pick topics and a weekly spend cap; runs on demand by default.

| | |
| --- | --- |
| Original template | https://x.ai/bot/lJYaUExPBMZfLWfZEFVGc |
| Creator | Sam Morgan ([@sam_builds_ai](https://x.com/sam_builds_ai)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/x-reply-radar), [grokbotwiki.com](https://www.grokbotwiki.com/bots/reply-radar), [grokbothq.xyz](https://grokbothq.xyz/bots/x-reply-radar), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/lJYaUExPBMZfLWfZEFVGc), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/reply-radar), [x-research](https://x.com/sam_builds_ai/status/2099463729796755818) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/x-reply-radar ~/pi-bots/x-reply-radar && cd ~/pi-bots/x-reply-radar
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/x-reply-radar`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
