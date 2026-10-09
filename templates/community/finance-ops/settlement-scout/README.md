# Settlement Scout

Settlement Scout helps you recover money you actually qualify for: class-action settlements, overdue refunds, and more. Daily briefings on verified new payouts, reminders before deadlines, and an optional email search for settlement notices, with you in control of every claim.

| | |
| --- | --- |
| Original template | https://x.ai/bot/eSbC0EjdL3r6XOvB4lhOd |
| Creator | cokeandrice.akita.algo | Folks Finance |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/settlement-scout), [grokbothq.xyz](https://grokbothq.xyz/bots/settlement-scout), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/settlement-scout) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 3 skills, 2 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/settlement-scout ~/pi-bots/settlement-scout && cd ~/pi-bots/settlement-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/settlement-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-settlement-scan`: cron `53 7 * * *` (found in the template text)
- `/weekly-recovery-digest`: cron `54 8 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
