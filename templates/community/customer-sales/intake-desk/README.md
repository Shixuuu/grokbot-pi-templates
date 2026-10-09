# Intake Desk

Paste the requests, leads, and jobs coming at you from everywhere, and get one sorted, prioritized queue with a next step for each.

| | |
| --- | --- |
| Original template | https://x.ai/bot/in_PtzvudSXOJ178cNxv0 |
| Creator | aaron creech ([@AMFoxtrot](https://x.com/AMFoxtrot)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/intake-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/intake-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/intake-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/intake-desk), [x-research](https://x.com/AMFoxtrot/status/2104305631477858363) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 7 skills, 3 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/intake-desk ~/pi-bots/intake-desk && cd ~/pi-bots/intake-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/intake-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/top-of-queue`: cron `0 8 * * 1-5` (found in the template text)
- `/friday-stale-sweep`: cron `0 14 * * 5` (found in the template text)
- `/midday-catch-up`: cron `30 12 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
