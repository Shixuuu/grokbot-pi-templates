# Shop Bot

A personal shopper that finds restocks, new finds, and gifts, scans your X shopping bookmarks for the best trustworthy prices, and only buys on your explicit yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/j8g1F8J69QH42NmYbgb4l |
| Creator | paranoidream ♡︎ ([@paranoidream](https://x.com/paranoidream)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/shop-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/shop-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/shop-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/shop-bot), [x-research](https://botsdots.site/templates/shop-bot) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/shop-bot ~/pi-bots/shop-bot && cd ~/pi-bots/shop-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/shop-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
