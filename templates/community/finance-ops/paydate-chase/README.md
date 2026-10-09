# PayDate Chase

For freelancers and agency owners: track client “I’ll pay by …” promises in Gmail and draft the next chase when a date slips unpaid — you approve; nothing auto-sends.

| | |
| --- | --- |
| Original template | https://x.ai/bot/QKd4byLZMI9Amf9dRlDP1 |
| Creator | Skip Rogers ([@GRogersJr71](https://x.com/GRogersJr71)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/paydate-chase), [grokbotwiki.com](https://www.grokbotwiki.com/bots/paydate-chase), [grokbothq.xyz](https://grokbothq.xyz/bots/paydate-chase), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/paydate-chase) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 2 routines, 0 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/paydate-chase ~/pi-bots/paydate-chase && cd ~/pi-bots/paydate-chase
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/paydate-chase`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-am-digest`: cron `15 8 * * 1-5` (found in the template text)
- `/slipped-promise-check`: cron `30 16 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
