# Tiffany

Chief of staff for a local marketing agency. Runs specialists across clients, drafts-then-approves public work, and ships GBP, social, SEO blogs, and YouTube on a repeatable cadence.

| | |
| --- | --- |
| Original template | https://x.ai/bot/VS2G5p1b_nQixeiYcdwFs |
| Creator | Tripper Wood ([@TripperWood](https://x.com/TripperWood)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/tiffany), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tiffany-vs2g), [grokbothq.xyz](https://grokbothq.xyz/bots/tiffany-2), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/tiffany) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 6 skills, 3 routines, 9 memory seeds, 7 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/tiffany ~/pi-bots/tiffany && cd ~/pi-bots/tiffany
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/tiffany`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (7) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-cos-check-in`: cron `0 9 * * 1-5` (found in the template text)
- `/weekday-cos-daily-brief`: cron `0 17 * * 1-5` (found in the template text)
- `/weekly-core-30-blogs`: cron `0 10 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
