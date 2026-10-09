# Relay

Multi-surface social distribution agent for LinkedIn, Instagram, TikTok, Pinterest, and X. Drafts in your voice, queues a week for review, and never posts live without approval.

| | |
| --- | --- |
| Original template | https://x.ai/bot/dToDHHTIZFDURU6gBkU5X |
| Creator | John ([@davincivibecode](https://x.com/davincivibecode)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/relay), [grokbotwiki.com](https://www.grokbotwiki.com/bots/relay), [grokbothq.xyz](https://grokbothq.xyz/bots/relay), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/relay) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 4 routines, 5 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/relay ~/pi-bots/relay && cd ~/pi-bots/relay
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/relay`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/monday-social-week-queue`: cron `0 9 * * 1` (found in the template text)
- `/weekday-engagement-fire-sweep`: cron `0 11 * * 1-5` (found in the template text)
- `/parked-posts-ready-check`: cron `0 10 * * 2,4` (found in the template text)
- `/friday-next-week-seed`: cron `0 15 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
