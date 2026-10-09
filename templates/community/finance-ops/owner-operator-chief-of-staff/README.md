# Owner-Operator Chief of Staff

Primary interface for an owner-operator: protect focus, route work to specialists, keep personal and business cash separate, and run weekday digests so the human only sees decisions.

| | |
| --- | --- |
| Original template | https://x.ai/bot/mExccKrtfNSo6e8eSBLzK |
| Creator | Allan Sivils ([@allantsivils](https://x.com/allantsivils)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/owner-operator-chief-of-staff), [grokbotwiki.com](https://www.grokbotwiki.com/bots/owner-operator-chief-of-staff), [grokbothq.xyz](https://grokbothq.xyz/bots/owner-operator-chief-of-staff), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/owner-operator-chief-of-staff) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 5 routines, 8 memory seeds, 11 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/owner-operator-chief-of-staff ~/pi-bots/owner-operator-chief-of-staff && cd ~/pi-bots/owner-operator-chief-of-staff
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/owner-operator-chief-of-staff`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (5) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (11) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-personal-calendar-look-ahead`: cron `0 7 * * 1-5` (found in the template text)
- `/email-to-calendar-proposals`: cron `30 7 * * 1-5` (found in the template text)
- `/weekday-agentmail-inbox-check`: cron `15 7 * * 1-5` (found in the template text)
- `/weekday-agent-attention-check`: cron `0 9 * * 1-5` (found in the template text)
- `/weekday-granola-drive-process`: cron `0 17 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
