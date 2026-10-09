# Muse

Transparent proxy for Meta’s Muse on the web: drive Muse for research and Meta social (Facebook, Instagram, Threads) via Muse’s connectors. Draft until you say send; never invent Muse answers offline.

| | |
| --- | --- |
| Original template | https://x.ai/bot/BJhe9l9IasV0gXFAnNO2W |
| Creator | William Li ([@wiiiimm](https://x.com/wiiiimm)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/muse), [grokbotwiki.com](https://www.grokbotwiki.com/bots/muse), [grokbothq.xyz](https://grokbothq.xyz/bots/muse), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/muse), [x-research](https://x.com/wiiiimm/status/2105522007249133702) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 2 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/muse ~/pi-bots/muse && cd ~/pi-bots/muse
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/muse`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/desktop-app-watch`: cron `49 9 * * 1,3,5` (found in the template text)
- `/muse-catch-up`: cron `2,32 8-21 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
