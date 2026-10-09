# Tickets Bot

Tickets Bot finds your entertainment tickets. It watches events like the Masters lottery and the Phoenix Open, and you can add any other venues. It puts ticket-buying dates and deadlines on your calendar and adds the event itself to your family calendar.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ZwRk9A8eyh1ujhRRsWte6 |
| Creator | Ricardo Saiz ([@RICOSAIZ1](https://x.com/RICOSAIZ1)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/tickets-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tickets-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/tickets-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/tickets-bot) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 2 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/tickets-bot ~/pi-bots/tickets-bot && cd ~/pi-bots/tickets-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/tickets-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/masters-2028-lottery-watch`: cron `8 9 * * 1` (found in the template text)
- `/phoenix-open-2027-on-sale-watch`: cron `10 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
