# House Cleaner

One-click fat-fleet refresh: snapshot memory, guide phone Duplicate, rewire, rename to Name_old, move new bots into live folders and _old into old, then set Mentor Tuesday care + Friday fatness.

| | |
| --- | --- |
| Original template | https://x.ai/bot/GD3ihBmx3ZbfEH0GzNqOT |
| Creator | sza ba ([@aba_taba](https://x.com/aba_taba)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/house-cleaner), [grokbotwiki.com](https://www.grokbotwiki.com/bots/house-cleaner), [grokbothq.xyz](https://grokbothq.xyz/bots/house-cleaner), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/house-cleaner) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 2 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/house-cleaner ~/pi-bots/house-cleaner && cd ~/pi-bots/house-cleaner
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/house-cleaner`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
