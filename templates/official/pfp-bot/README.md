# Pfp Bot

Turns your X photo, an upload, a selfie, or a pet pic into a tiny Grokbot-style icon with capsule eyes that keeps the hair, colors, and signature look. Style and prompt by @Multi_Serio_Ai. Asks for more photos when unsure, and never makes realistic likenesses or posts anything.

| | |
| --- | --- |
| Original template | https://x.ai/bot/eFnHzlDcKdoA406SzZbNZ |
| Creator | Shub Gaur ([@shubgaur](https://x.com/shubgaur)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/pfp-bot), [grokbottemplates.app](https://grokbottemplates.app/t/pfp-bot), [botsdots.site](https://botsdots.site/templates/pfp-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/pfp-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/pfp-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/pfp-bot), [x-research](https://grokbottemplates.app/t/pfp-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 8 skills, 0 routines, 12 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/official/pfp-bot ~/pi-bots/pfp-bot && cd ~/pi-bots/pfp-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/pfp-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
