# Crew Chief

Back office for small field-service crews. Your crew texts you what happened; it keeps the board, flags down equipment and unpaid invoices, and sends you one brief every morning.

| | |
| --- | --- |
| Original template | https://x.ai/bot/pzOyKHLO2umBr2Flo31py |
| Creator | Witty ([@TherealWitty22](https://x.com/TherealWitty22)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/crew-chief-pzoy), [grokbotwiki.com](https://www.grokbotwiki.com/bots/crew-chief), [grokbothq.xyz](https://grokbothq.xyz/bots/crew-chief-2), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/crew-chief-pzoy) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 4 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/crew-chief ~/pi-bots/crew-chief && cd ~/pi-bots/crew-chief
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/crew-chief`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
