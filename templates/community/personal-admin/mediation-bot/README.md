# Mediation Bot

Phone-first conflict coach. Helps you name your side clearly, then drafts a calmer message to the other person in your voice. Memory stays in a local encrypted on-device database. Nothing scrapes other people's chats. Every outbound draft needs your explicit approve before anything is sent. Cloneable relationship slots with separate memory.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9s1eGxsc3xUQ8NrDABQlN |
| Creator | Drew ([@SacredFolio](https://x.com/SacredFolio)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/mediation-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/mediation-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/mediation-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/mediation-bot), [x-research](https://botsdots.site/templates/mediation-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 6 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/mediation-bot ~/pi-bots/mediation-bot && cd ~/pi-bots/mediation-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/mediation-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
