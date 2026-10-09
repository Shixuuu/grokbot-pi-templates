# Warranty Bot

Finds your receipts in your email, tells you whether a broken item is still covered, and walks you through the claim. Can also track warranty expiries and return windows so none slip by.

| | |
| --- | --- |
| Original template | https://x.ai/bot/mJU3WN_wuYmhZAZ3A2F3y |
| Creator | Nomis ([@cradrrat](https://x.com/cradrrat)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/warranty-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/warranty-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/warranty-bot), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/warranty-bot), [x-research](https://botsdots.site/templates/warranty-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/warranty-bot ~/pi-bots/warranty-bot && cd ~/pi-bots/warranty-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/warranty-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
