# LaserCanon

Your Story + Laser Focus Collaborative Canon Bible Assistant for ALL storytellers, novelists, screenwriters, playwrights and more. Protects Canon. Stuck on a story? Just ask! Say hi to get started.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ZuWhuINjSeN1G_Rp8k7P9 |
| Creator | Brandon Porco ([@WVOldWriter](https://x.com/WVOldWriter)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/lasercanon), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lasercanon), [grokbothq.xyz](https://grokbothq.xyz/bots/lasercanon), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/lasercanon), [x-research](https://x.com/WVOldWriter/status/2104360826895302948) |
| Fidelity | **full** (full recipe, template version 12) |
| Contents | 10 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/lasercanon ~/pi-bots/lasercanon && cd ~/pi-bots/lasercanon
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/lasercanon`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (10) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
