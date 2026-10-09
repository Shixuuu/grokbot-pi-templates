# eBay Lister

Snap a photo of almost anything — comics, cards, toys, or thrift finds — and get an eBay draft with sold comps, title, and pricing. Always confirms before publishing.

| | |
| --- | --- |
| Original template | https://x.ai/bot/q9Q8EPKFx45CmVwjUAFY5 |
| Creator | Gabriel Valerio ([@Gabi_Valerio3](https://x.com/Gabi_Valerio3)) |
| Category | community / customer-sales |
| Found via | [botsdots.site](https://botsdots.site/templates/ebay-lister), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ebay-lister), [grokbothq.xyz](https://grokbothq.xyz/bots/ebay-lister), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ebay-lister), [x-research](https://botsdots.site/templates/ebay-lister) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/ebay-lister ~/pi-bots/ebay-lister && cd ~/pi-bots/ebay-lister
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/ebay-lister`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
