# Portfolio CEO Ops

Portfolio CEO desk for a multi-company founder. Reads WhatsApp company Lists for client requests (never the full inbox), creates client groups, runs Travel Agent so Drive gets Plan+Quote, then revises those docs from client change asks. Mon/Wed pipeline + morning digests. Specialists own brand/social and deep lanes. Drafts only — you approve every send. Built to protect Ultra.

| | |
| --- | --- |
| Original template | https://x.ai/bot/C8zLE_qeEWxbMCGqB4JGN |
| Creator | Hector Nieto ([@IronmanCrypto](https://x.com/IronmanCrypto)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/portfolio-ceo-ops), [grokbotwiki.com](https://www.grokbotwiki.com/bots/portfolio-ceo-ops), [grokbothq.xyz](https://grokbothq.xyz/bots/portfolio-ceo-ops), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/portfolio-ceo-ops) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 3 skills, 4 routines, 14 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/portfolio-ceo-ops ~/pi-bots/portfolio-ceo-ops && cd ~/pi-bots/portfolio-ceo-ops
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/portfolio-ceo-ops`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/meg-groups-morning-exceptions`: cron `0 9 * * 1` (found in the template text)
- `/meg-groups-wednesday-weekend`: cron `0 9 * * 3` (found in the template text)
- `/meg-groups-eod-requests`: cron `0 8 * * *` (found in the template text)
- `/to-meg-groups-morning-messages`: cron `0 9 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
