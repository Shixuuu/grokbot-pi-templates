# Virtual Try-On Bot

Turns clothes you like into a Grok Imagine video of you wearing them, built from your own Character reference. When you like a look, it sends the item links to your shopping bot marked want or don't want.

| | |
| --- | --- |
| Original template | https://x.ai/bot/8Cc1RovyoLulOn9SLY5UR |
| Creator | paranoidream ♡︎ ([@paranoidream](https://x.com/paranoidream)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/virtual-try-on-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/virtual-try-on-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/virtual-try-on-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/virtual-try-on-bot), [x-research](https://botsdots.site/templates/virtual-try-on-bot) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/virtual-try-on-bot ~/pi-bots/virtual-try-on-bot && cd ~/pi-bots/virtual-try-on-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/virtual-try-on-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
