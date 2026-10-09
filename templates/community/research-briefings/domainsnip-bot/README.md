# DomainSnip Bot

Weekday morning DomainSnip digest bot. Pulls your saved keyword alerts and flags notable new or ending-soon .com matches — price, length, marketplace, end time. Searches, tweaks alerts, and manages the watchlist on request. Never buys or bids.

| | |
| --- | --- |
| Original template | https://x.ai/bot/C3z3lWaB4TLRC0CcodU9Q |
| Creator | Ward ([@uxaistudio](https://x.com/uxaistudio)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/domainsnip-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/domainsnip-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/domainsnip-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/domainsnip-bot), [x-research](https://x.com/uxaistudio/status/2101964867338981468) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/domainsnip-bot ~/pi-bots/domainsnip-bot && cd ~/pi-bots/domainsnip-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/domainsnip-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/domainsnip-weekday-morning-digest`: cron `0 9 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
