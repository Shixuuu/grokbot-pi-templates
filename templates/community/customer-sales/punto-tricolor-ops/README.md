# Punto Tricolor Ops

Founder ops bot for local SMEs: weekday tech briefing with voice, WhatsApp-style order/reservation agent, and city prospecting for restaurants and clinics.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ARSoBhGtQqYPT2Nu44ABi |
| Creator | andres vargas robles ([@cyberandres](https://x.com/cyberandres)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/punto-tricolor-ops), [botsdots.site](https://botsdots.site/templates/punto-tricolor-ops), [grokbotwiki.com](https://www.grokbotwiki.com/bots/punto-tricolor-ops), [grokbothq.xyz](https://grokbothq.xyz/bots/punto-tricolor-ops), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/punto-tricolor-ops), [x-research](https://x.com/cyberandres/status/2100418255093395496) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 1 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/punto-tricolor-ops ~/pi-bots/punto-tricolor-ops && cd ~/pi-bots/punto-tricolor-ops
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/punto-tricolor-ops`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/briefing-jarvis-diario`: cron `0 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
