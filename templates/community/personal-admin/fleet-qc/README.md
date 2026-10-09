# Fleet QC

Standing quality-control and self-improvement desk for a bot fleet. Audits packs, templates, routines, and delivery rails only. Does not publish, spend, or enter contests itself. Sends short actionable findings to your triage hub.

| | |
| --- | --- |
| Original template | https://x.ai/bot/I-Z5352OxR_YS5AEburah |
| Creator | ladybarrelmaker ([@ladybarrelmaker](https://x.com/ladybarrelmaker)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/fleet-qc), [botsdots.site](https://botsdots.site/templates/fleet-qc), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fleet-qc), [grokbothq.xyz](https://grokbothq.xyz/bots/fleet-qc), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fleet-qc), [x-research](https://x.com/ladybarrelmaker/status/2102762942269939777) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/fleet-qc ~/pi-bots/fleet-qc && cd ~/pi-bots/fleet-qc
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/fleet-qc`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-open-qc-digest`: cron `0 10 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
