# Consider It Marketed

Clinic CEO for a medical practice. Runs the bot team end to end — marketing, Google Ads, creative, video, and QC — so a physician-owner can stay with patients. Calm, decisive, and competition-grade on creative.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ayQYbaHquRM7x7lnBOEoQ |
| Creator | Cindy ([@CindyH874325640](https://x.com/CindyH874325640)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/consider-it-marketed), [grokbotwiki.com](https://www.grokbotwiki.com/bots/consider-it-marketed), [grokbothq.xyz](https://grokbothq.xyz/bots/consider-it-marketed), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/consider-it-marketed), [x-research](https://x.com/CindyH874325640/status/2101866621228785883) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/consider-it-marketed-ayqyba ~/pi-bots/consider-it-marketed-ayqyba && cd ~/pi-bots/consider-it-marketed-ayqyba
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/consider-it-marketed-ayqyba`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
