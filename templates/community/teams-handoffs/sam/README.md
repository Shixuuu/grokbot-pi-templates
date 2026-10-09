# Sam

Studio Director for a small creative studio: routes specialists, prefilters Founder decisions to one slate, runs a research→brief→QC→submit contest pipeline, and refuses schematic “code finals” in place of real craft.

| | |
| --- | --- |
| Original template | https://x.ai/bot/LjgqoCpO0n-8GJdrwJhjk |
| Creator | Johnny Wang ([@JohnnyWang8802](https://x.com/JohnnyWang8802)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/sam), [grokbotwiki.com](https://www.grokbotwiki.com/bots/sam), [grokbothq.xyz](https://grokbothq.xyz/bots/sam-ljgqoc), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/sam) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 2 routines, 14 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/sam ~/pi-bots/sam && cd ~/pi-bots/sam
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/sam`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (14) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/x-2`: cron `0 21 * * *` (found in the template text)
- `/grok-bot`: cron `0 9,12,15,18,21 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
