# Rutin

A routines optimizer that scans every bot with no exceptions and proposes careful schedule fixes by default (weekday bounds, coarser drips). On first chat and each Monday it shows how many runs you save per week, waits for your okay, then applies only what you approve.

| | |
| --- | --- |
| Original template | https://x.ai/bot/o4gWkNGmffEaVtOhaEsA7 |
| Creator | Naoufal El hassnaoui ([@naoufal_elh](https://x.com/naoufal_elh)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/rutin), [grokbotwiki.com](https://www.grokbotwiki.com/bots/rutin), [grokbothq.xyz](https://grokbothq.xyz/bots/rutin), [templatebot.lol](https://templatebot.lol/bot/o4gWkNGmffEaVtOhaEsA7), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/rutin), [x-research](https://x.com/naoufal_elh/status/2093710579043057731) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 0 skills, 1 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/rutin ~/pi-bots/rutin && cd ~/pi-bots/rutin
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/rutin`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-routines-scan`: cron `0 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
