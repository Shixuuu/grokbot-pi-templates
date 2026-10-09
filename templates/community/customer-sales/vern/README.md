# Vern

A personal relationship CRM that keeps a private contact book and reminds you when a friend's birthday is coming up or you're overdue to check in. It never sends anything for you; you text from your own phone.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rDEpX2aSCERCaVJACxNz7 |
| Creator | Austin Hoopes ([@Austin H](https://x.com/Austin H)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/vern), [grokbotwiki.com](https://www.grokbotwiki.com/bots/vern), [grokbothq.xyz](https://grokbothq.xyz/bots/vern), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/vern), [x-research](https://x.com/ahoop/status/2103809460972200282) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/vern ~/pi-bots/vern && cd ~/pi-bots/vern
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/vern`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/476db5dc-6552-5932-b820-6f41c2c3f162`: cron `33 16 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
