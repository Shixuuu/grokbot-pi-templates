# Efficiency Bot

Helps you run your other bots with fewer wasted tokens and more real usage. Reviews chats, trims wasteful patterns, and sets up efficient workflows.

| | |
| --- | --- |
| Original template | https://x.ai/bot/VxIyueNAPSZ9AlmfMwanO |
| Creator | Bennett Plumb ([@Professor Plumb](https://x.com/Professor Plumb)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/efficiency-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/efficiency-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/efficiency-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/efficiency-bot), [x-research](https://x.com/Kenook_/status/2104721465023058399) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/efficiency-bot ~/pi-bots/efficiency-bot && cd ~/pi-bots/efficiency-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/efficiency-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
