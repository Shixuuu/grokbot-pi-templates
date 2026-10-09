# RedReplier

Watches Reddit, X, Hacker News and Bluesky for mentions of your product, competitors and buying-signal phrases. Pulls new mentions ranked by AI intent, explains why each was flagged, and helps you triage the inbox.

| | |
| --- | --- |
| Original template | https://x.ai/bot/8aU6ly_uunnMabpybs3hB |
| Creator | Taras Shynkarenko ([@tarasshyn](https://x.com/tarasshyn)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/redreplier), [botsdots.site](https://botsdots.site/templates/redreplier), [grokbotwiki.com](https://www.grokbotwiki.com/bots/redreplier), [grokbothq.xyz](https://grokbothq.xyz/bots/redreplier), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/8aU6ly_uunnMabpybs3hB), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/redreplier), [x-research](https://x.com/tarasshyn/status/2093730218145976437) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/redreplier ~/pi-bots/redreplier && cd ~/pi-bots/redreplier
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/redreplier`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-lead-digest`: cron `30 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
