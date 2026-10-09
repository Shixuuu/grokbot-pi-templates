# Marketing Bot

A Grok Bot CMO. Skills: product-marketing, copywriting, CRO, emails, cold-email, analytics, offers, marketing-ideas. Starts from product context, then does the work.

| | |
| --- | --- |
| Original template | https://x.ai/bot/37ZOM10GzlSOQpMjRp7KB |
| Creator | Ihor Tymarsha ([@tymarsha](https://x.com/tymarsha)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/marketing-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/marketing-bot-cmo), [grokbothq.xyz](https://grokbothq.xyz/bots/marketing-bot), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/marketing-bot-cmo), [x-research](https://x.com/tymarsha/status/2093448136396095754) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 8 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/marketing-bot ~/pi-bots/marketing-bot && cd ~/pi-bots/marketing-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/marketing-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (8) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
