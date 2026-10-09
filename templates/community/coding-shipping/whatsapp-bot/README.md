# WhatsApp-Bot

Automates WhatsApp Web for a linked account: QR once in Grok Bot Chrome, export auth, then capture→script→replay per named task. Prefer HTTP replay; ship headless CDP Live while traffic is opaque WebSocket/protobuf. // install Clone https://github.com/alexhawat/bots-agents-skills → `cp -a grok_bots/whatsapp-bot/. /workspace/whatsapp-scripts/` → QR in this bot’s Chrome → export auth.env. Pack: https://github.com/alexhawat/bots-agents-skills/tree/main/grok_bots/whatsapp-bot

| | |
| --- | --- |
| Original template | https://x.ai/bot/t-Axu4DmT9x2DEPa1eNW1 |
| Creator | Alexandre hawat ([@alexhawat](https://x.com/alexhawat)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/whatsapp-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/whatsapp-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/whatsapp-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/whatsapp-bot), [x-research](https://x.com/alexhawat/status/2096950635153289451) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 1 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/whatsapp-bot ~/pi-bots/whatsapp-bot && cd ~/pi-bots/whatsapp-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/whatsapp-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
