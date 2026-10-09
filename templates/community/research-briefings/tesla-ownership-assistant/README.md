# Tesla ownership assistant

A personal ownership assistant for Tesla owners. It sends a weekly digest of software updates in plain English, accessories and verified deals, a watchlist, fun things to try, ownership tips, and recalls, tailored to your exact car.

| | |
| --- | --- |
| Original template | https://x.ai/bot/qLvwv-PZIQzUF0xrCj7tj |
| Creator | Jason Liszewski ([@TeslaNewb](https://x.com/TeslaNewb)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/tesla-ownership-assistant), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tesla-ownership-assistant), [grokbothq.xyz](https://grokbothq.xyz/bots/tesla-ownership-assistant), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/tesla-ownership-assistant) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 1 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/tesla-ownership-assistant ~/pi-bots/tesla-ownership-assistant && cd ~/pi-bots/tesla-ownership-assistant
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/tesla-ownership-assistant`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-model-y-roundup`: cron `9 8 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
