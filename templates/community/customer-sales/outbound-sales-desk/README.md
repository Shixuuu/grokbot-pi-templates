# Outbound Sales Desk

Builds a prospect list from your ideal customer profile, drafts personal first touches, and runs a strict three-touch sequence: the first message, one follow-up, then a final touch 7 to 14 business days later, after which the lead is closed.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_F4QaOQDrr6Rh4OpkfaaM |
| Creator | Charles Bonetti ([@ASaltyVet](https://x.com/ASaltyVet)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/outbound-sales-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/outbound-sales-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/outbound-sales-desk), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/outbound-sales-desk) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 6 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/outbound-sales-desk ~/pi-bots/outbound-sales-desk && cd ~/pi-bots/outbound-sales-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/outbound-sales-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (6) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/sales-desk-setup`: cron `45 14 1-7 * 1-5` (found in the template text)
- `/sales-prospect-sweep`: cron `15 10 * * 1-5` (found in the template text)
- `/sales-first-touch-drafts`: cron `5 11 * * 1-5` (found in the template text)
- `/sales-followup-sweep`: cron `30 13 * * 1-5` (found in the template text)
- `/sales-pipeline-review`: cron `15 17 * * 5` (found in the template text)
- `/sales-qualification-refresh`: cron `0 15 25-31 * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
