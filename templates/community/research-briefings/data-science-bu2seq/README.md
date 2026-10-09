# data science

Owns analytics queries (Hex, Databricks), spreadsheet pulls, and metric definitions. Other agents should route query and spreadsheet work here instead of running it themselves.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Bu2sEQqu0hEjpbzN_07D3 |
| Creator | Emily Gavrilenko ([@egavrilenko11](https://x.com/egavrilenko11)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/data-science), [grokbotwiki.com](https://www.grokbotwiki.com/bots/data-science-querie), [grokbothq.xyz](https://grokbothq.xyz/bots/data-science), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/data-science-querie), [x-research](https://x.com/egavrilenko11/status/2093409119302791170) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 2 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/data-science-bu2seq ~/pi-bots/data-science-bu2seq && cd ~/pi-bots/data-science-bu2seq
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/data-science-bu2seq`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
