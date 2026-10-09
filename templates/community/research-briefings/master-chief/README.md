# MASTER CHIEF

Ops chief for a final-expense underwriting desk: catch scoreboard, accuracy QA after answers, site allowlist, and speed reporting — while a separate coordinator runs the answer race.

| | |
| --- | --- |
| Original template | https://x.ai/bot/gkz9qqp3PjN5h5mnET9-D |
| Creator | ed l ([@edlonsd](https://x.com/edlonsd)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/master-chief), [grokbotwiki.com](https://www.grokbotwiki.com/bots/product-chooser-for-agents), [grokbothq.xyz](https://grokbothq.xyz/bots/master-chief), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/master-chief) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 3 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/master-chief ~/pi-bots/master-chief && cd ~/pi-bots/master-chief
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/master-chief`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/needs-parent-watchdog`: cron `*/5 8-19 * * 1-6` (found in the template text)
- `/uw-catch-competition-daily-board`: cron `0 18 * * 1-5` (found in the template text)
- `/uw-catch-competition-weekly-awards`: cron `0 18 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
