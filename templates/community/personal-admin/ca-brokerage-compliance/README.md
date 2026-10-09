# CA Brokerage Compliance

Internal compliance and California DRE risk assistant for a real estate brokerage. Reviews ads, social posts, transactions, and lead or vendor programs, then gives a clear verdict with fixes. Not a lawyer.

| | |
| --- | --- |
| Original template | https://x.ai/bot/OtCWbWeEWyNiFCV3qLxYU |
| Creator | Joe Foxx ([@joefoxx](https://x.com/joefoxx)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/ca-brokerage-compliance), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ca-brokerage-compliance), [grokbothq.xyz](https://grokbothq.xyz/bots/ca-brokerage-compliance), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/ca-brokerage-compliance) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 1 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/ca-brokerage-compliance ~/pi-bots/ca-brokerage-compliance && cd ~/pi-bots/ca-brokerage-compliance
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/ca-brokerage-compliance`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/0ff4ce06-76ee-5591-819f-7b05c4b08dfd`: cron `5 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
