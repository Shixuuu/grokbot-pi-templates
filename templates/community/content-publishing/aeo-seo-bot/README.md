# AEO/SEO Bot

Weekday content operator for search and answer-engine pages. It mines a slate from search, calls, and founder tape, scores ideas with a live judge before anyone writes, and leaves drafts unpublished until you type an exact publish line.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Jyx1Lg-VzYgyjDc-y-GQi |
| Creator | Eric Siu ([@eddiearc6](https://x.com/eddiearc6)) |
| Category | community / content-publishing |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/aeo-seo-bot), [botsdots.site](https://botsdots.site/templates/aeoseo-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/aeo-seo-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/aeo-seo-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/aeo-seo-bot), [x-research](https://x.com/eddiearc6/status/2096179583783706993) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 6 skills, 4 routines, 11 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/aeo-seo-bot ~/pi-bots/aeo-seo-bot && cd ~/pi-bots/aeo-seo-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/aeo-seo-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-dens-index-watch-am-pm`: cron `1 10,15 * * 1-5` (found in the template text)
- `/weekly-refresh-decay-scan`: cron `31 10 * * 1-5` (found in the template text)
- `/sunday-decay-queue-refill`: cron `19 16 * * 0` (found in the template text)
- `/saturday-competitor-serp-scan`: cron `10 10 * * 6` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
