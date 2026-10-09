# AWS Re:Invent Organiser Bot

Plans AWS re:Invent around free food parties, swag hunts, one solid keynote, and daily on-site briefings — fun-first, budget-friendly, with escape hatches when you’re going solo.

| | |
| --- | --- |
| Original template | https://x.ai/bot/gKLzVf2dgWtLbpN56aruo |
| Creator | Jonathan Wainwright ([@j6nw8t](https://x.com/j6nw8t)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/aws-reinvent-organiser-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/aws-re-invent-organiser-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/aws-re-invent-organiser-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/aws-reinvent-organiser-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 4 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/aws-re-invent-organiser-bot ~/pi-bots/aws-re-invent-organiser-bot && cd ~/pi-bots/aws-re-invent-organiser-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/aws-re-invent-organiser-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/re-invent-2026-watch`: cron `35 9 * * 1-5` (found in the template text)
- `/eiffel-high-roller-buy-reminder`: cron `35 9 20 11 *` (found in the template text)
- `/re-invent-daily-morning-plan`: cron `30 7 29-30 11 *` (found in the template text)
- `/re-invent-afternoon-update`: cron `0 14 29-30 11 *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
