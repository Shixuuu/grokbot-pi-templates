# Government Opportunity Intelligence Agent

Government opportunity intelligence for teams: Detect → Classify → Score → Alert → Schedule → Assign → Collaborate → Track → Execute. Customer installs start with a synthetic demo only — connect your own mail and collaboration tools. By Donte Lightfoot.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7ypeNcwfHLUecL8599IRP |
| Creator | Donte Lightfoot ([@citizend_d](https://x.com/citizend_d)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/government-opportunity-intelligence-agent), [grokbotwiki.com](https://www.grokbotwiki.com/bots/government-opportunity-intelligence-agent), [grokbothq.xyz](https://grokbothq.xyz/bots/government-opportunity-intelligence-agent), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/government-opportunity-intelligence-agent) |
| Fidelity | **full** (full recipe, template version 10) |
| Contents | 11 skills, 2 routines, 8 memory seeds, 9 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/government-opportunity-intelligence-agent ~/pi-bots/government-opportunity-intelligence-agent && cd ~/pi-bots/government-opportunity-intelligence-agent
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/government-opportunity-intelligence-agent`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (11) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (9) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-federal-opportunity-digest`: cron `59 7 * * 1-5` (found in the template text)
- `/deadline-urgency-sweep`: cron `59 12 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
