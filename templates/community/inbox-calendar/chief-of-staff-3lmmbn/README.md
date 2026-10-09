# Chief of Staff

Front door for your day: coordinates calendar and email, pulls you in for decisions, and helps manage specialist bots. For founders and operators juggling several workstreams.

| | |
| --- | --- |
| Original template | https://x.ai/bot/3lMMBN3oSETGdsbo9xDh7 |
| Creator | Angelo Gordillo ([@AngeloGordilloX](https://x.com/AngeloGordilloX)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-3lmm), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-3lmm), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-5), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chief-of-staff-3lmm) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/chief-of-staff-3lmmbn ~/pi-bots/chief-of-staff-3lmmbn && cd ~/pi-bots/chief-of-staff-3lmmbn
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/chief-of-staff-3lmmbn`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
