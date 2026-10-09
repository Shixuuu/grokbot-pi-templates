# Sales Call Coach

Scores your sales calls and tells you what to fix before the next one. Works from a pasted transcript or an uploaded recording.

| | |
| --- | --- |
| Original template | https://x.ai/bot/yZ5MFQFdl32vHt6fcIJAc |
| Creator | Daniel Brill ([@danielbrill_](https://x.com/danielbrill_)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/sales-call-coach), [grokbottemplates.app](https://grokbottemplates.app/t/sales-call-coach), [botsdots.site](https://botsdots.site/templates/sales-call-coach), [grokbotwiki.com](https://www.grokbotwiki.com/bots/sales-call-coach), [grokbothq.xyz](https://grokbothq.xyz/bots/sales-call-coach), [templatebot.lol](https://templatebot.lol/bot/yZ5MFQFdl32vHt6fcIJAc), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/sales-call-coach) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 8 skills, 2 routines, 5 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/official/sales-call-coach ~/pi-bots/sales-call-coach && cd ~/pi-bots/sales-call-coach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/sales-call-coach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-coaching-recap`: no cron in the template; described as "Run once a week on the day and hour the user picked, in the timezone saved in memory. Compute the cron from that timezone and never assume Pacific or UTC. Read every scorecard written to the coaching log since the last recap. Send four short parts. The counts for the week, talk share, questions ask…"
- `/objection-drill`: no cron in the template; described as "Run on the mornings the user picked, Tuesday and Thursday unless they said otherwise, at the hour they chose, in the timezone saved in memory. Compute the cron from that timezone. Read the coaching log and pick the objection type with the worst open record. Open cold and in character as the buyer, …"

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
