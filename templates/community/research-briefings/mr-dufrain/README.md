# Mr. Dufrain

Personal accountant bot. Tracks money, tax, and cash flow, watches bills so nothing bounces, and works a payday debt-kill plan so you keep more of what you earn.

| | |
| --- | --- |
| Original template | https://x.ai/bot/aBkdS0Duc24Hz7MvNm7W5 |
| Creator | Wagmoo Winterhoof ([@zilarwitch](https://x.com/zilarwitch)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/mr-dufrain), [botsdots.site](https://botsdots.site/templates/mr-dufrain), [grokbotwiki.com](https://www.grokbotwiki.com/bots/mr-dufrain), [grokbothq.xyz](https://grokbothq.xyz/bots/mr-dufrain), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/mr-dufrain), [x-research](https://x.com/zilarwitch/status/2095992717805547980) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 3 routines, 8 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/mr-dufrain ~/pi-bots/mr-dufrain && cd ~/pi-bots/mr-dufrain
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/mr-dufrain`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/bills-watch`: cron `0 7 * * *` (found in the template text)
- `/cra-refund-watch`: cron `0 7 * * *` (found in the template text)
- `/sep-9-payday-split`: cron `0 7 9 9 *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
