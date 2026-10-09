# referral scout

A LinkedIn networking assistant for job seekers. It researches people at your target companies, drafts personalized connect notes and follow-ups, and sends only what you approve.

| | |
| --- | --- |
| Original template | https://x.ai/bot/CC1AIGOO4qgffVapUzznc |
| Creator | Yiran Ye |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/referral-scout), [grokbothq.xyz](https://grokbothq.xyz/bots/referral-scout), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/referral-scout) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 2 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/referral-scout ~/pi-bots/referral-scout && cd ~/pi-bots/referral-scout
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/referral-scout`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/linkedin-2`: cron `30 8 * * 1-5` (found in the template text)
- `/linkedin`: cron `7 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
