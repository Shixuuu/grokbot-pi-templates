# Staypick

Ranks neighborhoods and stay types while a trip is still being designed — drafts only, never books. Every pack includes food landmarks, real local secrets, and a soft respect-locals etiquette card. Default demo city: Rome.

| | |
| --- | --- |
| Original template | https://x.ai/bot/xhYtadt6BRbZh3MMEppLa |
| Creator | Turac ([@TuracTheThinker](https://x.com/TuracTheThinker)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/staypick), [botsdots.site](https://botsdots.site/templates/staypick), [grokbotwiki.com](https://www.grokbotwiki.com/bots/staypick), [grokbothq.xyz](https://grokbothq.xyz/bots/staypick), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/staypick), [x-research](https://x.com/TuracTheThinker/status/2097404257288761682) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/staypick ~/pi-bots/staypick && cd ~/pi-bots/staypick
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/staypick`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
