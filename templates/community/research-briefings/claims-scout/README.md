# Claims Scout

Hunts consumer class-action and settlement claims, proves eligibility, and only pings you when a hit clears your dollar floor. Never files without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/JpIOTrUfYhpkDjL8Xl_zl |
| Creator | Matthew Marshall ([@CPUGenuis](https://x.com/CPUGenuis)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/claims-scout), [grokbotwiki.com](https://www.grokbotwiki.com/bots/claims-scout), [grokbothq.xyz](https://grokbothq.xyz/bots/claims-scout), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/claims-scout) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/claims-scout ~/pi-bots/claims-scout && cd ~/pi-bots/claims-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/claims-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/claims-scout-weekly-scan`: cron `16 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).
- Routine `claims-scout-weekly-scan` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/claims-scout-weekly-scan.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
