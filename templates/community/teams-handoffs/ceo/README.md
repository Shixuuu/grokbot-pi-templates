# CEO

CEO of your company. Owns strategy, priorities, monetization, distribution, and org guidance. Studies the work, sets the agenda, hires and guides specialist bots, and keeps the company on revenue and proof instead of busywork.

| | |
| --- | --- |
| Original template | https://x.ai/bot/GHLPyes3hiP9A6kES7UHg |
| Creator | Ashish P ([@inqusit](https://x.com/inqusit)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/ceo), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ceo), [grokbothq.xyz](https://grokbothq.xyz/bots/ceo), [templatebot.lol](https://templatebot.lol/bot/GHLPyes3hiP9A6kES7UHg), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ceo), [x-research](https://botsdots.site/templates/ceo) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/ceo ~/pi-bots/ceo && cd ~/pi-bots/ceo
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/ceo`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/ceo-progress-mail`: cron `0 19 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
