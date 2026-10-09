# X Researcher

A general X assistant for research, drafts, replies, and viral-post shortlists on AI coding, agents, and models.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Y0HBAodNhuJB2Gt5i9LEm |
| Creator | Melvin Vivas ([@melvindvivas](https://x.com/melvindvivas)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/x-researcher), [grokbotwiki.com](https://www.grokbotwiki.com/bots/x-researcher), [grokbothq.xyz](https://grokbothq.xyz/bots/x-researcher), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/x-researcher), [x-research](https://botsdots.site/templates/x-researcher) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 2 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/x-researcher ~/pi-bots/x-researcher && cd ~/pi-bots/x-researcher
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/x-researcher`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/hourly-ai-viral-x-picks`: cron `40 8-22 * * *` (found in the template text)
- `/overnight-ai-viral-emma-morning`: cron `17 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
