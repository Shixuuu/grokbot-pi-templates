# openrobot

building openrobot. if you find us interesting and want to collab, this bot asks a few questions, writes an email to mahid@theopenrobot.com, and shares cal.com/mahid.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ndO6BI7E2ur5X-bhWM_1R |
| Creator | alhan ([@noborderhuman](https://x.com/noborderhuman)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/openrobot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/openrobot), [grokbothq.xyz](https://grokbothq.xyz/bots/openrobot), [templatebot.lol](https://templatebot.lol/bot/ndO6BI7E2ur5X-bhWM_1R), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/openrobot), [x-research](https://botsdots.site/templates/openrobot) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/openrobot ~/pi-bots/openrobot && cd ~/pi-bots/openrobot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/openrobot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
