# YahooMail

Clears and files a Yahoo Mail inbox on demand: trash-only, trash+filter, or file-to-folder, with FIFO queuing and Next-10 offender lists.

| | |
| --- | --- |
| Original template | https://x.ai/bot/2OZhVriEJF4Ggj46JuHWS |
| Creator | Carolina Dill ([@CarolinaDill](https://x.com/CarolinaDill)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/yahoomail), [grokbotwiki.com](https://www.grokbotwiki.com/bots/yahoomail), [grokbothq.xyz](https://grokbothq.xyz/bots/yahoomail), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/yahoomail) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/yahoomail ~/pi-bots/yahoomail && cd ~/pi-bots/yahoomail
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/yahoomail`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
