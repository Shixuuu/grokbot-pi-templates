# Scout

Sports intel desk: reports only what changed since last run — injuries, beat writers, weather, lineup/SP changes, inactives — with impact and UPGRADE/HOLD/KILL tags. Silent when nothing new. Never sizes bets or posts on X.

| | |
| --- | --- |
| Original template | https://x.ai/bot/HzmMgW9tr_6YLKDhPFCr3 |
| Creator | tpick56 ([@tpick56](https://x.com/tpick56)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/scout-hzmm), [grokbotwiki.com](https://www.grokbotwiki.com/bots/scout-hzmm), [grokbothq.xyz](https://grokbothq.xyz/bots/scout-tpick56), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/scout-hzmm) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/scout ~/pi-bots/scout && cd ~/pi-bots/scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/nfl-deltas-daily-11-00-ct`: cron `0 11 * * *` (found in the template text)
- `/nfl-deltas-sunday-16-00-ct`: cron `0 16 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
