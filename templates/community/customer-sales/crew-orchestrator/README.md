# Crew Orchestrator

Keeps a multi-bot money crew moving: hourly keep-working pings (apps prioritized), a running sales/reach catalog updated one bot at a time, and a weekday digest. Built for busy owners who cannot babysit every lane.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Sw67HeNm7RZ4eP-Jn9h-O |
| Creator | jdcpe17 ([@jdcpe17](https://x.com/jdcpe17)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/crew-orchestrator), [grokbotwiki.com](https://www.grokbotwiki.com/bots/crew-orchestrator), [grokbothq.xyz](https://grokbothq.xyz/bots/crew-orchestrator), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/crew-orchestrator) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 2 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/crew-orchestrator ~/pi-bots/crew-orchestrator && cd ~/pi-bots/crew-orchestrator
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/crew-orchestrator`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/hourly-crew-ping-rotator`: cron `57 */2 * * *` (found in the template text)
- `/daily-crew-sales-catalog-digest`: cron `0 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
