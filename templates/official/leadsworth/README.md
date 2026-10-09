# Lead Pipeline Desk

Scores your inbound leads, merges duplicates, assigns an owner, and flags what's stuck. Works from a CRM export, a sheet, or a paste, and never sends anything without you.

| | |
| --- | --- |
| Original template | https://x.ai/bot/oPDkINUfpUXhJDdsfRZht |
| Creator | Miguel Cruz ([@cruzmiguel000](https://x.com/cruzmiguel000)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/leadsworth), [grokbottemplates.app](https://grokbottemplates.app/t/lead-pipeline-desk), [botsdots.site](https://botsdots.site/templates/lead-pipeline-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lead-pipeline-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/lead-pipeline-desk), [templatebot.lol](https://templatebot.lol/bot/oPDkINUfpUXhJDdsfRZht), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/lead-pipeline-desk) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 7 skills, 2 routines, 5 memory seeds, 8 connectors |

## Use it in Pi

```bash
cp -r templates/official/leadsworth ~/pi-bots/leadsworth && cd ~/pi-bots/leadsworth
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/leadsworth`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (8) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-lead-triage`: no cron in the template; described as "Every weekday morning, scores the leads that came in overnight, merges duplicates, and lists what has no owner or is past its response window."
- `/weekly-pipeline-report`: no cron in the template; described as "Every Monday morning, the week's lead counts by source, the tier mix, what moved, what is stuck, and pacing against the goal."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
