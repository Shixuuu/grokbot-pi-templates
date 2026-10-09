# Let's Get Rich Team

A 7-bot crypto research and trading desk (HQ plus 6 specialists) for Solana, Base and Ethereum, with optional Robinhood, that finds, vets and scores opportunities, then sends you move cards or trades from a capped wallet. Security and risk vetoes can't be outvoted, NO TRADE is a valid answer, and it never asks for seed phrases or moves money in or out.

| | |
| --- | --- |
| Original template | https://x.ai/bot/vzno777FpCyMe0-ja5u28 |
| Creator | Ray Potts™️ Dominican Republic 🇩🇴 4/8-4/13 ([@Raypotts](https://x.com/Raypotts)) |
| Category | community / trading-investing (trading, crypto) (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/lets-get-rich-team), [grokbotwiki.com](https://www.grokbotwiki.com/bots/let-s-get-rich-grokbot), [grokbothq.xyz](https://grokbothq.xyz/bots/lets-get-rich-team), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/lets-get-rich-team), [x-trading-research](https://x.com/Raypotts/status/2103896120413851712) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 2 skills, 4 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/trading-investing/let-s-get-rich-team ~/pi-bots/let-s-get-rich-team && cd ~/pi-bots/let-s-get-rich-team
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/trading-investing/let-s-get-rich-team`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (4) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/daily-desk-report`: cron `17 9 * * *` (found in the template text)
- `/weekly-team-review`: cron `12 19 * * 0` (found in the template text)
- `/shadow-tracker`: cron `56 0,2,4,6,8,10,12,14,16,18,20,22 * * *` (found in the template text)
- `/jev-signup-watch`: cron `9 9,13,18 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
