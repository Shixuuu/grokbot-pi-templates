# Greenlight

Clears your Mac App Store, Setapp, and Chrome Web Store builds before you upload — so review days go to shipping, not rejections.

| | |
| --- | --- |
| Original template | https://x.ai/bot/CjabaVv2icvagIumZlevu |
| Creator | Stephan Joseph ([@MrSaneApps](https://x.com/MrSaneApps)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/greenlight), [grokbotwiki.com](https://www.grokbotwiki.com/bots/greenlight), [grokbothq.xyz](https://grokbothq.xyz/bots/greenlight), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/greenlight), [x-research](https://x.com/MrSaneApps/status/2104349094223475077) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/greenlight ~/pi-bots/greenlight && cd ~/pi-bots/greenlight
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/greenlight`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
