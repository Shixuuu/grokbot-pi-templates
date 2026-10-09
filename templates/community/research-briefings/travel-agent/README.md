# Travel Agent

A travel partner for trip logging, city scoring, and light itinerary prep. Logs trips in a Notion Travel Log, answers travel-history questions from that log, and confirms before creating or editing rows.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_yHS4eeajJMAXY1EHAdoO |
| Creator | Jeremy Cai ([@jjeremycai](https://x.com/jjeremycai)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/travel-agent), [grokbotwiki.com](https://www.grokbotwiki.com/bots/travel-agent), [grokbothq.xyz](https://grokbothq.xyz/bots/travel-agent), [templatebot.lol](https://templatebot.lol/bot/_yHS4eeajJMAXY1EHAdoO), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/travel-agent), [x-research](https://botsdots.site/templates/travel-agent) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/travel-agent ~/pi-bots/travel-agent && cd ~/pi-bots/travel-agent
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/travel-agent`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
