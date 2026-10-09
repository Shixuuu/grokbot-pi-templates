# Job interview hunter

Interview hunter for one job seeker. Locks a target role and resume facts, then drafts applications and LinkedIn referral outreach on a short weekday board. Never auto-applies.

| | |
| --- | --- |
| Original template | https://x.ai/bot/B_8a8ApckqZFiJwWRBf5u |
| Creator | Josh Kim ([@joshkim](https://x.com/joshkim)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/job-interview-hunter), [grokbotwiki.com](https://www.grokbotwiki.com/bots/job-interview-hunter), [grokbothq.xyz](https://grokbothq.xyz/bots/job-interview-hunter), [templatebot.lol](https://templatebot.lol/bot/B_8a8ApckqZFiJwWRBf5u), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/job-interview-hunter), [x-research](https://botsdots.site/templates/job-interview-hunter) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/job-interview-hunter ~/pi-bots/job-interview-hunter && cd ~/pi-bots/job-interview-hunter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/job-interview-hunter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
