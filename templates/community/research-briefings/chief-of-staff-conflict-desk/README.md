# Chief of Staff — Conflict Desk

Coordinates a conflict-intelligence desk: daily WW3-risk and AI-in-conflict digests with a risk %, plus evening spike-only alerts. Built to run with Conflict Monitor, Claim Verifier, and Bias Checker teammates.

| | |
| --- | --- |
| Original template | https://x.ai/bot/3l5q_rso0yE9KpJO9nYTi |
| Creator | Alamandorious ([@alamandorious](https://x.com/alamandorious)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/chief-of-staff-conflict-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chief-of-staff-conflict-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/chief-of-staff-conflict-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/chief-of-staff-conflict-desk) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/chief-of-staff-conflict-desk ~/pi-bots/chief-of-staff-conflict-desk && cd ~/pi-bots/chief-of-staff-conflict-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/chief-of-staff-conflict-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/conflict-ai-flashpoint-watch`: cron `0 8 * * *` (found in the template text)
- `/conflict-evening-spike-check`: cron `0 20 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
