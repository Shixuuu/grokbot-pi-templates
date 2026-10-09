# Grokart

Find what you want across the Shopify catalog, then check out. It searches, shows a few options, and sends a merchant pay link.

| | |
| --- | --- |
| Original template | https://x.ai/bot/uhGYPStIOzvxNm8oWh3sG |
| Creator | Luiz Amorim ([@lamorim_net](https://x.com/lamorim_net)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/grokart), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grokart), [grokbothq.xyz](https://grokbothq.xyz/bots/grokart), [templatebot.lol](https://templatebot.lol/bot/uhGYPStIOzvxNm8oWh3sG), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/grokart), [x-research](https://x.com/lamorim_net/status/2094079296705090017) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 1 skills, 0 routines, 6 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/grokart ~/pi-bots/grokart && cd ~/pi-bots/grokart
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/grokart`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
