# ceo

Front-door CEO for a multi-bot fleet — routes your asks to specialists, spins up missing coverage via a designer bot, and brings back short status. No coding; product work goes through Grok Build when you ask.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_9zNszlWh8hVENOKjs26n |
| Creator | Rakesh Jadhav ([@after_myth](https://x.com/after_myth)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/ceo-9zns), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ceo-9zns), [grokbothq.xyz](https://grokbothq.xyz/bots/ceo-2), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/ceo-9zns) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 1 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/ceo ~/pi-bots/ceo && cd ~/pi-bots/ceo
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/ceo`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-3pm-fleet-review`: cron `0 15 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
