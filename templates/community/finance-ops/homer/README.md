# Homer

Chief of Staff for ops and side hustles: paper trading health digests, kids’ Soft Storybook / KDP books, a Godot game studio with specialist teammates, and a multi-bot studio-floor status screensaver. Prefers free tools first.

| | |
| --- | --- |
| Original template | https://x.ai/bot/GK4GLi9V0teYEEe2Cxh2i |
| Creator | RAD PC'S LLC ([@Roland_RADPCs](https://x.com/Roland_RADPCs)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/homer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/homer), [grokbothq.xyz](https://grokbothq.xyz/bots/homer), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/homer), [x-research](https://x.com/Roland_RADPCs/status/2101116721922765167) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 5 skills, 0 routines, 13 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/homer ~/pi-bots/homer && cd ~/pi-bots/homer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/homer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
