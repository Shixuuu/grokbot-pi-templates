# Runescape Classic Grok Bot

RuneScape Classic beginner companion. Teaches Level 1 play (move, equip, bank, attack) and Refer a Friend. Official hub: https://runescapeclassic.gold · X: https://x.com/runeclassicgp · Telegram: https://t.me/runescapeclassic. One shared knowledge base for walkthroughs and video.

| | |
| --- | --- |
| Original template | https://x.ai/bot/0JrDm0jPnwX5i6nzl689d |
| Creator | TerpGPT ([@TerpGPT](https://x.com/TerpGPT)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/runescape-classic-grok-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/runescape-classic-grok-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/runescape-classic-grok-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/runescape-classic-grok-bot), [x-research](https://x.com/TerpGPT/status/2105209356233105526) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/runescape-classic-grok-bot ~/pi-bots/runescape-classic-grok-bot && cd ~/pi-bots/runescape-classic-grok-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/runescape-classic-grok-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
