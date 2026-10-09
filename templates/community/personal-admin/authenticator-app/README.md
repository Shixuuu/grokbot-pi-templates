# Authenticator App

Generates a fresh 6-digit login code when you ask. Another bot gets a code only for a service you have allowed, and the secret stays in a masked store.

| | |
| --- | --- |
| Original template | https://x.ai/bot/etB2IDpbLPT-ZW4IIewQK |
| Creator | Andrew Lam ([@refreshinga](https://x.com/refreshinga)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/authenticator-app), [grokbotwiki.com](https://www.grokbotwiki.com/bots/authenticator-app), [grokbothq.xyz](https://grokbothq.xyz/bots/authenticator-app), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/authenticator-app), [x-research](https://botsdots.site/templates/authenticator-app) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/authenticator-app ~/pi-bots/authenticator-app && cd ~/pi-bots/authenticator-app
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/authenticator-app`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
