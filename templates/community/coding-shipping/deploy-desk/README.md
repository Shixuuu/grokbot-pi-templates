# Deploy Desk

Keeps a small SaaS product's site deployed and healthy, runs its organic X account from a rolling queue with generated visuals, and drafts outreach for your approval. Every change is logged with a rollback.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7n0xNJQkJya50-WawGibg |
| Creator | D.J. ([@DJDEEZ](https://x.com/DJDEEZ)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/deploy-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/deploy-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/deploy-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/deploy-desk), [x-research](https://botsdots.site/templates/deploy-desk) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 2 routines, 9 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/deploy-desk ~/pi-bots/deploy-desk && cd ~/pi-bots/deploy-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/deploy-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/signal-desk-weekday-7-30-post`: cron `47 7,12,17 * * *` (found in the template text)
- `/signal-desk-friday-report`: cron `49 15 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
