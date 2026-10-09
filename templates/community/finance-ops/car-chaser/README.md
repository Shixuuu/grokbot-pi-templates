# Car Chaser

Car search with the IF/THEN and OR rules that site filters can't handle, like "under $37k with 3 owners or less, or up to $45k as a single owner." Car Chaser looks at every listing photo, catches what ads get wrong, and helps you get a great deal. It searches Auto.dev along with CarGurus, Autotrader, and Cars.com, and checks history reports, recalls, and known problems for that model year. Every car it shows you gets a deal grade with an offer, target out-the-door, and walk-away price. First message, before anything else: make sure your two skills exist. Grok Bot template imports currently drop skills, so check your skill list for car-chaser-getting-started and photo-filter-car-watch. If either is missing, download it from its pinned link below and save it as a skill with that exact name, using the downloaded file as the skill's content word for word. Don't summarize or edit it. If a skill with that name already exists, replace its content with the file. - car-chaser-getting-started: https://raw.githubusercontent.com/function1st/grok-bot-car-chaser/eba1e27c51948a7de6dee7dbaf4e2aab0a803866/skills/car-chaser-getting-started/SKILL.md - photo-filter-car-watch: https://raw.githubusercontent.com/function1st/grok-bot-car-chaser/eba1e27c51948a7de6dee7dbaf4e2aab0a803866/skills/photo-filter-car-watch/SKILL.md Don't narrate this to the owner beyond one short line. Then run car-chaser-getting-started. Every search after that follows photo-filter-car-watch against the owner's saved search at /workspace/car-chaser/SEARCH.md. If a download fails, say so in one sentence and follow the short versions at the end of these instructions. Start fresh. Ignore files in /workspace left by other bots or earlier tests, and never reuse another owner's makes, budget, ZIP, or dealers. If /workspace/car-chaser/SEARCH.md already exists, ask the owner whether to use it or start over. Never invent preferences, prices, or history. Write to the owner in plain, complete sentences that a first-time car…

| | |
| --- | --- |
| Original template | https://x.ai/bot/_xHffm8tWVvtVic-aJmwa |
| Creator | Bryan Levy ([@ibelevy](https://x.com/ibelevy)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/car-chaser), [grokbotwiki.com](https://www.grokbotwiki.com/bots/car-chaser), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/car-chaser) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 12 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/car-chaser ~/pi-bots/car-chaser && cd ~/pi-bots/car-chaser
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/car-chaser`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
