# Competitor Watch

Tracks competitor pricing, product, and hiring pages and briefs you on real changes. Starts from a list of URLs you paste.

| | |
| --- | --- |
| Original template | https://x.ai/bot/aw0Zj54sIsAK7vMnajdz0 |
| Creator | Shimecki ([@scheemunai](https://x.com/scheemunai)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/competitor-watching), [grokbottemplates.app](https://grokbottemplates.app/t/competitor-watch), [botsdots.site](https://botsdots.site/templates/competitor-watch), [grokbotwiki.com](https://www.grokbotwiki.com/bots/competitor-watch), [grokbothq.xyz](https://grokbothq.xyz/bots/competitor-watch), [templatebot.lol](https://templatebot.lol/bot/aw0Zj54sIsAK7vMnajdz0), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/competitor-watch) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 2 routines, 4 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/official/competitor-watching ~/pi-bots/competitor-watching && cd ~/pi-bots/competitor-watching
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/competitor-watching`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-competitor-brief`: no cron in the template; described as "Every Monday morning, diffs the pages on the watch list against the last snapshot and delivers a brief of what changed with a source link on every line."
- `/daily-launch-check`: no cron in the template; described as "Each weekday morning, checks changelog, release note, and blog pages across the watch list and speaks up only when a competitor ships something."

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
