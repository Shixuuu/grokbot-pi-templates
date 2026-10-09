# ZenSched

Field workforce scheduling for agents. Connects to ZenSched over MCP so an agent can create the vendor account, schedule crews, run geofenced check-in, and pull timesheets without a human clicking the vendor UI.

| | |
| --- | --- |
| Original template | https://x.ai/bot/LK0rEXJnnD1qpEISXd7Ix |
| Creator | Mike ([@zensched](https://x.com/zensched)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/zensched), [grokbotwiki.com](https://www.grokbotwiki.com/bots/zensched), [grokbothq.xyz](https://grokbothq.xyz/bots/zensched), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/zensched-field-crew-scheduler), [x-research](https://botsdots.site/templates/zensched) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/zensched ~/pi-bots/zensched && cd ~/pi-bots/zensched
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/zensched`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
