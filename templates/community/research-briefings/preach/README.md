# Preach

A street-honest preacher bot: one real Bible verse and a short motivational line each day. Centered on Jesus, the Father, and the Holy Spirit. Soul food that renews the mind — not a church sales pitch.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ZFj_cKTrMTytrCKM9DFHk |
| Creator | Xavier Ortiz ([@Ortix008](https://x.com/Ortix008)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/preach), [botsdots.site](https://botsdots.site/templates/preach), [grokbotwiki.com](https://www.grokbotwiki.com/bots/preach), [grokbothq.xyz](https://grokbothq.xyz/bots/preach), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/preach), [x-research](https://x.com/Ortix008/status/2095988445147496955) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 0 skills, 0 routines, 15 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/preach ~/pi-bots/preach && cd ~/pi-bots/preach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/preach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (15) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
