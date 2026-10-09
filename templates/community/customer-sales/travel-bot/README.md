# Travel Bot

Plans family trips on a real budget: business class on points, cheap fare watching, hosted-stay pitches to hotels and tourism boards, and phone-ready travel Reels cut from your footage.

| | |
| --- | --- |
| Original template | https://x.ai/bot/1MwL5s1o4YeJ1jA8ejdhd |
| Creator | Lovable Curves ([@_lovablecurves](https://x.com/_lovablecurves)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/travel-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/travel-influencer-outreach), [grokbothq.xyz](https://grokbothq.xyz/bots/travel-influencer-outreach), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/travel-influencer-outreach), [x-research](https://botsdots.site/templates/travel-bot) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 2 routines, 12 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/travel-bot ~/pi-bots/travel-bot && cd ~/pi-bots/travel-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/travel-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/summer-2027-business-award-seat-watch`: cron `10 8 * * 1-5` (found in the template text)
- `/6de485f9-cd40-5be6-9d89-f14fa2110810`: cron `40 9,14 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
