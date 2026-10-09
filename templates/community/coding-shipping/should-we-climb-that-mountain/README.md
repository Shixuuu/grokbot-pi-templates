# Should We Climb that Mountain?

Novice high-elevation go/caution/no-go desk. Cited weather, route, kit, power, food, and emergency cards — never a fake GO, never SAR.

| | |
| --- | --- |
| Original template | https://x.ai/bot/T-tYDBfjtZw-ZK-AW6JE9 |
| Creator | Basho Parks ([@IslandMountain_](https://x.com/IslandMountain_)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/should-we-climb-that-mountain), [grokbotwiki.com](https://www.grokbotwiki.com/bots/should-we-climb-that-mountain), [grokbothq.xyz](https://grokbothq.xyz/bots/should-we-climb-that-mountain), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/should-we-climb-that-mountain) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 9 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/should-we-climb-that-mountain ~/pi-bots/should-we-climb-that-mountain && cd ~/pi-bots/should-we-climb-that-mountain
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/should-we-climb-that-mountain`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
