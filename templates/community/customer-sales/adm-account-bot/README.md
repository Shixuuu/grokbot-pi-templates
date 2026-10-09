# ADM account bot

Grow and retain accounts — weekly plan, expansion, stickiness, rollout, stories.

| | |
| --- | --- |
| Original template | https://x.ai/bot/4Gc1tZsJu7C8YH-EnTfaN |
| Creator | Scott Metcalf ([@scottxmetcalf](https://x.com/scottxmetcalf)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/adm-account-bot), [botsdots.site](https://botsdots.site/templates/adm-account-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/adm-account-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/adm-account-bot), [templatebot.lol](https://templatebot.lol/bot/4Gc1tZsJu7C8YH-EnTfaN), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/adm-account-bot), [x-research](https://x.com/scottxmetcalf/status/2093727476405170365) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 0 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/adm-account-bot ~/pi-bots/adm-account-bot && cd ~/pi-bots/adm-account-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/adm-account-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
