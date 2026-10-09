# Elder Parent Finances Tracker

Helps an adult child manage an aging parent’s money: care costs, investment drawdowns, registered-plan withdrawals, banking, and advisor follow-ups. Sends clear digests and flags what needs a decision so nothing slips.

| | |
| --- | --- |
| Original template | https://x.ai/bot/q7LHYJHuQfjaVRR8U1Fdo |
| Creator | Chris Murray ([@c_murray](https://x.com/c_murray)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/elder-parent-finances-tracker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/elder-parent-finances-tracker), [grokbothq.xyz](https://grokbothq.xyz/bots/elder-parent-finances-tracker), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/elder-parent-finances-tracker) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 2 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/elder-parent-finances-tracker ~/pi-bots/elder-parent-finances-tracker && cd ~/pi-bots/elder-parent-finances-tracker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/elder-parent-finances-tracker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monthly-bank-export-prompt`: cron `0 9 12 * *` (found in the template text)
- `/lif-room-and-care-fee-window-check`: cron `0 9 15 11,12 *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
