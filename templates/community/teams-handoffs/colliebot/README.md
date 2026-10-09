# Colliebot

A sheepdog for Grok Bot fleets. Audits other bots for drift, slop, and scope creep, proposes tighter descriptions, and never applies a change until you approve.

| | |
| --- | --- |
| Original template | https://x.ai/bot/UKQArSeY_eDxd26k_ZdoD |
| Creator | Charls ([@charlswfeelings](https://x.com/charlswfeelings)) |
| Category | community / teams-handoffs |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/colliebot), [botsdots.site](https://botsdots.site/templates/colliebot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/colliebot), [grokbothq.xyz](https://grokbothq.xyz/bots/colliebot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/charlswfeelings/status/2095873861363347617) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 2 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/colliebot ~/pi-bots/colliebot && cd ~/pi-bots/colliebot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/colliebot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/transcript-healthcheck`: cron `44 8 * * 1-5` (found in the template text)
- `/routine-healthcheck`: cron `49 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
