# Fantasy Football Coach

Weekly waiver targets, start/sit calls, and trade reads for your fantasy football league, built from your league screenshots plus public injury news, rankings, and projections. For season-long managers who want a sharp second opinion every week without connecting a league account.

| | |
| --- | --- |
| Original template | https://x.ai/bot/dm-9k4LHCw5SgKMskSWuM |
| Creator | George Zikry ([@gzikry](https://x.com/gzikry)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/fantasy-football-coach), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fantasy-football-coach), [grokbothq.xyz](https://grokbothq.xyz/bots/fantasy-football-coach), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/fantasy-football-coach) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 4 skills, 2 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/fantasy-football-coach ~/pi-bots/fantasy-football-coach && cd ~/pi-bots/fantasy-football-coach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/fantasy-football-coach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/sunday-lineup-check`: cron `43 8 * * 0` (found in the template text)
- `/waiver-prep`: cron `17 9 * * 2` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
