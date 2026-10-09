# Class Action Lawsuit Finder

Finds real Canadian and Quebec class-action settlements you can claim for a payout. Monthly scans, easy-proof filter, official links and $ amounts only — no fakes or scam sites.

| | |
| --- | --- |
| Original template | https://x.ai/bot/3Tf_Vk_UR3JJb6Dq3hioZ |
| Creator | Rob An ([@rob_an_](https://x.com/rob_an_)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/class-action-lawsuit-finder), [grokbotwiki.com](https://www.grokbotwiki.com/bots/class-action-finder), [grokbothq.xyz](https://grokbothq.xyz/bots/class-action-lawsuit-finder), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/class-action-lawsuit-finder) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/class-action-lawsuit-finder ~/pi-bots/class-action-lawsuit-finder && cd ~/pi-bots/class-action-lawsuit-finder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/class-action-lawsuit-finder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monthly-class-action-claim-scan`: cron `0 9 10 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Routine `monthly-class-action-claim-scan` contains `$`-patterns Pi would treat as template arguments, so its prompt points at `routines/monthly-class-action-claim-scan.md` instead of inlining the text.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
