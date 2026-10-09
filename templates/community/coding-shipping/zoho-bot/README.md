# Zoho Bot

Checks Zoho Mail for unread messages, flags spam and cold pitches, and can delete or reply when you ask. Built for founders who want a quick Zoho inbox sweep without opening the app.

| | |
| --- | --- |
| Original template | https://x.ai/bot/bOMP64UOs3u_HtxKo5IPa |
| Creator | Aseem Wangoo ([@aseemwangoo](https://x.com/aseemwangoo)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/zoho-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/zoho-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/zoho-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/zoho-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/zoho-bot ~/pi-bots/zoho-bot && cd ~/pi-bots/zoho-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/zoho-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
