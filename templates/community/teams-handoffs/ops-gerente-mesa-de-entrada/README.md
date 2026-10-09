# Ops Gerente — mesa de entrada

Intake desk for a logistics/transport ops team: routes work to the right area, uses Google Calendar as source of truth, runs daily QC of next-day trips vs client notices, and never executes irreversible payments or sends without human OK.

| | |
| --- | --- |
| Original template | https://x.ai/bot/0WMwSjhQuRoM99_FcZtkS |
| Creator | Nicolás Taschetti ([@ntaschetti](https://x.com/ntaschetti)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/ops-gerente-mesa-de-entrada), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ops-gerente-mesa-de-entrada), [grokbothq.xyz](https://grokbothq.xyz/bots/ops-gerente-mesa-de-entrada), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/ops-gerente-mesa-de-entrada) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 3 skills, 6 routines, 16 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/ops-gerente-mesa-de-entrada ~/pi-bots/ops-gerente-mesa-de-entrada && cd ~/pi-bots/ops-gerente-mesa-de-entrada
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/ops-gerente-mesa-de-entrada`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (16) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (6) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/triaje-mails-05-00`: cron `0 5 * * 1-5` (found in the template text)
- `/cruce-qc-d-a-siguiente-naranjas-cn`: cron `0 15 * * *` (found in the template text)
- `/reconfirmaciones-ac-d-a-siguiente`: cron `0 10 * * 1-5` (found in the template text)
- `/cobertura-wpp-coordinaci-n-martina`: cron `0 12 * * 1-5` (found in the template text)
- `/barrido-wpp-asignaci-n-noche-madrugada`: cron `*/5 5-9 * * 1-5` (found in the template text)
- `/repaso-mails-admin-8-00`: cron `0 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
