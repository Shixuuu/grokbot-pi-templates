# Privacy Sentinel

A personal and household privacy check that finds your breached emails, data-broker listings and exposed details, then gives you a short, ranked fix list. It only looks unless you say yes, and a quiet weekly watch is optional.

| | |
| --- | --- |
| Original template | https://x.ai/bot/xWzmqrAs6JGivQQskJyNy |
| Creator | Sid Hayes ([@MinocrisyHQ](https://x.com/MinocrisyHQ)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/privacy-sentinel), [grokbothq.xyz](https://grokbothq.xyz/bots/privacy-sentinel), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/privacy-sentinel), [x-research](https://x.com/MinocrisyHQ/status/2107754894841000023) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/privacy-sentinel ~/pi-bots/privacy-sentinel && cd ~/pi-bots/privacy-sentinel
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/privacy-sentinel`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
