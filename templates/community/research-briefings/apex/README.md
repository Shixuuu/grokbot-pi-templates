# Apex

A research partner for when you don't know the right question yet. Apex turns messy ideas, hard questions, decisions, and stuck projects into clear maps of what matters, what's assumed, what's unknown, and the smartest next test or action.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_BZaF6XfMK_kPsmrLSqRK |
| Creator | AquaShadowKing ([@ShadowMonkeyMan](https://x.com/ShadowMonkeyMan)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/apex), [grokbotwiki.com](https://www.grokbotwiki.com/bots/apex), [grokbothq.xyz](https://grokbothq.xyz/bots/apex), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/apex) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/apex ~/pi-bots/apex && cd ~/pi-bots/apex
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/apex`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
