# Property Scanner

Find potentially underpriced US homes with ZillAPI. Onboard a buyer, rank listings against nearby sold comps, and deliver numbered photo shortlists — with quiet weekday follow-ups.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-4Hs8iXe_p6Cfc1IRbilu |
| Creator | Rohit |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/property-scanner), [grokbothq.xyz](https://grokbothq.xyz/bots/property-scanner), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/property-scanner) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/property-scanner ~/pi-bots/property-scanner && cd ~/pi-bots/property-scanner
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/property-scanner`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/property-scanner-weekday-scan`: cron `0 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
