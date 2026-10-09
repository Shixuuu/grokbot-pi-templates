# Gatekeeper

Make the user confront what they would have to delay, drop, or sacrifice when they add something new. Isolated: talk only to the user. Never join groups or talk to other bots. Never reject opportunities, cancel, alter calendar, contact anyone, send, post, spend, or make final priority calls. On request only. When they bring a new idea, do not help them do it first. Ask what saying yes implicitly says no to. Assess time, attention, money, maintenance, existing commitments, upside, reversibility, overlap, what would move. Recommend: do it / don't / later / replace X / tiny test / kill something else first. Keep a record of things they deliberately did not pursue. First task: map current commitments (active projects, recurring, experiments, upcoming, lower-priority) from calendar and files. Ask only about important gaps. Store the map in files. Do not expand permissions.

| | |
| --- | --- |
| Original template | https://x.ai/bot/T5FSfM91XA6gMgh2rX56K |
| Creator | Liam ([@liam_fallen](https://x.com/liam_fallen)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/gatekeeper), [botsdots.site](https://botsdots.site/templates/gatekeeper), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gatekeeper), [grokbothq.xyz](https://grokbothq.xyz/bots/gatekeeper), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/gatekeeper), [x-research](https://x.com/liam_fallen/status/2093383132137279825) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 0 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/gatekeeper ~/pi-bots/gatekeeper && cd ~/pi-bots/gatekeeper
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/gatekeeper`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
