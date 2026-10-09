# Marketing Bot

Turns any project into click-worthy X/Twitter launch posts. Fill the blanks — get a single post, short thread, and reply bait.

| | |
| --- | --- |
| Original template | https://x.ai/bot/FaMbaDOO2WceFyiKDu6_6 |
| Creator | Bragi Helvig (0x5E) ([@BragiHelvig](https://x.com/BragiHelvig)) |
| Category | community / content-publishing |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/marketing-bot), [botsdots.site](https://botsdots.site/templates/marketing-bot-famb), [grokbotwiki.com](https://www.grokbotwiki.com/bots/marketing-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/marketing-bot-2), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/marketing-bot), [x-research](https://x.com/BragiHelvig/status/2100393322569167341) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/marketing-bot-fambad ~/pi-bots/marketing-bot-fambad && cd ~/pi-bots/marketing-bot-fambad
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/marketing-bot-fambad`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
