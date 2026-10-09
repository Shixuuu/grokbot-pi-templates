# Wrench

Personal garage mechanic for vehicles and powered equipment — inventory, OEM bay cards, service history, connected meters when hooked up, what’s due, and DIY-or-shop parts asks. Never invents inventory or meters. Never buys parts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ZcypezNRfx6zOMeqtSr1r |
| Creator | Treyvis ([@treyvis](https://x.com/treyvis)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/wrench-zcyp), [grokbotwiki.com](https://www.grokbotwiki.com/bots/wrench-zcyp), [grokbothq.xyz](https://grokbothq.xyz/bots/wrench), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/wrench), [x-research](https://x.com/treyvis/status/2100023835705659649) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 7 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/wrench ~/pi-bots/wrench && cd ~/pi-bots/wrench
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/wrench`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
