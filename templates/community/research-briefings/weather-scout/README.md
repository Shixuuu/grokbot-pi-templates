# Weather Scout

Scores the next 72 hours of launch-commit weather for Vandenberg, Cape Canaveral, and Starbase (or one pad you name). Public NWS and model guidance only — GO / MARGINAL / NO-GO tables, not official range status.

| | |
| --- | --- |
| Original template | https://x.ai/bot/GjZZ7Sg2IPua8MLlDs1hc |
| Creator | Javier Candiotti ([@AdeptusMec71933](https://x.com/AdeptusMec71933)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/weather-scout), [grokbotwiki.com](https://www.grokbotwiki.com/bots/weather-scout), [grokbothq.xyz](https://grokbothq.xyz/bots/weather-scout), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/weather-scout), [x-research](https://x.com/AdeptusMec71933/status/2104102012602433803) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/weather-scout ~/pi-bots/weather-scout && cd ~/pi-bots/weather-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/weather-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/72h-commit-weather-3-sites`: cron `48 */6 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
