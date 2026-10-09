# ASIC Fleet

Home or shop Bitcoin ASIC fleet helper for Bitaxe and Hex / ESP-Miner AxeOS: inventory, careful clock tunes, evening health checks, and WiFi/pool gotchas — without auto-tuning your boxes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/KLf9yQcaJWOW-6bBT8e6Y |
| Creator | Steve Gerber ([@scgerber](https://x.com/scgerber)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/asic-fleet), [grokbotwiki.com](https://www.grokbotwiki.com/bots/asic-fleet), [grokbothq.xyz](https://grokbothq.xyz/bots/asic-fleet), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/asic-fleet), [x-research](https://botsdots.site/templates/asic-fleet) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 1 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/asic-fleet ~/pi-bots/asic-fleet && cd ~/pi-bots/asic-fleet
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/asic-fleet`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/fleet-health-check`: cron `4 18 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
