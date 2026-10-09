# GrokBotDailyCrawl

Grok Bot crawls your site, indexes data and feeds it to the major LLMs and AI agents.

| | |
| --- | --- |
| Original template | https://x.ai/bot/CM6cRhyYm-k1vi23YxYxx |
| Creator | Robauto Team ([@RobautoAI](https://x.com/RobautoAI)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/grokbot-daily-crawl), [botsdots.site](https://botsdots.site/templates/grokbotdailycrawl), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grokbotdailycrawl), [grokbothq.xyz](https://grokbothq.xyz/bots/grokbot-daily-crawl), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/RobautoAI/status/2096769236379333014) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 3 skills, 2 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/grokbotdailycrawl ~/pi-bots/grokbotdailycrawl && cd ~/pi-bots/grokbotdailycrawl
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/grokbotdailycrawl`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/brand-contact-backfill`: cron `0 */2 * * *` (found in the template text)
- `/daily-grok-bot-crawl-report`: cron `0 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
