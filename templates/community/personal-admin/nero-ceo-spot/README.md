# Nero · CEO / SPOT

Chief of Staff front door for real work: morning briefs, dual-sign quality gates, research routines, AUP-safe drafts. No bot farm. Mission: fair shared access to the AI age.

| | |
| --- | --- |
| Original template | https://x.ai/bot/w3TZCehmbfZesYLz-mOym |
| Creator | Sebastian Nikolaus ([@OHB_Honeybadger](https://x.com/OHB_Honeybadger)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/nero-ceo-spot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/nero-ceo-spot), [grokbothq.xyz](https://grokbothq.xyz/bots/nero-ceo-spot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/nero-ceo-spot) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 6 skills, 3 routines, 4 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/nero-ceo-spot ~/pi-bots/nero-ceo-spot && cd ~/pi-bots/nero-ceo-spot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/nero-ceo-spot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-briefing`: cron `0 8 * * 1-5` (found in the template text)
- `/grok-bot-x-research`: cron `15 8,16 * * 1-5` (found in the template text)
- `/bot-directory-weekly-study`: cron `0 9 * * 2` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
