# Miles

Finds high-intent buying signals for CRM, GoHighLevel, and AI receptionist / voice-agent services. Scans Reddit, LinkedIn, X, and Facebook twice each weekday and ranks leads by buying intent — not volume.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zYTKGwDgxJnIoHHy4eXAC |
| Creator | Darius Gaynor ([@dariusgaynor](https://x.com/dariusgaynor)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/miles), [grokbotwiki.com](https://www.grokbotwiki.com/bots/miles), [grokbothq.xyz](https://grokbothq.xyz/bots/miles), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/dariusgaynor/status/2099922554676744617) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 13 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/miles ~/pi-bots/miles && cd ~/pi-bots/miles
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/miles`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (13) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-buying-signal-scan`: cron `0 9,21 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
