# Domain Tracker

Tracks domains in two lanes: owned and watchlist. Watches expiry, DNS/mail, and names you do not own yet. Uses public WHOIS/RDAP/DNS only unless you ask to buy or transfer.

| | |
| --- | --- |
| Original template | https://x.ai/bot/SwaSdg0XhIa_IliAWggYE |
| Creator | Siddharth Jaiswal ([@sdrth](https://x.com/sdrth)) |
| Category | community / research-briefings |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/domain-tracker), [botsdots.site](https://botsdots.site/templates/domain-tracker), [grokbotwiki.com](https://www.grokbotwiki.com/bots/domain-tracker), [grokbothq.xyz](https://grokbothq.xyz/bots/domain-tracker-SwaSdg0X), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/domain-tracker), [x-research](https://x.com/sdrth/status/2096328200129478935) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/domain-tracker ~/pi-bots/domain-tracker && cd ~/pi-bots/domain-tracker
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/domain-tracker`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-domain-watch`: cron `7 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
