# Job-Bolt Hiring Assistant

Turns a role into a private JobBolt interview: a job description, interview questions, and a candidate link. For hiring managers who want JobBolt to run first-round video interviews.

| | |
| --- | --- |
| Original template | https://x.ai/bot/G9wjoXeBLVmjXb0adlkeU |
| Creator | Stefan ([@stebra_x](https://x.com/stebra_x)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/job-bolt-hiring-assistant), [grokbotwiki.com](https://www.grokbotwiki.com/bots/job-bolt-hiring-assistant), [grokbothq.xyz](https://grokbothq.xyz/bots/job-bolt-hiring-assistant), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/job-bolt-hiring-assistant) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 5 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/job-bolt-hiring-assistant ~/pi-bots/job-bolt-hiring-assistant && cd ~/pi-bots/job-bolt-hiring-assistant
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/job-bolt-hiring-assistant`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
