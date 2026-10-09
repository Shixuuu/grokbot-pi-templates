# Site Audit

SEO + content + speed + a11y + CRO + schema audit. Scored, P0/P1/P2, evidence URLs. Monthly diff. No invented metrics.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_rzRrKKlUyBD3znUN5b3Q |
| Creator | Shimecki ([@scheemunai](https://x.com/scheemunai)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/site-audit), [grokbottemplates.app](https://grokbottemplates.app/t/site-audit), [botsdots.site](https://botsdots.site/templates/site-audit-rzrr), [templatebot.lol](https://templatebot.lol/bot/_rzRrKKlUyBD3znUN5b3Q), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/site-audit) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/official/site-audit ~/pi-bots/site-audit && cd ~/pi-bots/site-audit
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/site-audit`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monthly-site-re-audit`: cron `0 10 1 * *` (found in the template text)
- `/weekly-audit-self-improve`: cron `0 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
