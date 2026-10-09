# Revenue Signal Radar

Weekday revenue-action radar for HubSpot shops. Ranks expansion, stalled deals, and closed-lost revival with evidence and draft next steps. Read-only until you approve an exact send.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9BnpveyF3fbsRRtolSWpp |
| Creator | Eric Siu ([@ericosiu](https://x.com/ericosiu)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/revenue-signal-radar), [botsdots.site](https://botsdots.site/templates/revenue-signal-radar), [grokbotwiki.com](https://www.grokbotwiki.com/bots/revenue-signal-radar), [grokbothq.xyz](https://grokbothq.xyz/bots/revenue-signal-radar-9bnpve), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/9BnpveyF3fbsRRtolSWpp), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/revenue-signal-radar), [x-research](https://x.com/ericosiu/status/2095629858630160695) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 1 routines, 18 memory seeds, 5 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/revenue-signal-radar ~/pi-bots/revenue-signal-radar && cd ~/pi-bots/revenue-signal-radar
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/revenue-signal-radar`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (18) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (5) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/revenue-radar-daily-queue`: cron `30 6 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
