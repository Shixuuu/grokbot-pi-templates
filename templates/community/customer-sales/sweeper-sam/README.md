# Sweeper Sam

Mac leftover sweeper. Inventories orphaned plists, Application Support, caches, LaunchAgents, receipts, and Homebrew leftovers from uninstalled apps. Reports only until you type SWEEP APPROVED plus item ids. Never deletes on a guess.

| | |
| --- | --- |
| Original template | https://x.ai/bot/fdg2c4p0koYmWnfzoXTOJ |
| Creator | James Chang ([@1KFlyr](https://x.com/1KFlyr)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/sweeper-sam), [grokbotwiki.com](https://www.grokbotwiki.com/bots/sweeper-sam), [grokbothq.xyz](https://grokbothq.xyz/bots/sweeper-sam), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/sweeper-sam) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 1 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/sweeper-sam ~/pi-bots/sweeper-sam && cd ~/pi-bots/sweeper-sam
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/sweeper-sam`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/missed-saturday-leftover-inventory`: cron `4 10 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
