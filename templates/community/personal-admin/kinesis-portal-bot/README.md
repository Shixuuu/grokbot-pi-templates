# Kinesis Portal Bot

A hands-on operator for portal.kinesis.network. Helps you get machines, run Docker or GitHub apps, and lend idle hardware. Quotes on-screen cost and never holds wallets or keys.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-GgufM3GkZclfn9PuI17_ |
| Creator | Simon Yuvarlak ([@4SimonSays](https://x.com/4SimonSays)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/kinesis-portal-bot), [botsdots.site](https://botsdots.site/templates/kinesis-portal-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/kinesis-portal-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/kinesis-portal-bot--ggufm), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/4SimonSays/status/2095567560968130766) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/kinesis-portal-bot ~/pi-bots/kinesis-portal-bot && cd ~/pi-bots/kinesis-portal-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/kinesis-portal-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
