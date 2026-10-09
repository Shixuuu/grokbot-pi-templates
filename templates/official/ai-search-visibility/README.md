# AI Search Visibility

Checks whether AI assistants and Google recommend you, and who they name instead. Starts from a handful of questions your buyers actually ask.

| | |
| --- | --- |
| Original template | https://x.ai/bot/BFiw9Y7BzTQ-3jFBAro1X |
| Creator | Adam Tanguay ([@adamta](https://x.com/adamta)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/ai-search-visibility), [grokbottemplates.app](https://grokbottemplates.app/t/ai-search-visibility), [botsdots.site](https://botsdots.site/templates/ai-search-visibility), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ai-search-visibility), [grokbothq.xyz](https://grokbothq.xyz/bots/ai-search-visibility), [templatebot.lol](https://templatebot.lol/bot/BFiw9Y7BzTQ-3jFBAro1X), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/ai-search-visibility) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 8 skills, 2 routines, 5 memory seeds, 6 connectors |

## Use it in Pi

```bash
cp -r templates/official/ai-search-visibility ~/pi-bots/ai-search-visibility && cd ~/pi-bots/ai-search-visibility
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/ai-search-visibility`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (6) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-visibility-brief`: no cron in the template; described as "Every week, runs the whole prompt list, then reports which answers moved, who is winning, and the one thing to do about it."
- `/top-prompt-spot-check`: no cron in the template; described as "Run twice a week on the two mornings the user picked, or Tuesday and Thursday when they did not pick, at the hour saved in memory and in their timezone. Compute the cron from that timezone. Read the prompt list and check only the five prompts marked top prompt. Compare each answer to the last captu…"

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
